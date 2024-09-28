import Mcqs from "@/src/model/mcqs.model"
import connectDB from "@/src/util/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const cat = searchParams.get("cat")
  console.log(cat)
  try {
    if (!cat) {
      return NextResponse.json({
        statusbar: 400,
        error: "Catgerory not found."
      })
    }

    await connectDB()

    // Split the categories and trim whitespace
    const categories = cat.split(",").map((c) => c.trim())

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

    return NextResponse.json({
      statusbar: 200,
      message: "Cart successfully.",
      get_random_mcqs
    })
  } catch (error) {
    console.error("Error verifying email:", error)
    return NextResponse.json({
      statusbar: 400,
      error: "Internal Server Error"
    })
  }
}
