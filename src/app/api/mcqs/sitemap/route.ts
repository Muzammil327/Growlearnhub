import { NextRequest, NextResponse } from "next/server"
import { initializeDatabase, closeDatabase } from "@/src/utils/db"
import AppDataSource from "@/src/utils/ormconfig"
import { Question } from "@/src/entities"

export async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams

  try {
    await initializeDatabase() // Initialize the database connection

    // Get the repository for Question
    const questionsRepository = AppDataSource.getRepository(Question)

    // Fetch only the id and slug fields
    const questions = await questionsRepository.find({
      select: ["id", "slug"] // Select only id and slug
    })

    // Return the questions as a JSON response
    return NextResponse.json({ status: 200, data: questions })
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  } finally {
    await closeDatabase() // Ensure the database connection is closed
  }
}
