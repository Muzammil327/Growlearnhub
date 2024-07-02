import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/(class)/BookWrapper'

import { class_Book } from '@/src/app/books/type'
import { Class9_Book } from '@/src/app/(class)/class-9/books/data'

const data = {
  title: 'Class 9 Books | GrowLearnHub',
  description:
    'Here you can access class 9 books in english and urdu medium of all subjects like physics, chemistry biology and math available in this website.',
  canonical: '/class-9/books/',
  index: true,
  follow: true,
  image: '/books/class_9_books.webp',
  url: 'https://growlearnhub.com/class-9/books/',
  keywords: [
    'growlearnhub',
    'class 9 books',
    'class 9 textbooks',
    'class 9th books',
    '9 class books',
    '9th class books',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Class 9"
      b2="Books"
      b1Link="/class-9/"
      clist={clist}
    >
      <p>
        Are you looking for a <strong>Class 9 book</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 9 Book of all Subjects"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      {Class9_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h2 className="text-xl font-semibold py-2">
              {data.name} Class 9 Textbooks
            </h2>
            <p>
              Our collection of <strong>Class 9 Textbooks</strong> of Punjab
              Baord encompasses all subjects included Physics, Biology,
              Chemistry, Math, English, Urdu, Pak Study, Islamiat, General Math,
              Computer Science, Economics, Tarjuma Tul Quran, Ikhlaqiat,
              ensuring you have the resources you need to succeed.
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
    title: 'Class 10 Physics Books',
    link: '/class-10/books/punjab-board-physics/',
  },
  {
    title: 'Class 10th Chemistry Books',
    link: '/class-10/books/punjab-board-chemistry/',
  },
  {
    title: '10 class Biology Books',
    link: '/class-10/books/punjab-board-biology/',
  },
  {
    title: '10th class Math Books',
    link: '/class-10/books/punjab-board-math/',
  },
  {
    title: 'Class 11 Physics Books',
    link: '/class-11/books/punjab-board-physics/',
  },
  {
    title: 'Class 11th Chemistry Books',
    link: '/class-11/books/punjab-board-chemistry/',
  },
  {
    title: '11 class Biology Books',
    link: '/class-11/books/punjab-board-biology/',
  },
  {
    title: '11th class Math Books',
    link: '/class-11/books/punjab-board-math/',
  },
  {
    title: 'Class 12 Physics Books',
    link: '/class-12/books/punjab-board-physics/',
  },
  {
    title: 'Class 12th Chemistry Books',
    link: '/class-12/books/punjab-board-chemistry/',
  },
  {
    title: '12 class Biology Books',
    link: '/class-12/books/punjab-board-biology/',
  },
  {
    title: '12th class Math Books',
    link: '/class-12/books/punjab-board-math/',
  },
]
