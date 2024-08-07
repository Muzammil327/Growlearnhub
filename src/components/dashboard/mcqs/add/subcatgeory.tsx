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

export default function SubCatgeory({
  selectedOption2,
  selectedOption5,
  selectedOption6,
  setSelectedOption6,
}: any) {
  const [classes, setClasses] = useState<OptionType[]>([]) // Explicitly set the state type
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClass = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchSubCatgeory, error } = await supabase
          .from('subCatgeory')
          .select(
            `
          id,
          name,
          slug,
          book:bookId(name),
          catgeory:catgeoryId(name)
       `
          )

        if (error) {
          console.error('Error fetching data:', error)
          setError('Error fetching data from Supabase')
          return
        }

        if (selectedOption2 && selectedOption5) {
          // Filter the class based on the extracted values
          const extractedValues = selectedOption2?.map(
            (option: { label: string }) => option.label
          )

          const FilterBook = fetchSubCatgeory.filter((book: any) =>
            extractedValues.includes(book.book.name)
          )

          // Filter the class based on the extracted values
          const extractedValues2 = selectedOption5?.map(
            (option: { label: string }) => option.label
          )

          const FilterBook2 = FilterBook.filter((book: any) =>
            extractedValues2.includes(book.catgeory.name)
          )

          // Map data to the format required by react-select
          setClasses(
            FilterBook2.map((item: { slug: string; name: string }) => ({
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
  }, [selectedOption2, selectedOption5])

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <Label label="Sub Catgeory" htmlFor="subcatgeory" />
        {error && <div>Error: {error}</div>}
      </div>
      <Select
        value={selectedOption6}
        onChange={setSelectedOption6}
        options={classes}
        placeholder="Enter Sub Catgeory ...."
        isMulti
      />
    </div>
  )
}
