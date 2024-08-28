// import React from 'react'
// import { Metadata } from 'next'

// import Card3 from '@/src/components/card2/card3'
// import ImageContainer from '@/src/components/element/image'
// import BookWrapper from '@/src/app/books/BookWrapper'
// import PDFViewer from '@/src/components/element/PDFViewer'

// import { class_Book } from '@/src/app/books/type'
// import { Class9_Book } from '@/src/app/books/class-9/data'

// const data = {
//   title: 'Class 9 Tarjuma Tul Quran Book Punjab Board',
//   description:
//     'Here you can access class 9 Tarjuma Tul Quran Book Punjab Board in urdu medium available in this website.',
//   canonical: '/books/class-9/punjab-board-tarjuma-tul-quran/',
//   index: true,
//   follow: true,
//   image: '/9th/book/biology/Download-Punjab-Board-Biology-Book.webp',
//   url: 'https://growlearnhub.com/books/class-9/punjab-board-tarjuma-tul-quran/',
//   urdu_medium: '1qKP8ytj1ahOqFTE-y9oul_nFytNWtd6F',
//   keywords: [
//     'Tarjuma Tul Quran class 9',
//     'class 9 Tarjuma Tul Quran book',
//     '9 class book Tarjuma Tul Quran',
//     'class 9th Tarjuma Tul Quran book pdf',
//     'class 9 Tarjuma Tul Quran pdf',
//     'class nine Tarjuma Tul Quran book',
//     '9th class Tarjuma Tul Quran book pdf',
//   ],
// }

// export default function page() {
//   return (
//     <BookWrapper
//       title={data.title}
//       url={data.url}
//       b1="Books"
//       b1Link="/books/"
//       b2="9th class TextBook"
//       b2Link="/books/class-9/"
//       b3="Punjab Board Tarjuma Tul Quran"
//     >
//       <p>
//         Are you looking for a <strong>Class 9 Tarjuma Tul Quran book punjab board</strong>?
//         Here, you can access all the books you need for free. Our website offers
//         a complete collection of books for students in Class 9, 10, 11, and 12.
//         Whether you&apos;re preparing for exams or need extra resources,
//         we&apos;ve got you covered.
//       </p>
//       <p>
//         Welcome to our Educational Hub, an innovative platform designed for high
//         school student in Class 9 to 12, Chartered Accountancy (CA), and Virtual
//         University learners to fulfil academic needs. Our mission is to provide
//         a one-stop solution for all your educational requirements, empowering
//         you to achieve excellence in your studies and professional goals.
//       </p>
//       <ImageContainer
//         image={data.image}
//         title="Access Class 9 Tarjuma Tul Quran Book of Urdu Medium"
//         class="my-4 w-full"
//         height={720}
//         width={1280}
//         priority
//       />

//       <h2>Download 9th Class Tarjuma Tul Quran Textbook Punjab Board</h2>
//       <p>
//         Here, you can download Matric class 9 Tarjuma Tul Quran Text Book in PDF Format for
//         Urdu Medium. This book is officially published by Punjab Text Book
//         Board.
//       </p>
//       <PDFViewer pdfUrl={data.urdu_medium} />
//       {Class9_Book.map((data: class_Book) => {
//         return (
//           <div key={data.name}>
//             <h3 className="text-xl font-semibold py-2">
//               {data.name} Class 9 Books
//             </h3>
//             <p>
//               Our collection of <strong>Class 9 Textbooks</strong> of Punjab
//               Baord encompasses all subjects included Physics, Biology,
//               Chemistry, Math, English, Urdu, Pak Study, Islamiat, General Math,
//               Computer Science, Economics, Tarjuma Tul Quran, Ikhlaqiat,
//               ensuring you have the resources you need to succeed.
//             </p>
//             <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
//               {data.list.map((item: any) => (
//                 <Card3 key={item.id} title={item.title} link={item.link} />
//               ))}
//             </div>
//           </div>
//         )
//       })}
//     </BookWrapper>
//   )
// }

// export const metadata: Metadata = {
//   title: data.title,
//   description: data.description,
//   keywords: data.keywords,
//   openGraph: {
//     title: data.title,
//     description: data.description,
//     url: data.url,
//     images: [
//       {
//         url: 'https://nextjs.org/og.png',
//         alt: data.title,
//       },
//     ],
//   },
//   alternates: {
//     canonical: data.canonical,
//   },
//   robots: {
//     index: data.index,
//     follow: data.follow,
//     googleBot: {
//       index: data.index,
//       follow: data.follow,
//     },
//   },
//   twitter: {
//     title: data.title,
//     description: data.description,
//     images: {
//       url: 'https://nextjs.org/og.png',
//       alt: data.title,
//     },
//   },
// }
import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import PDFViewer from '@/src/components/element/PDFViewer'
import { MainDataClass9Book } from '../data'

const data = {
  title: 'Tarjuma Tul Quran Class 9 Book PDF | 9th Class Punjab Text Book',
  description:
    'Download the official Tarjuma Tul Quran Class 9 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanation.',
  canonical: '/class-9/books/punjab-board-tarjuma-tul-quran/',
  index: true,
  follow: true,
  image: '/9th/book/punjab/class-9-tarjuma-tul-quran-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/books/punjab-board-tarjuma-tul-quran/',
  keywords: [
    'tarjuma-tul-quran class 9 punjab text book pdf',
    'class 9 tarjuma-tul-quran book pdf punjab board',
    '9th class tarjuma-tul-quran punjab text book',
    'tarjuma-tul-quran book class 9 punjab board',
    'class 9 tarjuma-tul-quran book punjab board',
  ],
  fileId_urdu: '1qKP8ytj1ahOqFTE-y9oul_nFytNWtd6F',
  clist: [
    { name: 'Class 10 Books', slug: '/class-10/books/' },
    { name: 'Class 11 Books', slug: '/class-11/books/' },
    { name: 'Class 12 Books', slug: '/class-12/books/' },
    { name: 'Class 9 Mcqs', slug: '/class-9/mcqs/' },
    { name: 'Class 10 Mcqs', slug: '/class-10/mcqs/' },
    { name: 'Class 11 Mcqs', slug: '/class-11/mcqs/' },
    { name: 'Class 12 Mcqs', slug: '/class-12/mcqs/' },
    { name: 'Class 9 Online Test', slug: '/class-9/online-test/' },
    { name: 'Class 11 Online Test', slug: '/class-11/online-test/' },
    { name: 'Class 10 Online Test', slug: '/class-10/online-test/' },
    { name: 'Class 12 Online Test', slug: '/class-12/online-test/' },
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Books"
      b1Link="/class-9/books/"
      b2="Punjab Board Tarjuma Tul Quran"
      image={data.image}
      clist={data.clist}
    >
      <p>
        Are you looking for a <strong>Class 9 tarjuma tul quran book punjab board</strong>
        ? Here, you can access all the books you need for free. Our website
        offers a complete collection of books for students in Class 9, 10, 11,
        and 12. Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <h3>Download Class 9 Tarjuma Tul Quran Book Punjab Board</h3>
      <p>
        Here, you can download Matric class 9 Tarjuma Tul Quran Text Book in PDF Format.
        This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_urdu} />

      {MainDataClass9Book.map((data: any) => {
        return (
          <div key={data.title}>
            <h2 className="">{data.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
              {data.child.map((data: any) => {
                return (
                  <CardSmall
                    key={data.name}
                    title={data.name}
                    link={`/class-9/books/punjab-board-${data.slug}`}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
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
}
