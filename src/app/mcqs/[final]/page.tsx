import React from "react";
import FinalView from "@/src/views/quizView/bookNameView/Heading1View/Heading2View/finalView/page";
import { IpropsFinal } from "@/src/types/page";
import { GetMcqsUserSlug } from "../../constant";

interface Iprops {
  params: IpropsFinal;
}

export default function Page({ params }: Iprops) {
  return (
    <>
      <FinalView final={params.final} />
    </>
  );
}

export async function generateMetadata({ params }: Iprops) {

  const response1 = await fetch(`${GetMcqsUserSlug}/${params.final}`);
  const data = await response1.json();
  return {
    title: data.title,
    description: data.description,
    keywords: data.options,
    alternates: {
      canonical: `mcqs/${params.final}`,
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
      title: data.title,
      description: data.description,
      url: `mcqs/${params.final}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/${data.image}`,
          alt: data.title,
        },
      ],
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: {
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/${data.image}`,
        alt: data.title,
      },
    },
  };
}
