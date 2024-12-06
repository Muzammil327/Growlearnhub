import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class11ResultData } from "@/src/data/class11";

const data = {
  title: "11th Class Result | Class 11",
  description:
    "All Punjab Boards have announced the 11th Class Result 2024 date and time. Students can check their results online on 22nd August at 11 AM and get complete details.",
  keywords: [
    "growlearnhub result",
    "growlearnhub class 11 result",
    "result",
    "class 11 result",
    "11th class result",
    "11th class growlearnhub result",
  ],
  image: "/11th/class_11_result.webp",
  canonical: "/class-11/result/",
  url: "https://growlearnhub.com/class-11/result/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {Class11ResultData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-11/result/${data.slug}`}
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
