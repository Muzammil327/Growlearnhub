import Card3 from '@/src/components/card2/card3'
import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'
import Form from '@/src/components/element/form/page'
import Image from 'next/image'

const data = {
  title: 'VU Handouts Grow Learn Hub',
  description:
    'Here you download handouts of vu of all semster containing cs101, cs201, cs301, mth104, mth301 etc..',
  canonical: '/vu/handouts/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/handouts/',
  keywords: ['growlearnhub vu', 'vu'],
}

export default function Page() {
  return (
    <VUWrapper title="VU Handouts">
      <div className="my-10">
        <h2>Welcome to the VU Handouts Grow Learnhub</h2>
        <p>
          Are you looking for a <strong>VU Handouts</strong>? Here, you can
          access all the handouts you need for free. Our website offers a
          complete collection of handouts for students of Virtual University.
          Whether you&apos;re preparing for exams or need extra resources like
          quiz, assignment, GDB mid term and final term, we&apos;ve got you
          covered.
        </p>
        <Image
          src="/vu/vu_mid_mark_calculator.png"
          alt="VU Handouts"
          title="VU Handouts"
          height="720"
          width="1280"
        />
        <p>
          Welcome to our Educational Hub, an innovative platform designed for
          high school student in Class 9 to 12, Chartered Accountancy (CA), and
          Virtual University learners to fulfil academic needs. Our mission is
          to provide a one-stop solution for all your educational requirements,
          empowering you to achieve excellence in your studies and professional
          goals.
        </p>
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
          <Card3 title="CS101 Handout" link="/vu/handouts/cs101/" />
          <Card3 title="CS201 Handout" link="/vu/handouts/cs201/" />
          <Card3 title="CS302 Handout" link="/vu/handouts/cs302/" />
          <Card3 title="ENG201 Handout" link="/vu/handouts/eng201/" />
          <Card3 title="MGT211 Handout" link="/vu/handouts/mgt211/" />
          <Card3 title="MTH104 Handout" link="/vu/handouts/mth104/" />
          <Card3 title="MTH301 Handout" link="/vu/handouts/mth301/" />
        </div>
        <p>
          Here, you can download all handouts in PDF Format for English Medium.
          This book is officially published by Virtual University.
        </p>
        <h3>Handouts of Virtual University:</h3>
        <p>
          Our collection of <strong>VU Handout</strong> encompasses all subjects
          included cs201, cs301, mth104, mth301 ensuring you have the resources
          you need to succeed.
        </p>
        <Form url={data.url} />
      </div>
    </VUWrapper>
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
