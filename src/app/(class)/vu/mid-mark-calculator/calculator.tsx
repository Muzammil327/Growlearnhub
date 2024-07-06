'use client'
import QuizPercentage from './Quiz'
import GDBPercentage from './GDB'
import MidPercentage from './mid'
import AssignmentPercentage from './Assignment'
import { useState } from 'react'
import Button from '@/src/components/ui/Button'
import VUWrapper from '../VUWrapper'

export default function Calculator() {
  const [calculatedAssignment, setCalculatedAssignment] = useState<number>(0)
  const [calculatedQuiz, setCalculatedQuiz] = useState<number>(0)
  const [calculatedGDB, setCalculatedGDB] = useState<number>(0)
  const [calculatedMid, setCalculatedMid] = useState<number>(0)

  const totalSum =
    calculatedAssignment + calculatedMid + calculatedGDB + calculatedQuiz
  const roundedTotalSum = totalSum.toFixed(2) // Round to 2 decimal places

  return (
    <VUWrapper title="VU Marks Calculator">
      <div className="my-10">
        <QuizPercentage
          calculatedQuiz={calculatedQuiz}
          setCalculatedQuiz={setCalculatedQuiz}
        />
        <GDBPercentage
          calculatedGDB={calculatedGDB}
          setCalculatedGDB={setCalculatedGDB}
        />
        <AssignmentPercentage
          calculatedAssignment={calculatedAssignment}
          setCalculatedAssignment={setCalculatedAssignment}
        />
        <MidPercentage
          calculatedMid={calculatedMid}
          setCalculatedMid={setCalculatedMid}
        />
        <Button className={'btn w-full mt-5'}>{roundedTotalSum}</Button>
      </div>
    </VUWrapper>
  )
}
