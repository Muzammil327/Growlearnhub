import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { CardProps } from "@/src/app/study-material/type";
import Form from "@/src/components/element/form/page";
import { Metadata } from "next";

const data = {
  title: "10th class Study Material",
  description:
    "download class 10 free study material of all books, notes, past paper and all board punjab sindh etc. available here.",
  canonical: "/study-material/10th/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/study-material/10th/",
  keywords: [
    "growlearnhub 10th class study material",
    "10th class study material",
    "study material",
    "10th class",
    "growlearnhub",
  ],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />

      <Container>
        <div className="studyMaterial">
          <div className="c1">
            <div className="col">
              {datas.map((data: CardProps) => (
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

const datas: CardProps[] = [{ id: 0, title: "Books", link: "/10th/books/" }];


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