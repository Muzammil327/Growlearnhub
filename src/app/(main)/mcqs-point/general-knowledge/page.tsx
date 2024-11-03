import React from "react"
import { Metadata } from "next"
import { SmallCardProps } from "@/src/types/card"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Efficient General Knowledge Multiple Choice Questions (MCQs)",
  description:
    "Explore a comprehensive collection of general knowledge (MCQs) covering essential topics such as ccurrent affairs, history, geography, and science, aiding in thorough preparation for exams.",
  index: true,
  follow: true,
  image: "/mcqs_point/general_knowledge_mcqs.webp",
  canonical: "/mcqs-point/general-knowledge/",
  url: "https://growlearnhub.com/mcqs-point/general-knowledge/",
  keywords: [
    "growlearnhub",
    "growlearnhub general knowledge mcqs",
    "general knowledge mcqs"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Mcqs Point", link: "/mcqs-point/" },
    { title: "General Knowledge" }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {MainData.map((book: SmallCardProps) => (
          <CardSmall
            key={book.id}
            title={book.title}
            link={`/mcqs-point/general-knowledge/${book.link}/`}
          />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const MainData: SmallCardProps[] = [
  {
    id: 0,
    title: "Pakistan",
    link: "pakistan"
  },
  {
    id: 1,
    title: "India",
    link: "india"
  },
  {
    id: 2,
    title: "World Knowledge",
    link: "world-knowledge"
  }
]

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
