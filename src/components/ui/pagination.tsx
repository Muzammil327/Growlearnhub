import React from "react"

// Define a type for individual posts
interface Post {
  id: number // Example field
  title: string // Example field
  content: string // Example field
  // Add more fields as necessary based on your post structure
}

// Define props type
interface PaginationProps {
  handlePreviousPage: () => void // Function to handle previous page
  handleNextPage: () => void // Function to handle next page
  currentPage: number // Current page number
  indexOfLastPost: number // Index of the last post on the current page
  filteredPosts: Post[] // Array of filtered posts
}

const Pagination: React.FC<PaginationProps> = ({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  indexOfLastPost,
  filteredPosts
}) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={handleNextPage}
        disabled={indexOfLastPost >= filteredPosts.length} // Disable if no more posts to show
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
