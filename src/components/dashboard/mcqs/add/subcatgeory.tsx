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
          slug
       `
          )

        if (error) {
          console.error('Error fetching data:', error)
          setError('Error fetching data from Supabase')
          return
        }

        // Map data to the format required by react-select
        setClasses(
          fetchSubCatgeory.map((item: { slug: string; name: string }) => ({
            value: item.slug,
            label: item.name,
          }))
        )
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchClass()
  }, [])

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
