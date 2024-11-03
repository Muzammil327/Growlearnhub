import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import DataClass9Book from "@/src/app/(main)/(class)/class-9/books/DataClass9Book"

const data = {
  title: "Urdu Class 9 Book PDF | 9th Class Punjab Text Book",
  description:
    "Download the official Urdu Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  canonical: "/class-9/books/punjab-board-urdu/",
  index: true,
  follow: true,
  image: "/9th/book/punjab/class-9-urdu-book-punjab-board.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-urdu/",
  keywords: [
    "urdu class 9 punjab text book pdf",
    "class 9 urdu book pdf punjab board",
    "9th class urdu punjab text book",
    "urdu book class 9 punjab board",
    "class 9 urdu book punjab board"
  ],
  fileId_urdu: "1OIiCbYItblJQN0RGgo5Qjv6HSNJXrDQv",
  clist: [
    { name: "Class 10 Books", slug: "/class-10/books/" },
    { name: "Class 11 Books", slug: "/class-11/books/" },
    { name: "Class 12 Books", slug: "/class-12/books/" },
    { name: "Class 9 Mcqs", slug: "/class-9/mcqs/" },
    { name: "Class 10 Mcqs", slug: "/class-10/mcqs/" },
    { name: "Class 11 Mcqs", slug: "/class-11/mcqs/" },
    { name: "Class 12 Mcqs", slug: "/class-12/mcqs/" },
    { name: "Class 9 Online Test", slug: "/class-9/online-test/" },
    { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
    { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
    { name: "Class 12 Online Test", slug: "/class-12/online-test/" }
  ],
  b1: "Past Paper",
  b1Link: "/class-9/past-paper/",
  b2: "Lahore Board Physics"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p>
        Are you looking for a <strong>Class 9 urdu book punjab board</strong>?
        Here, you can access all the books you need for free. Our website offers
        a complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 9 Urdu Book Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Urdu Text Book in PDF Format. This
        book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
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
