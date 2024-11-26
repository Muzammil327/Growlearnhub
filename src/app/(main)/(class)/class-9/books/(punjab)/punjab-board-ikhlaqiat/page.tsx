import React from "react"
import { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import PDFViewer from "@/src/components/elements/PDFViewer"

const data = {
  title: "Ikhlaqiat Class 9 Book PDF | 9th Class Punjab Text Book",
  description:
    "Download the official Ikhlaqiat Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
    image: "/9th/book/punjab/class_9_ikhlaqiat_book_punjab_board.webp",
    keywords: [
      "ikhlaqiat class 9 punjab text book pdf",
      "class 9 ikhlaqiat book pdf punjab board",
      "9th class ikhlaqiat punjab text book",
      "ikhlaqiat book class 9 punjab board",
      "class 9 ikhlaqiat book punjab board"
    ],
  canonical: "/class-9/books/punjab-board-ikhlaqiat/",
  url: "https://growlearnhub.com/class-9/books/punjab-board-ikhlaqiat/",
  index: true,
  follow: true,
  fileId_urdu: "1fwK6qscOFekmeFq0XIPVeN9Ww3eBg6jF",
}

export default function Page() {
  return (
    <Simplewrapper data={data}>
      <p>
        Are you looking for a{" "}
        <strong>Class 9 ikhlaqiat book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <h3>Download Class 9 Ikhlaqiat Book Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Ikhlaqiat Text Book in PDF Format.
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
