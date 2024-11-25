import React from "react"
import { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import PDFViewer from "@/src/components/elements/PDFViewer"

const data = {
  title: "Chemistry 11th Class Book PDF | Punjab Board Free Download",
  description:
    "Download Chemistry 11th class book PDFs for both English and Urdu Medium, Punjab Board. Free access to the latest textbooks, following the updated curriculum for Class 11.",
  image: "/11th/book/punjab/class_11_chemistry_book_punjab_board.webp",
  keywords: [
    "chemistry 11th book pdf",
    "chemistry class 11 punjab text book pdf",
    "11th chemistry book pdf",
    "chemistry class 11th book pdf",
    "11 chemistry book pdf",
    "chemistry class 11 book pdf",
    "chemistry 11 class book",
    "11th class chemistry book pdf",
    "class 11 chemistry book",
    "chemistry 11th class book "
  ],
  canonical: "/class-11/books/punjab-board-chemistry/",
  url: "https://growlearnhub.com/class-11/books/punjab-board-chemistry/",
  index: true,
  follow: true,
  fileId_english: "1LhWG65hJibow48tOzY7L_w9gWTWfeqvE",
  fileId_urdu: "14GOV_BVtoIoE8SlNNnxDgLAvrwAMdhU4",
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
              link={`class-11/books/punjab-board-chemistry/${data.slug}-medium`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a <strong>11th Class chemistry pdf book punjab
          board</strong>? Here, you can access all the books you need for free.
        Our website offers a complete collection of books for students in
        Class 9, 10, 11, and 12. Whether you&apos;re preparing for exams or
        need extra resources, we&apos;ve got you covered.
      </p>
      <h3>Download Chemistry class 11 Book English Medium Punjab Board</h3>
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
    </SimpleWrapper>
  )
}

const mainData = [
  {
    name: "Class 11 Chemistry Book PDF Punjab Board English Medium",
    slug: "english"
  },
  {
    name: "11th Chemistry Book Punjab Board Text Book PDF Urdu Medium",
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
