import Mcqs from "@/src/model/mcqs.model"
import connectDB from "@/src/util/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const cat = searchParams.get("cat")
  const page = parseInt(searchParams.get("page") || "1", 10) // Get the current page, default to 1
  const limit = parseInt(searchParams.get("limit") || "10", 10) // Get the limit of items per page, default to 10

  try {
    if (!cat) {
      return NextResponse.json({
        statusbar: 400,
        error: "Categories are required."
      })
    }

    await connectDB()

    // Split the categories and trim whitespace
    const categories = cat.split(",").map((c) => c.trim())

    // Aggregate the MCQs based on categories
    const get_random_mcqs = await Mcqs.aggregate([
      {
        $match: {
          catgeory: { $all: categories }
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          slug: 1,
          options: 1,
          catgeory: 1,
          correctOptions: 1
        }
      }
    ])

    const totalMCQs = get_random_mcqs.length

    // Implement pagination
    const totalPages = Math.ceil(totalMCQs / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedMCQs = get_random_mcqs.slice(startIndex, endIndex) // Get the specific page of MCQs

    return NextResponse.json({
      statusbar: 200,
      message: `Successfully retrieved page ${page} with ${paginatedMCQs.length} MCQs.`,
      paginatedMCQs, // Contains the current page of MCQs
      totalMCQs,
      totalPages,
      currentPage: page
    })
  } catch (error) {
    console.error("Error fetching MCQs:", error)
    return NextResponse.json({
      statusbar: 400,
      error: "Internal Server Error"
    })
  }
}
