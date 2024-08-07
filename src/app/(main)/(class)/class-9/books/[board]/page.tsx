import BoardWrapper from '@/src/components/Wrapper/BoardWrapper'
import React from 'react'

interface Iprops {
  params: {
    board: string
  }
}

export default function Page({ params }: Iprops) {
  return (
    <BoardWrapper title={''} url={''} b1={''}>
      page
    </BoardWrapper>
  )
}
