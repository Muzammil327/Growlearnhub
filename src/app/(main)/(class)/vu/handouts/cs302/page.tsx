import React from "react"
import { Metadata } from "next"
import VUhHandoutWrapper from "@/src/app/(main)/(class)/vu/handouts/VUhHandoutWrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import LinkComponent from "@/src/components/ui/typography/Links/page"

const data = {
  title: "VU CS302 Handouts Pdf Download",
  description:
    "Access comprehensive CS302 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/cs302/",
  index: true,
  follow: true,
  image: "/vu/handouts/cs302_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/cs302/",
  keywords: [
    "growlearnhub",
    "vu cs302 handouts",
    "growlearnhub cs302 handouts",
    "cs302 handouts",
    "virtual university cs302 handouts"
  ],
  breadcrumbs:[],
  fileId: "1-gIlWU1bzd1xunZleOZK62hYPe5lAx60",
}

export default function Page() {
  return (
    <VUhHandoutWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>CS302 Handouts</em> from
        <LinkComponent slug="https://www.vu.edu.pk/">
          Virtual University (VU)
        </LinkComponent>
        . Download the handouts in PDF format for free and study at your own
        pace.
      </p>
      <h3>Download VU CS302 Handouts</h3>
      <p>
        Here, you can download Virtual University{" "}
        <strong>CS302 Handouts</strong> in PDF Format. This book is officially
        published by Virtual University Of Pakistan. The handouts cover a
        comprehensive range of topics, including introduction to computer
        science, programming concepts, data structures, algorithms, and more.
        These handouts are a valuable resource for students enrolled in the
        CS302 course, providing a concise and easy-to-understand guide to the
        subject matter.
      </p>
      <p>
        For Download the <em>CS302 Handouts</em> book for free, click the
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
