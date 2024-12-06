import React from "react";
import { Metadata } from "next";
import PDFViewer from "@/src/components/elements/PDFViewer";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";
const data = {
  title: "Ikhlaqiat Class 10 Book PDF | 10th Class Punjab Text Book",
  description:
    "Download the official Ikhlaqiat Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  image: "/10th/book/punjab/class_10_ikhlaqiat_book_punjab_board.webp",
  keywords: [
    "ikhlaqiat class 10 punjab text book pdf",
    "class 10 ikhlaqiat book pdf punjab board",
    "10th class ikhlaqiat punjab text book",
    "ikhlaqiat book class 10 punjab board",
    "class 10 ikhlaqiat book punjab board",
  ],
  canonical: "/class-10/books/punjab-board-ikhlaqiat/",
  url: "https://growlearnhub.com/class-10/books/punjab-board-ikhlaqiat/",
  index: true,
  follow: true,
  fileId_urdu: "1fwK6qscOFekmeFq0XIPVeN9Ww3eBg6jF",
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <MutedPara>
        Are you looking for a{" "}
        <strong>Class 10 ikhlaqiat book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </MutedPara>
      <h3>Download Class 10 Ikhlaqiat Book Punjab Board</h3>
      <MutedPara>
        Here, you can download Matric class 10 Ikhlaqiat Text Book in PDF
        Format. This book is officially published by Punjab Text Book Board.
      </MutedPara>
      <PDFViewer pdfUrl={data.fileId_urdu} />
    </SimpleWrapper>
  );
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
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
};
