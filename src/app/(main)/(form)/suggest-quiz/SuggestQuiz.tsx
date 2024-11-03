"use client"
import React, { useState } from "react"
import dynamic from "next/dynamic"
import Input from "@/src/components/ui/Input"
import Label from "@/src/components/ui/Label"
import Select from "@/src/components/ui/Select"
import slugify from "slugify"
import axios from "axios"
import Button from "@/src/components/ui/typography/button/page"
import Processing from "@/src/components/ui/Processing"
import { TagsInput } from "react-tag-input-component"
import Catgeory from "./Catgeory"
import { Options } from "@/src/types/TagsInput"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"

export default function SuggestQuiz() {
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const [questionName, setQuestionName] = useState<string>("")
  const [options, setOptions] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [description, setDescription] = useState<string>("")
  const [correctOptions, setCorrectOptions] = useState<string[]>([]) // Changed to array
  const [books, setBooks] = useState<Options | null>(null)
  const [classes, setClasses] = useState<Options | null>(null)
  const [chapters, setChapters] = useState<Options | null>(null)
  const [headings, setHeadings] = useState<Options | null>(null)
  const [subHeadings, setSubHeadings] = useState<Options | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const slugs = slugify(questionName, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: true, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true // trim leading and trailing replacement chars, defaults to `true`
    })

    try {
      const response = await axios.post("/api/mcqs", {
        name: questionName,
        slug: slugs,
        options: options,
        tags: tags,
        bookId: books?.value,
        classId: classes?.value,
        chapterId: chapters?.value,
        headingId: headings?.value,
        subHeadingId: subHeadings?.value,
        description: description,
        correctOptions: correctOptions,
      })
console.log("response:", response)
console.log("response data:", response.data)
      if (response.status === 400) {
        setSuccess(response.data.message)
      }
      if (response.status === 200) {
        setSuccess(response.data.message)

        setQuestionName("")
        setOptions([])
        setDescription("")
        setCorrectOptions([])
        setBooks(null)
        setClasses(null)
        setChapters(null)
        setHeadings(null)
        setSubHeadings(null)
      }
    } catch (error) {
      console.error("Error Form submitted from suggest quiz page:", error)
      if (axios.isAxiosError(error)) {
        console.error("Axios error message:", error.message)
        if (error.response) {
          console.error("Response data:", error.response.data)
          console.error("Response status:", error.response.status)
        } else {
          console.error("Error message:", error.message)
        }
      } else {
        console.error("Unexpected error:", error)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <Label label="Enter Question Name:" htmlFor="questionName" />
        <Input
          name="questionName"
          type="text"
          value={questionName}
          placeholder="Question Name"
          onChange={(e) => setQuestionName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <Label label="Enter Options:" htmlFor="options" />
        <TagsInput
          value={options}
          onChange={setOptions}
          name="options"
          placeHolder="Enter Options"
        />
      </div>

      <div className="mb-6">
        <Label label="Enter Correct Option:" htmlFor="correctoption" />
        <Select
          options={options}
          selectedOption={correctOptions}
          onChange={(e: any) => setCorrectOptions(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <Label label="Enter Tags:" htmlFor="tags" />
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="Enter Tags"
        />
      </div>

      <div className="mb-6">
        <Label label="Enter Description:" htmlFor="description" />
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          className="border border-dashed border-gray-900/25 rounded-md mt-2"
        />
      </div>

      <Catgeory
        setBooks={setBooks}
        books={books}
        setClasses={setClasses}
        classes={classes}
        setChapters={setChapters}
        chapters={chapters}
        setHeadings={setHeadings}
        headings={headings}
        subHeadings={subHeadings}
        setSubHeadings={setSubHeadings}
      />

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <Button
        loading={loading}
        type="submit"
        variant="outline"
        className="!w-full flex items-center justify-center"
      >
        {loading ? <Processing /> : "Submit"}
      </Button>
    </form>
  )
}
