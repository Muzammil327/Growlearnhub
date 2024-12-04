import { NextRequest, NextResponse } from "next/server";
import pool from "@/src/lib/pg"; // Assuming pool is the configured Postgres connection
import path from 'path';
import fs from 'fs';

const readJsonFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'mcqs', fileName); // Adjust the path to your file location
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

export async function GET(req: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = req.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Dynamically load data based on slug (you can optimize to load only data1.json or data2.json based on some logic)
    const data1 = readJsonFile('data1.json');
    const data2 = readJsonFile('data2.json');
    const data3 = readJsonFile('data3.json');

    // Combine data only when needed
    const combinedData = [...data1, ...data2, ...data3];

    // Check if the quiz is found in the combined data
    const quiz = combinedData.find((item) => item.slug === slug);

    if (quiz) {
      // If the quiz is found, return it
      return NextResponse.json(quiz, { status: 200 });
    }

    // If not found in the combined data, query the database for quiz-related questions and options
    const result = await pool.query(
      `
      SELECT 
        q.id AS question_id,
        q.name AS question_name,
        q.explanation,
        q.tags,
        q.created_at,
        qo.id AS option_id, 
        qo.option_text,
        qo.is_correct
      FROM questions q
      LEFT JOIN question_options qo ON q.id = qo.question_id
      WHERE q.slug = $1
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      // If no rows are returned from the database, return 404
      return NextResponse.json(
        { error: "No questions or options found for the given slug" },
        { status: 404 }
      );
    }

    // Group the options by question
    const questions = result.rows.reduce((acc: any, row: any) => {
      // Find the existing question in the accumulator
      const question = acc.find((q: any) => q.id === row.question_id);

      if (question) {
        // Add the option to the existing question
        question.options.push({
          id: row.option_id,
          text: row.option_text,
          isCorrect: row.is_correct,
        });
      } else {
        // Create a new question entry with its options
        acc.push({
          id: row.question_id,
          name: row.question_name,
          explanation: row.explanation,
          tags: row.tags,
          createdAt: row.created_at,
          options: row.option_id
            ? [
              {
                id: row.option_id,
                text: row.option_text,
                isCorrect: row.is_correct,
              },
            ]
            : [],
        });
      }

      return acc;
    }, []);

    // Return the first question (assuming you only need one)
    return NextResponse.json(questions[0], { status: 200 });

  } catch (error) {
    console.error("Error fetching questions and options:", error); // Log the error
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
