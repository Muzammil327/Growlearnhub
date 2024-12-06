import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { class12Data } from "@/src/data/class12";

const data = {
  title: "Complete Guide to Class 12 | Resources and Tips for 12th Class",
  description:
    "Comprehensive Class 12 page featuring MCQs, online tests, and essential books for efficient learning and thorough subject mastery.",
  keywords: [
    "growlearnhub",
    "growlearnhub class 12",
    "class 12",
    "12th class",
    "12th class growlearnhub",
  ],
  image: "/class_12.webp",
  canonical: "/class-12/",
  url: "https://www.growlearnhub.com/class-12/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {class12Data.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-12/${data.slug}`}
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
