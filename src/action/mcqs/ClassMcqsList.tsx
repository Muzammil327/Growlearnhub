"use client"
import React, { useState } from "react"
import CardQuizWithLink from "@/src/components/card/CardQuiz/CardQuizWithLink"
import { useClassMcqs } from "@/src/hooks/useClassMcqs"
import { Processing } from "@/src/components/elements/Icon"

const ClassMcqsList: React.FC<{
  className: string
  bookName: string
  chapterName: string
}> = ({ className, bookName, chapterName }) => {
  const [currentPage, setCurrentPage] = useState(1) // Current page
  const limit = 10 // Set limit for questions per page

  // Fetch data using the custom hook
  const { data, error, isLoading } = useClassMcqs(
    className,
    bookName,
    chapterName,
    currentPage,
    limit
  )

  // Handle loading state
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-40 mx-auto">
        <Processing />
      </div>
    )

  // Handle error state
  if (error instanceof Error) return <div>Error: {error.message}</div>

  // Pagination component
  const renderPagination = () => {
    const totalPages = data.totalPages // Assuming `totalPages` comes from API response

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    return (
      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            className={`mx-1 px-3 py-1 ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="my-5">
        {data.questions.map((book: {
          id: number
          name: string
          slug: string
          options: []
          correctOptions: string
        }) => (
          <CardQuizWithLink
            key={book.id}
            title={book.name}
            link={`/mcqs-point/${book.slug}`}
            option={book.options}
            correctOption={book.correctOptions}
          />
        ))}
      </div>
      {data.totalPages > 1 && renderPagination()}{" "}
    </div>
  )
}

export default ClassMcqsList
