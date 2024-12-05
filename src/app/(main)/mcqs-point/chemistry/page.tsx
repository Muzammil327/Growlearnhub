import React from "react";
import { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { ChemistryMcqsSubjectData } from "@/src/data/mcqs";
import { SmallCardProps } from "@/src/types/CardType";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";

const data = {
  title: "Chemistry Solved Mcqs Topic Wise",
  description:
    "Here you can get solved mcqs topic wise of chemistry like physical, analytical, biochemistry, organic and inorganic chemistry.",
  canonical: "/mcqs-point/chemistry/",
  index: true,
  follow: true,
  image: "/mcqs_point/chemistry_mcqs_point.png",
  url: "https://growlearnhub.com/mcqs-point/chemistry/",
  keywords: ["mcqs", "quiz", "mcqs chemistry", "chemistry mcqs"],
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {ChemistryMcqsSubjectData.map((book: SmallCardProps) => (
          <CardSmall
            key={book.title}
            title={book.title}
            link={`mcqs-point/chemistry/${book.link}`}
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
