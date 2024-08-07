'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import Select from 'react-select'
import Label from '@/src/components/ui/Label'

// Define the type for the options
interface OptionType {
  value: string
  label: string
}

export default function Catgeory({
  selectedOption2,
  selectedOption5,
  setSelectedOption5,
}: any) {
  const [classes, setClasses] = useState<OptionType[]>([]) // Explicitly set the state type
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClass = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchCatgeory, error } = await supabase
          .from('catgeory')
          .select(
            `
          id,
          name,
          slug,
          book:bookId(name)
       `
          )

        if (error) {
          console.error('Error fetching data:', error)
          setError('Error fetching data from Supabase')
          return
        }

        if (selectedOption2) {
          // Filter the class based on the extracted values
          const extractedValues = selectedOption2?.map(
            (option: { label: string }) => option.label
          )

          const FilterBook = fetchCatgeory.filter((book: any) =>
            extractedValues.includes(book.book.name)
          )

          // Map data to the format required by react-select
          setClasses(
            FilterBook.map((item: { slug: string; name: string }) => ({
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
  }, [selectedOption2])

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <Label label="Catgeory" htmlFor="catgeory" />
        {error && <div>Error: {error}</div>}
      </div>
      <Select
        value={selectedOption5}
        onChange={setSelectedOption5}
        options={classes}
        placeholder="Enter Catgeory ...."
        isMulti
      />
    </div>
  )
}
