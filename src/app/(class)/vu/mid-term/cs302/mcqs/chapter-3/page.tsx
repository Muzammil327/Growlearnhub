import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import Link from 'next/link'

import { Metadata } from 'next'

const data = {
  title: 'VU CS302 Mid Term Chapter 3 Mcqs',
  description:
    'Here you get cs302 mid term chapter 3 mcqs chapter wise, definitions, important  and further more in this platform.',
  canonical: '/vu/mid-term/cs302/mcqs/chapter-3/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs302/mcqs/chapter-3/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs302',
    'mcqs',
    'chapter 3',
    'cs302 mcqs',
    'cs302 mcqs chapter 3',
    'mid term cs302',
    'mid term mcqs cs302',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS302 Mid Term MCQ's Chapter 3">
      <div className="my-20">
        <div className="flex justify-between items-center">
          <Link className="btn" href="/vu/mid-term/cs302/mcqs/chapter-3/">
            Chapter 3
          </Link>
          <Link className="btn" href="/vu/mid-term/cs302/mcqs/">
            Chapter 4
          </Link>
        </div>
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
