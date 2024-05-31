import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Notes Grow Learn Hub",
  description:
    "Here you download notes of class 9 to 12 books in english medium and virtual university notes of all semester available in this platform.",
  canonical: "/notes/",
  index: true,
  follow: true,
  image: "/notes/notes_growlearnhub.webp",
  url: "https://growlearnhub.com/notes/",
  keywords: [
    "growlearnhub notes",
    "notes",
    "class 9 notes",
    "class 10 notes",
    "class 11 notes",
    "class 12 notes",
    "vu notes",
  ],
  BookDatas: [
    {
      id: 0,
      title: "Class 9 Notes",
      link: "/notes/class-9/",
      para: "Here you can download the class 9 all notes of different boards.",
      image: "/notes/class_9_notes.webp",
    },
    {
      id: 1,
      title: "Class 10 Notes",
      link: "/notes/class-10/",
      para: "Here you can download the class 10 all notes of different boards.",
      image: "/notes/class_10_notes.webp",
    },
    {
      id: 2,
      title: "Class 11 Notes",
      link: "/notes/class-11/",
      para: "Here you can download the class 11 all notes of different boards.",
      image: "/notes/class_11_notes.webp",
    },
    {
      id: 3,
      title: "Class 12 Notes",
      link: "/notes/class-12/",
      para: "Here you can download the class 12 all notes of different boards.",
      image: "/notes/class_12_notes.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Notes"
      title1="Notes"
      image={data.image}
      link1={data.link1}
    >
      <h2>📚 Notes Store</h2>
      <p>You can download punjab and sindh board of all notes.</p>
      <ul>
        <li>Physics Notes</li>
        <li>Chemistry Notes</li>
        <li>Biology Notes</li>
        <li>Math Notes</li>
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
