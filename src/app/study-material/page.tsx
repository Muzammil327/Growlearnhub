import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Form from "@/src/components/element/form/page";
import { CardProps } from "@/src/app/study-material/type";
import { Metadata } from "next";

const data = {
  title: "Study Materials Grow Learn Hub",
  description:
    "download free study material of class 9, class 10, class 11 and class 12 and virtual university of all books available here.",
  canonical: "/study-material/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/study-material/",
  keywords: ["growlearnhub Study Materials", "Study Materials"],
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

const datas: CardProps[] = [
  { id: 0, title: "Class 9", link: "/study-material/9th/" },
  { id: 1, title: "Class 10", link: "/study-material/10th/" },
  { id: 2, title: "Class 11", link: "/study-material/11th/" },
  { id: 3, title: "Class 12", link: "/study-material/12th/" },
  { id: 4, title: "virtual University", link: "/study-material/vu/" },
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
