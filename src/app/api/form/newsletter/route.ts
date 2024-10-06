import Newsletter from "@/src/model/newsletter.model"
import connectDB from "@/src/util/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  try {
    await connectDB()

    // Use findOne to check if the email already exists
    const existingEmail = await Newsletter.findOne({ email: email })

    if (existingEmail) {
      return NextResponse.json({
        statusbar: 400,
        message: "Email is already registered."
      })
    }
    const newMcqs = new Newsletter({
      email
    })

    await newMcqs.save()

    // back response
    return NextResponse.json({
      statusbar: 200,
      message: "Email added successfully"
    })
  } catch (error) {
    console.error("Error during Add Email:", error)
    return NextResponse.json({
      statusbar: 400,
      message: "Internal Server Error",
      error: error
    })
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    // Aggregate the Newsletter
    const get_newsletter_email = await Newsletter.aggregate([
      {
        $project: {
          _id: 1,
          email: 1
        }
      }
    ])

    return NextResponse.json({
      statusbar: 200,
      message: `Successfully received.`,
      get_newsletter_email
    })
  } catch (error) {
    console.error("Error fetching newsletter email:", error)
    return NextResponse.json({
      statusbar: 400,
      error: "Internal Server Error"
    })
  }
}
