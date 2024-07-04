import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/(class)/BookWrapper'
import PDFViewer from '@/src/components/element/PDFViewer'

import { class_Book } from '@/src/app/books/type'
import { Class9_Notes } from '../data'
import Link from 'next/link'

const data = {
  title: 'Class 9 Math Notes PDF Punjab Board',
  description:
    'Here you can access class 9 Math Notes PDF Punjab Board in english and urdu medium available in this website.',
  canonical: '/class-9/notes/punjab-board-math/',
  index: true,
  follow: true,
  image: '/books/class-9/punjab/class-9-physics-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/notes/punjab-board-math/',
  english_medium: '1my_m9qLxXF3LCw4eCFlCJGexOmsazJmg',
  urdu_medium: '1_cp-urrPMokhCSCExs-B8uEujlIfqDjd',
  keywords: [
    '9 class notes math',
    '9 class math notes pdf',
    'phy class 9',
    'class 9 math notes',
    'class 9th math notes pdf',
    'class 9 math pdf',
    'class nine math notes',
    '9th class math notes pdf',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="9 Class"
      b1Link="/class-9/"
      b2="Notes"
      b2Link="/class-9/notes/"
      b3="Punjab Board Math"
      clist={clist}
    >
      <p>
        Are you looking for a{' '}
        <strong>9th Class Math notes punjab board</strong>? Here, you can
        access all the notes you need for free. Our website offers a complete
        collection of notes for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access 9 Class Math Notes of english and Urdu Medium"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h2>Download 9th Class Math Notes PDF English Medium Punjab Board</h2>
      <p>
        Here, you can download Matric class 9 Math Notes in PDF Format for
        English Medium.
      </p>
      <PDFViewer pdfUrl={data.english_medium} />

      <ul>
        <li>
          <Link href="/">Download PDF Chapter 1</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 2</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 3</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 4</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 5</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 6</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 7</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 8</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 9</Link>
        </li>
      </ul>

      {Class9_Notes.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 9 Notes
            </h3>
            <p>
              Our collection of <strong>9 Class Notes</strong> of Punjab Baord
              encompasses all subjects included Physics, Biology, Chemistry,
              Math, English, Urdu, Pak Study, Islamiat, General Math, Computer
              Science, Economics, Tarjuma Tul Quran, Ikhlaqiat, ensuring you
              have the resources you need to succeed.
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
    title: 'Class 10 Physics Notes',
    link: '/class-10/notes/punjab-board-physics/',
  },
  {
    title: 'Class 10th Chemistry Notes',
    link: '/class-10/notes/punjab-board-chemistry/',
  },
  {
    title: '10 class Biology Notes',
    link: '/class-10/notes/punjab-board-biology/',
  },
  {
    title: '10th class Math Notes',
    link: '/class-10/notes/punjab-board-math/',
  },
  {
    title: 'Class 11 Physics Notes',
    link: '/class-11/notes/punjab-board-physics/',
  },
  {
    title: 'Class 11th Chemistry Notes',
    link: '/class-11/notes/punjab-board-chemistry/',
  },
  {
    title: '11 class Biology Notes',
    link: '/class-11/notes/punjab-board-biology/',
  },
  {
    title: '11th class Math Notes',
    link: '/class-11/notes/punjab-board-math/',
  },
  {
    title: 'Class 12 Physics Notes',
    link: '/class-12/notes/punjab-board-physics/',
  },
  {
    title: 'Class 12th Chemistry Notes',
    link: '/class-12/notes/punjab-board-chemistry/',
  },
  {
    title: '12 class Biology Notes',
    link: '/class-12/notes/punjab-board-biology/',
  },
  {
    title: '12th class Math Notes',
    link: '/class-12/notes/punjab-board-math/',
  },
]
