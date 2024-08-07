'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'

export default function QuizSlugSidebar({ setSidebar, mcqs }: any) {
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const { data: fetchedTags } = await supabase
          .from('tag')
          .select(
            `
            id,
            name,
            slug,
            book:bookId(slug),
            subCatgeory:subCatgeoryId(slug)
            `
          )
          .limit(15)
        if (error) {
          console.error('Error fetching data:', error)
          return
        }
        if (fetchedTags) {
          const data = fetchedTags.filter(
            (item: any) =>
              mcqs.some((mcq: any) => mcq.bookId.includes(item.book.slug)) &&
              mcqs.some((mcq: any) =>
                mcq.subCatgeoryId.includes(item.subCatgeory.slug)
              )
          )

          setSidebar(data as any)
        }

        // Filter the data
      } catch (error: any) {
        setError(error.message)
      }
    }
    fetchTags()
  }, [error, mcqs, mcqs.subCatgeoryId, setSidebar])

  return <aside>{error}</aside>
}
