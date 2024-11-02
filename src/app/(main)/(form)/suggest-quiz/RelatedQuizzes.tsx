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
  const [loading, setLoading] = useState<boolean>(true)

  interface CategoryOption {
    value: number
    label: string
  }

  const categoryOptions: CategoryOption[] = relatedQuizzesData.map(
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
        setLoading(false)
      }
    }

    fetchMcqs()
  }, [setRelatedQuizzesData]) // Include setRelatedQuizzesData in the dependency array

  const handleSelectChange = (selectedOptions: any) => {
    setRelatedQuizzes(selectedOptions)
  }

  return (
    <div className="mb-6">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Label label="Enter Related Quiz:" htmlFor="relatedQuizzes" />
          <Select
            isMulti
            options={categoryOptions}
            onChange={handleSelectChange}
            value={relatedQuizzes}
            className="mt-1"
            placeholder="Select related quizzes"
          />
          {error && <p className="text-red-500">{error}</p>}
        </>
      )}
    </div>
  )
}
