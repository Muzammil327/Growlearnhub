import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import PDFViewer from "@/src/components/element/PDFViewer"
import DataClass11Book from "@/src/app/(main)/(class)/class-11/books/DataClass11Book"

const data = {
  title: "Chemistry Class 11 Book PDF | 11th Class Punjab Text Book",
  description:
    "Download the official Chemistry Class 11 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  canonical: "/class-11/books/punjab-board-chemistry/",
  index: true,
  follow: true,
  image: "/11th/book/punjab/class-11-chemistry-book-punjab-board.webp",
  url: "https://growlearnhub.com/class-11/books/punjab-board-chemistry/",
  keywords: [
    "chemistry class 11 punjab text book pdf",
    "class 11 chemistry book pdf punjab board",
    "11th class chemistry punjab text book",
    "chemistry book class 11 punjab board",
    "class 11 chemistry book punjab board"
  ],
  fileId_english: "1LhWG65hJibow48tOzY7L_w9gWTWfeqvE",
  fileId_urdu: "14GOV_BVtoIoE8SlNNnxDgLAvrwAMdhU4",
  clist: [
    { name: "Class 9 Books", slug: "/class-9/books/" },
    { name: "Class 10 Books", slug: "/class-10/books/" },
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
  b1: "9th Class"
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
              link={`/class-11/books/punjab-board-chemistry/${data.slug}-medium/`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a{" "}
        <strong>Class 11 chemistry book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 11, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <h3>Download Class 11 Chemistry Book English Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 11 Chemistry Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 11th Class Chemistry Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 11 Chemistry Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass11Book />
    </SimpleWrapper>
  )
}

const mainData = [
  {
    name: "Class 11 Chemistry Book PDF Punjab Board English Medium",
    slug: "english"
  },
  {
    name: "Chemistry Class 11 Punjab Board Text Book PDF Urdu Medium",
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