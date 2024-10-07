import React from "react"
import FetchSeparateMcqs from "./fetch"

const data = {
  b1: "Bones",
  b1Link: "/mcqs-point/biology/skeletal-system/bones/",
  image:
    "/mcqs-point/biology/skeletal-system/bones/bones-skeletal-system-biology-mcqs-point.webp"
}

interface IProps {
  params: {
    slug: string
  }
}

// Define the type for a quiz object
interface Quiz {
  id: number
  question: string
  options: string[]
  answer: string
  slug: string
  relatedQuizzes: number[] // Array of related quiz IDs
}

export default function Page({ params }: IProps) {
  return <FetchSeparateMcqs params={params.slug} />
}

export async function generateMetadata({ params }: IProps) {
  // Fetch data only if needed
  const response = await fetch(
    `https://json-server-two-alpha.vercel.app/mcqs?slug=${params.slug}`
  )
  const datas: Quiz[] = await response.json()

  if (!datas || datas.length === 0) {
    console.warn(`No data found for slug: ${params.slug}`)
    return {
      title: "Quiz Not Found",
      description: "The requested quiz could not be found.",
      keywords: "",
      alternates: {
        canonical: `mcqs-point/${params.slug}`
      }
    }
  }

  const Final_Data = datas[0] // Get the first item from the result

  const datass =
    Final_Data.question +
    " " +
    Final_Data.answer +
    " " +
    Final_Data.options.join(", ") +
    " The Correct Option is: " +
    Final_Data.answer

  const first50Words = datass.split(" ").slice(0, 6).join(" ")
  const first1400Words = datass.split(" ").slice(0, 21).join(" ")

  return {
    title: first50Words,
    description: first1400Words,
    keywords: Final_Data.options,
    alternates: {
      canonical: `mcqs-point/${params.slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: first50Words,
      description: first1400Words,
      url: `https://growlearnhub.com/mcqs-point/${params.slug}`,
      images: [
        {
          src: data.image,
          alt: first50Words
        }
      ]
    },
    twitter: {
      title: first50Words,
      description: first1400Words,
      images: {
        src: data.image,
        alt: first50Words
      }
    }
  }
}
