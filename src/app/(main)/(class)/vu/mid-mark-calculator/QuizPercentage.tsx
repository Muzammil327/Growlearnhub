import React, { useEffect, useState } from "react"
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input"
import { Label } from "@/src/components/ui/Label"

export default function QuizPercentage({
  calculatedQuiz,
  setCalculatedQuiz
}: any) {
  const [quizPercentage, setQuizPercentage] = useState<number>(0)
  const [totalQuiz, setTotalQuiz] = useState<number>(0)
  const [obtainedQuiz, setObtainedQuiz] = useState<number>(0)

  const calculateQuizPercentage = (
    obtainedQuiz: number,
    totalQuiz: number,
    quizPercentage: number
  ): number => {
    if (totalQuiz === 0) {
      return 0
    }

    return (obtainedQuiz / totalQuiz) * ((quizPercentage / 100) * 100)
  }
  useEffect(() => {
    const data1 = calculateQuizPercentage(
      obtainedQuiz,
      totalQuiz,
      quizPercentage
    )
    if (data1) {
      setCalculatedQuiz(data1)
    }
  }, [obtainedQuiz, quizPercentage, setCalculatedQuiz, totalQuiz])

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-1">
      <div className="my-4">
        <Label htmlFor="quizPercentage" />
        <Input
          name="quizPercentage"
          type="number"
          value={quizPercentage || ""}
          placeholder="Enter Your Total Quiz Percentage"
          onChange={(e) => setQuizPercentage(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="totalQuiz" />
        <Input
          name="totalQuiz"
          type="number"
          value={totalQuiz || ""}
          placeholder="Enter Your Total Quiz Marks"
          onChange={(e) => setTotalQuiz(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="obtainedQuiz" />
        <Input
          name="obtainedQuiz"
          type="number"
          value={obtainedQuiz || ""}
          placeholder="Enter Your Total Obtained Quiz Marks"
          onChange={(e) => setObtainedQuiz(parseInt(e.target.value))}
        />
      </div>
      <Button>{calculatedQuiz}</Button>
    </div>
  )
}
