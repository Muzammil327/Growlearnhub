import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { VuHandoutsData } from '../data'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'VU CS311 Handouts Pdf Download',
  description:
    'Access comprehensive CS311 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.',
  canonical: '/vu/handouts/cs311/',
  index: true,
  follow: true,
  image: '/vu/handouts/cs311_handouts.webp',
  url: 'https://growlearnhub.com/vu/handouts/cs311/',
  keywords: [
    'growlearnhub',
    'vu cs311 handouts',
    'growlearnhub cs311 handouts',
    'cs311 handouts',
    'virtual university cs311 handouts',
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
      b2="CS311"
      image={data.image}
      clist={data.clist}
    >
      <h3>Download VU CS311 Handouts</h3>
      <p>
        Here, you can download Virtual University{" "}
        <strong>CS311 Handouts</strong> in PDF Format. This book is officially
        published by Virtual University Of Pakistan. The handouts cover a
        comprehensive range of topics, including introduction to computer
        science, programming concepts, data structures, algorithms, and more.
        These handouts are a valuable resource for students enrolled in the
        CS311 course, providing a concise and easy-to-understand guide to the
        subject matter.
      </p>
      <p>
        For Download the <em>CS311 Handouts</em> book for free, click the
        download button below:
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
