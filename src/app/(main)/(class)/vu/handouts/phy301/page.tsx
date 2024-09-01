import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { VuHandoutsData } from '../data'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'VU PHY301 Handouts Pdf Download',
  description:
    'Access comprehensive PHY301 handouts from Virtual University, including downloadable PDFs and detailed study materials to help you excel in your coursework.',
  canonical: '/vu/handouts/phy301/',
  index: true,
  follow: true,
  image: '/class/vu/handouts/phy301_handouts.webp',
  url: 'https://growlearnhub.com/vu/handouts/phy301/',
  keywords: [
    'growlearnhub',
    'vu phy301 handouts',
    'growlearnhub phy301 handouts',
    'phy301 handouts',
    'virtual university phy301 handouts',
  ],
  clist: [
    { name: 'Handouts', slug: '/vu/handouts/' },
    { name: 'Mid Term Mcqs', slug: '/vu/mid-mcqs/' },
    { name: 'Final Term Mcqs', slug: '/vu/final-mcqs/' },
    { name: 'Mid Mark Calculator', slug: '/vu/mid-mark-calculator/' },
  ],
  fileId: '1Long1Eiq5Lhd1vtMgQ8ozlQ3SnSSPkRW',
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Handouts"
      b1Link="/vu/handouts/"
      b2="PHY301"
      image={data.image}
      clist={data.clist}
    >
      <h3>Download VU PHY301 Handouts</h3>
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
