import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class10DateSheetData } from "@/src/data/class10";

const data = {
  title: "10th Class Date Sheet | Class 10",
  description:
    "Class 10 Date Sheet providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub date sheet",
    "growlearnhub class 10 date sheet",
    "date sheet",
    "class 10 date sheet",
    "10th class date sheet",
    "10th class growlearnhub date sheet",
  ],
  image: "/10th/class_10_date_sheet.webp",
  canonical: "/class-10/date-sheet/",
  url: "https://www.growlearnhub.com/class-10/date-sheet/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4">
        {Class10DateSheetData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-10/data-sheet/${data.slug}`}
              />
            </div>
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
