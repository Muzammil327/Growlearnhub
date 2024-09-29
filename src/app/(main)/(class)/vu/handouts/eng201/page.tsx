import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { VuHandoutsData } from "../data"
import PDFViewer from "@/src/components/element/PDFViewer"

const data = {
  title: "VU ENG201 Handouts Pdf Download",
  description:
    "Access ENG201 handouts and highlighted notes for VU students. Download English 201 handouts in PDF format to prepare for exams. Free and easy to download!",
  canonical: "/vu/handouts/eng201/",
  index: true,
  follow: true,
  image: "/vu/handouts/eng201_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/eng201/",
  keywords: [
    "growlearnhub",
    "vu eng201 handouts",
    "growlearnhub eng201 handouts",
    "eng201 handouts",
    "virtual university eng201 handouts"
  ],
  clist: [
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Final Term Mcqs", slug: "/vu/final-mcqs/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" },
    { name: "ENG201 Highlight Handouts", slug: "/vu/handouts/eng201/" },
    { name: "ENG201 Mid Term Solved Papers", slug: "/vu/handouts/eng201/" },
    { name: "ENG201 Mid Term Mcqs", slug: "/vu/handouts/eng201/" },
    { name: "ENG201 Mid Term Online Test", slug: "/vu/handouts/eng201/" },
    { name: "ENG201 Final Term Solved Papers", slug: "/vu/handouts/eng201/" },
    { name: "ENG201 Final Term Mcqs", slug: "/vu/handouts/eng201/" },
    { name: "ENG201 Final Term Online Test", slug: "/vu/handouts/eng201/" }
  ],
  fileId: "1sGLJuN5IQvqSOsoqVl64BEBoapsOFuGk"
}

export default function Page() {
  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Handouts"
      b1Link="/vu/handouts/"
      b2="ENG201"
      image={data.image}
      clist={data.clist}
    >
      <h3>Download VU ENG201 Handouts</h3>
      <p>
        Here, you can download Virtual University{" "}
        <strong>Eng201 Handouts</strong> in PDF Format. This book is officially
        published by Virtual University Of Pakistan.
      </p>
      <PDFViewer pdfUrl={data.fileId} />
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
    </SimpleWrapper>
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
