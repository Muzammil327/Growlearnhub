import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU Mid Term Grow Learn Hub',
  description:
    'Here you get all subject of vu mid term containing abbreviations, mcqs chapter wise, definitions, important topic.',
  canonical: '/vu/mid-term/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/',
  keywords: [
    'growlearnhub vu', 
    'vu',
    'mid term',
    'vu mid term'
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU Mid Term">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3
          title="CS101 - Introduction to Computing"
          link="/vu/mid-term/cs101/"
        />
        <Card3
          title="CS201 - Introduction to Programming"
          link="/vu/mid-term/cs201/"
        />
        <Card3
          title="CS302 - Digital Logic Design"
          link="/vu/mid-term/cs302/"
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
