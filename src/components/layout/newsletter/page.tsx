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

export default function Newsletter() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const SubmitHandle = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await axios.post("/api/form/newsletter", {
        email
      })
    } catch (error) {
      console.log(error)
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
              className={`rounded-full ${styles.button}`}
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
