import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: '10th Class Online Test | Class 10',
  description:
    'Class 10 online test page providing interactive exams, instant feedback, and performance analytics for effective learning.',
  canonical: '/class-10/online-test/',
  index: true,
  follow: true,
  image: '/class/class-10/class_10_online_test.webp',
  url: 'https://growlearnhub.com/class-10/online-test/',
  keywords: [
    'growlearnhub online test',
    'growlearnhub class 10 online test',
    'online test',
    'class 10 online test',
    '10th class online test',
    '10th class growlearnhub online test',
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="10th Class"
      b1Link="/class-10/"
      b2="Online Test"
      image={data.image}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-10/online-test/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Biology',
    slug: '',
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
