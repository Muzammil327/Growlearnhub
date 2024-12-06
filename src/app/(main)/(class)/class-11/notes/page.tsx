import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class11NotesData } from "@/src/data/class11";

const data = {
  title: "11th Class Notes | Class 11",
  description:
    "Class 11 notes providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub notes",
    "growlearnhub class 11 notes",
    "notes",
    "class 11 notes",
    "11th class notes",
    "11th class growlearnhub notes",
  ],
  image: "/11th/class_11_notes.webp",
  canonical: "/class-11/notes/",
  url: "https://www.growlearnhub.com/class-11/notes/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4">
        {Class11NotesData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-11/notes/${data.slug}`}
            />
          );
        })}
      </div>
    </SimpleWrapper>
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
        url: data.image,
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
      url: data.image,
      alt: data.title,
    },
  },
};
