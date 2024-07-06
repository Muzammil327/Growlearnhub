import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'
import Link from 'next/link'

const data = {
  title: 'VU CS201 Mid Term Definitions',
  description:
    'Here you get cs201 mid term containing definitions, mcqs chapter wise, definitions, important topic.',
  canonical: '/vu/mid-term/cs201/definitions/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs201/definitions/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'cs201 definitions',
    'mid term cs201',
    'mid term cs201 definitions',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term MCQ's">
      <div className="my-20">
        <Definition
          title="What is Compiler."
          para="Compiler read the whole program and translates it into machine language completely."
          slug="/vu/mid-term/cs201/definitions/what-is-compiler/"
        />
        <Definition
          title="What is Interpreter."
          para="Interpreters translates the program line by line meaning it reads one line of program and translates it, then it reads second line, translate it and so on."
          slug="/vu/mid-term/cs201/definitions/what-is-interpreter/"
        />
        <Definition
          title="What is pointer."
          para="Pointer is a special type of variable that contains a memory address. It is not a variable that contains a value, rather an address of the memory that is contained inside a pointer variable."
          slug="/vu/mid-term/cs201/definitions/what-is-pointer/"
        />
        <Definition
          title="What is references."
          para="A reference can be considered as a special type of pointer as it also contains memory address."
          slug="/vu/mid-term/cs201/definitions/what-is-reference/"
        />
      </div>
    </VUWrapper>
  )
}

function Definition({
  title,
  para,
  slug,
}: {
  title: string
  para: string
  slug: string
}) {
  return (
    <div>
      <hr className="py-4" />
      <Link href={slug}>
        <h2>{title}</h2>
      </Link>
      <p className="text-medium"> {para}</p>
    </div>
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
