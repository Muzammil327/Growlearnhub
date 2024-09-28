import React from "react"
import QuizWrapper from "@/src/components/element/QuizWrapper"

const data = {
  title: "World General Knowledge Planet Mcqs",
  description:
    "Here you can read the World General Knowledge Planet Solved Mcqs Wise like red planet, blue planet, mars planet etc.",
  keywords: ["red planet", "blue planet", "mars planet"],
  url: "/mcqs-point/general-knowledge/world-knowledge/planet/",
  image: "/mcqs-point/general-knowledge/general-knowledge-world-planet-mcqs-point.png",
}

export default function Page() {
  const cat = ["gk", "world", "planet"]

  return (
    <QuizWrapper
      title={data.title}
      url={data.url}
      b1="General Knowledge"
      b1Link="/mcqs-point/general-knowledge"
      b2="World Knowledge"
      b2Link="/mcqs-point/general-knowledge/world-knowledge"
      b3="Planet"
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
