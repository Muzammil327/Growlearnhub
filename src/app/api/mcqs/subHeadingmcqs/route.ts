import { NextRequest, NextResponse } from "next/server"
import { initializeDatabase, closeDatabase } from "@/src/utils/db"
import AppDataSource from "@/src/utils/ormconfig"
import { Question, Heading, Subheading, Books } from "@/src/entities"

export async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const getBooks = searchParams.get("bookName") // e.g., 'Biology'
  const getHeading = searchParams.get("headingName") // e.g., 'Chapter 1'
  const getSubHeading = searchParams.get("subHeadingName") // e.g., 'Chapter 1'

  // Get pagination parameters
  const page = parseInt(searchParams.get("page") || "1", 10) // Default to page 1
  const limit = parseInt(searchParams.get("limit") || "10", 10) // Default to limit 10
  const offset = (page - 1) * limit // Calculate offset for pagination

  try {
    await initializeDatabase() // Initialize the database connection

    // Find the subject entity
    const subjectsRepository = AppDataSource.getRepository(Books)
    const subjectEntity = await subjectsRepository.findOne({
      where: { slug: getBooks as string }
    })

    if (!subjectEntity) {
      return NextResponse.json({
        status: 404,
        error: "Subject not found"
      })
    }

    // Find the heading entity
    const headingsRepository = AppDataSource.getRepository(Heading)
    const headingEntity = await headingsRepository.findOne({
      where: {
        slug: getHeading as string
      }
    })

    if (!headingEntity) {
      return NextResponse.json({
        status: 404,
        error: "Heading (book) not found in the given subject"
      })
    }

    // Find the subheading entity
    const subHeadingRepository = AppDataSource.getRepository(Subheading)
    const subHeadingEntity = await subHeadingRepository.findOne({
      where: {
        slug: getSubHeading as string
      }
    })
    if (!subHeadingEntity) {
      return NextResponse.json({
        status: 404,
        error: "Subheading (chapter) not found in the given heading"
      })
    }

    // Find questions associated with the subheading (i.e., chapter)
    const questionRepository = AppDataSource.getRepository(Question)
    const fetchQuestions = await questionRepository.find({
      where: {
        heading: { id: headingEntity.id },
        book: { id: subjectEntity.id },
        subHeading: { id: subHeadingEntity.id }
      },
      skip: offset,
      take: limit
    })

    // Get total count of questions for the given subheading
    const totalQuestions = await questionRepository.count({
      where: {
        subHeading: { id: subHeadingEntity.id }
      }
    })

    // Return paginated response
    return NextResponse.json(
      {
        questions: fetchQuestions,
        total: totalQuestions,
        page,
        limit,
        totalPages: Math.ceil(totalQuestions / limit)
      },
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
