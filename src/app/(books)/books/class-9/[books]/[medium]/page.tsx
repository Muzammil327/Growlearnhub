import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Form from "@/src/components/element/form/page";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { vu_Book } from "@/src/app/(books)/type";
import { class_9_book } from "../../data";
import PDFViewer from "@/src/components/element/PDFViewer";

const data = {
  title: "Class 9th Punjab Board Biology Quiz",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/quiz/class-9/punjab-board-biology/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/quiz/class-9/punjab-board-biology/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function Page({
  params,
}: {
  params: {
    books: string;
    medium: string;
  };
}) {
  // Filter chapters based on chapter and book filters
  const filteredChapters = class_9_book
    .map((data) => {
      const filteredBooks = data.books.filter(
        (book) => book.filter === params.books
      );
      return filteredBooks.flatMap((book) =>
        book.medium.filter((mediums) => mediums.filter === params.medium)
      );
    })
    .flat();
  const data1 = params.books.toString(); // Convert books to string
  const data2 = data1.replace(/-/g, " ");

  return (
    <div>
      {filteredChapters.map((datas: any) => {
        return (
          <>
            <SubHeader
              title={
                "Class 9" +
                " " +
                data2 +
                " " +
                datas.filter.replace(/-/g, " ") +
                " " +
                "Medium"
              }
            />
            <Container>
              <div className="grid lg:grid-cols-11 gap-4 mb-12">
                <div className="col-span-8">
                  <div className=" my-4">
                    <h2 className="text-2xl font-bold my-4">
                      {"Class 9" +
                        " " +
                        data2 +
                        " " +
                        datas.filter.replace(/-/g, " ") +
                        " " +
                        "Medium"}{" "}
                    </h2>
                  </div>
                  <PDFViewer pdfUrl={datas.fileId} />
                  <Form url={data.url} />
                </div>
                <div className="col-span-3">
                  <Sidebar
                    title={data.title}
                    url={data.url}
                    list={datas.list}
                  />
                </div>
              </div>
            </Container>
          </>
        );
      })}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { books: string; medium: string };
}) {
  const slug = params.books;
  const slug2 = params.medium;

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let textWithoutHyphens = slug.replace(/-/g, " ");
  let textWithoutHyphens2 = slug2.replace(/-/g, " ");

  const title = capitalize(textWithoutHyphens);
  const title3 = capitalize(textWithoutHyphens2);
  const title2 =
    "Class 9" + " " + title + " " + "Book" + " " + title3 + " " + "Medium";
  return {
    title: title2,
    // description: post?.data.para,
    // keywords: data.keywords,
    alternates: {
      canonical: `books/class-9/${slug}/${slug2}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: title2,
      //   // description: post?.data.para,
      url: `books/class-9/${slug}/${slug2}`,
      //   images: [
      //     {
      //       // url: data.image,
      alt: title2,
      //     },
      //   ],
    },
    twitter: {
      title: title2,
      // description: post?.data.para,
      images: {
        // url: data.image,
        alt: title2,
      },
    },
  };
}
