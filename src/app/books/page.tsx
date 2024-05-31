import React from "react";
import { Metadata } from "next";

import Card2 from "@/src/components/card2/page";
import BookWrapper from "@/src/app/books/BookWrapper";

import { Books } from "@/src/app/books/type";

const data = {
  title: "Books Grow Learn Hub",
  description:
    "Here you download books of class 9 to 12 books in english and urdu medium and virtual university books of all semester available in this platform.",
  canonical: "/books/",
  index: true,
  follow: true,
  image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
  url: "https://growlearnhub.com/books/",
  keywords: [
    "growlearnhub books",
    "books",
    "class 9 books",
    "class 10 books",
    "class 11 books",
    "class 12 books",
    "vu handout",
  ],
  BookDatas: [
    {
      id: 0,
      title: "Class 9",
      link: "/books/class-9/",
      para: "Here you can download the class 9 all books of different boards.",
      image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
    },
    {
      id: 1,
      title: "Class 10",
      link: "/books/class-10/",
      para: "Here you can download the class 10 all books of different boards.",
      image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
    },
    {
      id: 2,
      title: "Class 11",
      link: "/books/class-11/",
      para: "Here you can download the class 11 all books of different boards.",
      image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
    },
    {
      id: 3,
      title: "Class 12",
      link: "/books/class-12/",
      para: "Here you can download the class 12 all books of different boards.",
      image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
    },
    {
      id: 4,
      title: "virtual University",
      link: "/books/vu/",
      para: "Here you can download the virtual university all semester books.",
      image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
    },
  ],
  link1: "/",
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      title1="Book"
      image={data.image}
      link1={data.link1}
    >
      <h2>📚 Books Store</h2>
      {/* <p>
        Loreunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.m ipsum dolor sit amet consectetur
        adipisicing elit. Ipsam dolorum, nesci
      </p> */}
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
