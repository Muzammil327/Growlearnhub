import React from "react"
import { Metadata } from "next"
import PDFViewer from "@/src/components/elements/PDFViewer"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"

const data = {
  title: "English Class 12 Book PDF | 12th Class Punjab Text Book",
  description:
    "Download the official English Class 12 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  image: "/12th/book/punjab/class_12_english_book_punjab_board.webp",
  keywords: [
    "english class 12 punjab text book pdf",
    "class 12 english book pdf punjab board",
    "12th class english punjab text book",
    "english book class 12 punjab board",
    "class 12 english book punjab board"
  ],
  canonical: "/class-12/books/punjab-board-english/",
  url: "https://growlearnhub.com/class-12/books/punjab-board-english/",
  index: true,
  follow: true,
  fileId_urdu: "1jWMXA8MZxT5x13EPrpYhC_3ZnCwmnDYi",
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p>
        Are you looking for a <strong>Class 12 english book punjab board</strong>
        ? Here, you can access all the books you need for free. Our website
        offers a complete collection of books for students in Class 9, 10, 11,
        and 12. Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 12 English Book Punjab Board</h3>
      <p>
        Here, you can download Matric class 12 English Text Book in PDF Format.
        This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
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
