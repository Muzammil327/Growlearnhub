import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../../VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU MGT211 Final Term',
  description:
    'Here you get MGT211 Final term containing abbreviations, mcqs chapter wise, definitions, important topic.',
  canonical: '/vu/final-term/mgt211/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/final-term/mgt211/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'final term',
    'vu final term',
    'MGT211',
    'final term MGT211',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU MGT211 Final Term">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3 title="MGT211 - MCQ's" link="/vu/final-term/mgt211/mcqs/" />
        <Card3
          title="MGT211 - Definitions"
          link="/vu/final-term/mgt211/definitions/"
        />
        <Card3
          title="MGT211 - Abbreviation"
          link="/vu/final-term/mgt211/abbreviation/"
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
