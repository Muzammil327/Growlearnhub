import React from "react";
import { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import PDFViewer from "@/src/components/elements/PDFViewer";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";
const data = {
  title: "Chemistry 10th Class Book PDF | Punjab Board Free Download",
  description:
    "Download Chemistry 10th class book PDFs for both English and Urdu Medium, Punjab Board. Free access to the latest textbooks, following the updated curriculum for Class 10.",
  image: "/10th/book/punjab/class_10_chemistry_book_punjab_board.webp",
  keywords: [
    "chemistry 10th book pdf",
    "chemistry class 10 punjab text book pdf",
    "10th chemistry book pdf",
    "chemistry class 10th book pdf",
    "10 chemistry book pdf",
    "chemistry class 10 book pdf",
    "chemistry 10 class book",
    "10th class chemistry book pdf",
    "class 10 chemistry book",
    "chemistry 10th class book ",
  ],
  canonical: "/class-10/books/punjab-board-chemistry/",
  url: "https://growlearnhub.com/class-10/books/punjab-board-chemistry/",
  index: true,
  follow: true,
  fileId_english: "1LhWG65hJibow48tOzY7L_w9gWTWfeqvE",
  fileId_urdu: "14GOV_BVtoIoE8SlNNnxDgLAvrwAMdhU4",
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-10 grid grid-cols-1 gap-4">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-10/books/punjab-board-chemistry/${data.slug}-medium`}
            />
          );
        })}
      </div>
      <MutedPara>
        Are you looking for a{" "}
        <strong>10th Class chemistry pdf book punjab board</strong>? Here, you
        can access all the books you need for free. Our website offers a
        complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </MutedPara>
      <h3>Download Chemistry class 10 Book English Medium Punjab Board</h3>
      <MutedPara>
        Here, you can download Matric class 10 Chemistry Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </MutedPara>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 10th Class Chemistry Textbook Urdu Medium Punjab Board</h3>
      <MutedPara>
        Here, you can download Matric class 10 Chemistry Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </MutedPara>
      <PDFViewer pdfUrl={data.fileId_urdu} />
    </SimpleWrapper>
  );
}

const mainData = [
  {
    name: "Class 10 Chemistry Book PDF Punjab Board English Medium",
    slug: "english",
  },
  {
    name: "10th Chemistry Book Punjab Board Text Book PDF Urdu Medium",
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
