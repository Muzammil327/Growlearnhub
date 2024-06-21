import React from 'react'
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'
import Heading1View from '@/src/views/quizView/bookNameView/Heading1View/page'

interface IpropsbookName {
  bookName: string
  heading1: string
}
interface Iprops {
  params: IpropsbookName
}

export default function Page({ params }: Iprops) {
  return (
    <>
      <Heading1View bookName={params.bookName} heading1={params.heading1} />
    </>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedBookName = convertToUppercaseWithSpace(params.bookName)
  const capitalizedHeading1 = convertToUppercaseWithSpace(params.heading1)
  const title = capitalizedBookName + ' ' + capitalizedHeading1
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
