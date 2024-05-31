import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { Class9_BookDatas } from "../../data";
import Form from "@/src/components/element/form/page";
import { Metadata } from "next";
import { class_Book } from "@/src/app/books/type";
import { class_9_quiz } from "./data";

const data = {
  title: "Class 9 Quiz",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/quiz/class-9/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/quiz/class-9/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid lg:grid-cols-11 gap-5 mb-12">
          <div className="col-span-8">
            {class_9_quiz.map((data: any) => {
              return (
                <div key={data.title}>
                  <h2 className="text-xl font-semibold py-2">
                    {data.title} Class 9 Quiz
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
                    {data.books.map((item: any) => (
                      <Card2
                        key={item.id}
                        title={item.title}
                        link={item.link + item.filter}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
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
