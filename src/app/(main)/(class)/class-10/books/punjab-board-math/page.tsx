import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import PDFViewer from '@/src/components/element/PDFViewer'
import DataClass10Book from '@/src/app/(main)/(class)/class-10/books/DataClass10Book'

const data = {
  title: 'Math Class 10 Book PDF | 10th Class Punjab Text Book',
  description:
    'Download the official Math Class 10 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.',
  canonical: '/class-10/books/punjab-board-math/',
  index: true,
  follow: true,
  image: '/10th/book/punjab/class-10-math-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-10/books/punjab-board-math/',
  keywords: [
    'math class 10 punjab text book pdf',
    'class 10 math book pdf punjab board',
    '10th class math punjab text book',
    'math book class 10 punjab board',
    'class 10 math book punjab board',
  ],
  fileId_english: '1Wx5FABJn6wG8MI3Zy_VvDb-iEIRucNMb',
  fileId_urdu: '1-Xk0nSa02Dr9SE1Ep7gbUAqjkZ7lYOZr',
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
  b1: "9th Class"
}

export default function Page() {
  return (
    <SimpleWrapper
      data={data}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-10/books/punjab-board-math/${data.slug}-medium/`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a <strong>Class 10 math book punjab board</strong>?
        Here, you can access all the books you need for free. Our website offers
        a complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 10 Math Book English Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 Math Text Book in PDF Format for
        English Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 10th Class Math Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 Math Text Book in PDF Format for
        Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass10Book />
    </SimpleWrapper >
  )
}

const mainData = [
  {
    name: 'Class 10 Math Book PDF Punjab Board English Medium',
    slug: 'english',
  },
  {
    name: 'Math Class 10 Punjab Board Text Book PDF Urdu Medium',
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