import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { VuHandoutsData } from '../data'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'VU MTH101 Handouts Pdf Download',
  description:
    'Access comprehensive MTH101 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.',
  canonical: '/vu/handouts/mth101/',
  index: true,
  follow: true,
  image: '/vu/handouts/mth101_handouts.webp',
  url: 'https://growlearnhub.com/vu/handouts/mth101/',
  keywords: [
    'growlearnhub',
    'vu mth101 handouts',
    'growlearnhub mth101 handouts',
    'mth101 handouts',
    'virtual university mth101 handouts',
  ],
  clist: [
    { name: 'Handouts', slug: '/vu/handouts/' },
    { name: 'Mid Term Mcqs', slug: '/vu/mid-mcqs/' },
    { name: 'Final Term Mcqs', slug: '/vu/final-mcqs/' },
    { name: 'Mid Mark Calculator', slug: '/vu/mid-mark-calculator/' },
  ],
  fileId: '',
}

export default function Page() {
  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Handouts"
      b1Link="/vu/handouts/"
      b2="MTH101"
      image={data.image}
      clist={data.clist}
    >
      <h3>Download VU MTH101 Handouts</h3>
      <p>
        Here, you can download Virtual University Handouts in PDF Format. This
        book is officially published by Virtual University Of Pakistan.
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
}
