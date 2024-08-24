'use client'
import React, { useEffect, useState } from 'react'
import BookWrapper from '@/src/components/Wrapper/BookWrapper'
import { supabase } from '@/src/util/db'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

interface Iprops {
  params: {
    books: string
  }
}

export default function Page({ params }: Iprops) {
  const [chapterBooks, setChapterBooks] = useState<any[]>([])
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchedChapterBooks, error } = await supabase.from(
          'chapter'
        ).select(`
           id,
           name,
           slug,
         book:bookId (slug),
         class:classId (slug
         )
       `)

        if (error) {
          throw new Error('Error fetching chapter_books: ' + error.message)
        }

        // Filter data based on book name
        const filteredBooks = fetchedChapterBooks?.filter(
          (item: any) =>
            item.book.slug === params.books && item.class.slug === 'class-9'
        )

        setChapterBooks(filteredBooks as any)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchChapters()
  }, [params.books])

  return (
    <BookWrapper
      title={`9th class ${params.books} Solved Mcqs Chapter Wise`}
      b1="9th Class"
      b1Link="/class-9"
      b2="Mcqs"
      b2Link="/class-9/mcqs/"
      b3={params.books}
      url={`/class-9/mcqs/${params.books}`}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : chapterBooks.map((book) => (
              <CardSmall
                key={book.id}
                title={`${book.name} ${params.books} Solved Mcqs`}
                link={`/class-9/mcqs/${params.books}/${book.slug}`}
              />
            ))}
      </div>
    </BookWrapper>
  )
}
