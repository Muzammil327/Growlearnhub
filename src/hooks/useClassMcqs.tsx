import { useQuery } from "react-query"
import axios, { AxiosError } from "axios"

const fetchClassMcqs = async (
  className: string,
  bookName: string,
  chapterName: string,
  currentPage: number,
  limit: number
) => {
  try {
    const response = await axios.get(
      `/api/mcqs?className=${encodeURIComponent(
        className
      )}&bookName=${encodeURIComponent(
        bookName
      )}&chapterName=${encodeURIComponent(
        chapterName
      )}&page=${currentPage}&limit=${limit}`
    )
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || "Error fetching data from the server"
      )
    } else {
      throw new Error("An unknown error occurred")
    }
  }
}

export const useClassMcqs = (
  className: string,
  bookName: string,
  chapterName: string,
  currentPage: number,
  limit: number
) => {
  return useQuery(
    ["mcqsClassData", className, bookName, chapterName, currentPage, limit],
    () => fetchClassMcqs(className, bookName, chapterName, currentPage, limit)
  )
}
