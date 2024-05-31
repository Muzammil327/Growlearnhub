"use client";
import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Form from "@/src/components/element/form/page";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { vu_Book } from "@/src/app/books/type";
import { useParams } from "next/navigation";
import { class_9_quiz } from "../../data";
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

export default function Page() {
  const { chapter, books } = useParams();
  // Filter chapters based on chapter and book filters
  const filteredChapters = class_9_quiz
    .map((data) => {
      const filteredBooks = data.books.filter((book) => book.filter === books);
      return filteredBooks.flatMap((book) =>
        book.chapter.filter((chapters) => chapters.filter === chapter)
      );
    })
    .flat();
  const data1 = books.toString(); // Convert books to string
  const data2 = data1.replace(/-/g, " ");
  

  return (
    <div>
      {filteredChapters.map((datas: any) => {
        return (
          <>
            <SubHeader
              title={
                "Class 9" + " " + data2 + " " + datas.filter.replace(/-/g, " ")
              }
            />
            <Container>
              <div className="grid lg:grid-cols-11 gap-4 mb-12">
                <div className="col-span-8">
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-4">
                    <h1 className="text-2xl font-bold my-4">
                      {datas.title + ""}
                    </h1>
                  </div>
                  <PDFViewer pdfUrl={datas.fileId} />
                  <Form url={data.url} />
                </div>
                <div className="col-span-3">
                  <Sidebar title={data.title} url={data.url} />
                </div>
              </div>
            </Container>
          </>
        );
      })}
    </div>
  );
}
