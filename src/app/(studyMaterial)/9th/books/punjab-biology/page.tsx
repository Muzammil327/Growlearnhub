import React from "react";
import type { Metadata } from "next";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Form from "@/src/components/element/form/page";
import Image from "next/image";
import Card2 from "@/src/components/card2/page";

const data = {
  title: "Download Punjab Board Biology Book",
  description:
    "Free download the cs201 book of vu introducing to programming books, all other books of vu on computer science and other fields are available. Download NOW.",
  canonical: "/vu/books/cs-201/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/vu/books/cs-201/",
  keywords: ["cs201", "Introducing to Programming", "vu cs201"],
};

const image = "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp";

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid md:grid-cols-7 mb-28 gap-6">
          <div className="md:col-span-5">
            <div className="img">
              <Image
                src={image}
                alt={data.title}
                title={data.title}
                height={1280}
                className="h-auto w-full"
                width={720}
                priority
              />
            </div>
            <h2 className="text-xl font-semibold py-3">
              Download Punjab Board Biology Book
            </h2>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Book Name</td>
                    <td className="px-6 py-4">Biology</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Board Name</td>
                    <td className="px-6 py-4">Punjab Board</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Catgeory</td>
                    <td className="px-6 py-4">Class 9</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-10 mt-4">
              {punjabBook.map(
                (
                  data // Changed 'data: any' to 'item: any'
                ) => (
                  <Card2 key={data.id} title={data.title} link={data.link} />
                )
              )}
            </div>
            <Form url={data.url} />
          </div>

          <div className="md:col-span-2">
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
        url: `${image}`,
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
      url: `${image}`,
      alt: data.title,
    },
  },
};

const punjabBook = [
  { id: 0, title: "English Medium Books", link: "/9th/books/punjab-board-biology/english/" },
  { id: 1, title: "Urdu Medium Books", link: "/9th/books/punjab-board-biology/urdu/" },
];
