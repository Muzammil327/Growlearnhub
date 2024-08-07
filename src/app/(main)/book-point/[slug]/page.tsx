import React from 'react'
import SlugWrapper from '@/src/components/Wrapper/SlugWrapper'

interface Iprops {
  params: {
    medium: string
  }
}

export default function Page({ params }: Iprops) {
  return (
    <SlugWrapper title={''} url={''} b1={''}>
      Hello World
    </SlugWrapper>
  )
}
