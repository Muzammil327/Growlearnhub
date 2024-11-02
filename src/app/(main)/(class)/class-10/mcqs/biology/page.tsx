import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Class 10 Biology Multiple Choice Questions (MCQs)",
  description:
    "Enhance your understanding of key Class 10 biology mcqs like motion, forces, energy, and waves. This resource aids in exam preparation.",
  index: true,
  follow: true,
  image: "/mcqs_point/10th/class_10_biology_mcqs.webp",
  canonical: "/class-10/mcqs/biology/",
  url: "https://growlearnhub.com/class-10/mcqs/biology/",
  keywords: [
    "growlearnhub",
    "growlearnhub biology mcqs",
    "class 10 biology mcqs",
    "biology mcqs",
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 10", link: "/class-10/" },
    { title: "Mcqs", link: "/class-10/mcqs/" },
    { title: "Biology" }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class 10 Biology Mcqs</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {mainData.map((book: { id: number; title: string; link: string }) => (
          <CardSmall
            key={book.id}
            title={book.title}
            link={`/class-10/mcqs/biology/${book.link}/`}
          />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const mainData = [
  { id: 1, title: "Chapter 1", link: "chapter-1" },
  { id: 2, title: "Chapter 2", link: "chapter-2" },
  { id: 3, title: "Chapter 3", link: "chapter-3" },
  { id: 4, title: "Chapter 4", link: "chapter-4" },
  { id: 5, title: "Chapter 5", link: "chapter-5" },
  { id: 6, title: "Chapter 6", link: "chapter-6" },
  { id: 7, title: "Chapter 7", link: "chapter-7" },
  { id: 8, title: "Chapter 8", link: "chapter-8" },
  { id: 9, title: "Chapter 9", link: "chapter-9" }
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
