import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Virtual University Final Term Mcqs',
  description:
    'Final Term MCQs page offering extensive question banks, practice questions, answers, and detailed explanations to enhance learning.',
  canonical: '/vu/final-mcqs/',
  index: true,
  follow: true,
  image: '/vu/vu_final_term_mcqs.webp',
  url: 'https://growlearnhub.com/vu/final-mcqs/',
  keywords: [
    'growlearnhub',
    'final mcqs',
    'growlearnhub vu final mcqs',
    'vu final mcqs',
    'virtual university final mcqs',
  ],
  clist: [
    { name: 'Mid Term Mcqs', slug: '/vu/mid-mcqs/' },
    { name: 'Handouts', slug: '/vu/handouts/' },
    { name: 'Mid Mark Calculator', slug: '/vu/mid-mark-calculator/' },
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Virtual University"
      b1Link="/vu/"
      b2="Final Mcqs"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/final-mcqs/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'CS101 Final Mcqs',
    slug: '#',
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
