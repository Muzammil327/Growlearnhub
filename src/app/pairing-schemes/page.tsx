import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Pairing Schemes Grow Learn Hub",
  description:
    "Here you download Pairing Schemes of class 9 to 12 Pairing Schemes in english and urdu medium and virtual university Pairing Schemes of all semester available in this platform.",
  canonical: "/pairing-schemes/",
  index: true,
  follow: true,
  image: "/pairing-schemes/pairing_schemes_growlearnhub.webp",
  url: "https://growlearnhub.com/pairing-schemes/",
  keywords: [
    "growlearnhub Pairing Schemes",
    "Pairing Schemes",
    "class 9 Pairing Schemes",
    "class 10 Pairing Schemes",
    "class 11 Pairing Schemes",
    "class 12 Pairing Schemes",
  ],
  BookDatas: [
    {
      id: 0,
      title: "Class 9 Pairing Schemes",
      link: "/pairing-schemes/class-9/",
      para: "Here you can download the class 9 all Pairing Schemes of different boards.",
      image: "/pairing-schemes/class_9_pairing_schemes.webp",
    },
    {
      id: 1,
      title: "Class 10 Pairing Schemes",
      link: "/pairing-schemes/class-10/",
      para: "Here you can download the class 10 all Pairing Schemes of different boards.",
      image: "/pairing-schemes/class_10_pairing_schemes.webp",
    },
    {
      id: 2,
      title: "Class 11 Pairing Schemes",
      link: "/pairing-schemes/class-11/",
      para: "Here you can download the class 11 all Pairing Schemes of different boards.",
      image: "/pairing-schemes/class_11_pairing_schemes.webp",
    },
    {
      id: 3,
      title: "Class 12 Pairing Schemes",
      link: "/pairing-schemes/class-12/",
      para: "Here you can download the class 12 all Pairing Schemes of different boards.",
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
      b1="Pairing Schemes"
      title1="Pairing Schemes"
      image={data.image}
      link1={data.link1}
    >
      <h2>📚 Pairing Schemes Store</h2>
      <p>You can download punjab and sindh board of all Pairing Schemes.</p>
      <ul>
        <li>Physics Pairing Schemes</li>
        <li>Chemistry Pairing Schemes</li>
        <li>Biology Pairing Schemes</li>
        <li>Math Pairing Schemes</li>
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
