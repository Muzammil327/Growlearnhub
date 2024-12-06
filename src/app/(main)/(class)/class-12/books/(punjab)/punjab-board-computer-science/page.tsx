import React from "react";
import { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import PDFViewer from "@/src/components/elements/PDFViewer";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";
const data = {
  title: "Computer Science Class 12 Book PDF | 12th Class Punjab Text Book",
  description:
    "Download the official Computer Science Class 12 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  image: "/12th/book/punjab/class_12_computer_science_book_punjab_board.webp",
  keywords: [
    "computer science class 12 punjab text book pdf",
    "class 12 computer science book pdf punjab board",
    "12th class computer science punjab text book",
    "computer science book class 12 punjab board",
    "class 12 computer science book punjab board",
  ],
  canonical: "/class-12/books/punjab-board-computer-science/",
  url: "https://www.growlearnhub.com/class-12/books/punjab-board-computer-science/",
  index: true,
  follow: true,
  fileId_english: "1o5fPLG7_lTK2sAs5smLAgJEopLTf8fsR",
  fileId_urdu: "1dSyB9KxtY59L541KRu55BmWEVbmy6rnz",
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-12/books/punjab-board-computer-science/${data.slug}-medium`}
            />
          );
        })}
      </div>
      <MutedPara>
        Are you looking for a{" "}
        <strong>Class 12 computer science book punjab board</strong>? Here, you
        can access all the books you need for free. Our website offers a
        complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </MutedPara>
      <h3>
        Download Class 12 Computer Science Book English Medium Punjab Board
      </h3>
      <MutedPara>
        Here, you can download Matric class 12 Computer Science Text Book in PDF
        Format for English Medium. This book is officially published by Punjab
        Text Book Board.
      </MutedPara>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>
        Download 12th Class Computer Science Textbook Urdu Medium Punjab Board
      </h3>
      <MutedPara>
        Here, you can download Matric class 12 Computer Science Text Book in PDF
        Format for Urdu Medium. This book is officially published by Punjab Text
        Book Board.
      </MutedPara>
      <PDFViewer pdfUrl={data.fileId_urdu} />
    </SimpleWrapper>
  );
}

const mainData = [
  {
    name: "Class 12 Computer Science Book PDF Punjab Board English Medium",
    slug: "english",
  },
  {
    name: "Computer Science Class 12 Punjab Board Text Book PDF Urdu Medium",
    slug: "urdu",
  },
];

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
