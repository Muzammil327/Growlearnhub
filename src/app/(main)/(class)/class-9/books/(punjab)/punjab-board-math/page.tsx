import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Class 9 Punjab Board Math Books PDF Download",
  description: "",
  canonical: "/class-9/books/punjab-board-math/",
  index: true,
  follow: true,
  image: "/book_point/class_9/class_9_punjab_board_math_book.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-math/",
  keywords: [
    "math class 9 punjab text book pdf",
    "class 9 math book pdf punjab board",
    "9th class math punjab text book",
    "math book class 9 punjab board",
    "class 9 math book punjab board"
  ],
  fileId_english: "1m0c4RwJH1loIwLaWurWOarhBYzncf2lQ",
  fileId_urdu: "13Y8JmTqRvSsKUTCk6muXFG2ql-ef_AbZ",
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9/" },
    { title: "Book", link: "/class-9/books/" },
    { title: "Punjab Board Math" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-10">
        <p className="p5">
          Are you looking for a <strong>Class 9 math book punjab board</strong>?
          Here, you can access all the books you need for free. Our website
          offers a complete collection of books for students in Class 9, 10, 11,
          and 12. Whether you&apos;re preparing for exams or need extra
          resources, we&apos;ve got you covered.
        </p>
        {mainData.map((data: { name: string; slug: string }) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/books/punjab-board-math/${data.slug}-medium/`}
            />
          )
        })}
      </div>

      <Heading2 variant="black">
        Download 9th Class Math Textbook Urdu Medium Punjab Board
      </Heading2>
      <p className="p5">
        Here, you can download Matric class 9 Math Text Book in PDF Format for
        Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />

      <Heading2 variant="black">
        Download 9th Class Math Textbook English Medium Punjab Board
      </Heading2>
      <p className="p5">
        Here, you can download Matric class 9 Math Text Book in PDF Format for
        English Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
    </SimpleWrapper>
  )
}

const mainData = [
  {
    name: "Math Class 9 Punjab Board Text Book PDF Urdu Medium",
    slug: "urdu"
  },
  {
    name: "Math Class 9 Punjab Board Text Book PDF English Medium",
    slug: "english"
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
