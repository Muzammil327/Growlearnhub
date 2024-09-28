import React from "react"
import McqsChapterWrapper from "@/src/components/Wrapper/mcqs/McqsChapterWrapper"

const data = {
  title: "World General Knowledge Planet Mcqs",
  description:
    "Here you can read the World General Knowledge Planet Solved Mcqs Wise like red planet, blue planet, mars planet etc.",
  keywords: ["red planet", "blue planet", "mars planet"],
  url: "/mcqs-point/general-knowledge/world-knowledge/planet/",
  image:
    "/mcqs-point/general-knowledge/general-knowledge-world-planet-mcqs-point.png"
}

export default function Page() {
  const cat = ["gk", "world", "planet"]

  return (
    <McqsChapterWrapper
      title={data.title}
      url={data.url}
      image={data.image}
      cat={cat}
      b1="World Knowledge"
      b1Link="/mcqs-point/general-knowledge/world-knowledge/"
      b2="Planets"
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
