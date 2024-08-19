import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'Biology Class 10 Book PDF | 10th Class Punjab Text Book',
  description:
    'Download the official Biology Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanations and detailed diagrams, perfect for exam preparation.',
  canonical: '/class-10/books/punjab-board-biology/',
  index: true,
  follow: true,
  image: '/books/class-10/punjab/class-10-biology-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-10/books/punjab-board-biology/',
  keywords: [
    'biology class 10 punjab text book pdf',
    'class 10 biology book pdf punjab board',
    '10th class biology punjab text book',
    'biology book class 10 punjab board',
    'class 10 biology book punjab board',
  ],
  fileId_english: '1FJYKKe3zakdzvKo9T6-74J1ARXKjmsDp',
  fileId_urdu: '1ChK6r_BOfV-p8QLEdh58srQ_QwNgQUne',
  clist: [
    {
      id: 0,
      name: 'Class 9 Books',
      slug: '/class-9/books/',
    },
    {
      id: 1,
      name: 'Class 11 Books',
      slug: '/class-11/books/',
    },
    {
      id: 2,
      name: 'Class 12 Books',
      slug: '/class-12/books/',
    },
    {
      id: 3,
      name: 'VU cgpa Calculator',
      slug: '/vu/mid-mark-calculator/',
    },
    {
      id: 4,
      name: 'Class 9 Mcqs',
      slug: '/class-9/mcqs/',
    },
    {
      id: 5,
      name: 'Class 11 Mcqs',
      slug: '/class-11/mcqs/',
    },
    {
      id: 6,
      name: 'Class 12 Mcqs',
      slug: '/class-12/mcqs/',
    },
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="10th Class"
      b1Link="/class-10/"
      b2="Books"
      b2Link="/class-10/books/"
      b3="Punjab Board Biology"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-10/books/punjab-board-biology/${data.slug}-medium/`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a <strong>Class 10 biology book punjab board</strong>
        ? Here, you can access all the books you need for free. Our website
        offers a complete collection of books for students in Class 9, 10, 11,
        and 12. Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 10 Biology Book English Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 Biology Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 10th Class Biology Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 Biology Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Class 10 Biology Book PDF Punjab Board English Medium',
    slug: 'english',
  },
  {
    name: 'Biology Class 10 Punjab Board Text Book PDF Urdu Medium',
    slug: 'urdu',
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
