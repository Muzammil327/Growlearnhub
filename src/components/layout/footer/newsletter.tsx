"use client"
import React, { useState } from "react"
import { NewsletterData } from "@/src/types/page"
import axios from "axios"
import Processing from "../../ui/Processing"
import Button from "../../ui/Button"
import Input from "../../ui/Input"

export default function Newsletter() {
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [error, setError] = useState(false)
  const [newsletter, setNewsletter] = useState<NewsletterData>({
    email: ""
  })

  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoadingBtn(false)

    try {
      setLoadingBtn(true)
      setError(false)
      // const response = await axios.post(PostNewsletter);
      // if (response.data.status === "400" || response.data.status === "500") {
      //   setError(response.data.message);
      // } else {
      //   setError(response.data.message);
      //   setNewsletter({
      //     email: "",
      //   });
      // }
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoadingBtn(false)
    }
  }

  return (
    <div className="relative my-4">
      <form
        className="my-2 flex max-w-md md:gap-x-4 gap-x-2"
        onSubmit={SubmitHandle}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={newsletter.email}
          autoComplete="email"
          onChange={(e) =>
            setNewsletter({ ...newsletter, email: e.target.value })
          }
        />
        <Button variant="solid" disabled={loadingBtn}>
          {loadingBtn ? (
            <div className="flex gap-2">
              <Processing />
              <span>Loading</span>
            </div>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
      {error && <span className="text-color1">{error}</span>}
    </div>
  )
}
