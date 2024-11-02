import React from "react"
import { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "Class 9 Punjab Board Computer Science Books PDF Download",
  description: "",
  canonical: "/class-9/books/punjab-board-computer science/",
  index: true,
  follow: true,
  image: "/book_point/class_9/class_9_punjab_board_computer_science_book.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-computer science/",
  keywords: [
    "computer science class 9 punjab text book pdf",
    "class 9 computer science book pdf punjab board",
    "9th class computer science punjab text book",
    "computer science book class 9 punjab board",
    "class 9 computer science book punjab board"
  ],

  fileId_english: "1o5fPLG7_lTK2sAs5smLAgJEopLTf8fsR",
  fileId_urdu: "1dSyB9KxtY59L541KRu55BmWEVbmy6rnz",
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9/" },
    { title: "Book", link: "/class-9/books/" },
    { title: "Punjab Board Computer Science" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-10">
        <p className="p5">
          Are you looking for a{" "}
          <strong>Class 9 chemistry book punjab board</strong>? Here, you can
          access all the books you need for free. Our website offers a complete
          collection of books for students in Class 9, 10, 11, and 12. Whether
          you&apos;re preparing for exams or need extra resources, we&apos;ve
          got you covered.
        </p>
        {mainData.map((data: { name: string; slug: string }) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/books/punjab-board-chemistry/${data.slug}-medium/`}
            />
          )
        })}
      </div>

      <Heading2 variant="black">
        Download Class 9 Chemistry Book English Medium Punjab Board
      </Heading2>
      <p className="p5">
        Here, you can download Matric class 9 Chemistry Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <Heading2 variant="black">
        Download 9th Class Chemistry Textbook Urdu Medium Punjab Board
      </Heading2>
      <p className="p5">
        Here, you can download Matric class 9 Chemistry Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
    </SimpleWrapper>
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
