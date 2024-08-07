'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import Card3 from '@/src/components/card2/card3'
import McqsWrapper from '@/src/components/Wrapper/McqsWrapper'

interface Book {
  id: string
  name: string
  slug: string
}

interface Iprops {
  params: {
    catgeory: string
  }
}

export default function Page({ params }: Iprops) {
  const [books, setBooks] = useState<Book[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data: book, error } = await supabase.from('subCatgeory')
          .select(`
            id,
            name,
            slug,
            book:bookId (
              slug
            ),
            catgeory:catgeoryId (
              slug
            )
          `)
        if (error) {
          throw new Error('Error fetching books: ' + error.message)
        } else {
          const filterByBook = book.filter((data: any) => {
            return (
              data.book.slug === 'general-knowledge' &&
              data.catgeory.slug === params.catgeory
            )
          })

          setBooks(filterByBook as any)
        }
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchBooks()
  }, [params.catgeory])
  return (
    <McqsWrapper
      title={`${params.catgeory} General Knowledge Solved Mcqs`}
      url={`/mcqs-point/general-knowledge/${params.catgeory}`}
      b1="Mcqs Point"
      b1Link="/mcqs-point/"
      b2="General Knowledge"
      b2Link="/mcqs-point/general-knowledge/"
      b3={`${params.catgeory}`}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : books.map((book) => (
              <Card3
                key={book.id}
                title={book.name}
                link={`/mcqs-point/general-knowledge/${params.catgeory}/${book.slug}`}
              />
            ))}
      </div>
    </McqsWrapper>
  )
}
