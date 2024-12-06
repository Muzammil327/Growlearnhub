import React from "react";
import { Metadata } from "next";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import { PhysicsMcqsSubjectData } from "@/src/data/mcqs";
import { SmallCardProps } from "@/src/types/CardType";

const data = {
  title: "Physics Solved Mcqs Topic Wise",
  description:
    "Here you can get solved mcqs topic wise of physics like optics, electromagnetism, thermodynamics, quantum physics, and mechanics.",
  canonical: "/mcqs-point/physics/",
  index: true,
  follow: true,
  image: "/mcqs_point/physics_mcqs_point.png",
  url: "https://www.growlearnhub.com/mcqs-point/physics/",
  keywords: ["mcqs", "quiz", "mcqs physics", "physics mcqs"],
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PhysicsMcqsSubjectData.map((book: SmallCardProps) => (
          <CardSmall
            key={book.title}
            title={book.title}
            link={`mcqs-point/physics/${book.link}`}
          />
        ))}
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
