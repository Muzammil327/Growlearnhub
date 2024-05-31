import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Class 9 Grow Learn Hub",
  description:
    "Here you download books of class 9 to 12 books in english and urdu medium and virtual university books of all semester available in this platform.",
  canonical: "/class-9/",
  index: true,
  follow: true,
  image: "/books/books_growlearnhub.webp",
  url: "https://growlearnhub.com/class-9/",
  keywords: [
    "growlearnhub books",
    "books",
    "class 9 books",
    "class 10 books",
    "class 11 books",
    "class 12 books",
    "vu handout",
  ],
  BookDatas: [
    {
      id: 0,
      title: "Class 9 Books",
      link: "/books/class-9/",
      para: "Here you can download the class 9 all books of different boards.",
      image: "/books/class_9_books.webp",
    },
    {
      id: 1,
      title: "Class 10 Books",
      link: "/books/class-10/",
      para: "Here you can download the class 10 all books of different boards.",
      image: "/books/class_10_books.webp",
    },
    {
      id: 2,
      title: "Class 11 Books",
      link: "/books/class-11/",
      para: "Here you can download the class 11 all books of different boards.",
      image: "/books/class_11_books.webp",
    },
    {
      id: 3,
      title: "Class 12 Books",
      link: "/books/class-12/",
      para: "Here you can download the class 12 all books of different boards.",
      image: "/books/class_12_books.webp",
    },
    {
      id: 4,
      title: "virtual University Handouts",
      link: "/books/vu/",
      para: "Here you can download the virtual university all semester books.",
      image: "/books/vu_handouts.webp",
    },
    {
      id: 5,
      title: "CA Books",
      link: "/books/ca/",
      para: "Here you can download the ca books of all levels. ",
      image: "/books/ca_books.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      title1="Book"
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
