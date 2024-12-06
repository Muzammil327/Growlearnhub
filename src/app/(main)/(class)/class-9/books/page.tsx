import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";
import Heading2 from "@/src/components/ui/typography/Heading2/page";
import { Class9BookData } from "@/src/data/class9";
import Heading3 from "@/src/components/ui/typography/Heading3/page";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";

const data = {
  title: "9th Class Books | Class 9",
  description:
    "Class 9 books page providing essential textbooks, study guides, and reference materials for comprehensive learning.",
  keywords: [
    "growlearnhub books",
    "growlearnhub class 9 books",
    "class 9 books",
    "9th class books",
    "9th class growlearnhub books",
  ],
  image: "/9th/class_9_book.webp",
  canonical: "/class-9/books/",
  url: "https://www.growlearnhub.com/class-9/books/",
  index: true,
  follow: true,
};

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2>fgh</Heading2>
      <MutedPara>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        laudantium molestiae temporibus ea necessitatibus, commodi excepturi,
        odio quae numquam ratione totam expedita blanditiis veniam aliquam.
        Impedit eveniet quia doloribus qui!
      </MutedPara>
      <div className="my-10">
        {Class9BookData.map((data: any) => {
          return (
            <div key={data.title}>
              <Heading3>{data.title}</Heading3>
              <MutedPara>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis iste et voluptatem consequuntur sequi, aspernatur rem
                itaque ipsa velit, provident eos, delectus exercitationem. Iusto
                facere consequuntur libero, iste similique accusantium?
              </MutedPara>
              <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-9/books/${data.slug}`}
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
