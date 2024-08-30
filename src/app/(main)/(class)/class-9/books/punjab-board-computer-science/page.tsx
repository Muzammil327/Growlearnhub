import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import PDFViewer from '@/src/components/element/PDFViewer'
import DataClass9Book from '@/src/app/(main)/(class)/class-9/books/DataClass9Book'

const data = {
  title: 'Computer Science Class 9 Book PDF | 9th Class Punjab Text Book',
  description:
    'Download the official Computer Science Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.',
  canonical: '/class-9/books/punjab-board-computer-science/',
  index: true,
  follow: true,
  image: '/9th/book/punjab/class-9-computer-science-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/books/punjab-board-computer-science/',
  keywords: [
    'computer science class 9 punjab text book pdf',
    'class 9 computer science book pdf punjab board',
    '9th class computer science punjab text book',
    'computer science book class 9 punjab board',
    'class 9 computer science book punjab board',
  ],
  fileId_english: '1o5fPLG7_lTK2sAs5smLAgJEopLTf8fsR',
  fileId_urdu: '1dSyB9KxtY59L541KRu55BmWEVbmy6rnz',
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
      b1Link="/class-9/books/"
      b2="Punjab Board Computer Science"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/books/punjab-board-computer-science/${data.slug}-medium/`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a{' '}
        <strong>Class 9 computer science book punjab board</strong>? Here, you
        can access all the books you need for free. Our website offers a
        complete collection of books for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>
        Download Class 9 Computer Science Book English Medium Punjab Board
      </h3>
      <p>
        Here, you can download Matric class 9 Computer Science Text Book in PDF
        Format for English Medium. This book is officially published by Punjab
        Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>
        Download 9th Class Computer Science Textbook Urdu Medium Punjab Board
      </h3>
      <p>
        Here, you can download Matric class 9 Computer Science Text Book in PDF
        Format for Urdu Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass9Book />
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Class 9 Computer Science Book PDF Punjab Board English Medium',
    slug: 'english',
  },
  {
    name: 'Computer Science Class 9 Punjab Board Text Book PDF Urdu Medium',
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
