import React from "react";
import type { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import Heading2 from "@/src/components/ui/typography/Heading2/page";
import { SmallCardProps } from "@/src/components/card/cardSmall/types";
import { PairingSchemeData } from "@/src/data/pairing-scheme";

const data = {
  title: "Pairing Scheme All Classes || Growlearnhub",
  description: "",
  image: "/pairing-scheme-all-classes-growlearnhub.webp",
  keywords: ["growlearnhub", "growlearnhub pairing scheme"],
  canonical: "/pairing-scheme/",
  url: "https://www.growlearnhub.com/pairing-scheme/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2>Class Wise Pairing Scheme</Heading2>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PairingSchemeData.map((book: SmallCardProps) => (
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
