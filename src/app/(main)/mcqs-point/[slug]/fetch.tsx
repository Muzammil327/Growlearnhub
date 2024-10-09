"use client"
import React, { useEffect, useState } from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { CardQuizWithoutLink } from "@/src/components/card/CardQuiz/CardQuizWithoutLink"

const data = {
  b1: "Bones",
  b1Link: "/mcqs-point/biology/skeletal-system/bones/",
  image:
    "/mcqs-point/biology/skeletal-system/bones/bones-skeletal-system-biology-mcqs-point.webp"
}

interface IProps {
  params: {
    slug: string
  }
}

// Define the type for a quiz object
interface Quiz {
  id: number
  question: string
  options: string[]
  answer: string
  slug: string
  relatedQuizzes: number[] // Array of related quiz IDs
}
export default function FetchSeparateMcqs({ params }: { params: String }) {
  const [combinedMcqs, setCombinedMcqs] = useState<Quiz[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(
          `https://json-server-two-alpha.vercel.app/mcqs?slug=${params}`
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data: Quiz[] = await response.json()
        setCombinedMcqs(data)
      } catch (err) {
        console.error("Failed to fetch quizzes:", err)
        setError("Failed to load quizzes. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchQuizzes()
  }, [params])

  const getQuizzesByIds = (ids: number[]): Quiz[] => {
    if (!Array.isArray(ids)) {
      console.error("Invalid ids: not an array or undefined", ids)
      return []
    }

    return combinedMcqs.filter((quiz) => ids.includes(quiz.id))
  }

  const datas = combinedMcqs.filter((data: Quiz) => data.slug === params)
  const Final_Data = datas[0]

  return (
    <SimpleWrapper
      title={loading ? "" : Final_Data.question}
      url={`/mcqs-point/${loading ? "" : Final_Data.slug}`}
      b1={data.b1}
      b1Link={data.b1Link}
      b2={loading ? "" : Final_Data.question}
      image={data.image}
    >
      <div className="my-10 grid gap-4">
        {loading ? (
          "Loading"
        ) : error ? (
          "Error"
        ) : (
          <>
            {combinedMcqs
              .filter((data: Quiz) => data.slug === params) // Compare against params.slug
              .map((book: Quiz) => (
                <CardQuizWithoutLink
                  key={book.id}
                  title={book.question}
                  option={book.options}
                  correctOption={book.answer}
                  // para={book.para}
                />
              ))}
          </>
        )}
      </div>
    </SimpleWrapper>
  )
}
