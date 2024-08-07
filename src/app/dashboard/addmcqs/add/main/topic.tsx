'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import Select from 'react-select'
import Label from '@/src/components/ui/Label'

interface OptionType {
  value: string
  label: string
}

export default function Topic({
  selectedOption1,
  selectedOption2,
  selectedOption3,
  selectedOption4,
  setSelectedOption4,
}: any) {
  const [topic, setTopic] = useState<OptionType[]>([]) // Explicitly set the state type
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchClass = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchTopic, error } = await supabase.from('topic').select(
          `
          name,
          slug,
          class:classId(name),
          book:bookId(name),
          chapter:chapterId(name)
        `
        )

        if (error) {
          console.error('Error fetching data:', error)
          setError('Error fetching data from Supabase')
          return
        }

        if (selectedOption1 && selectedOption2 && selectedOption3) {
          // Filter the class based on the extracted values
          const extractedValues = selectedOption1?.map(
            (option: { label: string }) => option.label
          )

          const FilterBook = fetchTopic.filter((book: any) =>
            extractedValues.includes(book.class.name)
          )

          // Filter the books based on the extracted values
          const extractedValues2 = selectedOption2?.map(
            (option: { label: string }) => option.label
          )

          const FilterBook2 = FilterBook.filter((book: any) =>
            extractedValues2.includes(book.book.name)
          )

          // Filter the chapter based on the extracted values
          const extractedValues3 = selectedOption3?.map(
            (option: { label: string }) => option.label
          )

          const FilterBook3 = FilterBook2.filter((book: any) =>
            extractedValues3.includes(book.chapter.name)
          )

          setTopic(
            FilterBook3.map((item: { name: string; slug: string }) => ({
              value: item.slug,
              label: item.name,
            }))
          )
        }
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchClass()
  }, [selectedOption1, selectedOption2, selectedOption3])

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <Label label="Topic" htmlFor="topic" />
        {error && <div>Error: {error}</div>}
      </div>
      <Select
        value={selectedOption4}
        onChange={setSelectedOption4}
        options={topic}
        placeholder="Enter Topic ...."
      />
    </div>
  )
}
