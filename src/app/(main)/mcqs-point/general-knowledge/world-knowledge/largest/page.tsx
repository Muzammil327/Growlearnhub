import React from "react"
import McqsChapterWrapper from "@/src/components/Wrapper/mcqs/McqsChapterWrapper"

const data = {
  title: "World General Knowledge Largest Mcqs",
  description:
    "Here you can read the World General Knowledge Largest Solved Mcqs Wise like largest planet, largest dams, largest river etc.",
  keywords: ["largest planet", "largest dams", "largest river"],
  url: "/mcqs-point/general-knowledge/world-knowledge/largest/",
  image:
    "/mcqs-point/general-knowledge/general-knowledge-world-largest-mcqs-point.png"
}

export default function Page() {
  const cat = ["gk", "world", "largest"]

  return (
    <McqsChapterWrapper
    title={data.title}
    url={data.url}
    b1="General Knowledge"
    b1Link="/mcqs-point/general-knowledge"
    b2="World Knowledge"
    b2Link="/mcqs-point/general-knowledge/world-knowledge"
    b3="Largest"
    image={data.image}
    cat={cat}
  ></McqsChapterWrapper>
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
