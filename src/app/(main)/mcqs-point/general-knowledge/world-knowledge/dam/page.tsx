import React from "react"
import Wrapper from "@/src/components/element/Wrapper"
import { CardQuizWithoutLink } from "@/src/components/card/CardQuiz/cardQuiz"
import { combinedMcqs } from "../../../[slug]/data"

const data = {
  title: "World General Knowledge Dam Solved Mcqs",
  description:
    "Here you can read the World General Knowledge Dam Solved Mcqs Wise like tarbela dam, kalinga dam, river dam, etc.",
  keywords: ["tarbela dam", "kalinga dam", "river dam"],
  url: "/mcqs-point/general-knowledge/world-knowledge/dam/",
  image:
    "/mcqs-point/biology/skeletal-system/bones/bones-skeletal-system-biology-mcqs-point.webp"
}

const FiltercombinedMcqs = combinedMcqs.filter(
  (data: any) =>
    Array.isArray(data.catgeory) &&
    data.catgeory.some((cat: any) => cat.includes("dam"))
)

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.url}
      b1="General Knowledge"
      b1Link="/mcqs-point/general-knowledge"
      b2="World Knowledge"
      b2Link="/mcqs-point/general-knowledge/world-knowledge"
      b3="Dam"
      image={data.image}
    >
      <div className="my-10 grid gap-4">
        {FiltercombinedMcqs.map((book: any) => (
          <CardQuizWithoutLink
            key={book.id}
            title={book.name}
            option={book.options}
            correctOption={book.correctOptions}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export async function generateMetadata() {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: data.url
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
      title: data.title,
      description: data.description,
      url: `https://growlearnhub.com${data.url}`,
      images: [
        {
          src: data.image,
          alt: data.title
        }
      ]
    },
    twitter: {
      title: data.title,
      description: data.description,

      images: {
        src: data.image,
        alt: data.title
      }
    }
  }
}
