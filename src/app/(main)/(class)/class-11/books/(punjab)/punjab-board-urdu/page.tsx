import React from "react";
import { Metadata } from "next";
import PDFViewer from "@/src/components/elements/PDFViewer";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";
const data = {
  title: "Urdu Class 11 Book PDF | 11th Class Punjab Text Book",
  description:
    "Download the official Urdu Class 11 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  image: "/11th/book/punjab/class_11_urdu_book_punjab_board.webp",
  keywords: [
    "urdu class 11 punjab text book pdf",
    "class 11 urdu book pdf punjab board",
    "11th class urdu punjab text book",
    "urdu book class 11 punjab board",
    "class 11 urdu book punjab board",
  ],
  canonical: "/class-11/books/punjab-board-urdu/",
  url: "https://growlearnhub.com/class-11/books/punjab-board-urdu/",
  index: true,
  follow: true,
  fileId_urdu: "1OIiCbYItblJQN0RGgo5Qjv6HSNJXrDQv",
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <MutedPara>
        Are you looking for a <strong>Class 11 urdu book punjab board</strong>?
        Here, you can access all the books you need for free. Our website offers
        a complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </MutedPara>
      <h3>Download Class 11 Urdu Book Punjab Board</h3>
      <MutedPara>
        Here, you can download Matric class 11 Urdu Text Book in PDF Format.
        This book is officially published by Punjab Text Book Board.
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
