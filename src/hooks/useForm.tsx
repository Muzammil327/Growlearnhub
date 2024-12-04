import { useQuery } from "react-query"
import axios, { AxiosError } from "axios"

const fetchFormData = async () => {
  try {
    const response = await axios.get("/api/mcqs/form/")
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

export const useForm = () => {
  return useQuery("formData", fetchFormData)
}
