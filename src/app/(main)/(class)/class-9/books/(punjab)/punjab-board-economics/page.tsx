import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "Class 9 Punjab Board Economics Books PDF Download",
  description: "",
  canonical: "/class-9/books/punjab-board-economics/",
  index: true,
  follow: true,
  image: "/book_point/class_9/class_9_punjab_board_economics_book.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-economics/",
  keywords: [
    "economics class 9 punjab text book pdf",
    "class 9 economics book pdf punjab board",
    "9th class economics punjab text book",
    "economics book class 9 punjab board",
    "class 9 economics book punjab board"
  ],
  fileId_urdu: "1JIhmsCKh20DfmqwWuHtwBWa1cZdsu7B1",
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9/" },
    { title: "Book", link: "/class-9/books/" },
    { title: "Punjab Board Economics" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-10">
        <p className="p5">
          Are you looking for a{" "}
          <strong>Class 9 economics book punjab board</strong>? Here, you can
          access all the books you need for free. Our website offers a complete
          collection of books for students in Class 9, 10, 11, and 12. Whether
          you&apos;re preparing for exams or need extra resources, we&apos;ve
          got you covered.
        </p>
      </div>

      <Heading2 variant="black">
        Download 9th Class Economics Textbook Urdu Medium Punjab Board
      </Heading2>
      <p className="p5">
        Here, you can download Matric class 9 Economics Text Book in PDF Format
        . This book is officially published by Punjab Text Book Board.
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
