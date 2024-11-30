import { NextRequest, NextResponse } from "next/server";
import pool from "@/src/lib/pg"; // Assuming pool is the configured Postgres connection
import slugify from "slugify";

export async function POST(req: NextRequest) {
  try {
    const {
      userId,
      book,
      chapter,
      classes,
      heading,
      subheading,
      creationType,
      questions,
    } = await req.json();

    try {
      // Begin a transaction
      await pool.query("BEGIN");

      for (const question of questions) {
        // Generate slug for each question
        const slug = slugify(question.name, {
          lower: true,
          strict: true,
          trim: true,
        });

        // Insert the question into the `questions` table
        const questionQuery = `
          INSERT INTO questions (
            name, 
            type, 
            explanation, 
            difficulty, 
            time, 
            score, 
            pass_mark, 
            class_id, 
            chapter_id, 
            heading_id, 
            subheading_id, 
            book_id, 
            slug, 
            user_id, 
            tags,
            created_at
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
          RETURNING id
        `;

        const questionValues = [
          question.name,
          question.creationType,
          question.explanation,
          question.difficulty || "medium",
          question.time || 60, // Use 60 if time is not defined
          question.score || 1, // Use 1 if score is not defined
          question.passMark || 0, // Use 0 if passMark is not defined
          classes,
          chapter === "" ? null : chapter,
          heading === "" ? null : heading,
          subheading === "" ? null : subheading,
          book,
          slug,
          userId,
          question.tags,
          new Date(),
        ];

        const { rows: questionRows } = await pool.query(
          questionQuery,
          questionValues,
        );
        const questionId = questionRows[0].id;

        // Insert options for the question
        const optionQuery = `
          INSERT INTO question_options (question_id, option_text, is_correct)
          VALUES ($1, $2, $3)
        `;

        for (let i = 0; i < question.options.length; i++) {
          const optionText = question.options[i];
          const isCorrect = question.correctOptions.includes(i); // Check if the index `i` is in `correctOptions`
          await pool.query(optionQuery, [questionId, optionText, isCorrect]);
        }
      }

      // Commit the transaction
      await pool.query("COMMIT");

      return NextResponse.json({
        statusbar: 200,
        message: "Questions added successfully.",
      });
    } catch (error) {
      await pool.query("ROLLBACK");
      console.error("Error during question insertion:", error);
      return NextResponse.json({
        statusbar: 400,
        error: "Error adding questions.",
      });
    }
  } catch (error) {
    console.error("Error during request processing:", error);
    return NextResponse.json({
      statusbar: 400,
      error: "Error processing the request.",
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = req.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1", 10); // Default to page 1
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Default to 10 items per page

    if (page < 1 || limit < 1) {
      return NextResponse.json(
        { error: "Invalid page or limit" },
        { status: 400 },
      );
    }

    // Calculate the offset
    const offset = (page - 1) * limit;

    // Query for total records
    const totalRecordsResult = await pool.query(
      "SELECT COUNT(*) AS total FROM questions",
    );
    const totalRecords = parseInt(totalRecordsResult.rows[0].total, 10);

    // Calculate total pages
    const totalPages = Math.ceil(totalRecords / limit);

    // Query for paginated results
    const result = await pool.query(
      "SELECT id, name, created_at FROM questions ORDER BY id LIMIT $1 OFFSET $2",
      [limit, offset],
    );

    // Response structure
    const response = {
      data: result.rows,
      totalPages,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    // Check if there are dependent records
    const dependencyCheckQuery = `DELETE FROM question_options WHERE question_id = $1 RETURNING *`;
    const { rows: deleteCorrectoptions } = await pool.query(
      dependencyCheckQuery,
      [id],
    );
    console.log("rows:", deleteCorrectoptions);
    if (parseInt(deleteCorrectoptions[0].count, 10) > 0) {
      return NextResponse.json(
        { message: "Cannot delete record because dependencies exist." },
        { status: 400 },
      );
    }

    // Delete the main question record
    const deleteQuestionQuery = `DELETE FROM questions WHERE id = $1 RETURNING *`;
    const { rows } = await pool.query(deleteQuestionQuery, [id]);
    console.log("rows:", rows);
    if (rows.length === 0) {
      return NextResponse.json(
        { message: "No record found with the given ID" },
        { status: 404 },
      );
    }
    console.log("rows[0]:", rows[0]);
    return NextResponse.json(
      { message: "Record deleted successfully", deletedRecord: rows[0] },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting record:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    // Validate the ID
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const {
      userId,
      book,
      chapter,
      classes,
      heading,
      subheading,
      creationType,
      questions,
    } = await req.json();

    // Check if questions array is provided
    if (!Array.isArray(questions)) {
      return NextResponse.json(
        { message: "Questions should be an array" },
        { status: 400 },
      );
    }

    for (const question of questions) {
      // Generate slug for each question
      const slug = slugify(question.name, {
        lower: true,
        strict: true,
        trim: true,
      });

      // Update the question in the `questions` table
      const updateQuery = `
        UPDATE questions
        SET
          name = $1,
          type = $2,
          explanation = $3,
          difficulty = $4,
          time = $5,
          score = $6,
          pass_mark = $7,
          class_id = $8,
          chapter_id = $9,
          heading_id = $10,
          subheading_id = $11,
          book_id = $12,
          slug = $13,
          user_id = $14,
          tags = $15,
          updated_at = $16
        WHERE id = $17
        RETURNING id
      `;

      const updateValues = [
        question.name,
        question.type,
        question.explanation,
        question.difficulty || "medium",
        question.time || 60, // Use 60 if time is not defined
        question.score || 1, // Use 1 if score is not defined
        question.passMark || 0, // Use 0 if passMark is not defined
        classes,
        chapter === "" ? null : chapter,
        heading === "" ? null : heading,
        subheading === "" ? null : subheading,
        book,
        slug,
        userId,
        question.tags,
        new Date(),
        id, // Pass the id here to update the specific question
      ];

      const { rows: questionRows } = await pool.query(
        updateQuery,
        updateValues,
      );
      const questionId = questionRows[0].id;

      // Delete existing options before updating (to avoid duplicates)
      const deleteOptionsQuery = `DELETE FROM question_options WHERE question_id = $1`;
      await pool.query(deleteOptionsQuery, [questionId]);

      // Insert updated options for the question
      const optionQuery = `
        INSERT INTO question_options (question_id, option_text, is_correct)
        VALUES ($1, $2, $3)
      `;

      for (let i = 0; i < question.options.length; i++) {
        const optionText = question.options[i];
        const isCorrect = question.correctOptions.includes(i); // Check if the index `i` is in `correctOptions`
        await pool.query(optionQuery, [questionId, optionText, isCorrect]);
      }
    }

    return NextResponse.json({
      status: 200,
      message: "Questions updated successfully.",
    });
  } catch (error) {
    console.error("Error during request processing:", error);
    return NextResponse.json({
      status: 500,
      error: "Error processing the request.",
    });
  }
}
