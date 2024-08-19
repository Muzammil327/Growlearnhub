import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'Biology 10th Class Book Urdu Medium PDF Download | Punjab Board',
  description:
    'Download the 10th Class Biology book in Urdu Medium PDF, approved by the Punjab Board. Get the complete syllabus with detailed explanations and diagrams for effective exam preparation.',
  canonical: '/class-10/books/punjab-board-biology/urdu-medium/',
  index: true,
  follow: true,
  image: '/books/class-10/punjab/class-10-biology-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-10/books/punjab-board-biology/urdu-medium/',
  keywords: [
    'biology class 10 punjab text book pdf',
    'class 10 biology book pdf punjab board',
    '10th class biology punjab text book',
    'biology book class 10 punjab board',
    'class 10 biology book punjab board',
    'Biology 10th Class Book Urdu Medium PDF Download Punjab Board',
  ],
  fileId_urdu: '1ty3cPG8aWvjPla3xJAT4F__bLNJHKiZv',
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="9th Class"
      b1Link="/class-11/"
      b2="Books"
      b2Link="/class-11/books/"
      b3="Punjab Board Biology"
      b3Link="/class-11/books/punjab-board-biology/"
      b4="Biology 11th Class Book Urdu Medium"
      image={data.image}
    >
      <h3>Biology 11th Class Book Urdu Medium PDF Download Punjab Board</h3>
      <p>
        Here, you can download Matric{' '}
        <strong>Biology 11th Class Book Urdu Medium PDF</strong>
        Format. This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />
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
