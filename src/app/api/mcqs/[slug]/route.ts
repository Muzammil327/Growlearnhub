import { NextRequest, NextResponse } from "next/server"
import { initializeDatabase, closeDatabase } from "@/src/utils/db"
import AppDataSource from "@/src/utils/ormconfig"
import { Question } from "@/src/entities"

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug

  try {
    if (!slug) {
      return NextResponse.json({
        statusbar: 400,
        error: "Slug not found."
      })
    }

    await initializeDatabase() // Initialize the database connection

    const questionRepository = AppDataSource.getRepository(Question)

    // Find the question entity
    const questionEntity = await questionRepository.findOne({
      where: { slug: slug as string }
    })

    if (!questionEntity) {
      return NextResponse.json({
        status: 404,
        error: "Question not found"
      })
    }
    return NextResponse.json(questionEntity, { status: 200 })
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
