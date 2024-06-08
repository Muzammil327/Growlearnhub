import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/books/BookWrapper'
import PDFViewer from '@/src/components/element/PDFViewer'

import { class_Book } from '@/src/app/books/type'
import { Class10_Book } from '@/src/app/books/class-10/data'

const data = {
  title: 'Class 10 Economics Book Punjab Board',
  description:
    'Here you can access class 10 Economics Book Punjab Board in urdu medium available in this website.',
  canonical: '/books/class-10/punjab-board-economics/',
  index: true,
  follow: true,
  image: '/9th/book/biology/Download-Punjab-Board-Biology-Book.webp',
  url: 'https://growlearnhub.com/books/class-10/punjab-board-economics/',
  urdu_medium: '1PoWPI_ojcRLmk1ZFFYBgKM8g4dMejrOL',
  keywords: [
    'economics class 10',
    'class 10 economics book',
    '10 class book economics',
    'class 10th economics book pdf',
    'class 10 economics pdf',
    'class ten economics book',
    '10th class economics book pdf',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      b1Link="/books/"
      b2="10th class TextBook"
      b2Link="/books/class-10/"
      b3="Punjab Board Economics"
    >
      <p>
        Are you looking for a{' '}
        <strong>Class 10 Economics book punjab board</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <p>
        Welcome to our Educational Hub, an innovative platform designed for high
        school student in Class 9 to 12, Chartered Accountancy (CA), and Virtual
        University learners to fulfil academic needs. Our mission is to provide
        a one-stop solution for all your educational requirements, empowering
        you to achieve excellence in your studies and professional goals.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 10 Economics Book of Urdu Medium"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h3>Download 10th Class Economics Textbook Urdu Medium Punjab Board</h3>
      <p>
        Here, you can download Matric class 10 Economics Text Book in PDF Format
        for Urdu Medium. This book is officially published by Punjab Text Book
        Board.
      </p>
      <PDFViewer pdfUrl={data.urdu_medium} />
      {Class10_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 10 Books
            </h3>
            <p>
              Our collection of <strong>Class 10 Textbooks</strong> of Punjab
              Baord encompasses all subjects included Physics, Biology,
              Chemistry, Math, English, Urdu, Pak Study, Islamiat, General Math,
              Computer Science, Economics, Tarjuma Tul Quran, Ikhlaqiat,
              ensuring you have the resources you need to succeed.
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
