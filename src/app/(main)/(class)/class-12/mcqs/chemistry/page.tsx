import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Class 12 Chemistry Multiple Choice Questions (MCQs)",
  description:
    "Enhance your understanding of key Class 12 chemistry mcqs like motion, forces, energy, and waves. This resource aids in exam preparation.",
  index: true,
  follow: true,
  image: "/mcqs_point/12th/class_12_chemistry_mcqs.webp",
  canonical: "/class-12/mcqs/chemistry/",
  url: "https://growlearnhub.com/class-12/mcqs/chemistry/",
  keywords: [
    "growlearnhub",
    "growlearnhub chemistry mcqs",
    "class 12 chemistry mcqs",
    "chemistry mcqs"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 12", link: "/class-12/" },
    { title: "Mcqs", link: "/class-12/mcqs/" },
    { title: "Chemistry" }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class 12 Chemistry Mcqs</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {mainData.map((book: { id: number; title: string; link: string }) => (
          <CardSmall
            key={book.id}
            title={book.title}
            link={`/class-12/mcqs/chemistry/${book.link}/`}
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
  { id: 9, title: "Chapter 9", link: "chapter-9" },
  { id: 10, title: "Chapter 10", link: "chapter-10" },
  { id: 11, title: "Chapter 11", link: "chapter-11" },
  { id: 12, title: "Chapter 12", link: "chapter-12" },
  { id: 13, title: "Chapter 13", link: "chapter-13" },
  { id: 14, title: "Chapter 14", link: "chapter-14" },
  { id: 15, title: "Chapter 15", link: "chapter-15" },
  { id: 16, title: "Chapter 16", link: "chapter-16" },
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
