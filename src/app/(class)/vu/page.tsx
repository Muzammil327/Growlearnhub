import Card3 from '@/src/components/card2/card3'
import VUWrapper from './VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU Grow Learn Hub',
  description:
    'Here you download books of vu of all semster and every book of mid term and final term containing abbreviations, mcqs, definitions.',
  canonical: '/vu/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/',
  keywords: [
    'growlearnhub vu',
    'vu',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3 title="Vu Marks Calculator" link="/vu/mid-mark-calculator/" />
        <Card3 title="Vu Mid Term" link="/vu/mid-term/" />
      </div>
    </VUWrapper>
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
        url: 'https://nextjs.org/og.png',
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
      url: 'https://nextjs.org/og.png',
      alt: data.title,
    },
  },
}
