import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import Link from "next/link";

const data = {
  title: "VU PAK301 Handouts Pdf Download",
  description:
    "Access comprehensive PAK301 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/pak301/",
  index: true,
  follow: true,
  image: "/vu/handouts/pak301_handouts.webp",
  url: "https://www.growlearnhub.com/vu/handouts/pak301/",
  keywords: [],
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>PAK301 Handouts</em> from
        <Link href="https://www.vu.edu.pk/">Virtual University (VU)</Link>.
        Download the handouts in PDF format for free and study at your own pace.
      </p>
      <h3>Download VU Pak301 Handouts</h3>
      <p>
        Here, you can download Virtual University Handouts in PDF Format. This
        book is officially published by Virtual University Of Pakistan.
      </p>
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
