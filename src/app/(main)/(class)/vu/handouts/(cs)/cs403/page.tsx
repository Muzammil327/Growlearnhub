import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import PDFViewer from "@/src/components/elements/PDFViewer";

const data = {
  title: "VU CS403 Handouts Pdf Download",
  description:
    "Access comprehensive CS403 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/cs403/",
  index: true,
  follow: true,
  image: "/vu/handouts/cs403_handouts.webp",
  url: "https://www.growlearnhub.com/vu/handouts/cs403/",
  keywords: [
    "growlearnhub",
    "vu cs403 handouts",
    "growlearnhub cs403 handouts",
    "cs403 handouts",
    "virtual university cs403 handouts",
  ],
  fileId: "",
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>CS403 Handouts</em> from
        <Link href="https://www.vu.edu.pk/">Virtual University (VU)</Link>.
        Download the handouts in PDF format for free and study at your own pace.
      </p>
      <h3>Download VU CS403 Handouts</h3>
      <p>
        Here, you can download Virtual University Handouts in PDF Format. This
        book is officially published by Virtual University Of Pakistan.
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
