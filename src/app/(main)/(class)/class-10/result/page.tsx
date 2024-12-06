import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class10ResultData } from "@/src/data/class10";

const data = {
  title: "10th Class Result | Class 10",
  description:
    "All Punjab Boards have announced the 10th Class Result 2024 date and time. Students can check their results online on 22nd August at 10 AM and get complete details.",
  keywords: [
    "growlearnhub result",
    "growlearnhub class 10 result",
    "result",
    "class 10 result",
    "10th class result",
    "10th class growlearnhub result",
  ],
  image: "/10th/class_10_result.webp",
  canonical: "/class-10/result/",
  url: "https://growlearnhub.com/class-10/result/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {Class10ResultData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-10/result/${data.slug}`}
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
