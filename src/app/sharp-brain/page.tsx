import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";
import Accordation from "@/src/components/element/accordion";

const data = {
  title: "Sharp Brain With Grow Learn Hub",
  description:
    "Here you download Pairing Schemes of class 9 to 12 Pairing Schemes in english and urdu medium and virtual university Pairing Schemes of all semester available in this platform.",
  canonical: "/sharp-brain/",
  index: true,
  follow: true,
  image: "/sharp-brain/sharp_brain_growlearnhub.webp",
  url: "https://growlearnhub.com/sharp-brain/",
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
      title: "Physics",
      link: "/sharp-brain/physics/",
      para: "Here you can access the topic wise physics books full concepts with mind map, question and mcqs.",
      image: "/sharp-brain/physics_sharp_brain.webp",
    },
    {
      id: 1,
      title: "Chemistry",
      link: "/sharp-brain/chemistry/",
      para: "Here you can access the topic wise chemistry books full concepts with mind map, question and mcqs.",
      image: "/sharp-brain/chemistry_sharp_brain.webp",
    },
    {
      id: 2,
      title: "Biology",
      link: "/sharp-brain/biology/",
      para: "Here you can access the topic wise biology books full concepts with mind map, question and mcqs.",
      image: "/sharp-brain/biology_sharp_brain.webp",
    },
    {
      id: 3,
      title: "Math",
      link: "/sharp-brain/math/",
      para: "Here you can access the topic wise math books full concepts with mind map, question and mcqs.",
      image: "/sharp-brain/math_sharp_brain.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Sharp Brain"
      title1="Sharp Brain"
      link1={data.link1}
    >
      <h2>📚 Master Subjects Store</h2>
      
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
