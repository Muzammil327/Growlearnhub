import React from "react";
import { Metadata } from "next";

import QuizWrapper from "@/src/app/(quiz)/quiz/QuizWrapper";

import QuizView from "@/src/views/quizView/page";

const data = {
  title: "Quiz Grow Learn Hub",
  description:
    "Here you download quiz of class 9 to 12 quiz in english medium and virtual university quiz of all semester available in this platform.",
  canonical: "/quiz/",
  index: true,
  follow: true,
  image: "/quiz/quiz_growlearnhub.webp",
  url: "https://growlearnhub.com/quiz/",
  keywords: [
    "growlearnhub quiz",
    "quiz",
    "class 9 quiz",
    "class 10 quiz",
    "class 11 quiz",
    "class 12 quiz",
    "vu quiz",
  ],
  link1: "/",
};

export default function page() {
  return (
    <QuizWrapper
      title={data.title}
      url={data.url}
      b1="Quiz"
      image={data.image}
      title1="Quiz"
      link1={data.link1}
    >
      <QuizView />
    </QuizWrapper>
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
