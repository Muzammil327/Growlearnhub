"use client"
import React from "react"
import Label from "@/src/components/ui/Label"
import Select from "react-select"

interface CategoryOption {
  value: number
  label: string
}

interface CategoryProps {
  setCatgeory: (selectedOptions: CategoryOption[]) => void
  catgeory: CategoryOption[]
}

export default function Catgeory({ setCatgeory, catgeory }: any) {
  const catgeoryOptionsData: { id: number; name: string }[] = [
    { id: 1, name: "vu" }
  ]

  const catgeoryOptions: CategoryOption[] = catgeoryOptionsData.map(
    ({ id, name }) => ({
      value: id,
      label: name
    })
  )

  const handleSelectChange = (selectedOptions: any) => {
    setCatgeory(selectedOptions) // Handle case where no options are selected
  }

  return (
    <div className="mb-6">
      <Label
        label="Enter Catgeory: (Class, Subject, Topics)"
        htmlFor="catgeory"
      />
      <Select
        isMulti
        options={catgeoryOptions}
        onChange={handleSelectChange}
        value={catgeory} // Use the correct format for selected options
        className="mt-1"
        placeholder="Select Catgeory"
      />
    </div>
  )
}
