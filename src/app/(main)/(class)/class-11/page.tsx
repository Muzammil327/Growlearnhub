import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Complete Guide to Class 11 | Resources and Tips for 11th Class',
  description:
    'Comprehensive Class 11 page featuring MCQs, online tests, and essential books for efficient learning and thorough subject mastery.',
  canonical: '/class-11/',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/class-11/',
  keywords: [
    'growlearnhub',
    'growlearnhub class 11',
    'class 11',
    '11th class',
    '11th class growlearnhub',
  ],
}

export default function Page() {
  return (
    <Wrapper title={data.title} url={data.canonical} b1="11th Class">
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-11/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Online Test',
    slug: 'online-test',
  },
  {
    name: 'Mcqs',
    slug: 'mcqs',
  },
  {
    name: 'Books',
    slug: 'books',
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
