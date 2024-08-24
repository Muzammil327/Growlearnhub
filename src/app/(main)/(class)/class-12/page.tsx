import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Complete Guide to Class 12 | Resources and Tips for 12th Class',
  description:
    'Comprehensive Class 12 page featuring MCQs, online tests, and essential books for efficient learning and thorough subject mastery.',
  canonical: '/class-12/',
  index: true,
  follow: true,
  image: '/mcqs-point/general-knowledge/general-knowledge-quiz.png',
  url: 'https://growlearnhub.com/class-12/',
  keywords: [
    'growlearnhub',
    'growlearnhub class 12',
    'class 12',
    '12th class',
    '12th class growlearnhub',
  ],
}

export default function Page() {
  return (
    <Wrapper title={data.title} url={data.canonical} b1="12th Class" image={data.image}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-12/${data.slug}`}
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
