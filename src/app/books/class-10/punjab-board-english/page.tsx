import React from "react";
import { Metadata } from "next";

import Card3 from "@/src/components/card2/card3";
import ImageContainer from "@/src/components/element/image";
import BookWrapper from "@/src/app/books/BookWrapper";
import PDFViewer from "@/src/components/element/PDFViewer";

import { class_Book } from "@/src/app/books/type";
import { Class10_Book } from "@/src/app/books/class-10/data";

const data = {
  title: "Class 10 English Book Punjab Board",
  description:
    "Here you can download Class 10 English Book Punjab Board in urdu medium. other books of class 10 punjab board available in this platform.",
  canonical: "/books/class-10/punjab-board-english/",
  index: true,
  follow: true,
  image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
  url: "https://growlearnhub.com/books/class-10/punjab-board-english/",
  english_medium: "1qYd3gGUAVT1UjHWvc7uDX7_kgTxlzJv_",
  keywords: [
    "growlearnhub class 10 english books",
    "growlearnhub class 10 books english",
    "class 10 english",
    "class 10 english english medium",
    "class 10 english medium",
    "class 10 english book",
    "class 10 book english",
    "download class 10 book english",
  ],
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      b1Link="/books/"
      b2="Class 10"
      b2Link="/books/class-10/"
      b3="Punjab Board English"
    >
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

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>

      <h3>Download Class 10 English Book Punjab Board</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <PDFViewer pdfUrl={data.english_medium} />

      {Class10_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 10 Books
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
              aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
              recusandae, quas sapiente commodi eius repellat.
            </p>
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