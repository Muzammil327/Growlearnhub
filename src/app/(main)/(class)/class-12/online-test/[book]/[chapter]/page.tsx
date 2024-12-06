import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import { removeDashAndUppercase } from "@/src/lib/removeDashAndUppercase";
import React from "react";

interface McqsBookChapter {
  chapter: string;
  book: string;
}

interface PageProps {
  params: Promise<McqsBookChapter>;
}

let image = "/12th/class_12_online_test.webp";

export default async function page({ params }: PageProps) {
  const { book, chapter } = await params;
  const slug1 = book;
  const slug2 = chapter;
  const SlugRemoveDashAndUppercase1 = removeDashAndUppercase(slug1);
  const SlugRemoveDashAndUppercase2 = removeDashAndUppercase(slug2);

  return (
    <SimpleWrapper
      data={{
        title:
          "Class 12 " +
          SlugRemoveDashAndUppercase1 +
          " " +
          SlugRemoveDashAndUppercase2 +
          " " +
          "Online Test",
        canonical: `/class-12/online-test/${slug1}/${slug2}`,
        image: image,
        url: `https://growlearnhub.com/class-12/online-test/${slug1}/${slug2}`,
      }}
    ></SimpleWrapper>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { book, chapter } = await params;
  const slug1 = book;
  const slug2 = chapter;
  const SlugRemoveDashAndUppercase1 = removeDashAndUppercase(slug1);
  const SlugRemoveDashAndUppercase2 = removeDashAndUppercase(slug2);

  let url = `${process.env.NEXT_PUBLIC_SITE_URL}/class-12/online-test/${slug1}/${slug2}/`;
  let canonical = `/class-12/online-test/${slug1}/${slug2}/`;

  try {
    let title =
      "Class 12 " +
      SlugRemoveDashAndUppercase1 +
      " " +
      SlugRemoveDashAndUppercase2 +
      " " +
      "Online Test";
    let description =
      "Class 12" +
      " " +
      SlugRemoveDashAndUppercase1 +
      " " +
      SlugRemoveDashAndUppercase2 +
      " " +
      "Online Test page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.";
    let keywords = [
      "class 12 biology online test",
      "class 12 chemistry online test",
      "class 12 maths online test",
      "class 12 physics online test",
      "class 12 history online test",
      "class 12 geography online test",
    ];

    return {
      title: title,
      description: description,
      keywords: keywords,
      alternates: {
        canonical: canonical,
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
        description: description,
        url: url,
        images: [
          {
            url: image,
            alt: title,
          },
        ],
      },
      twitter: {
        title: title,
        description: description,
        images: {
          url: image,
          alt: title,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      title: "Error",
      description: "Unable to fetch product data",
      alternates: {
        canonical: canonical,
      },
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        title: "Error",
        description: "Unable to fetch product data",
        url: url,
        images: [
          {
            url: "/default-error-image.jpg",
            alt: "Error",
          },
        ],
      },
      twitter: {
        title: "Error",
        description: "Unable to fetch product data",
        images: {
          url: "/default-error-image.jpg",
          alt: "Error",
        },
      },
    };
  }
}
