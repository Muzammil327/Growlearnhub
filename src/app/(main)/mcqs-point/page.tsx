import React from "react"
import type { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

interface Book {
  id: number
  name: string
  slug: string
}

const data = {
  title: "Efficient, interactive MCQs",
  description:
    "Efficient, interactive MCQs platform designed for comprehensive review, immediate score feedback, and detailed performance analytics.",
  canonical: "/mcqs-point/",
  index: true,
  follow: true,
  image: "/mcqs-point/mcqs-point.webp",
  url: "https://growlearnhub.com/mcqs-point/",
  keywords: [
    "growlearnhub",
    "growlearnhub mcqs",
    "mcqs",
    "growlearnhub mcqs point",
    "mcqs point"
  ],
  clist: [
    { name: "Class 9", slug: "/class-9/" },
    { name: "Class 10", slug: "/class-10/" },
    { name: "Class 11", slug: "/class-11/" },
    { name: "Class 12", slug: "/class-12/" },
    { name: "VU", slug: "/vu/" },
    { name: "Books Point", slug: "/book-point/" },
    { name: "Online Test Point", slug: "/online-test-point/" }
  ],
  b1: "Mcqs Point"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <h2>Class Wise Mcqs</h2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {ClassData.map((book: Book) => (
          <CardSmall key={book.id} title={book.name} link={`${book.slug}`} />
        ))}
      </div>
      <h2>Subject Wise Mcqs</h2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {SubjectData.map((book: Book) => (
          <CardSmall key={book.id} title={book.name} link={`${book.slug}`} />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const ClassData: Book[] = [
  {
    id: 0,
    name: "Class 9",
    slug: "/class-9/mcqs/"
  },
  {
    id: 1,
    name: "Class 10",
    slug: "/class-10/mcqs/"
  },
  {
    id: 2,
    name: "Class 11",
    slug: "/class-11/mcqs/"
  },
  {
    id: 3,
    name: "Class 12",
    slug: "/class-12/mcqs/"
  },
  {
    id: 4,
    name: "Virtual University Mid Term",
    slug: "/vu/mid-mcqs/"
  },
  {
    id: 5,
    name: "Virtual University Final Term",
    slug: "/vu/final-mcqs/"
  }
]
const SubjectData: Book[] = [
  {
    id: 0,
    name: "Physics",
    slug: "/mcqs-point/physics/"
  },
  {
    id: 1,
    name: "Chemistry",
    slug: "/mcqs-point/chemistry/"
  },
  {
    id: 2,
    name: "Biology",
    slug: "/mcqs-point/biology/"
  },
  {
    id: 3,
    name: "General Knowledge",
    slug: "/mcqs-point/general-knowledge/"
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
        url: "https://nextjs.org/og.png",
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
      url: "https://nextjs.org/og.png",
      alt: data.title
    }
  }
}
