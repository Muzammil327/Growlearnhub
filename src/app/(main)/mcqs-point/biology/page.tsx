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

export default function Page() {
  const [books, setBooks] = useState<Book[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data: book, error } = await supabase.from('catgeory').select(`
            id,
            name,
            slug,
            book:bookId (
              name
            )
          `)
        if (error) {
          throw new Error('Error fetching books: ' + error.message)
        } else {

          const filterByBook = book.filter(
            (data: any) => data.book.name === 'biology'
          )

          setBooks(filterByBook as any)
        }
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchBooks()
  }, [])
  return (
    <McqsWrapper
      title="Biology Solved Mcqs Topic Wise"
      url={`/mcqs-point/biology/`}
      b1="Mcqs Point"
      b1Link="/mcqs-point/"
      b2="Biology"
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : books.map((book) => (
              <Card3
                key={book.id}
                title={book.name}
                link={`/mcqs-point/biology/${book.slug}`}
              />
            ))}
      </div>
    </McqsWrapper>
  )
}
