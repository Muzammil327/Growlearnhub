import React from 'react'
import FetchFinalView from './FetchFinalView'
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'
import { IpropsFinal } from '@/src/types/page'
import SimpleWrapper from '@/src/components/Wrapper/SimpleWrapper'

export default function FinalView({ final }: IpropsFinal) {
  const capitalizedfinalParams = convertToUppercaseWithSpace(final)
  const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/quizCenter/${final}`

  return (
    <>
      <SimpleWrapper
        title={capitalizedfinalParams}
        url={url}
        b1="Quiz"
        b1Link="/quiz"
        b2={capitalizedfinalParams}
        title1="Quiz"
      >
        <FetchFinalView final={final} />{' '}
      </SimpleWrapper>
    </>
  )
}
