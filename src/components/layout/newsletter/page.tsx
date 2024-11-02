"use client"
import React, { useState } from "react"
import dynamic from "next/dynamic"
import axios from "axios"
import styles from "./Newsletter.module.scss"

const Container = dynamic(() => import("@/src/components/ui/Container"))
const Input = dynamic(() => import("@/src/components/ui/Input"))
const ButtonComponents = dynamic(
  () => import("@/src/components/ui/typography/button/page")
)

// Define types for the component's state
interface NewsletterState {
  loading: boolean
  error: string
  success: string
  email: string
}

export default function Newsletter() {
  const [loading, setLoading] = useState<NewsletterState["loading"]>(false)
  const [error, setError] = useState<NewsletterState["error"]>("")
  const [success, setSuccess] = useState<NewsletterState["success"]>("")
  const [email, setEmail] = useState<NewsletterState["email"]>("")

  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await axios.post("/api/form/newsletter", {
        email
      })
      // Handle success response if necessary
      setSuccess("Successfully subscribed!") // Example success message
    } catch (error) {
      console.error(error)
      setError("Failed to add you to the newsletter. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bt">
      <Container>
        <div className="py-20 md:py-32 relative flex flex-col justify-center items-center">
          <div className={styles.h4}>
            <h4 className="text-black dark:text-white">
              Want to get special offers and Course updates?
            </h4>
          </div>
          <form className={styles.header} onSubmit={SubmitHandle}>
            <Input
              name="email"
              type="email"
              className={`${styles.input} `}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your E-mail"
              value={email}
            />
            <ButtonComponents
              variant="solid"
              className={`rounded-full px-4 md:px-6 ${styles.button}`}
              type="submit"
              title="Subscribe"
              loading={loading}
              disabled={loading}
            >
              Subscribe
            </ButtonComponents>
          </form>
          {error && <span className="text-red-500">{error}</span>}
          {success && <span className="text-green-500">{success}</span>}
        </div>
      </Container>
    </section>
  )
}
