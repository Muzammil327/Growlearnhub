import React from "react"
import { Metadata } from "next"
import PDFViewer from "@/src/components/elements/PDFViewer"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import MutedPara from "@/src/components/ui/typography/MutedPara/page"

const data = {
  title: "Islamiat Class 9 Book PDF | 9th Class Punjab Text Book",
  description:
    "Download the official Islamiat Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  image: "/9th/book/punjab/class_9_Islamiat_book_punjab_board.webp",
  keywords: [
    "islamiat class 9 punjab text book pdf",
    "class 9 islamiat book pdf punjab board",
    "9th class islamiat punjab text book",
    "islamiat book class 9 punjab board",
    "class 9 islamiat book punjab board"
  ],
  canonical: "/class-9/books/punjab-board-islamiat/",
  url: "https://growlearnhub.com/class-9/books/punjab-board-islamiat/",
  index: true,
  follow: true,
  fileId_urdu: "1pQBiMwAhDVQZgls4tgV6uL6Ngo-Vo4_a",
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <MutedPara>
        Are you looking for a{" "}
        <strong>Class 9 islamiat book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </MutedPara>
      <h3>Download Class 9 Islamiat Book Punjab Board</h3>
      <MutedPara>
        Here, you can download Matric class 9 Islamiat Text Book in PDF Format.
        This book is officially published by Punjab Text Book Board.
      </MutedPara>
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