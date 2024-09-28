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
  const ClassData = [
    { id: 1, name: "class 9" },
    { id: 2, name: "class 10" },
    { id: 3, name: "class 11" },
    { id: 4, name: "class 12" },
    { id: 5, name: "vu" },
    { id: 6, name: "finalterm" },
    { id: 7, name: "midterm" }
  ]

  const BookData = [
    { id: 16, name: "biology" },
    { id: 17, name: "chemistry" },
    { id: 18, name: "physics" },
    { id: 19, name: "maths" },
    { id: 20, name: "english" },
    { id: 21, name: "urdu" },
    { id: 22, name: "gk" }
  ]

  const ChapterData = [
    { id: 41, name: "ch1" },
    { id: 42, name: "ch2" },
    { id: 43, name: "ch3" },
    { id: 44, name: "ch4" },
    { id: 45, name: "ch5" },
    { id: 46, name: "ch6" },
    { id: 47, name: "ch7" },
    { id: 48, name: "ch8" },
    { id: 49, name: "ch9" },
    { id: 50, name: "ch10" },
    { id: 51, name: "ch11" },
    { id: 52, name: "ch12" }
  ]

  const VUTerm = [{ id: 81, name: "cs101" }]

  const gkData = [
    { id: 201, name: "world" },
    { id: 202, name: "pakistan" },
    { id: 203, name: "india" }
  ]

  const subgkData = [
    { id: 451, name: "largest" },
    { id: 452, name: "biggest" },
    { id: 501, name: "planet" },
    { id: 502, name: "red planet" }
  ]

  const catgeoryOptionsData: { id: number; name: string }[] = [
    ...ClassData,
    ...BookData,
    ...ChapterData,
    ...VUTerm,
    ...gkData,
    ...subgkData,
    { id: 201, name: "blood" },
    { id: 27, name: "iq" },
    { id: 28, name: "mosquito" },
    { id: 29, name: "bones" },
    { id: 30, name: "skeletal system" },
    { id: 31, name: "human body" },
    { id: 32, name: "brain" },
    { id: 33, name: "pregnancy" },
    { id: 35, name: "island" },
    { id: 36, name: "world" },
    { id: 37, name: "australia" },
    { id: 38, name: "greenland" },
    { id: 39, name: "country" },
    { id: 40, name: "antarctica" },
    { id: 41, name: "flag" },
    { id: 42, name: "continent" },
    { id: 43, name: "australia" },
    { id: 44, name: "usa" },
    { id: 45, name: "europe" },
    { id: 46, name: "israel" },
    { id: 47, name: "denmark" },
    { id: 48, name: "famous" },
    { id: 50, name: "language" },
    { id: 51, name: "equator" },
    { id: 54, name: "discovered" },
    { id: 55, name: "founded" }
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
