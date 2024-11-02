import { NextResponse } from "next/server"
import { Classes, Books, Chapters, Heading, Subheading } from "@/src/entities" // Import the Subheading entity
import { initializeDatabase, closeDatabase } from "@/src/utils/db" // Adjust the path as necessary
import AppDataSource from "@/src/utils/ormconfig"

// Define the GET function with explicit return type
export async function GET(req: Request): Promise<NextResponse> {
  try {
    await initializeDatabase() // Initialize the database connection

    const classesRepository = AppDataSource.getRepository(Classes)
    const getclass = await classesRepository
      .createQueryBuilder("class")
      .select(["class.id", "class.name"])
      .getMany()

    const booksRepository = AppDataSource.getRepository(Books)
    const getbooks = await booksRepository
      .createQueryBuilder("book")
      .select(["book.id", "book.name"])
      .getMany()

    const chaptersRepository = AppDataSource.getRepository(Chapters)
    const getchapters = await chaptersRepository
      .createQueryBuilder("chapter")
      .select(["chapter.id", "chapter.name"])
      .getMany()

    const headingsRepository = AppDataSource.getRepository(Heading)
    const getHeadings = await headingsRepository
      .createQueryBuilder("headings")
      .select(["headings.id", "headings.name"])
      .getMany()

    const subheadingsRepository = AppDataSource.getRepository(Subheading) // Get the repository for Subheading

    const getSubheadings = await subheadingsRepository.find({
      relations: ["headingId"] // Load the heading entity (or field) with the subheading
    })
    
    return NextResponse.json(
      { getclass, getbooks, getchapters, getHeadings, getSubheadings }, // Include subheadings in the response
      { status: 200 }
    )
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
