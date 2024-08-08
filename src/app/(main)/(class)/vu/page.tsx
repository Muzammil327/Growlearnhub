import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Virtual University| Resources and Tips for Vu',
  description:
    'Virtual University resources and tips page offering study materials, exam guides, and effective learning strategies for VU students.',
  canonical: '/vu/',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/vu/',
  keywords: ['growlearnhub', 'growlearnhub vu', 'vu', 'virtual university'],
}

export default function Page() {
  return (
    <Wrapper title={data.title} url={data.canonical} b1="Virtual University">
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
    name: 'Mcqs',
    slug: 'mcqs',
  },
  {
    name: 'Mid Mark Calculator',
    slug: 'mid-mark-calculator',
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
