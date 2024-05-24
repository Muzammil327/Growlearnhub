import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { BookDatas } from "../data";
import { Metadata } from "next";
import { Books } from "@/src/app/(books)/type";

const data = {
  title: "Books Grow Learn Hub",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/books/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/books/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid lg:grid-cols-11 gap-2 mb-12">
          <div className="col-span-8">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
              {BookDatas.map((data: Books) => (
                <Card2 key={data.id} title={data.title} link={data.link} />
              ))}
            </div>
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
