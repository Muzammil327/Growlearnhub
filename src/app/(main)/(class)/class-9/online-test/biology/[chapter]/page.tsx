import OnlineTestChapterWrapper from "@/src/components/Wrapper/onlineTest/OnlineTestChapterWrapper"
import { convertToUppercaseAndReplaceHyphens } from "@/src/functions/slugify"
import Class9OnlineTestBookData from "@/src/app/(main)/(class)/class-9/online-test/data/Class9OnlineTestBookData"
import { Class9OnlineTestChapterData } from "@/src/app/(main)/(class)/class-9/online-test/data/Class9OnlineTestChapterData"

interface Iprops {
  params: {
    chapter: string
  }
}

const Quiz = ({ params }: Iprops) => {
  const paramdata = convertToUppercaseAndReplaceHyphens(params.chapter)

  return (
    <OnlineTestChapterWrapper
      title={`Class 9 Biology Online Test ${paramdata}`}
      canonical={`/class-9/online-test/biology/${params.chapter}/`}
      b1="Biology"
      b1Link="/class-9/online-test/biology"
      paramdata={paramdata}
      image={
        params.chapter === "chapter-1"
          ? "/9th/online-test/biology/class-9-biology-online-test-chapter-1.webp"
          : params.chapter === "chapter-2"
            ? "/9th/online-test/biology/class-9-biology-online-test-chapter-2.webp"
            : params.chapter === "chapter-3"
              ? "/9th/online-test/biology/class-9-biology-online-test-chapter-3.webp"
              : params.chapter === "chapter-4"
                ? "/9th/online-test/biology/class-9-biology-online-test-chapter-4.webp"
                : params.chapter === "chapter-5"
                  ? "/9th/online-test/biology/class-9-biology-online-test-chapter-5.webp"
                  : params.chapter === "chapter-6"
                    ? "/9th/online-test/biology/class-9-biology-online-test-chapter-6.webp"
                    : params.chapter === "chapter-7"
                      ? "/9th/online-test/biology/class-9-biology-online-test-chapter-7.webp"
                      : params.chapter === "chapter-8"
                        ? "/9th/online-test/biology/class-9-biology-online-test-chapter-8.webp"
                        : params.chapter === "chapter-9"
                          ? "/9th/online-test/biology/class-9-biology-online-test-chapter-9.webp"
                          : undefined
      } //
      clist={[
        { name: "Class 9 Books", slug: "/class-9/books/" },
        { name: "Class 10 Books", slug: "/class-10/books/" },
        { name: "Class 11 Books", slug: "/class-11/books/" },
        { name: "Class 12 Books", slug: "/class-12/books/" },
        { name: "Class 9 Mcqs", slug: "/class-9/mcqs/" },
        { name: "Class 10 Mcqs", slug: "/class-10/mcqs/" },
        { name: "Class 11 Mcqs", slug: "/class-11/mcqs/" },
        { name: "Class 12 Mcqs", slug: "/class-12/mcqs/" },
        { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
        { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
        { name: "Class 12 Online Test", slug: "/class-12/online-test/" }
      ]}
      cat={
        params.chapter === "chapter-1"
          ? ["class 9", "biology", "ch1"]
          : params.chapter === "chapter-2"
            ? ["class 9", "biology", "ch2"]
            : params.chapter === "chapter-3"
              ? ["class 9", "biology", "ch3"]
              : params.chapter === "chapter-4"
                ? ["class 9", "biology", "ch4"]
                : params.chapter === "chapter-5"
                  ? ["class 9", "biology", "ch5"]
                  : params.chapter === "chapter-6"
                    ? ["class 9", "biology", "ch6"]
                    : params.chapter === "chapter-7"
                      ? ["class 9", "biology", "ch7"]
                      : params.chapter === "chapter-8"
                        ? ["class 9", "biology", "ch8"]
                        : params.chapter === "chapter-9"
                          ? ["class 9", "biology", "ch9"]
                          : []
      }
    >
      <Class9OnlineTestChapterData slug="biology" />
      <Class9OnlineTestBookData />
    </OnlineTestChapterWrapper>
  )
}

export default Quiz

export async function generateMetadata({ params }: Iprops) {
  const paramdata = convertToUppercaseAndReplaceHyphens(params.chapter)

  const title = `Class 9 Biology Online Test ${paramdata}`
  const description = `Class 9 Biology Online Test ${paramdata}`
  const image =
    params.chapter === "chapter-1"
      ? "/9th/online-test/biology/class-9-biology-online-test-chapter-1.webp"
      : params.chapter === "chapter-2"
        ? "/9th/online-test/biology/class-9-biology-online-test-chapter-2.webp"
        : params.chapter === "chapter-3"
          ? "/9th/online-test/biology/class-9-biology-online-test-chapter-3.webp"
          : params.chapter === "chapter-4"
            ? "/9th/online-test/biology/class-9-biology-online-test-chapter-4.webp"
            : params.chapter === "chapter-5"
              ? "/9th/online-test/biology/class-9-biology-online-test-chapter-5.webp"
              : params.chapter === "chapter-6"
                ? "/9th/online-test/biology/class-9-biology-online-test-chapter-6.webp"
                : params.chapter === "chapter-7"
                  ? "/9th/online-test/biology/class-9-biology-online-test-chapter-7.webp"
                  : params.chapter === "chapter-8"
                    ? "/9th/online-test/biology/class-9-biology-online-test-chapter-8.webp"
                    : params.chapter === "chapter-9"
                      ? "/9th/online-test/biology/class-9-biology-online-test-chapter-9.webp"
                      : undefined

  return {
    title: title,
    description: description,
    keywords: [
      "class 9",
      "biology",
      "chapter 1",
      "chapter 2",
      "chapter 3",
      "chapter 4",
      "chapter 5",
      "chapter 6",
      "chapter 7",
      "chapter 8",
      "chapter 9",
      "online test"
    ],
    alternates: {
      canonical: `class-9/online-test/biology/${params.chapter}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://growlearnhub.com/class-9/online-test/biology/${params.chapter}`,
      images: [
        {
          src: image,
          alt: title
        }
      ]
    },
    twitter: {
      title: title,
      description: description,

      images: {
        src: image,
        alt: title
      }
    }
  }
}