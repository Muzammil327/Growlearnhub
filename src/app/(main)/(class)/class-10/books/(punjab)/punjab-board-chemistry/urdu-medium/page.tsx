import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";

const data = {
  title: "Urdu Medium Chemistry Class 10 Book PDF",
  description:
    "Download the official Chemistry Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.",
  keywords: [],
  image: "/10th/book/punjab/class_10_chemistry_book_punjab_board.webp",
  canonical: "/class-10/books/punjab-board-chemistry/urdu-medium/",
  url: "https://www.growlearnhub.com/class-10/books/punjab-board-chemistry/urdu-medium/",
  index: true,
  follow: true,
};

export default function Page() {
  return <SimpleWrapper data={data}></SimpleWrapper>;
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
