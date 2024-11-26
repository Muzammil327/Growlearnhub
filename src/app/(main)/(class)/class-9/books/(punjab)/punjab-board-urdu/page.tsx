// import React from "react"
// import { Metadata } from "next"
// import PDFViewer from "@/src/components/elements/PDFViewer"
// import Simplewrapper from "@/src/components/wrapper/Simplewrapper"

// const data = {
//   title: "Urdu Class 9 Book PDF | 9th Class Punjab Text Book",
//   description:
//     "Download the official Urdu Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
//   image: "/9th/book/punjab/class_9_urdu_book_punjab_board.webp",
//   keywords: [
//     "urdu class 9 punjab text book pdf",
//     "class 9 urdu book pdf punjab board",
//     "9th class urdu punjab text book",
//     "urdu book class 9 punjab board",
//     "class 9 urdu book punjab board"
//   ],
//   canonical: "/class-9/books/punjab-board-urdu/",
//   url: "https://growlearnhub.com/class-9/books/punjab-board-urdu/",
//   index: true,
//   follow: true,
//   fileId_urdu: "1OIiCbYItblJQN0RGgo5Qjv6HSNJXrDQv"
// }

// export default function Page() {
//   return (
//     <Simplewrapper data={data}>
//       <p>
//         Are you looking for a <strong>Class 9 urdu book punjab board</strong>?
//         Here, you can access all the books you need for free. Our website offers
//         a complete collection of books for students in Class 9, 10, 11, and 12.
//         Whether you&apos;re preparing for exams or need extra resources,
//         we&apos;ve got you covered.
//       </p>
//       <h3>Download Class 9 Urdu Book Punjab Board</h3>
//       <p>
//         Here, you can download Matric class 9 Urdu Text Book in PDF Format. This
//         book is officially published by Punjab Text Book Board.
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
