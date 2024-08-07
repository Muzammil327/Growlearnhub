import React from 'react'
import MPWrapper from '@/src/components/McqsPoint/MPWrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

interface Book {
  id: number
  name: string
  slug: string
}

export default function Page() {
  return (
    <MPWrapper
      title="Solved Mcqs Topic Wise"
      url="/mcqs-point/"
      b1="Mcqs Point"
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookData.map((book) => (
          <CardSmall
            key={book.id}
            title={book.name}
            link={`/mcqs-point/${book.slug}`}
          />
        ))}
      </div>
    </MPWrapper>
  )
}

const BookData: Book[] = [
  {
    id: 0,
    name: 'Physics',
    slug: 'physics',
  },
  {
    id: 1,
    name: 'Chemistry',
    slug: 'chemistry',
  },
  {
    id: 2,
    name: 'Biology',
    slug: 'biology',
  },
  {
    id: 3,
    name: 'General Knowledge',
    slug: 'general-knowledge',
  },
]
