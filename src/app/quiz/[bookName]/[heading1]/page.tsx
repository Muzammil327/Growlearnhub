import React from "react";
import Heading1View from "@/src/views/quizView/bookNameView/Heading1View/page";
import { convertToUppercaseWithSpace } from "@/src/views/function/convertToUppercaseWithSpace";
import { IpropsHeading1 } from "@/src/types/page";

interface Iprops {
  params: IpropsHeading1;
}

export default function Page({ params }: Iprops) {
  return (
    <>
      <Heading1View bookName={params.bookName} heading1={params.heading1} />
    </>
  );
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedBookName = convertToUppercaseWithSpace(params.bookName);
  const capitalizedHeading1 = convertToUppercaseWithSpace(params.heading1);
  const title = capitalizedHeading1 + " " + capitalizedBookName + " " + "Quiz";
  return {
    title: title,
    alternates: {
      canonical: `quiz/${params.bookName}/${params.heading1}`,
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
      url: `https://growlearnhub.com/quiz/${params.bookName}/${params.heading1}`,
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
