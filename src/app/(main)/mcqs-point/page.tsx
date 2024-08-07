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
        const { data: book, error } = await supabase
          .from('book')
          .select('name, id, slug')
        if (error) {
          throw new Error('Error fetching books: ' + error.message)
        }
        if (book) {
          setBooks(book)
        }
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchBooks()
  }, [])
  return (
    <McqsWrapper
      title="Solved Mcqs Topic Wise"
      url={`/mcqs-point/`}
      b1="Mcqs Point"
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : books.map((book) => (
              <Card3
                key={book.id}
                title={book.name}
                link={`/mcqs-point/${book.slug}`}
              />
            ))}
      </div>
    </McqsWrapper>
  )
}
