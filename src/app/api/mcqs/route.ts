import { NextRequest, NextResponse } from "next/server"
import { initializeDatabase, closeDatabase } from "@/src/utils/db"
import AppDataSource from "@/src/utils/ormconfig"
import { Question, Classes, Books, Chapters } from "@/src/entities"

export async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const getClasses = searchParams.get("className")
  const getBooks = searchParams.get("bookName")
  const getChapters = searchParams.get("chapterName")

  // Get pagination parameters
  const page = parseInt(searchParams.get("page") || "1", 10) // Default to page 1
  const limit = parseInt(searchParams.get("limit") || "10", 10) // Default to limit 10

  // Calculate offset
  const offset = (page - 1) * limit

  try {
    await initializeDatabase() // Initialize the database connection

    // Find the class entity by class name
    const classesRepository = AppDataSource.getRepository(Classes)
    const classEntity = await classesRepository.findOne({
      where: { name: getClasses as string }
    })

    if (!classEntity) {
      return NextResponse.json({
        status: 404,
        error: "Class not found"
      })
    }

    // Find the book entity
    const booksRepository = AppDataSource.getRepository(Books)
    const bookEntity = await booksRepository.findOne({
      where: {
        slug: getBooks as string
      }
    })

    if (!bookEntity) {
      return NextResponse.json({
        status: 404,
        error: "Subject not found in the given class"
      })
    }

    // Find the chapter entity
    const chaptersRepository = AppDataSource.getRepository(Chapters)
    const chaptersEntity = await chaptersRepository.findOne({
      where: {
        slug: getChapters as string
      }
    })

    if (!chaptersEntity) {
      return NextResponse.json({
        status: 404,
        error: "Chapter not found in the given class"
      })
    }

    const questionRepository = AppDataSource.getRepository(Question)

    // Fetch the questions associated with the chapter with pagination
    const fetchQuestions = await questionRepository.find({
      where: {
        class: { id: classEntity.id },
        book: { id: bookEntity.id },
        chapter: { id: chaptersEntity.id }
      },
      skip: offset,
      take: limit
    })

    // Get total count for pagination info
    const totalQuestions = await questionRepository.count({
      where: {
        chapter: chaptersEntity
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

export async function POST(req: NextRequest, res: NextResponse) {
  const {
    name,
    slug,
    options,
    bookId,
    classId,
    chapterId,
    headingId,
    subHeadingId,
    description,
    correctOptions,
    tags
  } = await req.json()
  await initializeDatabase()
  try {
    // Create a new Question instance
    const question = new Question()
    question.name = name
    question.slug = slug
    question.options = options
    question.bookId = bookId
    question.classId = classId
    question.chapterId = chapterId
    question.headingId = headingId
    question.subHeadingId = subHeadingId
    question.description = description
    question.correctOptions = correctOptions
    question.tags = tags

    // Save the question to the database
    const questionRepository = AppDataSource.getRepository(Question)
    await questionRepository.save(question)

    return NextResponse.json(
      { message: "Data received successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error saving question:", error)
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 400 }
    )
  } finally {
    await closeDatabase() // Ensure the database connection is closed
  }
}
