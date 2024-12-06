import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class9NotesData } from "@/src/data/class9";

const data = {
  title: "9th Class Notes | Class 9",
  description:
    "Class 9 notes providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub notes",
    "growlearnhub class 9 notes",
    "notes",
    "class 9 notes",
    "9th class notes",
    "9th class growlearnhub notes",
  ],
  image: "/9th/class_9_notes.webp",
  canonical: "/class-9/notes/",
  url: "https://www.growlearnhub.com/class-9/notes/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4">
        {Class9NotesData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-9/notes/${data.slug}`}
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
