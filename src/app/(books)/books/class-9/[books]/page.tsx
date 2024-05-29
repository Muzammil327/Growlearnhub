import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Form from "@/src/components/element/form/page";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { class_9_book } from "../data";

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

export default function Page({ params }: { params: { books: string } }) {
  const filteredBooks = class_9_book.map((data: any) => {
    return data.books.filter((book: any) => {
      return book.filter === params.books;
    });
  });

  return (
    <>
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
                      "Book"
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
                            "Book"}
                        </h1>
                        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-4">
                          {datas.medium.map((item: any) => (
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
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { books: string };
}) {
  const slug = params.books;

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let textWithoutHyphens = slug.replace(/-/g, " ");

  const title = capitalize(textWithoutHyphens);
  const title2 = "Class 9" + " " + title + " " + "Book";
  return {
    title: title2,
    // description: post?.data.para,
    // keywords: data.keywords,
    alternates: {
      canonical: `books/class-9/${slug}`,
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
      url: `books/class-9/${slug}`,
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
