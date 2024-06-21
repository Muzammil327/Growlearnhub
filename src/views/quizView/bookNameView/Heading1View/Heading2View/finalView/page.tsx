import React from 'react'
import FetchFinalView from './FetchFinalView'
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'
import { IpropsFinal } from '@/src/types/page'
import QuizWrapper from '@/src/app/(quiz)/quiz/QuizWrapper'

export default function FinalView({ final }: IpropsFinal) {
  const capitalizedfinalParams = convertToUppercaseWithSpace(final)
  const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/quizCenter/${final}`

  return (
    <>
      <QuizWrapper
        title={capitalizedfinalParams}
        url={url}
        b1="Quiz"
        b1Link="/quiz"
        b2={capitalizedfinalParams}
        title1="Quiz"
      >
        <FetchFinalView final={final} />{' '}
      </QuizWrapper>
    </>
  )
}
