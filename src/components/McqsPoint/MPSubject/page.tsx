import React from 'react'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import McqsPointSubjectWrapper from '@/src/components/McqsPoint/MPSubject/MPSubjectWrapper'

interface Subject {
  id: number
  name: string
  slug: string
}

interface IProps {
  BookSubjectData: Subject[]
  title: string
  url: string
  b1: string
  b1Link: string
  b2: string
}

export default function MPSubject({
  BookSubjectData,
  title,
  url,
  b1,
  b1Link,
  b2,
}: IProps) {
  return (
    <McqsPointSubjectWrapper
      title={title}
      url={url}
      b1={b1}
      b1Link={b1Link}
      b2={b2}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookSubjectData.map((book: Subject) => (
          <CardSmall
            key={book.id}
            title={book.name}
            link={`${url}${book.slug}`}
          />
        ))}
      </div>
    </McqsPointSubjectWrapper>
  )
}
