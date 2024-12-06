import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { vuMidMcqsData } from "@/src/data/vu";

const data = {
  title: "Virtual University Mid Term Mcqs",
  description:
    "Mid Term MCQs page offering extensive question banks, practice questions, answers, and detailed explanations to enhance learning.",
  image: "/vu/vu_mid_term_mcqs.webp",
  keywords: [
    "growlearnhub",
    "mid mcqs",
    "growlearnhub vu mid mcqs",
    "vu mid mcqs",
    "virtual university mid mcqs",
  ],
  canonical: "/vu/mid-mcqs/",
  url: "https://growlearnhub.com/vu/mid-mcqs/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {vuMidMcqsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`vu/mid-mcqs/${data.slug}`}
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
