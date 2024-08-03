import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'
import Form from '@/src/components/element/form/page'
import Image from 'next/image'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'VU MGT211 Handouts Pdf Download',
  description:
    'Here you download handouts of vu of mgt211 handouts pdf, also get mid and final term assignmnet, gdb of cs101.',
  canonical: '/vu/handouts/mgt211/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/handouts/mgt211/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'MGT211',
    'MGT211 handout',
    'MGT211 vu',
    'MGT211 vu handout',
  ],
  book: '1Long1Eiq5Lhd1vtMgQ8ozlQ3SnSSPkRW',
}

export default function Page() {
  return (
    <VUWrapper title="VU MGT211 Handouts Pdf Download">
      <div className="my-10">
        <h2>Welcome to the VU MGT211 Pdf Handouts Download</h2>
        <p>
          Are you looking for a <strong>VU MGT211 Handouts</strong>? You can
          download in free mgt211 handouts in PDF format. Here, you can access
          all the handouts you need for free. Our website offers a complete
          collection of handouts for students of Virtual University. Whether
          you&apos;re preparing for exams or need extra resources like quiz,
          assignment, GDB mid term and final term, we&apos;ve got you covered.
        </p>
        <Image
          src="/vu/vu_mid_mark_calculator.png"
          alt="VU MGT211 Handouts"
          title="VU MGT211 Handouts"
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
        <h2 className="mt-5">Download MGT211 Handouts</h2>
        <p>
          Download handouts of <strong>VU MGT211 Handouts</strong> in free. Here
          you can get other handouts of all semester.
        </p>
        <PDFViewer pdfUrl={data.book} />
        <p>
          Here, you can download all handouts in PDF Format for English Medium.
          This book is officially published by Virtual University.
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
