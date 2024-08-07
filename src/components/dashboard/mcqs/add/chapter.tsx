'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import Select, { SingleValue } from 'react-select'
import Label from '@/src/components/ui/Label'

interface OptionType {
  value: string
  label: string
}

interface ChapterProps {
  selectedOption1: SingleValue<OptionType>[]
  selectedOption2: SingleValue<OptionType>[]
  selectedOption3: SingleValue<OptionType>[]
  setSelectedOption3: any
}

const Chapter: React.FC<any> = ({
  selectedOption1,
  selectedOption2,
  selectedOption3,
  setSelectedOption3,
}) => {
  const [chapter, setChapter] = useState<OptionType[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const { data: fetchChapter, error } = await supabase
          .from('chapter')
          .select(
            `
            name,
            slug,
            class:classId(name),
            book:bookId(name)
            `
          )

        if (error) {
          console.error('Error fetching data:', error)
          setError('Error fetching data from Supabase')
          return
        }

        if (selectedOption1 && selectedOption2) {

          // Filter the class based on the extracted values
          const extractedValues = selectedOption1?.map(
            (option: { label: string }) => option.label
          )

          const FilterBook = fetchChapter.filter((book: any) =>
            extractedValues.includes(book.class.name)
          )

          // Filter the books based on the extracted values
          const extractedValues2 = selectedOption2?.map(
            (option: { label: string }) => option.label
          )
          const FilterBook2 = FilterBook.filter((book: any) =>
            extractedValues2.includes(book.book.name)
          )

          setChapter(
            FilterBook2.map((item: { name: string; slug: string }) => ({
              value: item.slug,
              label: item.name,
            }))
          )
        }
      } catch (error: any) {
        console.error('Unexpected error:', error)
        setError(error.message)
      }
    }

    fetchChapters()
  }, [selectedOption1, selectedOption2])

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <Label label="Chapter" htmlFor="chapter" />
        {error && <div>Error: {error}</div>}
      </div>
      <Select
        value={selectedOption3}
        onChange={setSelectedOption3}
        options={chapter}
        placeholder="Enter Chapter ...."
        isMulti
      />
    </div>
  )
}

export default Chapter
