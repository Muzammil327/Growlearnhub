import React from "react"
import { Metadata } from "next"
import VUhHandoutWrapper from "@/src/app/(main)/(class)/vu/handouts/VUhHandoutWrapper"
import PDFViewer from "@/src/components/element/PDFViewer"
import LinkComponent from "@/src/components/ui/typography/Links/page"

const data = {
  title: "VU MTH501 Handouts Pdf Download",
  description:
    "Access comprehensive MTH501 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.",
  canonical: "/vu/handouts/mth501/",
  index: true,
  follow: true,
  image: "/vu/handouts/mth501_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/mth501/",
  keywords: [
    "growlearnhub",
    "vu mth501 handouts",
    "growlearnhub mth501 handouts",
    "mth501 handouts",
    "virtual university mth501 handouts"
  ],
  fileId: "",
  breadcrumbs:[]
}

export default function Page() {
  return (
    <VUhHandoutWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>MTH501 Handouts</em> from
        <LinkComponent slug="https://www.vu.edu.pk/">
          Virtual University (VU)
        </LinkComponent>
        . Download the handouts in PDF format for free and study at your own
        pace.
      </p>
      <h3>Download VU MTH501 Handouts</h3>
      <p>
        Here, you can download Virtual University Handouts in PDF Format. This
        book is officially published by Virtual University Of Pakistan.
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
