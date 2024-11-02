import React from "react"
import { Metadata } from "next"
import PDFViewer from "@/src/components/element/PDFViewer"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "9th Class General Math Book PDF Urdu Medium Download | Punjab",
  description:
    "Download the 9th Class General Math Book PDF in Urdu Medium for free. Get the Punjab Board-approved textbook and explore chapter-wise downloads.",
  canonical: "/class-9/books/punjab-board-general-math/urdu-medium/",
  index: true,
  follow: true,
  image: "/book_point/class_9/class_9_punjab_board_general_math_book.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-general-math/urdu-medium/",
  keywords: [
    "general math class 9 punjab text book pdf",
    "class 9 general math book pdf punjab board",
    "9th class general math punjab text book",
    "general math book class 9 punjab board",
    "class 9 general math book punjab board",
    "general math 9th Class Book Urdu Medium PDF Download Punjab Board"
  ],
  fileId_urdu: "1UC6ijj0pKUgZFP3-QIX2JpCoP6CbMGIO",
  breadcrumbs: [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Class 9",
      url: "/class-9/"
    },
    {
      title: "Books",
      url: "/class-9/books/"
    },
    {
      title: "Punjab Board General Math",
      url: "/class-9/books/punjab-board-general-math/"
    },
    {
      title: "Urdu Medium"
    }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">
        General Math 9th Class Book Urdu Medium PDF Download Punjab Board
      </Heading2>
      <p className="p5">
        Are you looking for a{" "}
        <strong>Class 9 General Math book punjab board</strong>? Here, you can
        access all the books of class 9 you need for free. Our website offers a
        complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>

      <p className="p5">
        Here, you can download Matric{" "}
        <strong>General Math 9th Class Book Urdu Medium PDF </strong>
        Format. This book is officially published by Punjab Text Book Board.
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
