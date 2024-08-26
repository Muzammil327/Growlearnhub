import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: '12th Class Online Test | Class 12',
  description:
    'Class 12 online test page providing interactive exams, instant feedback, and performance analytics for effective learning.',
  canonical: '/class-12/online-test/',
  index: true,
  follow: true,
  image: '/class/class-12/class_12_online_test.webp',
  url: 'https://growlearnhub.com/class-12/online-test/',
  keywords: [
    'growlearnhub online test',
    'growlearnhub class 12 online test',
    'online test',
    'class 12 online test',
    '12th class online test',
    '12th class growlearnhub online test',
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="12th Class"
      b1Link="/class-12/"
      b2="Online Test"
      image={data.image}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-12/online-test/${data.slug}`}
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
