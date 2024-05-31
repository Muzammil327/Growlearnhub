import React from "react";
import { Metadata } from "next";

import ImageContainer from "@/src/components/element/image";
import BookWrapper from "@/src/app/books/BookWrapper";

import Card3 from "@/src/components/card2/card3";

const data = {
  title: "Sharp Brain Math Derivatives",
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
    { id: 0, title: "Class 9", link: "/books/class-9/" },
    { id: 1, title: "Class 10", link: "/books/class-10/" },
    { id: 2, title: "Class 11", link: "/books/class-11/" },
    { id: 3, title: "Class 12", link: "/books/class-12/" },
    { id: 4, title: "virtual University", link: "/books/vu/" },
  ],
};

export default function page() {
  return (
    <BookWrapper title={data.title} url={data.url} b1="Sharp Brain">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <ImageContainer
        image={data.image}
        title={data.title}
        class="my-4"
        height={720}
        width={1280}
      />
      <h2>Sharp Brain</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      {Class9_Book.map((data: any) => {
        return (
          <div key={data.name}>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
              {data.list.map((item: any) => (
                <Card3 key={item.id} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        );
      })}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
    </BookWrapper>
  );
}

export const Class9_Book = [
  {
    list: [
      {
        title: "Derivatives: Step 1",
        link: "/sharp-brain/biology/derivatives/step-1/",
      },
      {
        title: "Derivatives: Step 2",
        link: "/sharp-brain/biology/derivatives/step-2/",
      },
    ],
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
