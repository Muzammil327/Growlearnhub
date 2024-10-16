import McqsChapterWrapper from "@/src/components/Wrapper/mcqs/McqsChapterWrapper"
import React from "react"

const data = {
  title: "World General Knowledge Longest Mcqs",
  description:
    "Here you can read the World General Knowledge Longest Solved Mcqs Wise like longest planet, longest dams, longest river etc.",
  keywords: ["longest planet", "longest dams", "longest river"],
  url: "/mcqs-point/general-knowledge/world-knowledge/longest/",
  image:
    "/mcqs-point/general-knowledge/general-knowledge-world-longest-mcqs-point.png"
}

export default function Page() {
  const cat = ["gk", "world", "longest"]

  return (
    <McqsChapterWrapper
    title={data.title}
    url={data.url}
    b1="General Knowledge"
    b1Link="/mcqs-point/general-knowledge"
    b2="World Knowledge"
    b2Link="/mcqs-point/general-knowledge/world-knowledge"
    b3="Longest"
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
