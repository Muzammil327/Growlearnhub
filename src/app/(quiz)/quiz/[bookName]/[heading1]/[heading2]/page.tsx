import React from 'react'
import IdView from '@/src/views/quizView/bookNameView/Heading1View/Heading2View/page'
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'

interface IpropsbookName {
  bookName: string
  heading1: string
  heading2: string
}
interface Iprops {
  params: IpropsbookName
}

export default async function Page({ params }: Iprops) {
  return (
    <IdView
      bookName={params.bookName}
      heading1={params.heading1}
      heading2={params.heading2}
    />
  )
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedBookName = convertToUppercaseWithSpace(params.heading1)
  const capitalizedIdView = convertToUppercaseWithSpace(params.heading2)
  const title = capitalizedBookName + ' - ' + capitalizedIdView
  return {
    title: title,
    alternates: {
      canonical: `quiz/${params.bookName}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: title,
      url: `https://growlearnhub.com/quiz/${params.bookName}`,
      images: [
        {
          alt: title,
        },
      ],
    },
    twitter: {
      title: title,
      images: {
        alt: title,
      },
    },
  }
}
