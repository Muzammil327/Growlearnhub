import Mcqs from "@/src/model/mcqs.model"
import connectDB from "@/src/util/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const cat = searchParams.get("cat")

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

    // First, split MCQs into sets of 10
    const sets: any[][] = []
    for (let i = 0; i < totalMCQs; i += 10) {
      const set = get_random_mcqs.slice(i, i + 10)
      sets.push(set)
    }

    // Now, handle the last set if it's less than 10
    const lastSet = sets[sets.length - 1]
    if (lastSet && lastSet.length < 10) {
      if (lastSet.length > 5) {
        // If last set has more than 5, it's a new small set on its own
        sets[sets.length - 1] = lastSet
      } else {
        // If last set has 5 or fewer, randomly combine it with other sets
        while (lastSet.length > 0) {
          const randomSetIndex = Math.floor(Math.random() * (sets.length - 1)) // Random set except the last one
          const randomMCQ = lastSet.pop()
          sets[randomSetIndex].push(randomMCQ)
        }
        sets.pop() // Remove the last empty set
      }
    }

    return NextResponse.json({
      statusbar: 200,
      message: `Successfully grouped ${totalMCQs} MCQs into ${sets.length} sets.`,
      sets, // Contains all grouped sets
      totalMCQs,
      totalSets: sets.length
    })
  } catch (error) {
    console.error("Error verifying email:", error)
    return NextResponse.json({
      statusbar: 400,
      error: "Internal Server Error"
    })
  }
}
