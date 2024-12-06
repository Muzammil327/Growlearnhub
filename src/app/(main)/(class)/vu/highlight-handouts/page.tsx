import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import { VuHighlightedHandoutsData } from "@/src/data/vu";

const data = {
  title: "VU Highlight Handouts of All Subjects",
  description:
    "Virtual University handouts PDF page offering downloadable study materials and comprehensive notes for all courses.",
  image: "/vu/vu_highlight_handouts.webp",
  keywords: [
    "growlearnhub",
    "highlight handouts",
    "growlearnhub vu highlight handouts",
    "vu highlight handouts",
    "virtual university highlight handouts",
  ],
  canonical: "/vu/highlight-handouts/",
  url: "https://www.growlearnhub.com/vu/highlight-handouts/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {VuHighlightedHandoutsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`vu/highlight-handouts/${data.slug}`}
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
