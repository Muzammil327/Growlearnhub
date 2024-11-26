import { Metadata } from 'next'
import Calculator from './calculator'

const data = {
  title: 'VU MID TERM Mark Calculator Grow Learn Hub',
  description:
    'Here you can calculate vu mid mark calculator, which marks are required in final exam to complete the semester.',
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
  image: '/vu/vu_mid_mark_calculator.png',
  canonical: '/vu/mid-mark-calculator/',
  url: 'https://growlearnhub.com/vu/mid-mark-calculator/',
  index: true,
  follow: true,
}


export default function Page() {
  return  <Calculator url={data.url} data={data} />
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
