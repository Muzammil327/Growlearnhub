import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import PDFViewer from "@/src/components/elements/PDFViewer";

const data = {
  title: "VU CS312 Handouts Pdf Download",
  description:
    "Access comprehensive CS312 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/cs312/",
  index: true,
  follow: true,
  image: "/vu/handouts/cs312_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/cs312/",
  keywords: [
    "growlearnhub",
    "vu cs312 handouts",
    "growlearnhub cs312 handouts",
    "cs312 handouts",
    "virtual university cs312 handouts",
  ],
  clist: [
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Final Term Mcqs", slug: "/vu/final-mcqs/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" },
  ],
  fileId: "",
  b1: "VU",
  b1Link: "/vu/",
  b2: "Handouts",
  b2Link: "/vu/handouts/",
  b3: "CS312",
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>CS312 Handouts</em> from
        <Link href="https://vu.edu.pk/">Virtual University (VU)</Link>.
        Download the handouts in PDF format for free and study at your own pace.
      </p>
      <h3>Download VU CS312 Handouts</h3>
      <p>
        Here, you can download Virtual University{" "}
        <strong>CS312 Handouts</strong> in PDF Format. This book is officially
        published by Virtual University Of Pakistan. The handouts cover a
        comprehensive range of topics, including introduction to computer
        science, programming concepts, data structures, algorithms, and more.
        These handouts are a valuable resource for students enrolled in the
        CS312 course, providing a concise and easy-to-understand guide to the
        subject matter.
      </p>
      <p>
        For Download the <em>CS312 Handouts</em> book for free, click the
        download button below:
      </p>
      <PDFViewer pdfUrl={data.fileId} />
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