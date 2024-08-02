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
  url: 'https://growlearnhub.com/vu/mid-term/mgt211/definitions/',
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
        {datas.map((data: any) => {
          return (
            <Definition
              title={data.title}
              para={data.para}
              slug={data.slug}
              key={data.id}
            />
          )
        })}
      </div>
    </VUWrapper>
  )
}

const datas = [
  {
    id: 0,
    title: '',
    para: '',
    slug: '',
  },
]

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
