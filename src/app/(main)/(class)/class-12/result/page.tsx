import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class12ResultData } from "@/src/data/class12";

const data = {
  title: "12th Class Result | Class 12",
  description:
    "All Punjab Boards have announced the 12th Class Result 2024 date and time. Students can check their results online on 22nd August at 12 AM and get complete details.",
  keywords: [
    "growlearnhub result",
    "growlearnhub class 12 result",
    "result",
    "class 12 result",
    "12th class result",
    "12th class growlearnhub result",
  ],
  image: "/12th/class_12_result.webp",
  canonical: "/class-12/result/",
  url: "https://growlearnhub.com/class-12/result/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {Class12ResultData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-12/result/${data.slug}`}
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
