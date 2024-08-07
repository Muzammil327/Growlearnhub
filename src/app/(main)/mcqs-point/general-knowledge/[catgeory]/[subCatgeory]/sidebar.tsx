'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'

export default function CatgeorySidebar({ params, setSidebar }: any) {
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const { data: fetchedTags } = await supabase.from('tag').select(`
            id,
            name,
            slug,
            book:bookId(slug),
            subCatgeory:subCatgeoryId(slug)
            `)
        if (error) {
          console.error('Error fetching data:', error)
          return
        }
        if (fetchedTags) {
          const data2 = fetchedTags.filter((item: any) => {
            return (
              item.book?.slug === 'general-knowledge' &&
              item.subCatgeory?.slug === params.subCatgeory
            )
          })

          setSidebar(data2 as any)
        }

        // Filter the data
      } catch (error: any) {
        setError(error.message)
      }
    }
    fetchTags()
  }, [error, params.catgeory, params.subCatgeory, setSidebar])

  return <aside>{error}</aside>
}
