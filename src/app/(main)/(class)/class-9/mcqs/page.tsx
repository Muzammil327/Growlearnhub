import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Class 9 Interactive Multiple Choice Questions (MCQs)",
  description:
    "Explore a comprehensive collection of multiple-choice questions (MCQs) for Class 9 students, covering essential concepts in biology and chemistry.",
  index: true,
  follow: true,
  image: "/mcqs_point/class_9_mcqs.webp",
  canonical: "/class-9/mcqs/",
  url: "https://growlearnhub.com/class-9/mcqs/",
  keywords: [
    "growlearnhub",
    "growlearnhub mcqs",
    "class 9 mcqs",
    "class 9 biology mcqs",
    "class 9 chemistry mcqs",
    "class 9 physics mcqs"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9/" },
    { title: "Mcqs" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class 9 Mcqs</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {mainData.map((book: { id: number; title: string; link: string }) => (
          <CardSmall
            key={book.id}
            title={book.title}
            link={`/class-9/mcqs/${book.link}/`}
          />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const mainData = [
  {
    id: 1,
    title: "Physics",
    link: "physics"
  },
  {
    id: 2,
    title: "Chemistry",
    link: "chemistry"
  },
  {
    id: 3,
    title: "Biology",
    link: "biology"
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
