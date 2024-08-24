// 'use client'
// import React, { useEffect, useState } from 'react'
// import McqsWrapper from '@/src/components/Wrapper/McqsWrapper'
// import { supabase } from '@/src/util/db'
// import CardSmall from '@/src/components/card/cardSmall/cardSmall'

// interface Book {
//   id: string
//   name: string
//   slug: string
// }

// export default function Page() {
//   const [books, setBooks] = useState<Book[]>([])
//   const [error, setError] = useState<string>('')

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const { data: fetchedBooks, error } = await supabase
//           .from('book')
//           .select('name, id, slug, class:classId (slug)')
//         if (error) {
//           throw new Error('Error fetching books: ' + error.message)
//         }
//         if (fetchedBooks) {
//           // Filter data based on book name
//           const filteredBooks = fetchedBooks?.filter(
//             (item: any) => item.class.slug === 'class-9'
//           )
//           setBooks(filteredBooks)
//         }
//       } catch (error: any) {
//         setError(error.message)
//       }
//     }

//     fetchBooks()
//   }, [])
//   return (
//     <McqsWrapper
//       title="9th class Solved Mcqs Chapter Wise"
//       url={`/class-9/mcqs/`}
//       b1="9th Class"
//       b1Link="/class-9"
//       b2="Mcqs"
//     >
//       <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
//         {error
//           ? 'Error Fetching Books'
//           : books.map((book) => (
//               <CardSmall
//                 key={book.id}
//                 title={book.name}
//                 link={`/class-9/mcqs/${book.slug}`}
//               />
//             ))}
//       </div>
//     </McqsWrapper>
//   )
// }
import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: '9th Class Mcqs | Class 9',
  description:
    'Class 9 MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.',
  canonical: '/class-9/mcqs/',
  index: true,
  follow: true,
  image: '/mcqs-point/general-knowledge/general-knowledge-quiz.png',
  url: 'https://growlearnhub.com/class-9/mcqs/',
  keywords: [
    'growlearnhub mcqs',
    'growlearnhub class 9 mcqs',
    'class 9 mcqs',
    '9th class mcqs',
    '9th class growlearnhub mcqs',
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="9th Class"
      b1Link="/class-9/"
      b2="Mcqs"
      image={data.image}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/mcqs/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Biology',
    slug: '#',
  },
  {
    name: 'Chemistry',
    slug: '#',
  },
  {
    name: 'Physics',
    slug: '#',
  },
]

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
        url: 'https://nextjs.org/og.png',
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
      url: 'https://nextjs.org/og.png',
      alt: data.title,
    },
  },
}
