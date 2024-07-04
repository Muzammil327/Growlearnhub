import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/(class)/BookWrapper'
import PDFViewer from '@/src/components/element/PDFViewer'

import { class_Book } from '@/src/app/books/type'
import { Class9_Book } from '@/src/app/(class)/class-9/books/data'

const data = {
  title: '9th Class Chemistry Book PDF Punjab Board',
  description:
    'Here you can access 9th class Biology Book PDF Punjab Board in english and urdu medium available in this website.',
  canonical: '/class-9/books/punjab-board-chemistry/',
  index: true,
  follow: true,
  image: '/books/class-9/punjab/class-9-physics-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/books/punjab-board-chemistry/',
  english_medium: '1LhWG65hJibow48tOzY7L_w9gWTWfeqvE',
  urdu_medium: '14GOV_BVtoIoE8SlNNnxDgLAvrwAMdhU4',
  keywords: [
    '9 class book chemistry',
    '9 class chemistry book pdf',
    '9th class chemistry textbook pdf',
    'phy class 9',
    'class 9 chemistry book',
    'class 9th chemistry book pdf',
    'class 9 chemistry pdf',
    'class nine chemistry book',
    '9th class chemistry book pdf',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="9 Class"
      b1Link="/class-9/"
      b2="Books"
      b2Link="/class-9/books/"
      b3="Punjab Board Chemistry"
      clist={clist}
    >
      <p>
        Are you looking for a <strong>9th Class Chemistry book punjab board</strong>?
        Here, you can access all the books you need for free. Our website offers
        a complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 9 Chemistry Book of english and Urdu Medium"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h2>Download 9th Chemistry Book PDF English Medium Punjab Board</h2>
      <p>
        Here, you can download Matric class 9 Chemistry Text Book in PDF Format for
        English Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.english_medium} />

      <h3>Download PDF Class 9 Chemistry Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Chemistry Text Book in PDF Format for
        Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.urdu_medium} />
      {Class9_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 9 Books
            </h3>
            <p>
              Our collection of <strong>9 Class Textbooks</strong> of Punjab
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
