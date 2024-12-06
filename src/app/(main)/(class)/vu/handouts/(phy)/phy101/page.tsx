import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";

const data = {
  title: "VU PHY101 Handouts Pdf Download",
  description:
    "Access comprehensive PHY101 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/phy101/",
  index: true,
  follow: true,
  image: "/vu/handouts/phy101_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/phy101/",
  keywords: [],
};

export default function Page() {
  return <SimpleWrapper data={data}></SimpleWrapper>;
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
