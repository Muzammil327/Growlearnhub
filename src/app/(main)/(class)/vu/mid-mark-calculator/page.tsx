import { Metadata } from 'next'
import Calculator from '@/src/app/(main)/(class)/vu/mid-mark-calculator/calculator'

const data = {
  title: 'VU MID TERM Mark Calculator Grow Learn Hub',
  description:
    'Here you can calculate vu mid mark calculator, which marks are required in final exam to complete the semester.',
  canonical: '/vu/mid-mark-calculator/',
  index: true,
  follow: true,
  image: '/vu/vu_mid_mark_calculator.png',
  url: 'https://growlearnhub.com/vu/mid-mark-calculator/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'vu mid',
    'vu mid term ',
    'vu mid term mark',
    'vu mid term mark calculator',
    'mid term mark calculator',
    'vu mark calculator',
  ],
  clist: [
    { name: 'Mid Term Mcqs', slug: '/vu/mid-mcqs/' },
    { name: 'Final Term Mcqs', slug: '/vu/final-mcqs/' },
    { name: 'Handouts', slug: '/vu/handouts/' },
  ],
}

export default function Page() {
  return <Calculator url={data.url} clist={data.clist} />
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
