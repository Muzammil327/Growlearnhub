"use client"
import React, { useEffect, useState } from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardQuizWithoutLink from "@/src/components/card/CardQuiz/CardQuizWithoutLink"

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
    data={
      loading
        ? { title: "", b1: "", b2: "", b3: "", b4: "" } // Default empty values when loading
        : {
            title: Final_Data.question,
            b1: "Mcqs Point", // Ensure that all required fields are provided
            b2: Final_Data.question || "",
            b1Link: "/mcqs-point",
            clist: [],
            canonical: undefined,
            url: `/mcqs-point/${loading ? "" : Final_Data.slug}`,
          }
    }
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
