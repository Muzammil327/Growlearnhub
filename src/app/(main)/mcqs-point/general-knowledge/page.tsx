import React from "react"
import { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import { GKMcqsSubjectData } from "@/src/data/mcqs"
import { SmallCardProps } from "@/src/types/CardType";

const data = {
  title: "General Knowledge Solved Mcqs Topic Wise",
  description:
    "Here you can get solved mcqs topic wise of General Knowledge like countries, languages, current affairs, History, Geography, General Science, Sports.",
  canonical: "/mcqs-point/general-knowledge/",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/mcqs-point/general-knowledge/",
  image: "/mcqs-point/general-knowledge/general-knowledge-mcqs-point.png",
  keywords: [
    "mcqs",
    "quiz",
    "mcqs general-knowledge",
    "general-knowledge mcqs"
  ],
  clist: [],
  b1: "Mcqs Point",
  b1Link: "/mcqs-point/",
  b2: "General Knowledge"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {GKMcqsSubjectData.map((book: SmallCardProps) => (
           <CardSmall
           key={book.title}
           title={book.title}
           link={`mcqs-point/general-knowledge/${book.link}`}
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
