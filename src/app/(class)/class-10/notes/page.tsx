import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/(class)/BookWrapper'

import { class_Book } from '@/src/app/books/type'
import { Class10_Notes } from './data'

const data = {
  title: 'Class 10 Notes | GrowLearnHub',
  description:
    'Here you can access class 10 notes in english medium of all subjects like physics, chemistry biology and math available in this website.',
  canonical: '/class-10/notes/',
  index: true,
  follow: true,
  image: '/books/class_9_books.webp',
  url: 'https://growlearnhub.com/class-10/notes/',
  keywords: [
    'growlearnhub',
    'class 10 notes',
    'class 10th notes',
    '10 class notes',
    '10th class notes',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Class 10"
      b2="Notes"
      b1Link="/class-10/"
      clist={clist}
    >
      <p>
        Are you looking for a <strong>Class 10 Notes</strong>? Here, you can
        access all the notes you need for free. Our website offers a complete
        collection of notes for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 10 Notes of all Subjects"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />
      <p>
        Welcome to our Educational Hub, an innovative platform designed for high
        school student in Class 9 to 12, Chartered Accountancy (CA), and Virtual
        University learners to fulfil academic needs. Our mission is to provide
        a one-stop solution for all your educational requirements, empowering
        you to achieve excellence in your studies and professional goals.
      </p>

      {Class10_Notes.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h2 className="text-xl font-semibold py-2">
              {data.name} Class 10 Notes
            </h2>
            <p>
              Our collection of <strong>10th Class Notes</strong> of Punjab Baord
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
    title: 'Class 9 Physics Notes',
    link: '/class-9/notes/punjab-board-physics/',
  },
  {
    title: 'Class 9th Chemistry Notes',
    link: '/class-9/notes/punjab-board-chemistry/',
  },
  {
    title: '9 class Biology Notes',
    link: '/class-9/notes/punjab-board-biology/',
  },
  {
    title: '9th class Math Notes',
    link: '/class-9/notes/punjab-board-math/',
  },
  {
    title: 'Class 11 Physics Notes',
    link: '/class-11/notes/punjab-board-physics/',
  },
  {
    title: 'Class 11th Chemistry Notes',
    link: '/class-11/notes/punjab-board-chemistry/',
  },
  {
    title: '11 class Biology Notes',
    link: '/class-11/notes/punjab-board-biology/',
  },
  {
    title: '11th class Math Notes',
    link: '/class-11/notes/punjab-board-math/',
  },
  {
    title: 'Class 12 Physics Notes',
    link: '/class-12/notes/punjab-board-physics/',
  },
  {
    title: 'Class 12th Chemistry Notes',
    link: '/class-12/notes/punjab-board-chemistry/',
  },
  {
    title: '12 class Biology Notes',
    link: '/class-12/notes/punjab-board-biology/',
  },
  {
    title: '12th class Math Notes',
    link: '/class-12/notes/punjab-board-math/',
  },
]
