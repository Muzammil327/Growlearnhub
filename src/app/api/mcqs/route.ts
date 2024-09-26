import Mcqs from "@/src/model/mcqs.model"
import connectDB from "@/src/util/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const {
    name,
    slug,
    options,
    catgeory,
    description,
    correctOptions,
    relatedQuizzes,
    relatedVideo
  } = await req.json()
  const catgeorydata = catgeory.map((data: any) => data.label)

  try {
    await connectDB()

    if (!name) {
      return NextResponse.json({
        statusbar: 400,
        message: "Name is Required."
      })
    }
    if (!Array.isArray(options) || options.length < 4) {
      return NextResponse.json({
        statusbar: 400,
        message: "At least 4 options are Required."
      })
    }
    if (!Array.isArray(catgeorydata) || catgeorydata.length === 0) {
      return NextResponse.json({
        statusbar: 400,
        message: "Catgeory are Required."
      })
    }
    if (!description) {
      return NextResponse.json({
        statusbar: 400,
        message: "Description is Required."
      })
    }
    if (!correctOptions) {
      return NextResponse.json({
        statusbar: 400,
        message: "Correct Option is Required."
      })
    }

    // Create a new Mcqs document
    const newMcqs = new Mcqs({
      name,
      slug,
      options,
      catgeory: catgeorydata,
      description,
      correctOptions,
      relatedQuizzes,
      relatedVideo
    })

    await newMcqs.save()

    // back response
    return NextResponse.json({
      statusbar: 200,
      message: "Mcqs added successfully"
    })
  } catch (error) {
    console.error("Error during Add Mcqs:", error)
    return NextResponse.json({
      statusbar: 400,
      message: "Internal Server Error",
      error: error
    })
  }
}

export async function GET() {
  try {
    await connectDB()

    const getAllMcqs = await Mcqs.aggregate([
      {
        $project: {
          _id: 1,
          name: 1
        }
      }
    ])
    return NextResponse.json({
      statusbar: 200,
      message: "Mcqs successfully getting.",
      getAllMcqs
    })
  } catch (error) {
    console.error("Error getting all mcqs:", error)
    return NextResponse.json({
      statusbar: 400,
      error: "Internal Server Error"
    })
  }
}
