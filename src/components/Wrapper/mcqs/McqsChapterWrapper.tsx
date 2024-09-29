"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Processing from "@/src/components/ui/Processing"
import { CardQuiz } from "@/src/components/card/CardQuiz/cardQuiz"
import Button from "../../ui/Button"

interface QuizWrapperProps {
  cat: string[] // Array of categories
  title: string
  clist?: any[] // Adjust type according to the actual structure
  image?: string
  url: string
  children?: React.ReactNode
  b1: string
  b1Link?: string
  b2?: string
  b2Link?: string
  b3?: string
  b3Link?: string
  b4?: string
}

const McqsChapterWrapper: React.FC<QuizWrapperProps> = ({
  cat,
  title,
  clist,
  image,
  url,
  children,
  b1,
  b1Link,
  b2
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const [mcqs, setMcqs] = useState<any[]>([]) // Use MCQ[] for proper type
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  const limit = 10 // Number of MCQs per page

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        setLoading(true)
        setError("") // Reset error on each fetch
        const response = await axios.get(
          `/api/mcqs/RandomMcqs?cat=${cat.join(",")}&page=${currentPage}&limit=${limit}`
        )
        setMcqs(response.data.paginatedMCQs) // Update to use the 'sets' from the API response
        setTotalPages(response.data.totalPages) // Set the total pages from the response
      } catch (err: any) {
        console.error(err)
        setError(err.response?.data?.error || "Error fetching MCQs.")
      } finally {
        setLoading(false)
      }
    }

    if (cat) {
      fetchMcqs()
    }
  }, [cat, currentPage]) // Add `currentPage` as a dependency

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <SimpleWrapper
      title={title}
      b1={b1}
      b1Link={b1Link}
      clist={clist}
      image={image}
      url={url}
      b2={b2}
    >
      {children}
      <div className="my-10 grid gap-4">
        {loading ? (
          <div className="flex items-center justify-center h-40 w-40 mx-auto">
            <Processing />
          </div>
        ) : error ? (
          <div>Getting MCQs Error: {error}</div>
        ) : (
          <>
            {mcqs.map((mcq: any) => (
              <CardQuiz
                key={mcq._id} // Assuming `_id` is the unique identifier
                title={mcq.name}
                option={mcq.options}
                correctOption={mcq.correctOptions}
                link={`/mcqs-point/${mcq.slug}`}
              />
            ))}
          </>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </SimpleWrapper>
  )
}

export default McqsChapterWrapper
