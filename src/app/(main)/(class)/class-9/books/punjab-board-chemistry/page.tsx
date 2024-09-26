import React from "react"
import { Metadata } from "next"
import Wrapper from "@/src/components/element/Wrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import PDFViewer from "@/src/components/element/PDFViewer"
import DataClass9Book from "@/src/app/(main)/(class)/class-9/books/DataClass9Book"

const data = {
  title: "9th Class Chemistry Book Pdf Download - All Board",
  description:
    "Download PDF 9th class Chemistry official books in both English and Urdu mediums for Punjab Board. Get your PDF resources today for effective study.",
  canonical: "/class-9/books/punjab-board-chemistry/",
  index: true,
  follow: true,
  image: "/9th/book/punjab/class-9-chemistry-book-punjab-board.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-chemistry/",
  keywords: [
    "chemistry class 9 punjab text book pdf",
    "class 9 chemistry book pdf punjab board",
    "9th class chemistry punjab text book",
    "chemistry book class 9 punjab board",
    "class 9 chemistry book punjab board"
  ],
  fileId_english: "1LhWG65hJibow48tOzY7L_w9gWTWfeqvE",
  fileId_urdu: "14GOV_BVtoIoE8SlNNnxDgLAvrwAMdhU4",
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
  ]
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Books"
      b1Link="/class-9/books/"
      b2="Punjab Board Chemistry"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/books/punjab-board-chemistry/${data.slug}-medium/`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a{" "}
        <strong>Class 9 chemistry book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <h3>Download Class 9 Chemistry Book English Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Chemistry Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 9th Class Chemistry Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Chemistry Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass9Book />
    </Wrapper>
  )
}

const mainData = [
  {
    name: "Class 9 Chemistry Book PDF Punjab Board English Medium",
    slug: "english"
  },
  {
    name: "Chemistry Class 9 Punjab Board Text Book PDF Urdu Medium",
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
