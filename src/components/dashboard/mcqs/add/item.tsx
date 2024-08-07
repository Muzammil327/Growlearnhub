'use client'
import Label from '@/src/components/ui/Label'
import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { supabase } from '@/src/util/db'

// Define the type for the options
interface OptionType {
  value: string
  label: string
}

const Items: React.FC<any> = ({ selectedOption7, setSelectedOption7 }) => {
  const [classes, setClasses] = useState<OptionType[]>([]) // Explicitly set the state type
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClass = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchTag, error } = await supabase.from('tag').select(
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
          fetchTag.map((item: { slug: string; name: string }) => ({
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
        <Label label="Items" htmlFor="items" />
        {error && <div>Error: {error}</div>}
      </div>
      <Select
        value={selectedOption7}
        onChange={setSelectedOption7}
        options={classes}
        placeholder="Select Tags ..."
        isMulti
      />
    </div>
  )
}

export default Items
