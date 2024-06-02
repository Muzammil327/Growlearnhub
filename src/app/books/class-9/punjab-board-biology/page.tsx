import React from "react";
import { Metadata } from "next";

import Card3 from "@/src/components/card2/card3";
import ImageContainer from "@/src/components/element/image";
import BookWrapper from "@/src/app/books/BookWrapper";
import PDFViewer from "@/src/components/element/PDFViewer";
import Card2 from "@/src/components/card2/page";

import { class_Book } from "@/src/app/books/type";
import { Class9_Book } from "@/src/app/books/class-9/data";

const data = {
  title: "Class 9 Biology Book Punjab Board",
  description:
    "Here you can download Class 9 Biology Book Punjab Board in english and urdu medium. other books of class 9 punjab board available in this platform.",
  canonical: "/books/class-9/punjab-board-biology/",
  index: true,
  follow: true,
  image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
  url: "https://growlearnhub.com/books/class-9/punjab-board-biology/",
  english_medium: "1MFRZ5yO0SrrfTkAM_ewXBp_Pec4zTOA-",
  urdu_medium: "1ty3cPG8aWvjPla3xJAT4F__bLNJHKiZv",
  keywords: [
    "biology class 9",
    "biology books for class 9",
    "biology class 9 english medium",
    "9th biology english medium",
    "biology class 9 new book",
    "class 9th biology new book",
    "new book of biology 9th class",
    "9th class books urdu medium",
  ],
  medium: [
    {
      title: "9 class Biology Punjab Board English Medium Book",
      link: "/books/class-9/punjab-board-biology/english/",
      description: "",
      image: "",
    },
    {
      title: "9th class Biology Punjab Board Urdu Medium Book",
      link: "/books/class-9/punjab-board-biology/urdu/",
      description: "",
      image: "",
    },
  ],
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      b1Link="/books/"
      b2="9th class"
      b2Link="/books/class-9/"
      b3="Punjab Board Biology"
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
      <h2>Download Class 9 English Medium Biology Punjab Board</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <PDFViewer pdfUrl={data.english_medium} />

      <h3>Download Class 9 Urdu Medium Biology Punjab Board</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum,
        nesciunt vel distinctio quibusdam, saepe, ducimus aspernatur quaerat
        mollitia expedita qui magnam voluptates. Cumque recusandae, quas
        sapiente commodi eius repellat.
      </p>
      <PDFViewer pdfUrl={data.urdu_medium} />

      <div className="grid md:gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {data.medium.map((data: any) => {
          return <Card2 key={data.title} title={data.title} link={data.link} />;
        })}
      </div>
      {Class9_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} 9th class Books
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
