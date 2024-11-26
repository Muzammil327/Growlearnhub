import React from "react"
import { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import PDFViewer from "@/src/components/elements/PDFViewer"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"

const data = {
  title: "Biology Class 10 Book PDF | 10th Class Punjab Text Book",
  description:
    "Download the official Biology Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  keywords: [
    "biology class 10 punjab text book pdf",
    "class 10 biology book pdf punjab board",
    "10th class biology punjab text book",
    "biology book class 10 punjab board",
    "class 10 biology book punjab board"
  ],
  image: "/10th/book/punjab/class_10_biology_book_punjab_board.webp",
  canonical: "/class-10/books/punjab-board-biology/",
  url: "https://growlearnhub.com/class-10/books/punjab-board-biology/",
  index: true,
  follow: true,
  fileId_english: "1MFRZ5yO0SrrfTkAM_ewXBp_Pec4zTOA-",
  fileId_urdu: "1ty3cPG8aWvjPla3xJAT4F__bLNJHKiZv",
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-10/books/punjab-board-biology/${data.slug}-medium`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a <strong>Class 10 biology book punjab board</strong>
        ? Here, you can access all the books you need for free. Our website
        offers a complete collection of books for students in Class 9, 10, 11,
        and 12. Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 10 Biology Book English Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 Biology Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 10th Class Biology Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 Biology Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
    </SimpleWrapper>
  )
}

const mainData = [
  {
    name: "Class 10 Biology Book PDF Punjab Board English Medium",
    slug: "english"
  },
  {
    name: "Biology Class 10 Punjab Board Text Book PDF Urdu Medium",
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
