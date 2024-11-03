"use client"
import React from "react"
import Label from "@/src/components/ui/Label"
import Select from "react-select"
import { useForm } from "@/src/hooks/mcqs/useForm"
import Processing from "@/src/components/ui/Processing"

interface Option {
  value: number
  label: string
}

interface Option2 {
  id: string
  name: string
}

interface CategoryProps {
  setClasses: React.Dispatch<React.SetStateAction<Option[]>>
  classes: Option[]
  setBooks: React.Dispatch<React.SetStateAction<Option[]>>
  books: Option[]
  setChapters: React.Dispatch<React.SetStateAction<Option[]>>
  chapters: Option[]
  setHeadings: React.Dispatch<React.SetStateAction<Option[]>>
  headings: Option[]
  setSubHeadings: React.Dispatch<React.SetStateAction<Option[]>>
  subHeadings: Option[]
}

export default function Category({
  setClasses,
  classes,
  setBooks,
  books,
  setChapters,
  chapters,
  setHeadings,
  headings,
  setSubHeadings,
  subHeadings
}: any) {
  const { data, error, isLoading } = useForm()

  if (error instanceof Error) return <div>Error: {error.message}</div>
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-40 mx-auto w-full">
        <Processing />
      </div>
    )

  // Classes Options
  const classesOptions: Option[] = data.getclass.map(
    ({ id, name }: Option2) => ({
      value: id,
      label: name
    })
  )

  const handleSelectClass = (selectedClass: any) => {
    setClasses(selectedClass) // Cast to Option[]
  }

  // Books Options
  const booksOptions: Option[] = data.getbooks.map(({ id, name }: Option2) => ({
    value: id,
    label: name
  }))

  const handleSelectBook = (selectedBooks: any) => {
    setBooks(selectedBooks) // Cast to Option[]
  }

  // Chapters Options
  const chaptersOptions: Option[] = data.getchapters.map(
    ({ id, name }: Option2) => ({
      value: id,
      label: name
    })
  )

  const handleSelectChapter = (selectedChapters: any) => {
    setChapters(selectedChapters) // Cast to Option[]
  }

  // Headings Options
  const headingsOptions: Option[] = data.getHeadings.map(
    ({ id, name }: Option2) => ({
      value: id,
      label: name
    })
  )

  const handleSelectHeadings = (selectedHeadings: any) => {
    setHeadings(selectedHeadings) // Cast to Option[]
  }

  // Subheadings Options
  const subheadingsOptions: Option[] = data.getSubheadings.map(
    ({ id, name }: Option2) => ({
      value: id,
      label: name
    })
  )

  const handleSelectSubHeadings = (selectedSubHeadings: any) => {
    setSubHeadings(selectedSubHeadings) // Cast to Option[]
  }

  return (
    <React.Fragment>
      <div className="mb-6">
        <Label label="Enter Class" htmlFor="classes" />
        <Select
          options={classesOptions}
          onChange={handleSelectClass}
          value={classes}
          className="mt-1"
          placeholder="Select Class"
        />
      </div>
      <div className="mb-6">
        <Label label="Enter Book" htmlFor="books" />
        <Select
          options={booksOptions}
          onChange={handleSelectBook}
          value={books}
          className="mt-1"
          placeholder="Select Book"
        />
      </div>
      <div className="mb-6">
        <Label label="Enter Chapter" htmlFor="chapters" />
        <Select
          options={chaptersOptions}
          onChange={handleSelectChapter}
          value={chapters}
          className="mt-1"
          placeholder="Select Chapter"
        />
      </div>
      <div className="mb-6">
        <Label label="Enter Headings" htmlFor="headings" />
        <Select
          options={headingsOptions}
          onChange={handleSelectHeadings}
          value={headings}
          className="mt-1"
          placeholder="Select Headings"
        />
      </div>
      <div className="mb-6">
        <Label label="Enter Subheadings" htmlFor="subheadings" />
        <Select
          options={subheadingsOptions}
          onChange={handleSelectSubHeadings}
          value={subHeadings}
          className="mt-1"
          placeholder="Select Subheadings"
        />
      </div>
    </React.Fragment>
  )
}
