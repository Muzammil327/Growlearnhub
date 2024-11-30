"use client"
import QuizPercentage from "./QuizPercentage"
import GDBPercentage from "./GDBPercentage"
import MidPercentage from "./MidPercentage"
import AssignmentPercentage from "./AssignmentPercentage"
import { useState } from "react"
import Image from "next/image"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import { Button } from "@/src/components/ui/Button";
import CommentForm from "@/src/components/forms/CommentForm/page"
import MutedPara from "@/src/components/ui/typography/MutedPara/page"

export default function Calculator({ url, data }: { url: string; data: any }) {
  const [calculatedAssignment, setCalculatedAssignment] = useState<number>(0)
  const [calculatedQuiz, setCalculatedQuiz] = useState<number>(0)
  const [calculatedGDB, setCalculatedGDB] = useState<number>(0)
  const [calculatedMid, setCalculatedMid] = useState<number>(0)

  const totalSum =
    calculatedAssignment + calculatedMid + calculatedGDB + calculatedQuiz
  const roundedTotalSum = totalSum.toFixed(2) // Round to 2 decimal places

  return (
    <SimpleWrapper data={data}>
      <div className="my-10">
        <h2>Welcome to the Grow Learnhub Mid Term Mark Calculator</h2>
        <MutedPara>
          Hey there! Welcome to our awesome Mark Calculator, It is created just
          for the students of Virtual University. This tool helps you track your
          grades, collecting marks in mid-exams, quizzes, assignments, and GDB.
          This <strong>VU Mid Mark Calculator</strong> is your new best friend
          for organizing grades and maintaining grades on your academic journey.
        </MutedPara>{" "}
        <Image
          src="/vu/vu_mid_mark_calculator.png"
          alt="VU Mid Marks Calculator"
          title="VU Mid Marks Calculator"
          height="720"
          width="1280"
        />
        <h3>Calculate your mid marks</h3>
        <MutedPara>
          It’s got you covered for all subjects and semesters, making it super
          easy to calculate your marks accurately. Just fill in your scores for
          assignments, quizzes, midterms, and GDB. It’ll give you your overall
          percentage. And be aware you how many marks you are required in the
          final, to succeed in the final No problem! Our{" "}
          <i>VU Mid Mark Calculator’s</i>
          user-friendly interface makes it easy for everyone to use.
        </MutedPara>
        <MutedPara>If any features more, Plz Comment below, Thanks.</MutedPara>
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
        <Button className="w-full mt-5" variant={"destructive"}>
          <i>Here, You calculate total Mid Term Marks:</i> {roundedTotalSum}
        </Button>
        <CommentForm url={url} />
      </div>
    </SimpleWrapper>
  )
}
