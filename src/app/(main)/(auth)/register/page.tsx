"use client"
import React, { useState } from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Input from "@/src/components/ui/Input"
import Label from "@/src/components/ui/Label"
import Processing from "@/src/components/ui/Processing"
import Button from "@/src/components/ui/Button"
import { Heading3, Links } from "@/src/components/ui/Heading"
import UnorderedList from "@/src/components/ui/list/UnorderedList"

const data = {
  title: "Create Your Account",
  canonical: "/register",
  image: "/register.webp",
  clist: []
}

export default function Page() {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")

  const SubmitHandle = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match")
      }
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
      b1="Register"
      image={data.image}
      clist={data.clist}
    >
      <p>
        Join our community of learners and unlock access to high-quality
        educational resources. Whether you&apos;re a student, teacher, or
        lifelong learner, we&apos;ve got something for everyone.
      </p>
      <Heading3>Why Join Us?</Heading3>
      <UnorderedList
        items={[
          {
            description:
              "Access a wide range of educational materials, from courses to handouts."
          },
          {
            description:
              "Connect with experts and other learners in your field of interest."
          },
          {
            description:
              "Track your progress and save your favorite content for easy access."
          }
        ]}
      />

      <Heading3>Sign Up to Get Started</Heading3>

      <p>
        Fill in your details below to create an account and start learning
        today!
      </p>

      <form onSubmit={SubmitHandle}>
        <div className="py-2">
          <Label label="Username" htmlFor="username" />
          <Input
            name="username"
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <div className="py-2">
          <Label label="Confirm Password" htmlFor="confirmPassword" />
          <Input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            placeholder="Enter your confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
      <p className="text-center mt-5">
        Already have an account? <Links slug="/sign-in">Sign-in</Links>
      </p>
    </SimpleWrapper>
  )
}
