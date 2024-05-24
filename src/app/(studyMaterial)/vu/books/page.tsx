import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { CardProps } from "@/src/app/(studyMaterial)/type";
import Form from "@/src/components/element/form/page";
import { Metadata } from "next";

const data = {
  title: "Virtual University Books",
  description:
    "All books of virtual university of all courses are avialable here in pdf format. you can download it.",
  canonical: "/vu/books/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/vu/books/",
  keywords: ["Virtual University Virtual University Books", "Books"],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />

      <Container>
        <div className="studyMateriala">
          <div className="c1">
            <div className="col">
              {punjabBook.map((data: CardProps) => (
                <Card2 key={data.id} title={data.title} link={data.link} />
              ))}
            </div>
            <Form url={data.url} />
          </div>
          <div className="c2">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}

const punjabBook: CardProps[] = [
  { id: 0, title: "Computer Science", link: "/vu/books/computer-science/" },
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
