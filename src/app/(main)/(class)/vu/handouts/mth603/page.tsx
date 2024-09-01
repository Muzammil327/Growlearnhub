import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { VuHandoutsData } from '../data'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'VU MTH603 Handouts Pdf Download',
  description:
    'Access comprehensive MTH603 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.',
  canonical: '/vu/handouts/mth603/',
  index: true,
  follow: true,
  image: '/class/vu/handouts/mth603_handouts.webp',
  url: 'https://growlearnhub.com/vu/handouts/mth603/',
  keywords: [
    'growlearnhub',
    'vu mth603 handouts',
    'growlearnhub mth603 handouts',
    'mth603 handouts',
    'virtual university mth603 handouts',
  ],
  clist: [
    { name: 'Handouts', slug: '/vu/handouts/' },
    { name: 'Mid Term Mcqs', slug: '/vu/mid-mcqs/' },
    { name: 'Final Term Mcqs', slug: '/vu/final-mcqs/' },
    { name: 'Mid Mark Calculator', slug: '/vu/mid-mark-calculator/' },
  ],
  fileId: '1SmfqPlQ_8e_XCjKEJp5jN-8CIlqKUT1B',
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Handouts"
      b1Link="/vu/handouts/"
      b2="MTH603"
      image={data.image}
      clist={data.clist}
    >
      <h3>Download VU MTH603 Handouts</h3>
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
    </Wrapper>
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
