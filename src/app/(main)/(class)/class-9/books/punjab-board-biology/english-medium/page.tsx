import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import PDFViewer from '@/src/components/element/PDFViewer'
import Link from 'next/link'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { MainDataClass9Book } from '../../data'

const data = {
  title: 'Punjab Text Book Biology 9th Class PDF English Medium',
  description:
    'Download the Punjab Text Book for 9th Class Biology in English Medium PDF format. You can Access other books of class 9 punjab board english and urdu medium, chapterwise also.',
  canonical: '/class-9/books/punjab-board-biology/english-medium/',
  index: true,
  follow: true,
  image: '/books/class-9/punjab/class-9-biology-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/books/punjab-board-biology/english-medium/',
  keywords: [
    'biology class 9 punjab text book pdf',
    'class 9 biology book pdf punjab board',
    '9th class biology punjab text book',
    'biology book class 9 punjab board',
    'class 9 biology book punjab board',
    'punjab text book biology 9th class pdf english medium',
  ],
  fileId_english: '1MFRZ5yO0SrrfTkAM_ewXBp_Pec4zTOA-',
  clist: [
    {
      id: 0,
      name: 'Class 10 Books',
      slug: '/class-10/books/',
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
      name: 'Class 10 Mcqs',
      slug: '/class-10/mcqs/',
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
      b1="9th Class"
      b1Link="/class-9/"
      b2="Books"
      b2Link="/class-9/books/"
      b3="Punjab Board Biology"
      b3Link="/class-9/books/punjab-board-biology/"
      b4="Biology 9th Class Book English Medium"
      image={data.image}
      clist={data.clist}
    >
      <h3>Biology 9th Class Book English Medium PDF Download Punjab Board</h3>
      <p>
        Are you looking for a <strong>Class 9 biology book punjab board</strong>
        ? Here, you can access all the books of class 9 you need for free. Our
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
              Chapter Wise Download Biology Book
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
                  Chapter {data.id} Biology Book
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
        <strong>Biology 9th Class Book English Medium PDF </strong>
        Format. This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
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
