import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import PDFViewer from '@/src/components/element/PDFViewer'
import DataClass10Book from '@/src/app/(main)/(class)/class-10/books/DataClass10Book'

const data = {
  title: 'English Class 10 Book PDF | 10th Class Punjab Text Book',
  description:
    'Download the official English Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.',
  canonical: '/class-10/books/punjab-board-english/',
  index: true,
  follow: true,
  image: '/10th/book/punjab/class-10-english-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-10/books/punjab-board-english/',
  keywords: [
    'english class 10 punjab text book pdf',
    'class 10 english book pdf punjab board',
    '10th class english punjab text book',
    'english book class 10 punjab board',
    'class 10 english book punjab board',
  ],
  fileId_urdu: '1qYd3gGUAVT1UjHWvc7uDX7_kgTxlzJv_',
  clist: [
    { name: 'Class 10 Books', slug: '/class-10/books/' },
    { name: 'Class 11 Books', slug: '/class-11/books/' },
    { name: 'Class 12 Books', slug: '/class-12/books/' },
    { name: 'Class 9 Mcqs', slug: '/class-9/mcqs/' },
    { name: 'Class 10 Mcqs', slug: '/class-10/mcqs/' },
    { name: 'Class 11 Mcqs', slug: '/class-11/mcqs/' },
    { name: 'Class 12 Mcqs', slug: '/class-12/mcqs/' },
    { name: 'Class 9 Online Test', slug: '/class-9/online-test/' },
    { name: 'Class 11 Online Test', slug: '/class-11/online-test/' },
    { name: 'Class 10 Online Test', slug: '/class-10/online-test/' },
    { name: 'Class 12 Online Test', slug: '/class-12/online-test/' },
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Books"
      b1Link="/class-10/books/"
      b2="Punjab Board English"
      image={data.image}
      clist={data.clist}
    >
      <p>
        Are you looking for a{' '}
        <strong>Class 10 english book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <h3>Download Class 10 English Book Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 English Text Book in PDF Format.
        This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass10Book />
    </Wrapper>
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