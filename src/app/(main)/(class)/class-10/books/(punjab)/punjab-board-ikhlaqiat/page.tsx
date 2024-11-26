// import React from "react"
// import { Metadata } from "next"
// import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
// import PDFViewer from "@/src/components/elements/PDFViewer"

// const data = {
//   title: "Ikhlaqiat Class 10 Book PDF | 10th Class Punjab Text Book",
//   description:
//     "Download the official Ikhlaqiat Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
//     image: "/10th/book/punjab/class_10_ikhlaqiat_book_punjab_board.webp",
//     keywords: [
//       "ikhlaqiat class 10 punjab text book pdf",
//       "class 10 ikhlaqiat book pdf punjab board",
//       "10th class ikhlaqiat punjab text book",
//       "ikhlaqiat book class 10 punjab board",
//       "class 10 ikhlaqiat book punjab board"
//     ],
//   canonical: "/class-10/books/punjab-board-ikhlaqiat/",
//   url: "https://growlearnhub.com/class-10/books/punjab-board-ikhlaqiat/",
//   index: true,
//   follow: true,
//   fileId_urdu: "1fwK6qscOFekmeFq0XIPVeN9Ww3eBg6jF",
// }

// export default function Page() {
//   return (
//     <Simplewrapper data={data}>
//       <p>
//         Are you looking for a{" "}
//         <strong>Class 10 ikhlaqiat book punjab board</strong>? Here, you can
//         access all the books you need for free. Our website offers a complete
//         collection of books for students in Class 9, 10, 11, and 12. Whether
//         you&apos;re preparing for exams or need extra resources, we&apos;ve got
//         you covered.
//       </p>
//       <h3>Download Class 10 Ikhlaqiat Book Punjab Board</h3>
//       <p>
//         Here, you can download Matric class 10 Ikhlaqiat Text Book in PDF Format.
//         This book is officially published by Punjab Text Book Board.
//       </p>
//       <PDFViewer pdfUrl={data.fileId_urdu} />
//     </Simplewrapper>
//   )
// }

// export const metadata: Metadata = {
//   title: data.title,
//   description: data.description,
//   keywords: data.keywords,
//   openGraph: {
//     title: data.title,
//     description: data.description,
//     url: data.url,
//     images: [
//       {
//         url: data.image,
//         alt: data.title
//       }
//     ]
//   },
//   alternates: {
//     canonical: data.canonical
//   },
//   robots: {
//     index: data.index,
//     follow: data.follow,
//     googleBot: {
//       index: data.index,
//       follow: data.follow
//     }
//   },
//   twitter: {
//     title: data.title,
//     description: data.description,
//     images: {
//       url: data.image,
//       alt: data.title
//     }
//   }
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
