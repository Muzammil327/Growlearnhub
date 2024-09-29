import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import PDFViewer from '@/src/components/element/PDFViewer'
import DataClass11Book from '@/src/app/(main)/(class)/class-11/books/DataClass11Book'

const data = {
  title: 'Economics Class 11 Book PDF | 11th Class Punjab Text Book',
  description:
    'Download the official Economics Class 11 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.',
  canonical: '/class-11/books/punjab-board-economics/',
  index: true,
  follow: true,
  image: '/11th/book/punjab/class-11-economics-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-11/books/punjab-board-economics/',
  keywords: [
    'economics class 11 punjab text book pdf',
    'class 11 economics book pdf punjab board',
    '11th class economics punjab text book',
    'economics book class 11 punjab board',
    'class 11 economics book punjab board',
  ],
  fileId_urdu: '1JIhmsCKh20DfmqwWuHtwBWa1cZdsu7B1',
  clist: [
    { name: 'Class 9 Books', slug: '/class-9/books/' },
    { name: 'Class 10 Books', slug: '/class-10/books/' },
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
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Books"
      b1Link="/class-11/books/"
      b2="Punjab Board Economics"
      image={data.image}
      clist={data.clist}
    >
      <p>
        Are you looking for a{' '}
        <strong>Class 11 economics book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <h3>Download Class 11 Economics Book Punjab Board</h3>
      <p>
        Here, you can download Matric class 11 Economics Text Book in PDF Format.
        This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass11Book />
    </SimpleWrapper >
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
