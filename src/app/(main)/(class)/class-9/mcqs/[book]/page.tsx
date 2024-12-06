import React from "react"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import { removeDashAndUppercase } from "@/src/lib/removeDashAndUppercase"
import ShowChapter from "@/src/app/(main)/mcqs-point/_components/ShowChapter"

interface McqsBook {
  book: string
}

interface PageProps {
  params: Promise<McqsBook>;
}

let image = "/9th/class_9_mcqs.webp"

export default async function page({ params }: PageProps) {
  const { book } = await params;
  const slug = book
  const SlugRemoveDashAndUppercase = removeDashAndUppercase(slug);

  return (
    <SimpleWrapper data={{
      title: "Class 9 " + SlugRemoveDashAndUppercase + " " + "Mcqs",
      canonical: `/class-9/mcqs/${slug}`,
      image: image,
      url: `https://growlearnhub.com/class-9/mcqs/${slug}`,
    }}>
      <ShowChapter className="class-9" book={slug} />
    </SimpleWrapper>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { book } = await params;
  const slug = book
  let url = `${process.env.NEXT_PUBLIC_SITE_URL}/class-9/mcqs/${slug}/`;
  let canonical = `/class-9/mcqs/${slug}/`;

  const SlugRemoveDashAndUppercase = removeDashAndUppercase(slug);


  try {

    let title = "Class 9 " + SlugRemoveDashAndUppercase + " " + "Mcqs";
    let description = "Class 9" + " " + SlugRemoveDashAndUppercase + " " + "MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.";
    let keywords = [
      "class 9 biology mcqs",
      "class 9 chemistry mcqs",
      "class 9 maths mcqs",
      "class 9 physics mcqs",
      "class 9 history mcqs",
      "class 9 geography mcqs",
    ]

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
        url: url, images: [
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