import React from "react";
import { Metadata } from "next";

import Card3 from "@/src/components/card2/card3";
import ImageContainer from "@/src/components/element/image";
import BookWrapper from "@/src/app/books/BookWrapper";

import { class_Book } from "@/src/app/books/type";
import { Class9_Book } from "@/src/app/books/class-9/data";
import Link from "next/link";

const data = {
  title: "Books Class 9",
  description:
    "Here you download books of class 9 to 12 books in english and urdu medium and virtual university books of all semester available in this platform.",
  canonical: "/books/class-9/",
  index: true,
  follow: true,
  image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
  url: "https://growlearnhub.com/books/class-9/",
  keywords: [
    "growlearnhub class 9 books",
    "class 9 books",
    "class 9 physics books",
    "class 9 chemistry books",
    "class 9 biology books",
    "class 9 math books",
    "class 9 english books",
  ],
};

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      b2="Class 9"
      b1Link="/books/"
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

      {Class9_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h2 className="text-xl font-semibold py-2">
              {data.name} Class 9 Books
            </h2>
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

      <ul>
        <span>
          Here you can access the <b>class 9 Punjab Board Notes</b>:
        </span>
        <li>
          <Link href="/notes/class-9/punjab-board-physics/">
            Class 9 Physics Book Notes
          </Link>
        </li>
        <li>
          <Link href="/notes/class-9/punjab-board-chemistry/">
            Class 9 Chemistry Book Notes
          </Link>
        </li>
        <li>
          <Link href="/notes/class-9/punjab-board-biology/">
            Class 9 Biology Book Notes
          </Link>
        </li>
        <li>
          <Link href="/notes/class-9/punjab-board-math/">
            Class 9 Math Book Notes
          </Link>
        </li>
      </ul>
      <ul>
        <span>
          Here you can access the <b>class 9 Pairing Schemes</b>:
        </span>
        <li>
          <Link href="/pairing-schemes/class-9/punjab-board-physics/">
            Class 9 Physics Book Pairing Schemes
          </Link>
        </li>
        <li>
          <Link href="/pairing-schemes/class-9/punjab-board-chemistry/">
            Class 9 Chemistry Book Pairing Schemes
          </Link>
        </li>
        <li>
          <Link href="/pairing-schemes/class-9/punjab-board-biology/">
            Class 9 Biology Book Pairing Schemes
          </Link>
        </li>
        <li>
          <Link href="/pairing-schemes/class-9/punjab-board-math/">
            Class 9 Math Book Pairing Schemes
          </Link>
        </li>
      </ul>
      <span>
        Here you can access the <b>class 9 Online Test</b>:
      </span>
      <span>
        Here you can access the <b>class 9 Past Paper</b>:
      </span>
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
