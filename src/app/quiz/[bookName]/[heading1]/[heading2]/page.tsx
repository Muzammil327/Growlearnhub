import React from "react";
import Heading2View from "@/src/views/quizView/bookNameView/Heading1View/Heading2View/page";
import { convertToUppercaseWithSpace } from "@/src/views/function/convertToUppercaseWithSpace";
import { IpropsHeading2 } from "@/src/types/page";

interface Iprops {
  params: IpropsHeading2;
}

export default function Page({ params }: Iprops) {
  return (
    <>
      <Heading2View
        bookName={params.bookName}
        heading1={params.heading1}
        heading2={params.heading2}
      />
    </>
  );
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedHeading1 = convertToUppercaseWithSpace(params.heading1);
  const capitalizedHeading2 = convertToUppercaseWithSpace(params.heading2);
  const title = capitalizedHeading1 + " " + capitalizedHeading2 + " " + "Quiz";
  return {
    title: title,
    alternates: {
      canonical: `quiz/${params.bookName}/${params.heading1}/${params.heading2}`,
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
      url: `https://growlearnhub.com/quiz/${params.bookName}/${params.heading1}/${params.heading2}`,
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
