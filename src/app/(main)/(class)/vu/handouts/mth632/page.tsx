import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { VuHandoutsData } from "../data"
import PDFViewer from "@/src/components/element/PDFViewer"

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
    "virtual university mth632 handouts"
  ],
  clist: [
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Final Term Mcqs", slug: "/vu/final-mcqs/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" },
    { name: "MTH632 Mid Term", slug: "/vu/handouts/mth632/" },
    { name: "MTH632 Final Term", slug: "/vu/handouts/mth632/" }
  ],
  fileId: "1BbmeMsqXQumZ3d8l2Mb43hRBMQ9iev7p"
}

export default function Page() {
  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Handouts"
      b1Link="/vu/handouts/"
      b2="MTH632"
      image={data.image}
      clist={data.clist}
    >
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
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {VuHandoutsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/handouts/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper >
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
