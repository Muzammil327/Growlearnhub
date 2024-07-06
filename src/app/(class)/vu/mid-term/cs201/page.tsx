import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../../VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU CS201 Mid Term',
  description:
    'Here you get cs201 mid term containing abbreviations, mcqs chapter wise, definitions, important topic.',  canonical: '/vu/mid-term/cs201/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs201/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'mid term cs201',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3 title="CS201 - MCQ's" link="/vu/mid-term/cs201/mcqs/" />
        <Card3
          title="CS201 - Definitions"
          link="/vu/mid-term/cs201/definitions/"
        />
        <Card3
          title="CS201 - Abbreviation"
          link="/vu/mid-term/cs201/abbreviation/"
        />
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
