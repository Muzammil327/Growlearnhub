import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Class 12 Grow Learn Hub",
  description:
    "Here you download books of class 9 to 12 books in english and urdu medium and virtual university books of all semester available in this platform.",
  canonical: "/class-12/",
  index: true,
  follow: true,
  image: "/class_12.webp",
  url: "https://growlearnhub.com/class-12/",
  keywords: ["growlearnhub books", "12th class", "class 12", "vu handout"],
  BookDatas: [
    {
      id: 0,
      title: "Class 12 Books",
      link: "/books/class-12/",
      para: "Here you can download the class 12 all books of different boards.",
      image: "/books/class_12_books.webp",
    },
    {
      id: 1,
      title: "Class 12 Notes",
      link: "/notes/class-12/",
      para: "Here you can download the class 12 all notes of different boards.",
      image: "/notes/class_11_notes.webp",
    },
    {
      id: 2,
      title: "Class 12 Past Paper",
      link: "/past-papers/class-12/",
      para: "Here you can download the class 12 all past paper of different boards.",
      image: "/past-paper/class_12_past_paper.webp",
    },
    {
      id: 3,
      title: "Class 12 Quiz",
      link: "/quiz/class-12/",
      para: "Here you can download the class 12 all quiz of different boards.",
      image: "/quiz/class_12_quiz.webp",
    },
    {
      id: 4,
      title: "Class 12 Online Tests",
      link: "/online-tests/class-12/",
      para: "Here you can download the class 12 all online tests of different boards.",
      image: "/online-tests/class_12_online_tests.webp",
    },
    {
      id: 5,
      title: "Class 12 Pairing Schemes",
      link: "/pairing-schemes/class-12/",
      para: "Here you can download the class 12 all pairing schemes of different boards.",
      image: "/pairing-schemes/class_12_pairing_schemes.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Class 12"
      title1="Class 12"
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
