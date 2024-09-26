"use client"
import React, { useEffect, useState } from "react"
import Label from "@/src/components/ui/Label"
import Select from "react-select"
import axios from "axios"

export default function RelatedQuizzes({
  setRelatedQuizzesData,
  relatedQuizzesData,
  relatedQuizzes,
  setRelatedQuizzes
}: any) {
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true) // Set loading to true initially
  console.log(relatedQuizzesData)

  interface CategoryOption {
    value: number
    label: string
  }

  const catgeoryOptions: CategoryOption[] = relatedQuizzesData.map(
    ({ _id, name }: any) => ({
      value: _id,
      label: name
    })
  )

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        const response = await axios.get("/api/mcqs")
        setRelatedQuizzesData(response.data.getAllMcqs)
      } catch (error) {
        console.error("Error fetching MCQs:", error)
        setError("Failed to load data.")
      } finally {
        setLoading(false) // Set loading to false
      }
    }

    fetchMcqs() // Call the fetch function
  }, [])

  const handleSelectChange = (selectedOptions: any) => {
    setRelatedQuizzes(selectedOptions) // Handle case where no options are selected
  }

  return (
    <div className="mb-6">
      {loading ? (
        <p>Loading...</p> // Loading state
      ) : (
        <>
          <Label label="Enter Related Quiz:" htmlFor="relatedQuizzes" />
          <Select
            isMulti
            options={catgeoryOptions}
            onChange={handleSelectChange}
            value={relatedQuizzes} // Use the correct format for selected options
            className="mt-1"
            placeholder="Select related quizs"
          />
          {error && <p className="text-red-500">{error}</p>}
        </>
      )}
    </div>
  )
}
