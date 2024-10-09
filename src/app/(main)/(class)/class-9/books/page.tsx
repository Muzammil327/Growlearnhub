import React from "react"
import { Metadata } from "next"
import DataClass9Book from "@/src/app/(main)/(class)/class-9/books/DataClass9Book"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "9th Class Books | Class 9",
  description:
    "Class 9 books page providing essential textbooks, study guides, and reference materials for comprehensive learning.",
  canonical: "/class-9/books/",
  index: true,
  follow: true,
  image: "/9th/class_9_books.webp",
  url: "https://growlearnhub.com/class-9/books/",
  keywords: [
    "growlearnhub books",
    "growlearnhub class 9 books",
    "class 9 books",
    "9th class books",
    "9th class growlearnhub books"
  ],
  b1: "9th Class",
  b1Link: "/class-9/",
  b2: "Books",
  clist: []
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <DataClass9Book />
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
