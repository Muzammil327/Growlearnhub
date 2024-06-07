import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Online Test Grow Learn Hub",
  description:
    "Here you download online test of class 9 to 12 online test in english and urdu medium and virtual university online test of all semester available in this platform.",
  canonical: "/online-test/",
  index: true,
  follow: true,
  image: "/online-tests/online_tests_growlearnhub.webp",
  url: "https://growlearnhub.com/online-test/",
  keywords: [
    "growlearnhub online test",
    "online test",
    "class 9 online test",
    "class 10 online test",
    "class 11 online test",
    "class 12 online test",
    "vu online test",
  ],
  BookDatas: [
    {
      id: 0,
      title: "Class 9 online test",
      link: "/online-tests/class-9/",
      para: "Here you can download the class 9 all online test of different boards.",
      image: "/online-tests/class_9_online_tests.webp",
    },
    {
      id: 1,
      title: "Class 10 online test",
      link: "/online-tests/class-10/",
      para: "Here you can download the class 10 all online test of different boards.",
      image: "/online-tests/class_10_online_tests.webp",
    },
    {
      id: 2,
      title: "Class 11 online test",
      link: "/online-tests/class-11/",
      para: "Here you can download the class 11 all online test of different boards.",
      image: "/online-tests/class_11_online_tests.webp",
    },
    {
      id: 3,
      title: "Class 12 online test",
      link: "/online-tests/class-12/",
      para: "Here you can download the class 12 all online test of different boards.",
      image: "/online-tests/class_12_online_tests.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Online Test"
      title1="Online Test"
      link1={data.link1}
    >
      <h2>📚 Online Test Store</h2>
      <p>You can download punjab and sindh board of all Online Test.</p>
      <ul>
        <li>Physics Online Test</li>
        <li>Chemistry Online Test</li>
        <li>Biology Online Test</li>
        <li>Math Online Test</li>
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
