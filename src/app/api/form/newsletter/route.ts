import Newsletter from "@/src/model/newsletter.model"
import connectDB from "@/src/util/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = await req.json()
console.log(email)
  try {
    await connectDB()

    const checkEmail = await Newsletter.findOne({ email: email })
    if (checkEmail) {
      return NextResponse.json({
        statusbar: 400,
        message: "Email is Required."
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
