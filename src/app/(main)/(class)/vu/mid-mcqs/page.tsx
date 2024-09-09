import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Virtual University Mid Term Mcqs',
  description:
    'Mid Term MCQs page offering extensive question banks, practice questions, answers, and detailed explanations to enhance learning.',
  canonical: '/vu/mid-mcqs/',
  index: true,
  follow: true,
  image: '/vu/vu_mid_term_mcqs.webp',
  url: 'https://growlearnhub.com/vu/mid-mcqs/',
  keywords: [
    'growlearnhub',
    'mid mcqs',
    'growlearnhub vu mid mcqs',
    'vu mid mcqs',
    'virtual university mid mcqs',
  ],
  clist: [
    { name: 'Final Term Mcqs', slug: '/vu/final-mcqs/' },
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
      b2="Mid Mcqs"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/mid-mcqs/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: "CS101 Mid Mcqs",
    slug: "/vu/mid-mcqs/cs101/"
  },
  {
    name: "CS201 Mid Mcqs",
    slug: "/vu/mid-mcqs/cs201/"
  },
  {
    name: "CS302 Mid Mcqs",
    slug: "/vu/mid-mcqs/cs302/"
  },
  {
    name: "ENG201 Mid Mcqs",
    slug: "/vu/mid-mcqs/eng201/"
  },
  {
    name: "MGT211 Mid Mcqs",
    slug: "/vu/mid-mcqs/mgt211/"
  }
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
