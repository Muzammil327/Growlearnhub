import { Books, class_Book, vu_Book } from "@/src/app/(books)/type";

// --------------------------------- Books --------------------
export const BookDatas: Books[] = [
  { id: 0, title: "Class 9", link: "/quiz/class-9/" },
  { id: 1, title: "Class 10", link: "/quiz/class-10/" },
  { id: 2, title: "Class 11", link: "/quiz/class-11/" },
  { id: 3, title: "Class 12", link: "/quiz/class-12/" },
  { id: 4, title: "virtual University", link: "/quiz/vu/" },
];

// --------------------------------- Class 9 Books --------------------
export const Class9_BookDatas: class_Book[] = [
  {
    name: "Punjab Board",
    list: [
      // {
      //   id: 0,
      //   title: "Physics Books",
      //   link: "/quiz/class-9/punjab-board-physics",
      // },
      {
        id: 1,
        title: "Biology Books",
        link: "/quiz/class-9/punjab-board-biology",
      },
      // {
      //   id: 2,
      //   title: "Chemistry Books",
      //   link: "/books/class-9/punjab-board-chemistry",
      // },
      // {
      //   id: 3,
      //   title: "Math Books",
      //   link: "/books/class-9/punjab-board-math",
      // },
      // {
      //   id: 4,
      //   title: "General Math Books",
      //   link: "/books/class-9/punjab-board-general-math",
      // },
      // {
      //   id: 5,
      //   title: "Computer Science Books",
      //   link: "/books/class-9/punjab-board-computer-science",
      // },
    ],
  },
];

// --------------------------------- Class 10 Books --------------------
export const Class10_BookDatas: class_Book[] = [
  {
    name: "Punjab Board",
    list: [
      {
        id: 0,
        title: "Physics Books",
        link: "/books/class-10/punjab-board-physics",
      },
      {
        id: 1,
        title: "Biology Books",
        link: "/books/class-10/punjab-board-biology",
      },
      {
        id: 2,
        title: "Chemistry Books",
        link: "/books/class-10/punjab-board-chemistry",
      },
      {
        id: 3,
        title: "Math Books",
        link: "/books/class-10/punjab-board-math",
      },
    ],
  },
];

// --------------------------------- Class 11 Books --------------------
export const Class11_BookDatas: class_Book[] = [
  {
    name: "Punjab Board",
    list: [
      {
        id: 0,
        title: "Physics Books",
        link: "/books/class-11/punjab-board-physics",
      },
      {
        id: 1,
        title: "Biology Books",
        link: "/books/class-11/punjab-board-biology",
      },
      {
        id: 2,
        title: "Chemistry Books",
        link: "/books/class-11/punjab-board-chemistry",
      },
      {
        id: 3,
        title: "Math Books",
        link: "/books/class-11/punjab-board-math",
      },
    ],
  },
];

// --------------------------------- Class 12 Books --------------------
export const Class12_BookDatas: class_Book[] = [
  {
    name: "Punjab Board",
    list: [
      {
        id: 0,
        title: "Physics Books",
        link: "/books/class-12/punjab-board-physics",
      },
      {
        id: 1,
        title: "Biology Books",
        link: "/books/class-12/punjab-board-biology",
      },
      {
        id: 2,
        title: "Chemistry Books",
        link: "/books/class-12/punjab-board-chemistry",
      },
      {
        id: 3,
        title: "Math Books",
        link: "/books/class-12/punjab-board-math",
      },
    ],
  },
];

// --------------------------------- VU Books --------------------
export const VU_BookDatas: vu_Book[] = [
  {
    id: 0,
    title: "CS101 Introducing to Computing",
    link: "/books/vu/cs101-introduction-to-computing",
  },
];

// export const VU_BookDatas: Iprops[] = [
//   {
//     id: 0,
//     title: "Semester 1",
//     child: [

//       {
//         id: 1,
//         title: "ENG101 English Comprehension",
//         link: "/vu/books/computer-science/eng101-handout/",
//       },
//       {
//         id: 2,
//         title: "ETH-202 Ethics (for Non-Muslims)",
//         link: "/vu/books/computer-science/eth-202-handout/",
//       },
//       {
//         id: 3,
//         title: "ISL202 Islamic Studies",
//         link: "/vu/books/computer-science/isl-202-handout/",
//       },
//       {
//         id: 4,
//         title: "MTH100 General Mathematics",
//         link: "/vu/books/computer-science/mth100-handout/",
//       },
//       {
//         id: 5,
//         title: "MTH-101 Calculus And Analytical Geometry",
//         link: "/vu/books/computer-science/mth-101-handout/",
//       },
//       {
//         id: 6,
//         title: "PAK-301 Pakistan Studies",
//         link: "/vu/books/computer-science/pak-301-handout/",
//       },
//       {
//         id: 7,
//         title: "PHY-101 Physics",
//         link: "/vu/books/computer-science/phy-101-handout/",
//       },
//       {
//         id: 8,
//         title: "PHY-301 Circuit Theory",
//         link: "/vu/books/computer-science/phy-301-handout/",
//       },
//     ],
//   },
//   {
//     id: 1,
//     title: "Semester 2",
//     child: [
//       {
//         id: 0,
//         title: "CS-201 Introducing to Programming",
//         link: "/vu/books/computer-science/cs-201-handout/",
//       },
//       {
//         id: 1,
//         title: "CS-302 Digital Logic Design",
//         link: "/vu/books/computer-science/cs-302-handout/",
//       },
//       {
//         id: 2,
//         title: "MGT211 Introduction To Business",
//         link: "/vu/books/computer-science/mgt-211-handout/",
//       },
//       {
//         id: 3,
//         title: "ECO401 Economics",
//         link: "/vu/books/computer-science/eco-401-handout/",
//       },
//       {
//         id: 4,
//         title: "ENG201 Business and Technical English Writing",
//         link: "/vu/books/computer-science/eng-201-handout/",
//       },
//       {
//         id: 5,
//         title: "MTH-104 Sets and Logic",
//         link: "/vu/books/computer-science/mth-104-handout/",
//       },
//       {
//         id: 6,
//         title: "MTH-301 Calculus II",
//         link: "/vu/books/computer-science/mth-301-handout/",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Semester 3",
//     child: [
//       {
//         id: 0,
//         title: "CS-304 Object Oriented Programming",
//         link: "/vu/books/computer-science/cs-304-handout/",
//       },
//       {
//         id: 1,
//         title: "CS-403 Database Management Systems",
//         link: "/vu/books/computer-science/cs-403-handout/",
//       },
//       {
//         id: 2,
//         title: "CS-601 Data Communication",
//         link: "/vu/books/computer-science/cs-601-handout/",
//       },
//       {
//         id: 3,
//         title: "MGT-503 Principles of Management",
//         link: "/vu/books/computer-science/mgt-503-handout/",
//       },
//       {
//         id: 4,
//         title: "MGT-301 Principles of Marketing",
//         link: "/vu/books/computer-science/mgt-301-handout/",
//       },
//       {
//         id: 5,
//         title: "MTH-202 Discrete Mathematics",
//         link: "/vu/books/computer-science/mth-202-handout/",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Semester 4",
//     child: [
//       {
//         id: 0,
//         title: "CS-301 Data Structures",
//         link: "/vu/books/computer-science/cs-301-handout/",
//       },
//       {
//         id: 1,
//         title: "CS-401 Computer Architecture and Assembly Language Programming",
//         link: "/vu/books/computer-science/cs-401-handout/",
//       },
//       {
//         id: 2,
//         title: "CS-504 Software Engineering - I",
//         link: "/vu/books/computer-science/cs-504-handout/",
//       },
//       {
//         id: 3,
//         title: "CS-610 Computer Networks",
//         link: "/vu/books/computer-science/cs-610-handout/",
//       },
//       {
//         id: 4,
//         title: "MGT-501 Human Resource Management",
//         link: "/vu/books/computer-science/cs-501-handout/",
//       },
//       {
//         id: 5,
//         title: "MGT-602 Entrepreneurship",
//         link: "/vu/books/computer-science/cs-602-handout/",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Semester 5",
//     child: [
//       {
//         id: 0,
//         title: "CS-205 Information Security",
//         link: "/vu/books/computer-science/cs-205-handout/",
//       },
//       {
//         id: 1,
//         title: "CS-402 Theory of Automata",
//         link: "/vu/books/computer-science/cs-402-handout/",
//       },
//       {
//         id: 2,
//         title: "CS-502 Fundamentals of Algorithms",
//         link: "/vu/books/computer-science/cs-502-handout/",
//       },
//       {
//         id: 3,
//         title: "MCM-301 Communication skills",
//         link: "/vu/books/computer-science/MCM-301-handout/",
//       },
//       {
//         id: 4,
//         title: "MTH-401 Differential Equations",
//         link: "/vu/books/computer-science/MTH-401-handout/",
//       },
//       {
//         id: 5,
//         title: "STA-301 Statistics and Probability",
//         link: "/vu/books/computer-science/STA-301-handout/",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Semester 6",
//     child: [
//       {
//         id: 0,
//         title: "CS-602 Computer Graphics",
//         link: "/vu/books/computer-science/cs-602-handout/",
//       },
//       {
//         id: 1,
//         title: "CS-605 Software EngineeringII",
//         link: "/vu/books/computer-science/cs-605-handout/",
//       },
//       {
//         id: 2,
//         title: "CS-407 Routing and Switching",
//         link: "/vu/books/computer-science/cs-407-handout/",
//       },
//       {
//         id: 3,
//         title: "CS-202 Fundamentals of Front End Development",
//         link: "/vu/books/computer-science/cs-202-handout/",
//       },
//       {
//         id: 4,
//         title: "CS-411 Visual Programming",
//         link: "/vu/books/computer-science/cs-411-handout/",
//       },
//       {
//         id: 5,
//         title: "CS-435 Cloud Computing",
//         link: "/vu/books/computer-science/cs-435-handout/",
//       },
//       {
//         id: 6,
//         title: "CS-603 Software Architecture and Design",
//         link: "/vu/books/computer-science/cs-603-handout/",
//       },
//       {
//         id: 7,
//         title: "CS-508 Modern Programming Languages",
//         link: "/vu/books/computer-science/cs-508-handout/",
//       },
//       {
//         id: 8,
//         title: "CS-604 Operating Systems",
//         link: "/vu/books/computer-science/cs-604-handout/",
//       },
//       {
//         id: 9,
//         title: "CS-606 Compiler Construction",
//         link: "/vu/books/computer-science/cs-606-handout/",
//       },
//       {
//         id: 10,
//         title: "MTH-501 Linear Algebra	",
//         link: "/vu/books/computer-science/MTH-501-handout/",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "Semester 7",
//     child: [
//       {
//         id: 0,
//         title: "CS-609 System Programming",
//         link: "/vu/books/computer-science/cs-609-handout/",
//       },
//       {
//         id: 1,
//         title: "CS-501 Advance Computer Architecture",
//         link: "/vu/books/computer-science/cs-501-handout/",
//       },
//       {
//         id: 2,
//         title: "CS-611 Software Quality Engineering",
//         link: "/vu/books/computer-science/cs-611-handout/",
//       },
//       {
//         id: 3,
//         title: "CS-506 Web Design and Development",
//         link: "/vu/books/computer-science/cs-506-handout/",
//       },
//       {
//         id: 4,
//         title: "CS-619 Final Project",
//         link: "/vu/books/computer-science/cs-619-handout/",
//       },
//       {
//         id: 5,
//         title: "CS-621 Parallel and Distributed Computing",
//         link: "/vu/books/computer-science/cs-621-handout/",
//       },
//       {
//         id: 6,
//         title: "MGT-502 Organizational Behaviour",
//         link: "/vu/books/computer-science/mgt-502-handout/",
//       },
//       {
//         id: 7,
//         title: "MGT-610 Business Ethics",
//         link: "/vu/books/computer-science/mgt-610-handout/",
//       },
//       {
//         id: 8,
//         title: "MTH-603 Numerical Analysis",
//         link: "/vu/books/computer-science/mth-603-handout/",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Semester 8",
//     child: [
//       {
//         id: 0,
//         title: "CS-621 Parallel and Distributed Computing	",
//         link: "/vu/books/computer-science/cs-621-handout/",
//       },
//       {
//         id: 1,
//         title: "CS-607 Artificial Intelligence",
//         link: "/vu/books/computer-science/cs-607-handout/",
//       },
//       {
//         id: 2,
//         title: "CS-614 Data Warehousing",
//         link: "/vu/books/computer-science/cs-614-handout/",
//       },
//       {
//         id: 3,
//         title: "CS-625 Professional Practices",
//         link: "/vu/books/computer-science/cs-625-handout/",
//       },
//     ],
//   },
// ];
