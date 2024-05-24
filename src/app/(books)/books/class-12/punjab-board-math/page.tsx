import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Form from "@/src/components/element/form/page";
import { vu_Book } from "../../../type";
import { Metadata } from "next";

const data = {
  title: "Class 9th Punjab Board Biology Books",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/study-material/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/study-material/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid lg:grid-cols-11 gap-2 mb-12">
          <div className="col-span-8">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-2">
              {punjabBoard_Medium.map((data: vu_Book) => {
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

export const punjabBoard_Medium: vu_Book[] = [
  {
    id: 0,
    title: "English Medium Books",
    link: "/9th/books/punjab-board-biology/english/",
  },
  {
    id: 1,
    title: "Urdu Medium Books",
    link: "/9th/books/punjab-board-biology/urdu/",
  },
];

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
