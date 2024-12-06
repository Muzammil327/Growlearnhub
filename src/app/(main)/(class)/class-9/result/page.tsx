import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class9ResultData } from "@/src/data/class9";

const data = {
  title: "9th Class Result | Class 9",
  description:
    "All Punjab Boards have announced the 9th Class Result 2024 date and time. Students can check their results online on 22nd August at 10 AM and get complete details.",
  keywords: [
    "growlearnhub result",
    "growlearnhub class 9 result",
    "result",
    "class 9 result",
    "9th class result",
    "9th class growlearnhub result",
  ],
  image: "/9th/class_9_result.webp",
  canonical: "/class-9/result/",
  url: "https://www.growlearnhub.com/class-9/result/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {Class9ResultData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-9/result/${data.slug}`}
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
