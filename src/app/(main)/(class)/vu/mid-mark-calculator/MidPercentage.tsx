"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MidPercentage({
  calculatedMid,
  setCalculatedMid
}: any) {
  const [totalMidMark, setTotalMidMark] = useState<number>(0)
  const [obtainedMidMark, setObtainedMidMark] = useState<number>(0)
  const [MidPercentage, setMidPercentage] = useState<number>(0)

  const calculateMidPercentage = (
    obtainedMidMark: number,
    totalMidMark: number,
    MidPercentage: number
  ): number => {
    if (totalMidMark === 0) {
      return 0 // Default value or handle appropriately
    }

    return (obtainedMidMark / totalMidMark) * ((MidPercentage / 100) * 100)
  }
  useEffect(() => {
    const data1 = calculateMidPercentage(
      obtainedMidMark,
      totalMidMark,
      MidPercentage
    )
    if (data1) {
      setCalculatedMid(data1)
    }
  }, [obtainedMidMark, MidPercentage, totalMidMark, setCalculatedMid])

  const handleDecimalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = parseFloat(value) // Convert string to number using parseFloat

    setObtainedMidMark(parsedValue)
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-1">
      <div className="my-4">
        <Label htmlFor="MidPercentage" />
        <Input
          name="MidPercentage"
          type="number"
          value={MidPercentage || ""}
          placeholder="Enter Your Total Mid Percentage"
          onChange={(e) => setMidPercentage(parseFloat(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="totalMidMark" />
        <Input
          name="totalMidMark"
          type="number"
          value={totalMidMark || ""}
          placeholder="Enter Your Total Mid Term Marks"
          onChange={(e) => setTotalMidMark(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label
          htmlFor="obtainedMidMark"
        />
        <Input
          name="obtainedMidMark"
          type="number"
          value={obtainedMidMark || ""}
          placeholder="Enter Your Total Obtained Mid Term Marks"
          onChange={handleDecimalChange}
        />
      </div>
      <Button className={"btn"}>{calculatedMid}</Button>
    </div>
  )
}
