import React from 'react'
import ChapterWrapper from '@/src/components/Wrapper/ChapterWrapper'

interface Iprops {
  params: {
    chapter: string
  }
}

export default function Page({ params }: Iprops) {
  return (
    <ChapterWrapper title={''} url={''} b1={''}>
      Hello World
    </ChapterWrapper>
  )
}
