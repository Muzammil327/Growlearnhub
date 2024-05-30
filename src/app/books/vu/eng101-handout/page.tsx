import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { Metadata } from "next";
import { class_Book } from "@/src/app/books/type";
import Form from "@/src/components/element/form/page";
import BreadCrumb from "@/src/components/element/breadcrumb";
import PDFViewer from "@/src/components/element/PDFViewer";
import { VU_Books } from "../data";

const data = {
  title: "ENG101 Handouts English Comprehension",
  description:
    "Here you can download Handouts OF ENG101 English Comprehension of vu of all semester cs101, cs201, cs301, cs401 etc.",
  canonical: "/books/vu/eng101-handout/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/books/vu/eng101-handout/",
  keywords: [
    "growlearnhub vu books",
    "vu books",
    "vu handouts",
    "vu eng101 books",
    "vu eng101 handouts",
    "download eng101 handouts",
    "download vu eng101 handouts",
  ],
  list: [
    {
      id: 0,
      title: "Notes",
      link: "/notes/",
    },
    {
      id: 1,
      title: "Past Papers",
      link: "/past-papers/",
    },
    {
      id: 2,
      title: "Quiz",
      link: "/quiz/",
    },
    {
      id: 3,
      title: "Online Tests",
      link: "/online-tests/",
    },
    {
      id: 3,
      title: "Pairing Schemes",
      link: "/pairing-schemes/",
    },
    {
      id: 4,
      title: "Class 9 Books",
      link: "/books/class-9/",
    },
    {
      id: 5,
      title: "Class 10 Books",
      link: "/books/class-10/",
    },
    {
      id: 6,
      title: "Class 11 Books",
      link: "/books/class-11/",
    },
    {
      id: 7,
      title: "Class 12 Books",
      link: "/books/class-12/",
    },
  ],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="book">
          <div className="c1">
            <BreadCrumb
              b1="Books"
              b1Link="/books/"
              b2="vu"
              b2Link="/books/vu/"
              b3="ENG101 Handout"
            />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
              aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
              recusandae, quas sapiente commodi eius repellat.
            </p>
            {VU_Books.map((data: class_Book) => {
              return (
                <div key={data.name}>
                  <h2 className="text-xl font-semibold py-2">
                    Download ENG101 Handouts
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam dolorum, nesciunt vel distinctio quibusdam, saepe,
                    ducimus aspernatur quaerat mollitia expedita qui magnam
                    voluptates. Cumque recusandae, quas sapiente commodi eius
                    repellat.
                  </p>
                  <PDFViewer pdfUrl={"14GOV_BVtoIoE8SlNNnxDgLAvrwAMdhU4"} />

                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
                    {data.list.map((item: any) => (
                      <Card2
                        key={item.id}
                        title={item.title}
                        link={item.link}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
              aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
              recusandae, quas sapiente commodi eius repellat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
              aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
              recusandae, quas sapiente commodi eius repellat.
            </p>
            <Form url={data.url} />
          </div>
          <div className="c2">
            <Sidebar title={data.title} url={data.url} list={data.list} />
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
