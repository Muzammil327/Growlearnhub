import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import PDFViewer from '@/src/components/element/PDFViewer'
import Link from 'next/link'
import DataClass10Book from '@/src/app/(main)/(class)/class-10/books/DataClass10Book'

const data = {
  title:
    '10th Pak Study Book PDF English Medium Download | Punjab',
  description:
    'Download the 10th Class Pak Study Book PDF in English Medium for free. Get the Punjab Board-approved textbook and explore chapter-wise downloads.',
  canonical: '/class-10/books/punjab-board-pak-study/english-medium/',
  index: true,
  follow: true,
  image: '/10th/book/punjab/class-10-pak-study-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-10/books/punjab-board-pak-study/english-medium/',
  keywords: [
    'pak study class 10 punjab text book pdf',
    'class 10 pak study book pdf punjab board',
    '10th class pak study punjab text book',
    'pak study book class 10 punjab board',
    '10th Class pak study Book PDF English Medium Free Download',
    'class 10 pak study book punjab board',
    'punjab text book pak study 10th class pdf english medium',
  ],
  fileId_english: '1OxabDGzPSag12NTwLY_daJIBcvrsXF8C',
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
      b1="Punjab Board Pak Study"
      b1Link="/class-10/books/punjab-board-pak-study/"
      b2="English Medium"
      image={data.image}
      clist={data.clist}
    >
      <h3>Pak Study 10th Class Book English Medium PDF Download Punjab Board</h3>
      <p>
        Are you looking for a <strong>Class 10 pak study book punjab board</strong>
        ? Here, you can access all the books of class 10 you need for free. Our
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
              Chapter Wise Download Pak Study Book
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
                  Chapter {data.id} Pak Study Book
                </th>
                <td className="px-6 py-4">
                  <Link href={data.link}>Download PDF English Medium</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p>
        Here, you can download Matric{' '}
        <strong>Pak Study 10th Class Book English Medium PDF </strong>
        Format. This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
      <DataClass10Book />
    </Wrapper>
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