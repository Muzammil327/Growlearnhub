import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { vuData } from '@/src/data/vu'

const data = {
  title: 'Virtual University | Resources and Tips for Vu',
  description:
    'Virtual University resources and tips page offering study materials, exam guides, and effective learning strategies for VU students.',
  keywords: ['growlearnhub', 'growlearnhub vu', 'vu', 'virtual university'],
  image: '/vu.webp',
  canonical: '/vu/',
  url: 'https://growlearnhub.com/vu/',
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper
      data={data}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {vuData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`vu/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper >
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
