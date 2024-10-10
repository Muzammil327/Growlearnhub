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
  title: "User-friendly, interactive Online Mcqs Test",
  description:
    "User-friendly, interactive MCQs test page designed for thorough subject review with real-time feedback and scores to enhance learning.",
  canonical: "/online-test-point/",
  index: true,
  follow: true,
  image: "/online-test-point.webp",
  url: "https://growlearnhub.com/online-test-point/",
  keywords: [
    "growlearnhub",
    "growlearnhub online",
    "growlearnhub online mcqs",
    "online mcqs",
    "growlearnhub online mcqs point",
    "online mcqs point",
    "mcqs point"
  ],
  clist: [
    { name: "Class 9", slug: "/class-9/" },
    { name: "Class 10", slug: "/class-10/" },
    { name: "Class 11", slug: "/class-11/" },
    { name: "Class 12", slug: "/class-12/" },
    { name: "VU", slug: "/vu/" },
    { name: "Books Point", slug: "/book-point/" },
    { name: "Mcqs Point", slug: "/mcqs-point/" }
  ],
  b1: "Pairing Scheme"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <h2>Class Wise Online Test</h2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {ClassData.map((book: Book) => (
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
    slug: "/class-9/online-test/"
  },
  {
    id: 1,
    name: "Class 10",
    slug: "/class-10/online-test/"
  },
  {
    id: 2,
    name: "Class 11",
    slug: "/class-11/online-test/"
  },
  {
    id: 3,
    name: "Class 12",
    slug: "/class-12/online-test/"
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
