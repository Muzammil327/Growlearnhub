"use client"
import React, { useState } from "react"
import Input from "@/src/components/ui/Input"
import Label from "@/src/components/ui/Label"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Textarea from "@/src/components/ui/textarea"
import Select from "@/src/components/ui/Select"
import slugify from "slugify"
import axios from "axios"
import Button from "@/src/components/ui/Button"
import Processing from "@/src/components/ui/Processing"
import { TagsInput } from "react-tag-input-component"
import Catgeory from "./Catgeory"
import RelatedQuizzes from "./RelatedQuizzes"

export default function Page() {
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  interface Product {
    value: string
    label: string
  }

  const [relatedQuizzesData, setRelatedQuizzesData] = useState([])

  const [questionName, setQuestionName] = useState<string>("")
  const [options, setOptions] = useState<string[]>([])
  const [description, setDescription] = useState<string>("")
  const [correctOption, setCorrectOption] = useState<string>("")
  const [relatedQuizzes, setRelatedQuizzes] = useState<[]>([])
  const [catgeory, setCatgeory] = useState<Product[]>([])
  const [relatedVideo, setRelatedVideo] = useState<string>("")

  const data = {
    title: "Have a Quiz in Mind?",
    canonical: "/suggest-quiz",
    image: "",
    clist: []
  }

  const catgeoryOptionsData: any[] = [{ id: "1", name: "vu" }]

  const catgeoryOptions = catgeoryOptionsData.map(({ id, name }) => ({
    value: id,
    label: name
  }))
  console.log(catgeoryOptions)
  const handleSelectChange = (selectedOptions: any) => {
    setCatgeory(selectedOptions)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    console.log("Form submitted")

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
        catgeory: catgeory,
        description: description,
        correctOptions: correctOption,
        relatedQuizzes: relatedQuizzes,
        relatedVideo: relatedVideo
      })
      console.log("Response:", response)
      if (response.data.statusbar === 400) {
        setSuccess(response.data.message)
        console.log("Error:", response.data.message)
      }
      if (response.data.statusbar === 200) {
        setSuccess(response.data.message)
        console.log("Error 2s:", response.data.message)

        setQuestionName("")
        setOptions([])
        setDescription("")
        setCorrectOption("")
        setRelatedQuizzes([])
        setCatgeory([])
        setRelatedVideo("")
      }
    } catch (error) {
      console.log("Error Form submitted from suggest quiz page:", error)
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
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Suggest Quiz"
      image={data.image}
      clist={data.clist}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label label="Enter Question Name:" htmlFor="questionName" />
          <Input
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
            selectedOption={correctOption}
            onChange={(e: any) => setCorrectOption(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Label label="Enter Description:" htmlFor="description" />
          <Textarea
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
        </div>

        <div className="mb-6">
          <Label
            label="Enter Video Link: (Not Required)"
            htmlFor="relatedVideo"
          />
          <Input
            type="text"
            value={relatedVideo}
            placeholder="Video Link"
            onChange={(e) => setRelatedVideo(e.target.value)}
          />
        </div>

        <Catgeory setCatgeory={setCatgeory} catgeory={catgeory} />

        <RelatedQuizzes
          setRelatedQuizzesData={setRelatedQuizzesData}
          relatedQuizzesData={relatedQuizzesData}
          setRelatedQuizzes={setRelatedQuizzes}
          relatedQuizzes={relatedQuizzes}
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
    </SimpleWrapper >
  )
}
