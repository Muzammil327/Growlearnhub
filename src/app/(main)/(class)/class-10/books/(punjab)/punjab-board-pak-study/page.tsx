import React from "react";
import { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import PDFViewer from "@/src/components/elements/PDFViewer";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";
const data = {
  title: "Pak Study Class 10 Book PDF | 10th Class Punjab Text Book",
  description:
    "Download the official Pak Study Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  image: "/10th/book/punjab/class_10_pak_study_book_punjab_board.webp",
  keywords: [
    "pak study class 10 punjab text book pdf",
    "class 10 pak study book pdf punjab board",
    "10th class pak study punjab text book",
    "pak study book class 10 punjab board",
    "class 10 pak study book punjab board",
  ],
  canonical: "/class-10/books/punjab-board-pak-study/",
  url: "https://growlearnhub.com/class-10/books/punjab-board-pak-study/",
  index: true,
  follow: true,
  fileId_english: "1RKP3Z62EpOE6fY4C7i0eCdDSYZcB38TE",
  fileId_urdu: "1H4DK2mlhoPcIAb7PywX0-5PWcqNr7VqU",
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
              link={`class-10/books/punjab-board-pak-study/${data.slug}-medium`}
            />
          );
        })}
      </div>
      <MutedPara>
        Are you looking for a{" "}
        <strong>Class 10 pak study book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </MutedPara>
      <h3>Download Class 10 Pak Study Book English Medium Punjab Board</h3>
      <MutedPara>
        Here, you can download Matric class 10 Pak Study Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </MutedPara>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 10th Class Pak Study Textbook Urdu Medium Punjab Board</h3>
      <MutedPara>
        Here, you can download Matric class 10 Pak Study Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </MutedPara>
      <PDFViewer pdfUrl={data.fileId_urdu} />
    </SimpleWrapper>
  );
}

const mainData = [
  {
    name: "Class 10 Pak Study Book PDF Punjab Board English Medium",
    slug: "english",
  },
  {
    name: "Pak Study Class 10 Punjab Board Text Book PDF Urdu Medium",
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
