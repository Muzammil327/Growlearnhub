"use client"
import React, { useState } from "react"
import dynamic from "next/dynamic"
import axios from "axios"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Label from "@/src/components/ui/Label"
import Textarea from "@/src/components/ui/textarea"
const Processing = dynamic(() => import("@/src/components/ui/Processing"))
const Button = dynamic(() => import("@/src/components/ui/Button"))
const Input = dynamic(() => import("@/src/components/ui/Input"))

const data = {
  title: "Feature Idea Submission Request",
  canonical: "/request-feature",
  image: "",
  clist: []
}

export default function Newsletter() {
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [use, setUseCase] = useState<string>("")

  const SubmitHandle = async (e: any) => {
    e.preventDefault()
    setLoadingBtn(true)
    setError("")

    try {
      const response = await axios.post("/api/form/newsletter", {
        title,
        description
      })
      if (response.data.statusbar === 400) {
        setError(response.data.message)
      } else {
        setSuccess(response.data.message)
        setTitle("")
        setDescription("")
      }
    } catch (error) {
      console.log(error)
      setError("Failed to add you to the newsletter. Please try again later.")
    } finally {
      setLoadingBtn(false)
    }
  }

  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Request Feature"
      image={data.image}
      clist={data.clist}
    >
      <form className="my-2" onSubmit={SubmitHandle}>
        <div className="mb-6">
          <Label label="Enter Title:" htmlFor="title" />
          <Input
            name="title"
            type="text"
            value={title}
            placeholder="Enter Your Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Label label="Enter Description:" htmlFor="description" />
          <Textarea
            value={description}
            placeholder="Enter Your Description"
            onChange={(e) => setDescription(e.target.value)}
            name={description}
          />
        </div>
        <Button
          variant="solid"
          type="submit"
          disabled={loadingBtn}
          className="!w-full flex items-center justify-center"
        >
          {loadingBtn ? <Processing /> : "Submit"}
        </Button>
      </form>
      {error && <span className="text-red-500">{error}</span>}
      {success && <span className="text-green-500">{success}</span>}
    </SimpleWrapper>
  )
}
