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

    console.log("Request received:", {
      userId,
      book,
      classes,
      chapter,
      heading,
      subheading,
      creationType,
      questions,
    });

    try {
      // Begin a transaction
      await pool.query("BEGIN");

      for (const question of questions) {
        // Generate slug for each question
        const slug = slugify(`${question.name}`, {
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
            heading_id, 
            book_id, 
            subheading_id, 
            chapter_id, 
            slug, 
            user_id, 
            tags
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
          RETURNING id
        `;

        const questionValues = [
          question.name,
          question.type,
          question.explanation,
          question.difficulty,
          question.time,
          question.score,
          question.passMark || 0, // Use 0 if passMark is not defined
          classes,
          heading,
          book,
          subheading,
          chapter,
          slug,
          userId,
          JSON.stringify(question.tags),
        ];
console.log(JSON.stringify(question.tags))
        const { rows: questionRows } = await pool.query(
          questionQuery,
          questionValues,
        );
        const questionId = questionRows[0].id;

        // Insert the options for the current question
        const optionQuery = `
          INSERT INTO question_options (question_id, option_text, is_correct)
          VALUES ($1, $2, $3)
        `;

        for (const option of question.options) {
          await pool.query(optionQuery, [
            questionId,
            option.text,
            option.isCorrect,
          ]);
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
