import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import PDFViewer from "@/src/components/elements/PDFViewer";

const data = {
  title: "VU MTH632 Handouts Pdf Download",
  description:
    "Access comprehensive MTH632 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/mth632/",
  index: true,
  follow: true,
  image: "/vu/handouts/mth632_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/mth632/",
  keywords: [
    "mth632 handouts",
    "mth632 handouts pdf download",
    "vu mth632 handouts",
    "growlearnhub mth632 handouts",
    "virtual university mth632 handouts",
  ],
  clist: [
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Final Term Mcqs", slug: "/vu/final-mcqs/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" },
    { name: "MTH632 Mid Term", slug: "/vu/handouts/mth632/" },
    { name: "MTH632 Final Term", slug: "/vu/handouts/mth632/" },
  ],
  fileId: "1BbmeMsqXQumZ3d8l2Mb43hRBMQ9iev7p",
  b1: "VU",
  b1Link: "/vu/",
  b2: "Handouts",
  b2Link: "/vu/handouts/",
  b3: "MTH632",
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>MTH632 Handouts</em> from
        <Link href="https://vu.edu.pk/">Virtual University (VU)</Link>.
        Download the handouts in PDF format for free and study at your own pace.
      </p>
      <h3>Download VU MTH632 Handouts</h3>
      <p>
        Welcome to the VU <strong>MTH632 Handouts</strong> download site! Here
        you will find valuable learning materials designed to enhance your
        understanding of the critical mathematics concepts covered in this
        course. These handouts covers important topics such as mathematics,
        linear models. and mathematical proofs.
      </p>
      <p>
        For Download the <em>MTH632 Handouts</em> book for free, Just click the
        download link below to access the content. Happy reading!
      </p>
      <PDFViewer pdfUrl={data.fileId} />

      <h3>Related Handouts</h3>
      <p>
        Here, you can download all Virtual University Handouts in PDF Format.
        This book is officially published by Virtual University Of Pakistan.
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
