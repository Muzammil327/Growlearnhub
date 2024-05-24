import React from "react";
import type { Metadata } from "next";
import BookPresentLayout from "@/src/components/books/bookPresentLayot";

const data = {
  title: "Download ETH-202 Ethics Handout",
  description:
    "Free download the eth202 handout of vu Ethics handout, all other handout of vu on computer science and other fields are available. Download NOW.",
  canonical: "/vu/books/computer-science/eth-202-handout/",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/vu/books/computer-science/eth-202-handout/",
  keywords: ["eth202", "Ethics", "vu eth202", "eth202 Ethics"],
  image: "/vu/book/eth202/Download-ETH-202-Ethics-Handout.webp",
  fileId: "/vu/book/eth202/Download-ETH-202-Ethics-Handout-pdf.pdf",
  fileName: "ETH-202-VU-Ethics-handout.pdf",
  heading2: "Download ETH-202 Ethics Handout",
  buttontext: "Download ETH-202 Ethics Handout",
  tabletd1: ["Handout Name", "ETH-202 Ethics"],
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
