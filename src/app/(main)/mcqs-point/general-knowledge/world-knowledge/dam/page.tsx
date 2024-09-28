import React from "react"
import QuizWrapper from "@/src/components/element/QuizWrapper"

const data = {
  title: "World General Knowledge Dams Mcqs",
  description:
    "Here you can read the World General Knowledge Dams Solved Mcqs Wise like tarbela dams, bhusha dams, mangla dams etc.",
  keywords: ["tarbela dams", "bhusha dams", "mangla dams"],
  url: "/mcqs-point/general-knowledge/world-knowledge/dam/",
  image: "/mcqs-point/general-knowledge/general-knowledge-world-dams-mcqs-point.png",
}

export default function Page() {
  const cat = ["gk", "world", "dam"]

  return (
    <QuizWrapper
      title={data.title}
      url={data.url}
      b1="General Knowledge"
      b1Link="/mcqs-point/general-knowledge"
      b2="World Knowledge"
      b2Link="/mcqs-point/general-knowledge/world-knowledge"
      b3="Dams"
      image={data.image}
      cat={cat}
    ></QuizWrapper>
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
      url: `https://growlearnhub.com/${data.url}`,
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
