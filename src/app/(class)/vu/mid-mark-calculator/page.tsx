import { Metadata } from 'next'
import Calculator from './calculator'

const data = {
  title: 'VU Mark Calculator Grow Learn Hub',
  description:
    'Here you can calculate mark by mark calculator, which marks are required in final exam to complete the semester.',
  canonical: '/vu/mid-mark-calculator/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-mark-calculator/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid mark calculator',
    'vu mid term',
    'calculator',
  ],
}

export default function Page() {
  return <Calculator />
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
