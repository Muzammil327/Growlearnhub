import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { Class9OnlineTestData } from "@/src/data/class9";

const data = {
  title: "9th Class Online Test | Class 9",
  description:
    "Class 9 online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub online test",
    "growlearnhub class 9 online test",
    "online test",
    "class 9 online test",
    "9th class online test",
    "9th class growlearnhub online test",
  ],
  image: "/9th/class_9_online_test.webp",
  canonical: "/class-9/online-test/",
  url: "https://www.growlearnhub.com/class-9/online-test/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4">
        {Class9OnlineTestData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-9/online-test/${data.slug}`}
              />
            </div>
          );
        })}
      </div>{" "}
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
