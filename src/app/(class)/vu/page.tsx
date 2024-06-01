import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "VU Grow Learn Hub",
  description:
    "Here you download books of class 9 to 12 books in english and urdu medium and virtual university books of all semester available in this platform.",
  canonical: "/vu/",
  index: true,
  follow: true,
  image: "/vu.webp",
  url: "https://growlearnhub.com/vu/",
  keywords: ["growlearnhub books", "12th class", "vu", "vu handout"],
  BookDatas: [
    {
      id: 0,
      title: "VU Handouts",
      link: "/books/vu/",
      para: "Here you can download the vu all Handouts of different boards.",
      image: "/books/vu_handouts.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="VU"
      title1="VU"
      image={data.image}
      link1={data.link1}
    >
      <h2>📚 Books Store</h2>
      <p>You can download punjab and sindh board of all book.</p>
      <ul>
        <li>Physics Books</li>
        <li>Chemistry Books</li>
        <li>Biology Books</li>
        <li>Math Books</li>
        <li>General Math Books</li>
        <li>Urdu Books</li>
        <li>English Books</li>
        <li>Islamiat Books</li>
        <li>Pak Study Books</li>
        <li>Computer Science Books</li>
        <li>Economics Books</li>
        <li>Tarjuma tul Quran Books</li>
        <li>Ikhlaqiat Books</li>
      </ul>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {data.BookDatas.map((data: Books) => (
          <Card2
            key={data.id}
            title={data.title}
            link={data.link}
            para={data.para}
            image={data.image}
          />
        ))}
      </div>

      <h2>Class 9 to 12</h2>
      <Accordation
        data={[
          {
            title: "Comprehensive Study Materials",
            para: "Detailed notes, summaries, and explanations for every chapter.",
          },
          {
            title: "Practice Papers and Quizzes",
            para: "Regular practice tests to evaluate your understanding and track your progress.",
          },
          {
            title: "Subject-Specific Resources",
            para: "In-depth study materials for Physics, Chemistry, Biology, Mathematics, and Commerce.",
          },
          {
            title: "Exam Preparation Guides",
            para: "Strategies and tips for excelling in board exams and entrance tests like JEE, NEET, and SAT.",
          },
        ]}
      />
    </BookWrapper>
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
        url: "https://nextjs.org/og.png",
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
      url: "https://nextjs.org/og.png",
      alt: data.title,
    },
  },
};
