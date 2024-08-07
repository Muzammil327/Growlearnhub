import React from 'react'
import BookWrapper from '@/src/components/Wrapper/BookWrapper'

interface Iprops {
  params: {
    books: string
  }
}

export default function Page({ params }: Iprops) {
  return (
    <BookWrapper title={''} url={''} b1={''}>
      Hello World
    </BookWrapper>
  )
}
