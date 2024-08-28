import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import PDFViewer from '@/src/components/element/PDFViewer'
import { MainDataClass9Book } from '../data'

const data = {
  title: 'Physics Class 9 Book PDF | 9th Class Punjab Text Book',
  description:
    'Download the official Physics Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.',
  canonical: '/class-9/books/punjab-board-physics/',
  index: true,
  follow: true,
  image: '/9th/book/punjab/class-9-physics-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/books/punjab-board-physics/',
  keywords: [
    'physics class 9 punjab text book pdf',
    'class 9 physics book pdf punjab board',
    '9th class physics punjab text book',
    'physics book class 9 punjab board',
    'class 9 physics book punjab board',
  ],
  fileId_english: '1my_m9qLxXF3LCw4eCFlCJGexOmsazJmg',
  fileId_urdu: '1_cp-urrPMokhCSCExs-B8uEujlIfqDjd',
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
      b2="Punjab Board Physics"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/books/punjab-board-physics/${data.slug}-medium/`}
            />
          )
        })}
      </div>
      <p>
        Are you looking for a <strong>Class 9 physics book punjab board</strong>
        ? Here, you can access all the books you need for free. Our website
        offers a complete collection of books for students in Class 9, 10, 11,
        and 12. Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 9 Physics Book English Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Physics Text Book in PDF Format
        for English Medium. This book is officially published by Punjab Text
        Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <h3>Download 9th Class Physics Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Physics Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />

      {MainDataClass9Book.map((data: any) => {
        return (
          <div key={data.title}>
            <h2 className="">{data.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
              {data.child.map((data: any) => {
                return (
                  <CardSmall
                    key={data.name}
                    title={data.name}
                    link={`/class-9/books/punjab-board-${data.slug}`}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Class 9 Physics Book PDF Punjab Board English Medium',
    slug: 'english',
  },
  {
    name: 'Physics Class 9 Punjab Board Text Book PDF Urdu Medium',
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
