'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import Select from 'react-select'
import Label from '@/src/components/ui/Label'

interface OptionType {
  value: string
  label: string
}

export default function Class({ selectedOption1, setSelectedOption1 }: any) {
  const [classes, setClasses] = useState<OptionType[]>([]) // Explicitly set the state type
  const [error, setError] = useState([])

  useEffect(() => {
    const fetchClass = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchClass, error } = await supabase.from('class').select(
          `
          name,
          slug
       `
        )

        if (error) {
          console.error('Error fetching data:', error)
        } else {
          // Map data to the format required by react-select
          setClasses(
            fetchClass.map((item: { slug: string; name: string }) => ({
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
  }, [])

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <Label label="Class" htmlFor="class" />
        {error && <div>Error: {error}</div>}
      </div>
      <Select
        value={selectedOption1}
        onChange={setSelectedOption1}
        options={classes}
        placeholder="Enter Class ...."
        isMulti
      />
    </div>
  )
}
