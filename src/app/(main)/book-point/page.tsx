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
  title: "Interactive books for All Classes",
  description:
    "Interactive books page for all classes, featuring top picks, trending titles, detailed descriptions, and user ratings for informed choices.",
  canonical: "/book-point/",
  index: true,
  follow: true,
  image: "/book_point.webp",
  url: "https://growlearnhub.com/book-point/",
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
    { name: "Mcqs Point", slug: "/mcqs-point/" },
    { name: "Online Test Point", slug: "/online-test-point/" }
  ],
  b1: "Book Point"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookData.map((book) => (
          <CardSmall key={book.id} title={book.name} link={`${book.slug}`} />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const BookData: Book[] = [
  {
    id: 0,
    name: "Class 9",
    slug: "/class-9/books/"
  },
  {
    id: 1,
    name: "Class 10",
    slug: "/class-10/books/"
  },
  {
    id: 2,
    name: "Class 11",
    slug: "/class-11/books/"
  },
  {
    id: 3,
    name: "Class 12",
    slug: "/class-12/books/"
  },
  {
    id: 4,
    name: "Virtual University",
    slug: "/vu/handouts/"
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
