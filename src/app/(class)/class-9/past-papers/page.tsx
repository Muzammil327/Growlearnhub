import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/(class)/BookWrapper'

import { class_Book } from '@/src/app/books/type'
import { Class9_PastPapers } from './data'

const data = {
  title: 'Class 9 Past Paper | GrowLearnHub',
  description:
    'Here you can access class 9 past papers in english medium of all subjects like physics, chemistry biology and math available in this website.',
  canonical: '/class-9/past-papers/',
  index: true,
  follow: true,
  image: '/books/class_9_books.webp',
  url: 'https://growlearnhub.com/class-9/past-papers/',
  keywords: [
    'growlearnhub',
    'class 9 past papers',
    'class 9th past papers',
    '9 class past papers',
    '9th class past papers',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Class 9"
      b2="Past Papers"
      b1Link="/class-9/"
      clist={clist}
    >
      <p>
        Are you looking for a <strong>Class 9 Past Papers</strong>? Here, you can
        access all the past papers you need for free. Our website offers a complete
        collection of past papers for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 9 Past Papers of all Subjects"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      {Class9_PastPapers.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h2 className="text-xl font-semibold py-2">
              {data.name} Class 9 Past Papers
            </h2>
            <p>
              Our collection of <strong>9th Class Past Papers</strong> of Punjab Baord
              encompasses all subjects included Physics, Biology, Chemistry,
              Math, English, Urdu, Pak Study, Islamiat, General Math, Computer
              Science, Economics, Tarjuma Tul Quran, Ikhlaqiat, ensuring you
              have the resources you need to succeed.
            </p>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
              {data.list.map((item: any) => (
                <Card3 key={item.id} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        )
      })}
    </BookWrapper>
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

const clist = [
  {
    title: 'Class 10 Physics Past Papers',
    link: '/class-10/past-papers/punjab-board-physics/',
  },
  {
    title: 'Class 10th Chemistry Past Papers',
    link: '/class-10/past-papers/punjab-board-chemistry/',
  },
  {
    title: '10 class Biology Past Papers',
    link: '/class-10/past-papers/punjab-board-biology/',
  },
  {
    title: '10th class Math Past Papers',
    link: '/class-10/past-papers/punjab-board-math/',
  },
  {
    title: 'Class 11 Physics Past Papers',
    link: '/class-11/past-papers/punjab-board-physics/',
  },
  {
    title: 'Class 11th Chemistry Past Papers',
    link: '/class-11/past-papers/punjab-board-chemistry/',
  },
  {
    title: '11 class Biology Past Papers',
    link: '/class-11/past-papers/punjab-board-biology/',
  },
  {
    title: '11th class Math Past Papers',
    link: '/class-11/past-papers/punjab-board-math/',
  },
  {
    title: 'Class 12 Physics Past Papers',
    link: '/class-12/past-papers/punjab-board-physics/',
  },
  {
    title: 'Class 12th Chemistry Past Papers',
    link: '/class-12/past-papers/punjab-board-chemistry/',
  },
  {
    title: '12 class Biology Past Papers',
    link: '/class-12/past-papers/punjab-board-biology/',
  },
  {
    title: '12th class Math Past Papers',
    link: '/class-12/past-papers/punjab-board-math/',
  },
]
