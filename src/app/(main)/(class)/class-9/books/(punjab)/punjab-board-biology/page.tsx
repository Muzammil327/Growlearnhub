import React from "react"
import { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
const DataClass9Book = dynamic(
  () => import("@/src/app/(main)/(class)/class-9/books/DataClass9Book")
)
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import dynamic from "next/dynamic"
import PDFViewer from "@/src/components/element/PDFViewer"

const data = {
  title: "Biology Class 9 Book PDF | 9th Class Punjab Text Book",
  description:
    "Download the official Biology Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  canonical: "/class-9/books/punjab-board-biology/",
  index: true,
  follow: true,
  image: "/9th/book/punjab/class-9-biology-book-punjab-board.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-biology/",
  keywords: [
    "biology class 9 punjab text book pdf",
    "class 9 biology book pdf punjab board",
    "9th class biology punjab text book",
    "biology book class 9 punjab board",
    "class 9 biology book punjab board"
  ],
  b1: "9th Class",
  b1Link: "/class-9/",
  b2: "Books",
  b2Link: "/class-9/books/",
  b3: "Punjab Board Biology",
  fileId_english: "1MFRZ5yO0SrrfTkAM_ewXBp_Pec4zTOA-",
  fileId_urdu: "1ty3cPG8aWvjPla3xJAT4F__bLNJHKiZv",
  clist: []
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/books/punjab-board-biology/${data.slug}-medium/`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a <strong>Class 9 biology book punjab board</strong>
        ? Here, you can access all the books you need for free. Our website
        offers a complete collection of books for students in Class 9, 10, 11,
        and 12. Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 9 Biology Book English Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Biology Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 9th Class Biology Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Biology Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass9Book />
    </SimpleWrapper>
  )
}

const mainData = [
  {
    name: "Class 9 Biology Book PDF Punjab Board English Medium",
    slug: "english"
  },
  {
    name: "Biology Class 9 Punjab Board Text Book PDF Urdu Medium",
    slug: "urdu"
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
