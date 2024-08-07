'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import Select from 'react-select'
import Label from '@/src/components/ui/Label'

interface OptionType {
  value: string
  label: string
}

export default function Book({
  selectedOption1,
  selectedOption2,
  setSelectedOption2,
}: any) {
  const [book, setBook] = useState<OptionType[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchBook, error } = await supabase.from('book').select(
          `
          name,
          slug,
          class:classId(name)
          `
        )

        if (error) {
          console.error('Error fetching data:', error)
          setError('Error fetching data from Supabase')
          return
        }

        if (selectedOption1) {
          // Extract the values from the selected options
          const extractedValues = selectedOption1?.map(
            (option: { label: string }) => option.label
          )

          // Filter the books based on the extracted values
          const FilterBook = fetchBook.filter((book: any) =>
            extractedValues.includes(book.class.name)
          )

          // Map data to the format required by react-select
          setBook(
            FilterBook.map((item: { name: string; slug: string }) => ({
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

    fetchBooks()
  }, [selectedOption1])

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <Label label="Book" htmlFor="book" />
        {error && <div>Error: {error}</div>}
      </div>
      <Select
        value={selectedOption2}
        onChange={setSelectedOption2}
        options={book}
        placeholder="Enter Book ...."
        isMulti
      />
    </div>
  )
}
