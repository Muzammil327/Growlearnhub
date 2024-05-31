import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Form from "@/src/components/element/form/page";
import { vu_Book } from "../../../type";
import { Metadata } from "next";

const data = {
  title: "Class 9th Punjab Board Biology Quiz",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/quiz/class-9/punjab-board-biology/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/quiz/class-9/punjab-board-biology/",
  keywords: ["growlearnhub quiz", "quiz"],
};

const punjabBoard: vu_Book[] = [
  {
    id: 0,
    title: "Chapter 1: Introduction to Biology",
    link: "/quiz/class-9/punjab-board-biology/chapter-1/",
  },
  {
    id: 1,
    title: "Chapter 2: Solving A Biological Problem",
    link: "/quiz/class-9/punjab-board-biology/chapter-2/",
  },
  {
    id: 2,
    title: "Chapter 3: Biodiversity",
    link: "/quiz/class-9/punjab-board-biology/chapter-3/",
  },
  {
    id: 3,
    title: "Chapter 4: Cells And Tissues",
    link: "/quiz/class-9/punjab-board-biology/chapter-4/",
  },
  {
    id: 4,
    title: "Chapter 5: Cells And Tissues",
    link: "/quiz/class-9/punjab-board-biology/chapter-5/",
  },
  {
    id: 5,
    title: "Chapter 6: Enzymes",
    link: "/quiz/class-9/punjab-board-biology/chapter-6/",
  },
  {
    id: 6,
    title: "Chapter 7: Bioenergetics",
    link: "/quiz/class-9/punjab-board-biology/chapter-7/",
  },
  {
    id: 7,
    title: "Chapter 8: Nutrition",
    link: "/quiz/class-9/punjab-board-biology/chapter-8/",
  },
  {
    id: 8,
    title: "Chapter 9: Transport",
    link: "/quiz/class-9/punjab-board-biology/chapter-9/",
  },
];

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid lg:grid-cols-11 gap-4 mb-12">
          <div className="col-span-8">
          <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
              {punjabBoard.map((data: vu_Book) => {
                return (
                  <Card2 key={data.id} title={data.title} link={data.link} />
                );
              })}
            </div>
            <Form url={data.url} />
          </div>
          <div className="col-span-3">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
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
