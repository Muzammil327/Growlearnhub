"use client"
import React, { useState } from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Input from "@/src/components/ui/Input"
import Label from "@/src/components/ui/Label"
import Processing from "@/src/components/ui/Processing"
import Button from "@/src/components/ui/Button"
import { Heading3 } from "@/src/components/ui/Heading"

const data = {
  title: "Sign In to Your Account",
  canonical: "/sign-in",
  image: "/login.webp",
  clist: []
}

export default function Page() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")

  const SubmitHandle = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Sign In"
      image={data.image}
      clist={data.clist}
    >
      <p>
        Continue your learning journey by signing in to your account. Access
        your personalized dashboard, track your progress, and explore new
        resources tailored to your needs.
      </p>

      <Heading3>Don&apos;t have an account?</Heading3>
      <p>
        <a href="/register">Sign up here</a> to join our learning community and
        get access to exclusive courses, resources, and more.
      </p>

      <form onSubmit={SubmitHandle} className="md:w-9/12">
        <div className="py-2">
          <Label label="Email" htmlFor="email" />
          <Input
            name="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="py-2">
          <Label label="Password" htmlFor="password" />
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <span className="text-red-500">{error}</span>}
        {success && <span className="text-green-500">{success}</span>}
        <Button
          variant="outline"
          type="submit"
          className="w-full flex items-center justify-center"
        >
          {loading ? <Processing /> : "Sign In"}
        </Button>
      </form>
    </SimpleWrapper>
  )
}
