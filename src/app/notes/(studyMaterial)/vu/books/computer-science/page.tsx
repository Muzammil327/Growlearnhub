import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { Metadata } from "next";
import { CardProps } from "@/src/app/(studyMaterial)/type";
import Form from "@/src/components/element/form/page";

const data = {
  title: "Virtual University Computer Science Books",
  description:
    "All books of virtual university of computer science courses are avialable here in pdf format. you can download it free!.",
  canonical: "/vu/books/computer-science/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/vu/books/computer-science/",
  keywords: [
    "Virtual University Books",
    "Virtual University Computer Science Books",
    "Virtual University Computer Science",
    "Books",
    "Computer Science",
    "Computer Science Books",
  ],
};

interface Iprops {
  id: number;
  title: string;
  child: CardProps[];
}

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />

      <Container>
        <div className="studyMateriala">
          <div className="c1">
            {semester.map((data: Iprops) => {
              return (
                <div className="semester1" key={data.id}>
                  <h3 className="semestertitle">{data.title}</h3>
                  <div className="col">
                    {data.child.map((data: CardProps) => (
                      <Card2
                        key={data.id}
                        title={data.title}
                        link={data.link}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
            <Form url={data.url} />
          </div>
          <div className="c2">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}

const semester: Iprops[] = [
  {
    id: 0,
    title: "Semester 1",
    child: [
      {
        id: 0,
        title: "CS101 Introducing to Computing",
        link: "/vu/books/computer-science/cs101-handout/",
      },
      {
        id: 1,
        title: "ENG101 English Comprehension",
        link: "/vu/books/computer-science/eng101-handout/",
      },
      {
        id: 2,
        title: "ETH-202 Ethics (for Non-Muslims)",
        link: "/vu/books/computer-science/eth-202-handout/",
      },
      {
        id: 3,
        title: "ISL202 Islamic Studies",
        link: "/vu/books/computer-science/isl-202-handout/",
      },
      {
        id: 4,
        title: "MTH100 General Mathematics",
        link: "/vu/books/computer-science/mth100-handout/",
      },
      {
        id: 5,
        title: "MTH-101 Calculus And Analytical Geometry",
        link: "/vu/books/computer-science/mth-101-handout/",
      },
      {
        id: 6,
        title: "PAK-301 Pakistan Studies",
        link: "/vu/books/computer-science/pak-301-handout/",
      },
      {
        id: 7,
        title: "PHY-101 Physics",
        link: "/vu/books/computer-science/phy-101-handout/",
      },
      {
        id: 8,
        title: "PHY-301 Circuit Theory",
        link: "/vu/books/computer-science/phy-301-handout/",
      },
    ],
  },
  {
    id: 1,
    title: "Semester 2",
    child: [
      {
        id: 0,
        title: "CS-201 Introducing to Programming",
        link: "/vu/books/computer-science/cs-201-handout/",
      },
      {
        id: 1,
        title: "CS-302 Digital Logic Design",
        link: "/vu/books/computer-science/cs-302-handout/",
      },
      {
        id: 2,
        title: "MGT211 Introduction To Business",
        link: "/vu/books/computer-science/mgt-211-handout/",
      },
      {
        id: 3,
        title: "ECO401 Economics",
        link: "/vu/books/computer-science/eco-401-handout/",
      },
      {
        id: 4,
        title: "ENG201 Business and Technical English Writing",
        link: "/vu/books/computer-science/eng-201-handout/",
      },
      {
        id: 5,
        title: "MTH-104 Sets and Logic",
        link: "/vu/books/computer-science/mth-104-handout/",
      },
      {
        id: 6,
        title: "MTH-301 Calculus II",
        link: "/vu/books/computer-science/mth-301-handout/",
      },
    ],
  },
  {
    id: 2,
    title: "Semester 3",
    child: [
      {
        id: 0,
        title: "CS-304 Object Oriented Programming",
        link: "/vu/books/computer-science/cs-304-handout/",
      },
      {
        id: 1,
        title: "CS-403 Database Management Systems",
        link: "/vu/books/computer-science/cs-403-handout/",
      },
      {
        id: 2,
        title: "CS-601 Data Communication",
        link: "/vu/books/computer-science/cs-601-handout/",
      },
      {
        id: 3,
        title: "MGT-503 Principles of Management",
        link: "/vu/books/computer-science/mgt-503-handout/",
      },
      {
        id: 4,
        title: "MGT-301 Principles of Marketing",
        link: "/vu/books/computer-science/mgt-301-handout/",
      },
      {
        id: 5,
        title: "MTH-202 Discrete Mathematics",
        link: "/vu/books/computer-science/mth-202-handout/",
      },
    ],
  },
  {
    id: 3,
    title: "Semester 4",
    child: [
      {
        id: 0,
        title: "CS-301 Data Structures",
        link: "/vu/books/computer-science/cs-301-handout/",
      },
      {
        id: 1,
        title: "CS-401 Computer Architecture and Assembly Language Programming",
        link: "/vu/books/computer-science/cs-401-handout/",
      },
      {
        id: 2,
        title: "CS-504 Software Engineering - I",
        link: "/vu/books/computer-science/cs-504-handout/",
      },
      {
        id: 3,
        title: "CS-610 Computer Networks",
        link: "/vu/books/computer-science/cs-610-handout/",
      },
      {
        id: 4,
        title: "MGT-501 Human Resource Management",
        link: "/vu/books/computer-science/cs-501-handout/",
      },
      {
        id: 5,
        title: "MGT-602 Entrepreneurship",
        link: "/vu/books/computer-science/cs-602-handout/",
      },
    ],
  },
  {
    id: 4,
    title: "Semester 5",
    child: [
      {
        id: 0,
        title: "CS-205 Information Security",
        link: "/vu/books/computer-science/cs-205-handout/",
      },
      {
        id: 1,
        title: "CS-402 Theory of Automata",
        link: "/vu/books/computer-science/cs-402-handout/",
      },
      {
        id: 2,
        title: "CS-502 Fundamentals of Algorithms",
        link: "/vu/books/computer-science/cs-502-handout/",
      },
      {
        id: 3,
        title: "MCM-301 Communication skills",
        link: "/vu/books/computer-science/MCM-301-handout/",
      },
      {
        id: 4,
        title: "MTH-401 Differential Equations",
        link: "/vu/books/computer-science/MTH-401-handout/",
      },
      {
        id: 5,
        title: "STA-301 Statistics and Probability",
        link: "/vu/books/computer-science/STA-301-handout/",
      },
    ],
  },
  {
    id: 5,
    title: "Semester 6",
    child: [
      {
        id: 0,
        title: "CS-602 Computer Graphics",
        link: "/vu/books/computer-science/cs-602-handout/",
      },
      {
        id: 1,
        title: "CS-605 Software EngineeringII",
        link: "/vu/books/computer-science/cs-605-handout/",
      },
      {
        id: 2,
        title: "CS-407 Routing and Switching",
        link: "/vu/books/computer-science/cs-407-handout/",
      },
      {
        id: 3,
        title: "CS-202 Fundamentals of Front End Development",
        link: "/vu/books/computer-science/cs-202-handout/",
      },
      {
        id: 4,
        title: "CS-411 Visual Programming",
        link: "/vu/books/computer-science/cs-411-handout/",
      },
      {
        id: 5,
        title: "CS-435 Cloud Computing",
        link: "/vu/books/computer-science/cs-435-handout/",
      },
      {
        id: 6,
        title: "CS-603 Software Architecture and Design",
        link: "/vu/books/computer-science/cs-603-handout/",
      },
      {
        id: 7,
        title: "CS-508 Modern Programming Languages",
        link: "/vu/books/computer-science/cs-508-handout/",
      },
      {
        id: 8,
        title: "CS-604 Operating Systems",
        link: "/vu/books/computer-science/cs-604-handout/",
      },
      {
        id: 9,
        title: "CS-606 Compiler Construction",
        link: "/vu/books/computer-science/cs-606-handout/",
      },
      {
        id: 10,
        title: "MTH-501 Linear Algebra	",
        link: "/vu/books/computer-science/MTH-501-handout/",
      },
    ],
  },
  {
    id: 6,
    title: "Semester 7",
    child: [
      {
        id: 0,
        title: "CS-609 System Programming",
        link: "/vu/books/computer-science/cs-609-handout/",
      },
      {
        id: 1,
        title: "CS-501 Advance Computer Architecture",
        link: "/vu/books/computer-science/cs-501-handout/",
      },
      {
        id: 2,
        title: "CS-611 Software Quality Engineering",
        link: "/vu/books/computer-science/cs-611-handout/",
      },
      {
        id: 3,
        title: "CS-506 Web Design and Development",
        link: "/vu/books/computer-science/cs-506-handout/",
      },
      {
        id: 4,
        title: "CS-619 Final Project",
        link: "/vu/books/computer-science/cs-619-handout/",
      },
      {
        id: 5,
        title: "CS-621 Parallel and Distributed Computing",
        link: "/vu/books/computer-science/cs-621-handout/",
      },
      {
        id: 6,
        title: "MGT-502 Organizational Behaviour",
        link: "/vu/books/computer-science/mgt-502-handout/",
      },
      {
        id: 7,
        title: "MGT-610 Business Ethics",
        link: "/vu/books/computer-science/mgt-610-handout/",
      },
      {
        id: 8,
        title: "MTH-603 Numerical Analysis",
        link: "/vu/books/computer-science/mth-603-handout/",
      },
    ],
  },
  {
    id: 4,
    title: "Semester 8",
    child: [
      {
        id: 0,
        title: "CS-621 Parallel and Distributed Computing	",
        link: "/vu/books/computer-science/cs-621-handout/",
      },
      {
        id: 1,
        title: "CS-607 Artificial Intelligence",
        link: "/vu/books/computer-science/cs-607-handout/",
      },
      {
        id: 2,
        title: "CS-614 Data Warehousing",
        link: "/vu/books/computer-science/cs-614-handout/",
      },
      {
        id: 3,
        title: "CS-625 Professional Practices",
        link: "/vu/books/computer-science/cs-625-handout/",
      },
    ],
  },
];

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
        url: "https://nextjs.org/og.png",
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
      url: "https://nextjs.org/og.png",
      alt: data.title,
    },
  },
};
