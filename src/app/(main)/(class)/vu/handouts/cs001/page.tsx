import React from "react"
import { Metadata } from "next"
import VUhHandoutWrapper from "@/src/app/(main)/(class)/vu/handouts/VUhHandoutWrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import LinkComponent from "@/src/components/ui/typography/Links/page"

const data = {
  title: "VU CS001 Handouts Pdf Download",
  description:
    "Access comprehensive CS001 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/cs001/",
  index: true,
  follow: true,
  image: "/vu/handouts/cs001_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/cs001/",
  keywords: [
    "growlearnhub",
    "vu cs001 handouts",
    "growlearnhub cs001 handouts",
    "cs001 handouts",
    "virtual university cs001 handouts"
  ],
  clist: [
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Final Term Mcqs", slug: "/vu/final-mcqs/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" }
  ],
  fileId: "",
  b1: "VU",
  b1Link: "/vu/",
  b2: "Handouts",
  b2Link: "/vu/handouts/",
  b3: "CS001"
}

export default function Page() {
  return (
    <VUhHandoutWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>CS001 Handouts</em> from
        <LinkComponent slug="https://www.vu.edu.pk/">
          Virtual University (VU)
        </LinkComponent>
        . Download the handouts in PDF format for free and study at your own
        pace.
      </p>
      
      <h3>Download VU CS001 Handouts</h3>
      <p>
        Here, you can download Virtual University{" "}
        <strong>CS001 Handouts</strong> in PDF Format. This book is officially
        published by Virtual University Of Pakistan. The handouts cover a
        comprehensive range of topics, including introduction to computer
        science, programming concepts, data structures, algorithms, and more.
        These handouts are a valuable resource for students enrolled in the
        CS001 course, providing a concise and easy-to-understand guide to the
        subject matter.
      </p>
      <p>
        For Download the <em>CS001 Handouts</em> book for free, click the
        download button below:
      </p>
      <PDFViewer pdfUrl={data.fileId} />
    </VUhHandoutWrapper>
  )
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
        alt: data.title
      }
    ]
  },
  alternates: {
    canonical: data.canonical
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow
    }
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title
    }
  }
}
