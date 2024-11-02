import React from "react"
import { Metadata } from "next"
import PDFViewer from "@/src/components/element/PDFViewer"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "9th Physics Book PDF English Medium Download | Punjab",
  description:
    "Download the 9th Class Physics Book PDF in English Medium for free. Get the Punjab Board-approved textbook and explore chapter-wise downloads.",
  canonical: "/class-9/books/punjab-board-physics/english-medium/",
  index: true,
  follow: true,
  image: "/book_point/class_9/class_9_punjab_board_physics_book.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-physics/english-medium/",
  keywords: [
    "physics class 9 punjab text book pdf",
    "class 9 physics book pdf punjab board",
    "9th class physics punjab text book",
    "physics book class 9 punjab board",
    "9th Class physics Book PDF English Medium Free Download",
    "class 9 physics book punjab board",
    "punjab text book physics 9th class pdf english medium"
  ],
  fileId_english: "1my_m9qLxXF3LCw4eCFlCJGexOmsazJmg",
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
      title: "Punjab Board Physics",
      url: "/class-9/books/punjab-board-physics/"
    },
    {
      title: "English Medium"
    }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">
      Physics 9th Class Book English Medium PDF Download Punjab Board
      </Heading2>
      <p className="p5">
        Are you looking for a <strong>Class 9 physics book punjab board</strong>
        ? Here, you can access all the books of class 9 you need for free. Our
        website offers a complete collection of books for students in Class 9,
        10, 11, and 12. Whether you&apos;re preparing for exams or need extra
        resources, we&apos;ve got you covered.
      </p>

      <p className="p5">
        Here, you can download Matric{" "}
        <strong>Physics 9th Class Book English Medium PDF </strong>
        Format. This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
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
