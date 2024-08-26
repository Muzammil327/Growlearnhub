import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Virtual University | Resources and Tips for Vu',
  description:
    'Virtual University resources and tips page offering study materials, exam guides, and effective learning strategies for VU students.',
  canonical: '/vu/',
  index: true,
  follow: true,
  image: '/class/vu.webp',
  url: 'https://growlearnhub.com/vu/',
  keywords: ['growlearnhub', 'growlearnhub vu', 'vu', 'virtual university'],
  clist: [
    { name: 'Class 9', slug: '/class-9/' },
    { name: 'Class 10', slug: '/class-10/' },
    { name: 'Class 11', slug: '/class-11/' },
    { name: 'Class 12', slug: '/class-12/' },
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Virtual University"
      clist={data.clist}
      image={data.image}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Handouts',
    slug: 'handouts',
  },
  {
    name: 'Mid Mark Calculator',
    slug: 'mid-mark-calculator',
  },
  {
    name: 'Mid Mcqs',
    slug: 'mid-mcqs',
  },
  {
    name: 'Final Mcqs',
    slug: 'final-mcqs',
  },
]

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
