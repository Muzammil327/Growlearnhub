import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'
import FinalView from '@/src/views/quizView/bookNameView/Heading1View/Heading2View/finalView/page'
import React from 'react'

interface IpropsbookName {
  finalView: string
}
interface Iprops {
  params: IpropsbookName
}

export default async function Page({ params }: Iprops) {
  return (
    <>
      <FinalView final={params.finalView} />
    </>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedFinalView = convertToUppercaseWithSpace(params.finalView)

  return {
    title: capitalizedFinalView,
    alternates: {
      canonical: `quizCenter/${params.finalView}`,
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
      title: capitalizedFinalView,
      url: `https://growlearnhub.com/quizCenter/${params.finalView}`,
      images: [
        {
          alt: capitalizedFinalView,
        },
      ],
    },
    twitter: {
      title: capitalizedFinalView,
      images: {
        alt: capitalizedFinalView,
      },
    },
  }
}
