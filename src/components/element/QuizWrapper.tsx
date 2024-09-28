"use client"
import React, { useEffect, useState } from "react"
import Container from "@/src/components/element/container"
import SubHeader from "@/src/components/layout/header/subheader/page"
import Form from "@/src/components/element/form/page"
import BreadCrumb from "@/src/components/element/breadcrumb"
import Footer from "@/src/components/layout/footer/page"
import Navbar from "@/src/components/layout/navbar/page"
import "@/src/styles/Wrapper/style.scss"
import Sidebar from "@/src/components/sidebar/page"
import ImageContainer from "./image"
import Link from "next/link"
import Button from "../ui/Button"
import Processing from "../ui/Processing"
import axios from "axios"
import { CardQuiz } from "../card/CardQuiz/cardQuiz"

interface QuizWrapperProps {
  cat: string[] // Array of categories
  title: string
  clist?: any[] // Adjust type according to the actual structure
  image?: string
  url: string
  children?: React.ReactNode
  b1: string
  b1Link?: string
  b2?: string
  b2Link?: string
  b3?: string
  b3Link?: string
  b4?: string
}

const QuizWrapper: React.FC<QuizWrapperProps> = ({
  cat,
  title,
  clist,
  image,
  url,
  children,
  b1,
  b1Link,
  b2,
  b2Link,
  b3,
  b3Link,
  b4
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const [mcqs, setMcqs] = useState<any[]>([]) // Use MCQ[] for proper type

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        setLoading(true)
        setError("") // Reset error on each fetch
        const response = await axios.get(
          `/api/mcqs/RandomPageMcqs?cat=${cat.join(",")}`
        )
        setMcqs(response.data.get_random_mcqs)
      } catch (err: any) {
        console.error(err)
        setError(err.response?.data?.message || "Error fetching MCQs.")
      } finally {
        setLoading(false)
      }
    } // Add `cat` as a dependency since it affects the API call

    if (cat) {
      fetchMcqs()
    }
  }, [cat])

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <SubHeader title={title} />
        <Container>
          <div className="book">
            <div className="c1">
              <BreadCrumb
                b1={b1}
                b2={b2}
                b3={b3}
                b4={b4}
                b1Link={b1Link}
                b2Link={b2Link}
                b3Link={b3Link}
              />
              <p>
                Welcome to our{" "}
                <Link href="/" className="links">
                  Educational Hub
                </Link>{" "}
                , an innovative platform designed for high school student in
                Class 9 to 12, Chartered Accountancy (CA), and Virtual
                University learners to fulfil academic needs. Our mission is to
                provide a one-stop solution for all your educational
                requirements, empowering you to achieve excellence in your
                studies and professional goals.
              </p>
              {image && (
                <ImageContainer
                  image={`${image}`}
                  title={title}
                  class="my-4"
                  height={720}
                  width={1280}
                  priority
                />
              )}
              {children}
              <div className="my-10 grid gap-4">
                {loading ? (
                  <div className="flex items-center justify-center h-40 w-40 mx-auto">
                    <Processing />
                  </div>
                ) : error ? (
                  <div>Getting Mcqs Error: {error}</div>
                ) : (
                  <>
                    {mcqs.map((book: any) => (
                      <CardQuiz
                        key={book._id} // Assuming `_id` is the unique identifier
                        title={book.name}
                        option={book.options}
                        correctOption={book.correctOptions}
                        link={`/mcqs-point/${book.slug}`}
                      />
                    ))}
                  </>
                )}
              </div>
              <p>
                You can give your opinion or any question you have to ask below
                in the comment section area.
              </p>
              <div className="flex gap-4">
                <Button>Report / Error</Button>
                <Link href="/suggest-quiz/">
                  <Button>Suggest Quiz</Button>
                </Link>
              </div>
              <Form url={`https://growlearnhub.com${url}`} />
            </div>
            <div className="c2">
              {clist && <Sidebar title={title} url={url} list={clist} />}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default QuizWrapper
