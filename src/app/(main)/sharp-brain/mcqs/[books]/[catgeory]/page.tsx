import React from 'react'
import SimpleWrapper from '@/src/components/Wrapper/SimpleWrapper'

interface Iprops {
  params: {
    catgeory: string
  }
}

export default function Page({ params }: Iprops) {
  return (
    <SimpleWrapper title={''} url={''} b1={''}>
      Hello World
    </SimpleWrapper>
  )
}
