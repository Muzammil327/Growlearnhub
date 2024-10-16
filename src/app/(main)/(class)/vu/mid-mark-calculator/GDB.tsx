"use client"
import Button from "@/src/components/ui/Button"
import Input from "@/src/components/ui/Input"
import Label from "@/src/components/ui/Label"
import React, { ChangeEvent, useEffect, useState } from "react"

export default function GDBPercentage({
  calculatedGDB,
  setCalculatedGDB
}: any) {
  const [totalGDB, setTotalDGB] = useState<number>(0)
  const [obtainedGDB, setObtainedDGB] = useState<number>(0)
  const [GDBPercentage, setDGBPercentage] = useState<number>(0)

  const calculateGDBPercentage = (
    obtainedGDB: number,
    totalGDB: number,
    GDBPercentage: number
  ): number => {
    if (totalGDB === 0) {
      return 0 // Default value or handle appropriately
    }

    return (obtainedGDB / totalGDB) * ((GDBPercentage / 100) * 100)
  }
  useEffect(() => {
    const data1 = calculateGDBPercentage(obtainedGDB, totalGDB, GDBPercentage)
    if (data1) {
      setCalculatedGDB(data1)
    }
  }, [obtainedGDB, GDBPercentage, totalGDB, setCalculatedGDB])

  const handleDecimalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = parseFloat(value) // Convert string to number using parseFloat

    setObtainedDGB(parsedValue)
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-1">
      <div className="my-4">
        <Label label="Total GDB Percentage" htmlFor="GDBPercentage" />
        <Input
          name="GDBPercentage"
          type="number"
          value={GDBPercentage || ""}
          placeholder="Enter Your Total GDB Percentage"
          onChange={(e) => setDGBPercentage(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label label="Total GDB Marks" htmlFor="totalGDB" />
        <Input
          name="totalGDB"
          type="number"
          value={totalGDB || ""}
          placeholder="Enter Your Total GDB Marks"
          onChange={(e) => setTotalDGB(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label label="Total Obtained GDB Marks" htmlFor="obtainedGDB" />
        <Input
          name="obtainedGDB"
          type="number"
          value={obtainedGDB || ""}
          placeholder="Enter Your Total Obtained GDB Marks"
          onChange={handleDecimalChange}
        />
      </div>
      <Button className={"btn"}>{calculatedGDB}</Button>
    </div>
  )
}
