import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import Heading2 from "@/src/components/ui/typography/Heading2/page";
import { Class9PairingSchemeData } from "@/src/data/class9";

const data = {
  title: "9th Class Pairing Scheme | Class 9",
  description:
    "Class 9 Pairing Scheme providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub pairing scheme",
    "growlearnhub class 9 pairing scheme",
    "pairing scheme",
    "class 9 pairing scheme",
    "9th class pairing scheme",
    "9th class growlearnhub pairing scheme",
  ],
  image: "/9th/class_9_pairing_scheme.webp",
  canonical: "/class-9/pairing-scheme/",
  url: "https://growlearnhub.com/class-9/pairing-scheme/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4">
        {Class9PairingSchemeData.map((data: any, index) => {
          return (
            <div key={index}>
              <Heading2 className="">{data.title}</Heading2>
              <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-9/pairing-scheme/${data.slug}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SimpleWrapper>
  );
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
};
