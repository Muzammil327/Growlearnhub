import React from "react"
import { Metadata } from "next"
import Wrapper from "@/src/components/element/Wrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import Link from "next/link"
import DataClass9Book from "@/src/app/(main)/(class)/class-9/books/DataClass9Book"

const data = {
  title:
    "9th Class Chemistry Book Pdf Download - Punjab Board (English Medium)",
  description:
    "Download the 9th class Chemistry textbook (English medium) for Punjab Board. Perfect for exam preparation and concept clarity. Available in PDF format.",
  canonical: "/class-9/books/punjab-board-chemistry/english-medium/",
  index: true,
  follow: true,
  image: "/9th/book/punjab/class-9-chemistry-book-punjab-board.webp",
  url: "https://growlearnhub.com/class-9/books/punjab-board-chemistry/english-medium/",
  keywords: [
    "chemistry class 9 punjab text book pdf",
    "class 9 chemistry book pdf punjab board",
    "9th class chemistry punjab text book",
    "chemistry book class 9 punjab board",
    "9th Class chemistry Book PDF English Medium Free Download",
    "class 9 chemistry book punjab board",
    "punjab text book chemistry 9th class pdf english medium"
  ],
  fileId_english: "1LhWG65hJibow48tOzY7L_w9gWTWfeqvE",
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
      b1="Punjab Board Chemistry"
      b1Link="/class-9/books/punjab-board-chemistry/"
      b2="English Medium"
      image={data.image}
      clist={data.clist}
    >
      <h3>Chemistry 9th Class Book English Medium PDF Download Punjab Board</h3>
      <p>
        Are you looking for a{" "}
        <strong>Class 9 chemistry book punjab board</strong>? Here, you can
        access all the books of class 9 you need for free. Our website offers a
        complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>

      <table className="relative w-full">
        <thead>
          <tr className="bg-white border-b hover:bg-slate-100">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Chapter Wise Download Chemistry Book
            </th>
            <td className="px-6 py-4"></td>
          </tr>
        </thead>
        <tbody>
          {chapterDATA.map((data: any) => {
            return (
              <tr
                className="bg-white border-b hover:bg-slate-100"
                key={data.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Chapter {data.id} Chemistry Book
                </th>
                <td className="px-6 py-4">
                  <Link href={data.link}>Download PDF English Medium</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p>
        Here, you can download Matric{" "}
        <strong>Chemistry 9th Class Book English Medium PDF </strong>
        Format. This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <DataClass9Book />
    </Wrapper>
  )
}

const chapterDATA = [
  { id: "1", link: "#" },
  { id: "2", link: "#" },
  { id: "3", link: "#" },
  { id: "4", link: "#" },
  { id: "5", link: "#" },
  { id: "6", link: "#" },
  { id: "7", link: "#" },
  { id: "8", link: "#" },
  { id: "9", link: "#" }
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
