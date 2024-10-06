"use client"
import React, { useState } from "react"
import dynamic from "next/dynamic"
import axios from "axios"
const Processing = dynamic(() => import("@/src/components/ui/Processing"))
const Button = dynamic(() => import("@/src/components/ui/Button"))
const Input = dynamic(() => import("@/src/components/ui/Input"))

export default function Newsletter() {
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const SubmitHandle = async (e: any) => {
    e.preventDefault()
    setLoadingBtn(true)
    setError("")

    try {
      const response = await axios.post("/api/form/newsletter", {
        email
      })
 
      if (response.data.statusbar === 400) {
        setError(response.data.message)
      } else {
        setSuccess(response.data.message)
        setEmail("")
      }
    } catch (error) {
      console.log(error)
      setError("Failed to add you to the newsletter. Please try again later.")
    } finally {
      setLoadingBtn(false)
    }
  }

  return (
    <div className="relative my-4">
      <form
        className="my-2 flex max-w-md md:gap-x-4 gap-x-2 md:flex-row flex-col"
        onSubmit={SubmitHandle}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="solid"
          type="submit"
          disabled={loadingBtn}
          className="md:mt-0 mt-2 flex items-center justify-center"
        >
          {loadingBtn ? <Processing /> : "Subscribe"}
        </Button>
      </form>
      {error && <span className="text-red-500">{error}</span>}
      {success && <span className="text-green-500">{success}</span>}
    </div>
  )
}
