'use client'
import Container from '@/src/components/element/container'
import Footer from '@/src/components/layout/footer/page'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Navbar from '@/src/components/layout/navbar/page'
import QuizPercentage from './Quiz'
import GDBPercentage from './GDB'
import MidPercentage from './mid'
import AssignmentPercentage from './Assignment'
import { useState } from 'react'
import Button from '@/src/components/ui/Button'

export default function Page() {
  const [calculatedAssignment, setCalculatedAssignment] = useState<number>(0)
  const [calculatedQuiz, setCalculatedQuiz] = useState<number>(0)
  const [calculatedGDB, setCalculatedGDB] = useState<number>(0)
  const [calculatedMid, setCalculatedMid] = useState<number>(0)

  const totalSum = calculatedAssignment + calculatedMid + calculatedGDB + calculatedQuiz;
  const roundedTotalSum = totalSum.toFixed(2); // Round to 2 decimal places


  return (
    <>
      <Navbar />
      <main>
        <SubHeader title="VU Marks Calculator" />
        <section className="py-20">
          <Container>
            <input type="number" id="points" name="points" step="3" />

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
            <Button className={'btn w-full mt-5'}>
              {roundedTotalSum}
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
