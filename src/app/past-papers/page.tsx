import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Past Paper Grow Learn Hub",
  description:
    "Here you download past paper of class 9 to 12 past paper in english and urdu medium and virtual university past paper of all semester available in this platform.",
  canonical: "/past-paper/",
  index: true,
  follow: true,
  image: "/past-paper/past_paper_growlearnhub.webp",
  url: "https://growlearnhub.com/past-paper/",
  keywords: [
    "growlearnhub past paper",
    "past paper",
    "class 9 past paper",
    "class 10 past paper",
    "class 11 past paper",
    "class 12 past paper",
    "vu past paper",
  ],
  BookDatas: [
    {
      id: 0,
      title: "Class 9 Past Paper",
      link: "/past-paper/class-9/",
      para: "Here you can download the class 9 all past paper of different boards.",
      image: "/past-paper/class_9_past_paper.webp",
    },
    {
      id: 1,
      title: "Class 10 Past Paper",
      link: "/past-paper/class-10/",
      para: "Here you can download the class 10 all past paper of different boards.",
      image: "/past-paper/class_10_past_paper.webp",
    },
    {
      id: 2,
      title: "Class 11 Past Paper",
      link: "/past-paper/class-11/",
      para: "Here you can download the class 11 all past paper of different boards.",
      image: "/past-paper/class_11_past_paper.webp",
    },
    {
      id: 3,
      title: "Class 12 Past Paper",
      link: "/past-paper/class-12/",
      para: "Here you can download the class 12 all past paper of different boards.",
      image: "/past-paper/class_12_past_paper.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Past Paper"
      title1="Past Paper"
      link1={data.link1}
    >
      <h2>📚 Past Paper Store</h2>
      <p>You can download punjab and sindh board of all past paper.</p>
      <ul>
        <li>Physics Past Paper</li>
        <li>Chemistry Past Paper</li>
        <li>Biology Past Paper</li>
        <li>Math Past Paper</li>
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
