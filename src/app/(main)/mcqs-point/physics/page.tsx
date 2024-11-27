import React from "react"
import { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import { PhysicsMcqsSubjectData } from "@/src/data/mcqs"
import { SmallCardProps } from "@/src/types/CardType"

const data = {
  title: "Physics Solved Mcqs Topic Wise",
  description:
    "Here you can get solved mcqs topic wise of physics like optics, electromagnetism, thermodynamics, quantum physics, and mechanics.",
  canonical: "/mcqs-point/physics/",
  index: true,
  follow: true,
  image: "/mcqs-point/physics/physics-mcqs-point.png",
  url: "https://growlearnhub.com/mcqs-point/physics/",
  keywords: ["mcqs", "quiz", "mcqs physics", "physics mcqs"],
  clist: [],
  b1: "Mcqs Point",
  b1Link: "/mcqs-point/",
  b2: "Physics"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {PhysicsMcqsSubjectData.map((book: SmallCardProps) => (
          <CardSmall
            key={book.title}
            title={book.title}
            link={`${data.canonical}${book.link}`}
          />
        ))}
      </div>
    </SimpleWrapper>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title
      }
    ]
  },
  alternates: {
    canonical: data.canonical
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow
    }
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title
    }
  }
}