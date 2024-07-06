import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import Link from 'next/link'
import { Metadata } from 'next'

const data = {
  title: 'VU CS302 Mid Term Chapter 1 Mcqs',
  description:
    'Here you get cs302 mid term chapter 1 mcqs chapter wise, definitions, important  and further more in this platform.',
  canonical: '/vu/mid-term/cs302/mcqs/chapter-1/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs302/mcqs/chapter-1/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs302',
    'mcqs',
    'chapter 1',
    'cs302 mcqs',
    'cs302 mcqs chapter 1',
    'mid term cs302',
    'mid term mcqs cs302',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS302 Mid Term MCQ's Chapter 1">
      <div className="my-20">
        <div className="flex justify-between items-center">
          <Link className="btn" href="/vu/mid-term/cs302/mcqs/chapter-1/">
            Chapter 1
          </Link>
          <Link className="btn" href="/vu/mid-term/cs302/mcqs/chapter-2/">
            Chapter 2
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
