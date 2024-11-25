"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AssignmentPercentage({
  calculatedAssignment,
  setCalculatedAssignment
}: any) {
  const [totalAssignment, setTotalAssignment] = useState<number>(0)
  const [obtainedAssignment, setObtainedAssignment] = useState<number>(0)
  const [assignmentPercentage, setAssignmentPercentage] = useState<number>(0)

  const calculateAssignmentPercentage = (
    obtainedAssignment: number,
    totalAssignment: number,
    assignmentPercentage: number
  ): number => {
    if (totalAssignment === 0) {
      return 0
    }

    return (
      (obtainedAssignment / totalAssignment) *
      ((assignmentPercentage / 100) * 100)
    )
  }
  useEffect(() => {
    const data1 = calculateAssignmentPercentage(
      obtainedAssignment,
      totalAssignment,
      assignmentPercentage
    )
    if (data1) {
      setCalculatedAssignment(data1)
    }
  }, [
    obtainedAssignment,
    assignmentPercentage,
    totalAssignment,
    setCalculatedAssignment
  ])

  const handleDecimalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = parseFloat(value) // Convert string to number using parseFloat

    setObtainedAssignment(parsedValue)
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-1">
      <div className="my-4">
        <Label htmlFor="quizPercentage" />
        <Input
          name="assignmentPercentage"
          type="number"
          value={assignmentPercentage || ""}
          placeholder="Enter Your Total Assignment Percentage"
          onChange={(e) => setAssignmentPercentage(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="totalAssignment" />
        <Input
          name="totalAssignment"
          type="number"
          value={totalAssignment || ""}
          placeholder="Enter Your Total Assignment Marks"
          onChange={(e) => setTotalAssignment(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="tmidterm" />
        <Input
          name="obtainedAssignment"
          type="number"
          value={obtainedAssignment || ""}
          placeholder="Enter Your Obtained Obtained Assignment Marks"
          onChange={handleDecimalChange}
        />
      </div>
      <Button variant={"destructive"}>{calculatedAssignment}</Button>
    </div>
  )
}
