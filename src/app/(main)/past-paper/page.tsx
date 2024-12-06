import React from "react";
import type { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import Heading2 from "@/src/components/ui/typography/Heading2/page";
import { SmallCardProps } from "@/src/components/card/cardSmall/types";
import { PastPaperData } from "@/src/data/past-paper";

const data = {
  title: "Past Papers All Classes || Growlearnhub",
  description: "",
  keywords: ["growlearnhub", "growlearnhub past paper"],
  image: "/past-paper-all-classes-growlearnhub.webp",
  canonical: "/past-paper/",
  url: "https://growlearnhub.com/past-paper/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2>Class Wise Past Paper</Heading2>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PastPaperData.map((book: SmallCardProps) => (
          <CardSmall key={book.id} title={book.title} link={book.link} />
        ))}
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
