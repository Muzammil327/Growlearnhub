import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import Heading2 from "@/src/components/ui/typography/Heading2/page";
import { Class11PastPaperData } from "@/src/data/class11";

const data = {
  title: "11th Class Past Paper | Class 11",
  description:
    "Class 11 Past Paper providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub past paper",
    "growlearnhub class 11 past paper",
    "past paper",
    "class 11 past paper",
    "11th class past paper",
    "11th class growlearnhub past paper",
  ],
  image: "/11th/class_11_past_paper.webp",
  canonical: "/class-11/past-paper/",
  url: "https://www.growlearnhub.com/class-11/past-paper/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4">
        {Class11PastPaperData.map((data: any) => {
          return (
            <div key={data.title}>
              <Heading2 className="">{data.title}</Heading2>
              <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-11/past-paper/${data.slug}`}
                    />
                  );
                })}
              </div>
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
