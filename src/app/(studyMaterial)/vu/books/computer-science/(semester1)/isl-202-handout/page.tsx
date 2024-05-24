import React from "react";
import type { Metadata } from "next";
import BookPresentLayout from "@/src/components/books/bookPresentLayot";

const data = {
  title: "Download ISL-202 Islamic Studies Handout",
  description:
    "Free download the isl202 handout of vu Islamic Studies handout, all other handout of vu on computer science and other fields are available. Download NOW.",
  canonical: "/vu/books/computer-science/isl-202-handout/",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/vu/books/computer-science/isl-202-handout/",
  keywords: [
    "isl202",
    "Islamic Studies",
    "vu isl202",
    "isl202 Islamic Studies",
  ],
  image: "/vu/book/isl202/Download-ISL-202-Islamic-Studies-Handout.webp",
  fileId: "/vu/book/isl202/Download-ISL-202-Islamic-Studies-Handout-pdf.pdf",
  fileName: "ISL-202-VU-Islamic-Studies-handout.pdf",
  heading2: "Download ISL-202 Islamic Studies Handout",
  buttontext: "Download ISL-202 Islamic Studies Handout",
  tabletd1: ["Handout Name", "ISL-202 Islamic Studies"],
  tabletd2: ["University Name", "Virtual University"],
  tabletd3: ["Catgeory", "BS Computer Science"],
  b1: "Computer Science",
  b1Link: "/vu/books/computer-science/",
  b2: "NG-101 English Comprehension Handout",
};

export default function page() {
  return (
    <>
      <BookPresentLayout data={data} />
    </>
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
        url: `${data.image}`,
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
      url: `${data.image}`,
      alt: data.title,
    },
  },
};
