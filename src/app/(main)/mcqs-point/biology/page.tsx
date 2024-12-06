import React from "react";
import { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { BiologyMcqsSubjectData } from "@/src/data/mcqs";
import { SmallCardProps } from "@/src/types/CardType";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";

const data = {
  title: "Biology Solved Mcqs Topic Wise",
  description:
    "Here you can get solved mcqs topic wise of biology like cell devision, tissue, organ, plant and animal and human.",
  canonical: "/mcqs-point/biology/",
  index: true,
  follow: true,
  image: "/mcqs_point/biology_mcqs_point.png",
  url: "https://www.growlearnhub.com/mcqs-point/biology/",
  keywords: ["mcqs", "quiz", "mcqs biology", "biology mcqs"],
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {BiologyMcqsSubjectData.map((book: SmallCardProps) => (
          <CardSmall
            key={book.title}
            title={book.title}
            link={`mcqs-point/biology/${book.link}`}
          />
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
