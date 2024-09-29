import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import PDFViewer from '@/src/components/element/PDFViewer'
import Link from 'next/link'
import DataClass9Book from '@/src/app/(main)/(class)/class-9/books/DataClass9Book'

const data = {
  title: 'Math 9th Class Book Urdu Medium PDF Download | Punjab Board',
  description:
    'Download the 9th Class Math Book PDF in Urdu Medium for free. Get the Punjab Board-approved textbook and explore chapter-wise downloads.',
  canonical: '/class-9/books/punjab-board-math/urdu-medium/',
  index: true,
  follow: true,
  image: '/9th/book/punjab/class-9-math-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/books/punjab-board-math/urdu-medium/',
  keywords: [
    'math class 9 punjab text book pdf',
    'class 9 math book pdf punjab board',
    '9th class math punjab text book',
    'math book class 9 punjab board',
    'class 9 math book punjab board',
    'math 9th Class Book Urdu Medium PDF Download Punjab Board',
  ],
  fileId_urdu: '13Y8JmTqRvSsKUTCk6muXFG2ql-ef_AbZ',
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
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Punjab Board Math"
      b1Link="/class-9/books/punjab-board-math/"
      b2="Urdu Medium"
      image={data.image}
      clist={data.clist}
    >
      <h3>Math 9th Class Book Urdu Medium PDF Download Punjab Board</h3>
      <p>
        Are you looking for a <strong>Class 9 math book punjab board</strong>?
        Here, you can access all the books of class 9 you need for free. Our
        website offers a complete collection of books for students in Class 9,
        10, 11, and 12. Whether you&apos;re preparing for exams or need extra
        resources, we&apos;ve got you covered.
      </p>
      <table className="relative w-full">
        <thead>
          <tr className="bg-white border-b hover:bg-slate-100">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Chapter Wise Download Math Book
            </th>
            <td className="px-6 py-4"></td>
          </tr>
        </thead>
        <tbody>
          {chapterDATA.map((data: any) => {
            return (
              <tr
                className="bg-white border-b hover:bg-slate-100"
                key={data.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Chapter {data.id} Math Book
                </th>
                <td className="px-6 py-4">
                  <Link href={data.link}>Download PDF Urdu Medium</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p>
        Here, you can download Matric{' '}
        <strong>Math 9th Class Book Urdu Medium PDF </strong>
        Format. This book is officially published by Punjab Text Book Board.
      </p>

      <PDFViewer pdfUrl={data.fileId_urdu} />
      <DataClass9Book />
    </SimpleWrapper >
  )
}

const chapterDATA = [
  { id: '1', link: '#' },
  { id: '2', link: '#' },
  { id: '3', link: '#' },
  { id: '4', link: '#' },
  { id: '5', link: '#' },
  { id: '6', link: '#' },
  { id: '7', link: '#' },
  { id: '8', link: '#' },
  { id: '9', link: '#' },
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
