// import React from "react";
// import Card2 from "@/src/components/card2/page";
// import Container from "@/src/components/element/container";
// import Sidebar from "@/src/components/element/sidebar";
// import SubHeader from "@/src/components/layout/header/subheader/page";
// import { Metadata } from "next";
// import { class_Book } from "@/src/app/books/type";
// import Form from "@/src/components/element/form/page";
// import BreadCrumb from "@/src/components/element/breadcrumb";
// import Table from "@/src/components/element/table";

// const data = {
//   title: "Books Class 12",
//   description:
//     "Here you can download books of class 12 in english and urdu medium of physics, chemistry, biology, math, english etc.",
//   canonical: "/books/class-12/",
//   index: true,
//   follow: true,
//   image: "/opengraph-image.jpg",
//   url: "https://growlearnhub.com/books/class-12/",
//   keywords: [
//     "growlearnhub class 12 books",
//     "class 12 books",
//     "class 12 physics books",
//     "class 12 chemistry books",
//     "class 12 biology books",
//     "class 12 math books",
//     "class 12 english books",
//   ],
//   list: [
//     {
//       id: 0,
//       title: "Notes",
//       link: "/notes/",
//     },
//     {
//       id: 1,
//       title: "Past Papers",
//       link: "/past-papers/",
//     },
//     {
//       id: 2,
//       title: "Quiz",
//       link: "/quiz/",
//     },
//     {
//       id: 3,
//       title: "Online Tests",
//       link: "/online-tests/",
//     },
//     {
//       id: 3,
//       title: "Pairing Schemes",
//       link: "/pairing-schemes/",
//     },
//     {
//       id: 4,
//       title: "Class 9 Books",
//       link: "/books/class-9/",
//     },
//     {
//       id: 5,
//       title: "Class 10 Books",
//       link: "/books/class-10/",
//     },
//     {
//       id: 6,
//       title: "Class 11 Books",
//       link: "/books/class-11/",
//     },
//   ],
// };

// const Table_1 = {
//   tabletd1: ["Biology", "Class 12 Medical Books (English Medium)"],
//   tabletd2: ["Physics", "Class 12 Medical Books (English Medium)"],
//   tabletd3: ["Chemistry", "Class 12 Medical Books (English Medium)"],
//   tabletd4: ["English", "Class 12 Medical Books (English Medium)"],
//   tabletd5: ["Urdu", "Class 12 Medical Books  (Urdu Medium)"],
//   tabletd6: ["Pak Study", "Class 12 Medical Books (English and Urdu Medium)"],
// };

// const Table_2 = {
//   tabletd1: ["Math", "Class 12 Medical Books (English Medium)"],
//   tabletd2: ["Physics", "Class 12 Medical Books (English Medium)"],
//   tabletd3: ["Chemistry", "Class 12 Medical Books (English Medium)"],
//   tabletd4: ["English", "Class 12 Medical Books (English Medium)"],
//   tabletd5: ["Urdu", "Class 12 Medical Books  (Urdu Medium)"],
//   tabletd6: ["Pak Study", "Class 12 Medical Books (English and Urdu Medium)"],
// };
// export default function page() {
//   return (
//     <div>
//       <SubHeader title={data.title} />
//       <Container>
//         <div className="book">
//           <div className="c1">
//             <BreadCrumb b1="Books" b2="Class 12" b1Link="/books/" />

//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//               dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
//               aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
//               recusandae, quas sapiente commodi eius repellat.
//             </p>
//             {Class9_BookDatas.map((data: class_Book) => {
//               return (
//                 <div key={data.name}>
//                   <h2 className="text-xl font-semibold py-2">
//                     {data.name} Class 12 Books
//                   </h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Ipsam dolorum, nesciunt vel distinctio quibusdam, saepe,
//                     ducimus aspernatur quaerat mollitia expedita qui magnam
//                     voluptates. Cumque recusandae, quas sapiente commodi eius
//                     repellat.
//                   </p>
//                   <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
//                     {data.list.map((item: any) => (
//                       <Card2
//                         key={item.id}
//                         title={item.title}
//                         link={item.link}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//               dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
//               aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
//               recusandae, quas sapiente commodi eius repellat.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//               dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
//               aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
//               recusandae, quas sapiente commodi eius repellat.
//             </p>
//             <h2 className="text-xl font-semibold py-2">
//               Class 12 Medical Books
//             </h2>

//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//               dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
//               aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
//               recusandae, quas sapiente commodi eius repellat.
//             </p>
//             <Table data={Table_1} />

//             <h2 className="text-xl font-semibold py-2">
//               Class 12 Non-Medical Books
//             </h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//               dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
//               aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
//               recusandae, quas sapiente commodi eius repellat.
//             </p>
//             <Table data={Table_2} />

//             <h2 className="text-xl font-semibold py-2"> Class 12 ICS Books</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//               dolorum, nesciunt vel distinctio quibusdam, saepe, ducimus
//               aspernatur quaerat mollitia expedita qui magnam voluptates. Cumque
//               recusandae, quas sapiente commodi eius repellat.
//             </p>
//             <Form url={data.url} />
//           </div>
//           <div className="c2">
//             <Sidebar title={data.title} url={data.url} list={data.list} />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export const Class9_BookDatas: class_Book[] = [
//   {
//     name: "Punjab Board",
//     list: [
//       {
//         id: 0,
//         title: "Physics Books",
//         link: "/books/class-12/punjab-board-physics/",
//       },
//       {
//         id: 1,
//         title: "Biology Books",
//         link: "/books/class-12/punjab-board-biology/",
//       },
//       {
//         id: 2,
//         title: "Chemistry Books",
//         link: "/books/class-12/punjab-board-chemistry/",
//       },
//       {
//         id: 3,
//         title: "Math Books",
//         link: "/books/class-12/punjab-board-math/",
//       },
//       {
//         id: 4,
//         title: "English Books",
//         link: "/books/class-12/punjab-board-english/",
//       },
//       {
//         id: 5,
//         title: "Urdu Books",
//         link: "/books/class-12/punjab-board-urdu/",
//       },
//       {
//         id: 6,
//         title: "Islamiat Books",
//         link: "/books/class-12/punjab-board-islamiat/",
//       },
//       {
//         id: 7,
//         title: "Civics Books",
//         link: "/books/class-12/punjab-board-civics/",
//       },
//       {
//         id: 8,
//         title: "Computer Science Books",
//         link: "/books/class-12/punjab-board-computer-science/",
//       },
//       {
//         id: 9,
//         title: "Economics Books",
//         link: "/books/class-12/punjab-board-economics/",
//       },
//       {
//         id: 10,
//         title: "Tarjuma tul Quran Books",
//         link: "/books/class-12/punjab-board-tarjuma-tul-quran/",
//       },
//       {
//         id: 11,
//         title: "Statics Books",
//         link: "/books/class-12/punjab-board-statics/",
//       },
//     ],
//   },
// ];

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
//         url: "https://nextjs.org/og.png",
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
//       url: "https://nextjs.org/og.png",
//       alt: data.title,
//     },
//   },
// };
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
