"use client";
import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Form from "@/src/components/element/form/page";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { vu_Book } from "@/src/app/(books)/type";
import { useParams } from "next/navigation";
import { class_9_quiz } from "../data";

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
  const { books } = useParams();

  const filteredBooks = class_9_quiz.map((data) => {
    return data.books.filter((book) => {
      return book.filter === books;
    });
  });

  return (
    <div>
      {filteredBooks.map((datas: any) => {
        return (
          <>
            {datas.map((datas: any) => {
              return (
                <>
                  <SubHeader
                    title={
                      "Class 9" +
                      " " +
                      datas.filter.replace(/-/g, " ") +
                      " " +
                      "Quiz"
                    }
                  />
                  <Container>
                    <div className="grid lg:grid-cols-11 gap-4 mb-12">
                      <div className="col-span-8">
                        <h1 className="text-2xl font-bold my-4">
                          {"Class 9" +
                            " " +
                            datas.filter.replace(/-/g, " ") +
                            " " +
                            "Quiz"}
                        </h1>
                        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-4">
                          {datas.chapter.map((item: any) => (
                            <Card2
                              key={item.id}
                              title={item.title}
                              link={item.link + item.filter}
                            />
                          ))}
                        </div>
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
          </>
        );
      })}
    </div>
  );
}
