'use client'
import React, { useEffect, useState } from 'react'
import McqsWrapper from '@/src/components/Wrapper/McqsWrapper'
import { supabase } from '@/src/util/db'
import Card3 from '@/src/components/card2/card3'

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
      title="9th class Solved Mcqs Chapter Wise"
      url={`/class-9/mcqs/`}
      b1="9th Class"
      b1Link="/class-9"
      b2="Mcqs"
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : books.map((book) => (
              <Card3
                key={book.id}
                title={book.name}
                link={`/class-9/mcqs/${book.slug}`}
              />
            ))}
      </div>
    </McqsWrapper>
  )
}
