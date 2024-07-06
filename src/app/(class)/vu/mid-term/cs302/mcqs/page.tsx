import Card3 from '@/src/components/card2/card3'
import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU CS302 Mid Term Mcqs',
  description:
    'Here you get cs302 mid term mcqs chapter wise, definitions, important  and further more in this platform.',
  canonical: '/vu/mid-term/cs302/mcqs/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs302/mcqs/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs302',
    'mcqs',
    'cs302 mcqs',
    'mid term cs302',
    'mid term mcqs cs302',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS302 Mid Term MCQ's">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3
          title="CS302 - Chapter 1 MCQ's"
          link="/vu/mid-term/cs302/mcqs/chapter-1/"
        />
        <Card3
          title="CS302 - Chapter 2 MCQ's"
          link="/vu/mid-term/cs302/mcqs/chapter-2/"
        />
        <Card3
          title="CS302 - Chapter 3 MCQ's"
          link="/vu/mid-term/cs302/mcqs/chapter-3/"
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
