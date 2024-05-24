import React from 'react';
import BookNameView from '@/src/views/quizView/bookNameView/page';
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace';
import { IpropsbookName } from '@/src/types/page';

interface Iprops {
  params: IpropsbookName;
}

export default function Page({ params }: Iprops) {
  return (
    <>
      <BookNameView bookName={params.bookName} />
    </>
  );
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedBookName = convertToUppercaseWithSpace(params.bookName);
  const title = capitalizedBookName + ' ' + 'Quiz';
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
  };
}
