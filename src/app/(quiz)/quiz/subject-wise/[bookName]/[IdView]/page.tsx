import React from "react";
import IdView from "@/src/views/quizView/bookNameView/Heading1View/Heading2View/page";
import { convertToUppercaseWithSpace } from "@/src/views/function/convertToUppercaseWithSpace";

interface IpropsbookName {
  bookName: string;
  IdView: string;
}
interface Iprops {
  params: IpropsbookName;
}

export default async function Page({ params }: Iprops) {
  return <IdView bookName={params.bookName} heading1={params.IdView} />;
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedBookName = convertToUppercaseWithSpace(params.bookName);
  const capitalizedIdView = convertToUppercaseWithSpace(params.IdView);
  const title = capitalizedBookName + " " + capitalizedIdView + " " + "Quiz";
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
