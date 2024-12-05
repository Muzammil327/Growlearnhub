import { NextRequest, NextResponse } from "next/server";
import pool from "@/src/lib/pg";
import { IpropsDashboard } from "@/src/types/dashboard";
import { combinedData } from "@/src/lib/readJsonFile";

interface ErrorResponse {
  error: string;
}

export async function GET(
  req: NextRequest,
): Promise<NextResponse<IpropsDashboard | ErrorResponse>> {
  try {
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 },
      );
    }

    // Check if the userId exists and determine the role (user or admin)
    const userRole = await checkUserRole(userId); // A function to check if the user is admin or user

    if (!userRole) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // If user is an admin, return all data, otherwise return only user-specific data
    let counts: IpropsDashboard;

    if (userRole === "admin") {
      // Admin: Get counts for all tables
      const countBook = await pool.query("SELECT COUNT(*) FROM books");
      const countClass = await pool.query("SELECT COUNT(*) FROM classes");
      const countChapter = await pool.query("SELECT COUNT(*) FROM chapters");
      const countHeading = await pool.query("SELECT COUNT(*) FROM headings");
      const countSubheading = await pool.query(
        "SELECT COUNT(*) FROM subheadings",
      );
      const countQuestion = await pool.query("SELECT COUNT(*) FROM questions");
      const countUser = await pool.query("SELECT COUNT(*) FROM users");
      const countown = combinedData.length as number;

      counts = {
        books: parseInt(countBook.rows[0].count, 10),
        classes: parseInt(countClass.rows[0].count, 10),
        chapters: parseInt(countChapter.rows[0].count, 10),
        headings: parseInt(countHeading.rows[0].count, 10),
        subheadings: parseInt(countSubheading.rows[0].count, 10),
        questions: parseInt(countQuestion.rows[0].count, 10),
        users: parseInt(countUser.rows[0].count, 10),
        countown: countown,
      };
    } else {
      // Regular user: Get counts for user-specific data (e.g., based on their ID)
      const countUserQuestions = await pool.query(
        "SELECT COUNT(*) FROM questions WHERE user_id = $1",
        [userId],
      );

      counts = {
        questions: parseInt(countUserQuestions.rows[0].count, 10),
      };
    }

    // Return the counts as a JSON response
    return NextResponse.json(counts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}

// Function to check if the user is an admin
async function checkUserRole(userId: string): Promise<string | null> {
  try {
    const result = await pool.query("SELECT role FROM users WHERE id = $1", [
      userId,
    ]);
    if (result.rows.length > 0) {
      return result.rows[0].role; // 'admin' or 'user'
    }
    return null; // User not found
  } catch (error) {
    throw new Error("Error checking user role");
  }
}
