import axios from "axios";

type SitemapFile = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
  | "always"
  | "daily"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
  priority?: number;
};


const FRONTEND_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap(): Promise<SitemapFile[]> {
  // const response = await axios.get(`${FRONTEND_URL}/api/sitemaps`);
  const response = await axios.get(`https://growlearnhub.com/api/sitemaps`);
  const McqsSlug = response.data

  try {
    const RoutesQuestionData: SitemapFile[] = McqsSlug.map(
      (data: string) => ({
        url: `${FRONTEND_URL}/mcqs-point/${data}/`,
        lastModified: new Date().toISOString(),
        priority: 0.8,
        changeFrequency: "weekly" as "weekly",
      }),
    );

    const RoutesData: SitemapFile[] = data.map((data) => ({
      url: `${FRONTEND_URL}/${data}/`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "weekly" as "weekly",
    }));

    // Combine all routes
    const routes: SitemapFile[] = [
      {
        url: `${FRONTEND_URL}/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "always",
      },
      ...RoutesData,
      ...RoutesQuestionData,
    ];

    return routes;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}

const singleroute = [
  "class-9",
  "class-10",
  "class-11",
  "class-12",
  "vu",
  "book-point",
  "online-test-point",
  "date-sheet",
  "result",
  "notes",
  "past-paper",
  "pairing-scheme",
  "about-us",
  "contact-us",
  "disclaimer",
  "faqs",
  "report-a-bug",
  "user-experience",
  "terms-and-conditions",
  "request-feature",
  "suggest-quiz",
  "explore-topics",
  "jobs-opportunities",
  "study-group",
  "success-stories",
];

const class9route = [
  "class-9/books",
  "class-9/books/punjab-board-physics",
  "class-9/books/punjab-board-chemistry",
  "class-9/books/punjab-board-biology",
  "class-9/books/punjab-board-math",
  "class-9/books/punjab-board-computer-science",
  "class-9/books/punjab-board-economics",
  "class-9/books/punjab-board-english",
  "class-9/books/punjab-board-general-math",
  "class-9/books/punjab-board-ikhlaqiat",
  "class-9/books/punjab-board-islamiyat",
  "class-9/books/punjab-board-pak-study",
  "class-9/books/punjab-board-tarjuma-tul-quran",
  "class-9/books/punjab-board-urdu",

  "class-9/date-sheet",
  // "class-9/date-sheet/bahawalpur-board",
  // "class-9/date-sheet/dg-khan-board",
  // "class-9/date-sheet/faisalabad-board",
  // "class-9/date-sheet/gujranwala-board",
  // "class-9/date-sheet/lahore-board",
  // "class-9/date-sheet/multan-board",
  // "class-9/date-sheet/rawalpindi-board",
  // "class-9/date-sheet/sahiwal-board",
  // "class-9/date-sheet/sargodha-board",

  "class-9/mcqs",
  // "class-9/mcqs/physics",
  // "class-9/mcqs/chemistry",
  // "class-9/mcqs/biology",

  "class-9/notes",
  // "class-9/notes/physics",
  // "class-9/notes/chemistry",
  // "class-9/notes/biology",

  "class-9/online-test",
  // "class-9/online-test/physics",
  // "class-9/online-test/chemistry",
  // "class-9/online-test/math",

  "class-9/pairing-scheme",
  // "class-9/pairing-scheme/faisalabad-board-biology",
  // "class-9/pairing-scheme/faisalabad-board-chemistry",
  // "class-9/pairing-scheme/faisalabad-board-physics",
  // "class-9/pairing-scheme/faisalabad-board-math",
  // "class-9/pairing-scheme/lahore-board-biology",
  // "class-9/pairing-scheme/lahore-board-chemistry",
  // "class-9/pairing-scheme/lahore-board-physics",
  // "class-9/pairing-scheme/lahore-board-math",

  "class-9/past-paper",
  // "class-9/past-paper/faisalabad-board-biology",
  // "class-9/past-paper/faisalabad-board-chemistry",
  // "class-9/past-paper/faisalabad-board-physics",
  // "class-9/past-paper/faisalabad-board-math",
  // "class-9/past-paper/lahore-board-biology",
  // "class-9/past-paper/lahore-board-chemistry",
  // "class-9/past-paper/lahore-board-physics",
  // "class-9/past-paper/lahore-board-math",

  "class-9/result",
  // "class-9/result/bahawalpur-board",
  // "class-9/result/dg-khan-board",
  // "class-9/result/faisalabad-board",
  // "class-9/result/gujranwala-board",
  // "class-9/result/lahore-board",
  // "class-9/result/multan-board",
  // "class-9/result/rawalpindi-board",
  // "class-9/result/sahiwal-board",
  // "class-9/result/sargodha-board",
];

const class10route = [
  "class-10/books",
  "class-10/books/punjab-board-physics",
  "class-10/books/punjab-board-chemistry",
  "class-10/books/punjab-board-biology",
  "class-10/books/punjab-board-math",
  "class-10/books/punjab-board-computer-science",
  "class-10/books/punjab-board-economics",
  "class-10/books/punjab-board-english",
  "class-10/books/punjab-board-general-math",
  "class-10/books/punjab-board-ikhlaqiat",
  "class-10/books/punjab-board-islamiyat",
  "class-10/books/punjab-board-pak-study",
  "class-10/books/punjab-board-tarjuma-tul-quran",
  "class-10/books/punjab-board-urdu",

  "class-10/date-sheet",
  "class-10/mcqs",
  "class-10/notes",
  "class-10/online-test",
  "class-10/pairing-scheme",
  "class-10/past-paper",
  "class-10/result",
];

const class11route = [
  "class-11/books",
  "class-11/books/punjab-board-physics",
  "class-11/books/punjab-board-chemistry",
  "class-11/books/punjab-board-biology",
  "class-11/books/punjab-board-math",
  "class-11/books/punjab-board-computer-science",
  "class-11/books/punjab-board-english",
  "class-11/books/punjab-board-islamiyat",
  "class-11/books/punjab-board-tarjuma-tul-quran",
  "class-11/books/punjab-board-urdu",

  "class-11/date-sheet",
  "class-11/mcqs",
  "class-11/notes",
  "class-11/online-test",
  "class-11/pairing-scheme",
  "class-11/past-paper",
  "class-11/result",
];

const class12route = [
  "class-12/books",
  "class-12/books/punjab-board-physics",
  "class-12/books/punjab-board-chemistry",
  "class-12/books/punjab-board-biology",
  "class-12/books/punjab-board-math",
  "class-12/books/punjab-board-computer-science",
  "class-12/books/punjab-board-english",
  "class-12/books/punjab-board-pak-study",
  "class-12/books/punjab-board-tarjuma-tul-quran",
  "class-12/books/punjab-board-urdu",

  "class-12/date-sheet",
  "class-12/mcqs",
  "class-12/notes",
  "class-12/online-test",
  "class-12/pairing-scheme",
  "class-12/past-paper",
  "class-12/result",
];

const vuroute = [
  "vu/handouts",

  "vu/mid-mark-calculator",
  "vu/final-mcqs",
  "vu/mid-mcqs",

  // "vu/handouts/cs001",
  // "vu/handouts/cs101",
  // "vu/handouts/cs201",
  // "vu/handouts/cs202",
  // "vu/handouts/cs205",
  // "vu/handouts/cs206",
  // "vu/handouts/cs301",
  // "vu/handouts/cs302",
  // "vu/handouts/cs304",
  // "vu/handouts/cs310",
  // "vu/handouts/cs311",
  // "vu/handouts/cs312",
  // "vu/handouts/cs315",
  // "vu/handouts/cs401",
  // "vu/handouts/cs402",
  // "vu/handouts/cs403",
  // "vu/handouts/cs405",
  // "vu/handouts/cs407",
  // "vu/handouts/cs408",
  // "vu/handouts/cs410",
  // "vu/handouts/cs411",
  // "vu/handouts/cs432",
  // "vu/handouts/cs435",
  // "vu/handouts/eng201",
  // "vu/handouts/mgt211",

  // "vu/handouts/mth001",
  // "vu/handouts/mth100",
  // "vu/handouts/mth101",
  // "vu/handouts/mth102",
  // "vu/handouts/mth201",
  // "vu/handouts/mth202",
  // "vu/handouts/mth301",
  // "vu/handouts/mth302",
  // "vu/handouts/mth303",
  // "vu/handouts/mth401",
  // "vu/handouts/mth501",
  // "vu/handouts/mth601",
  // "vu/handouts/mth603",
  // "vu/handouts/mth621",
  // "vu/handouts/mth622",
  // "vu/handouts/mth631",
  // "vu/handouts/mth632",
  // "vu/handouts/mth633",
  // "vu/handouts/mth634",
  // "vu/handouts/mth641",
  // "vu/handouts/mth701",
  // "vu/handouts/mth706",
  // "vu/handouts/mth7123",
  // "vu/handouts/mth718",
  // "vu/handouts/mth721",

  // "vu/handouts/pak301",
  // "vu/handouts/pak302",

  // "vu/handouts/phy101",
  // "vu/handouts/phy301"
];

const mcqspointroute = [
  "mcqs-point/physics",
  "mcqs-point/chemistry",
  "mcqs-point/biology",

  // "mcqs-point/biology/skeletal-system",
  // "mcqs-point/biology/skeletal-system/bones",
  // "mcqs-point/biology/skeletal-system/skeleton",
  // "mcqs-point/biology/skeletal-system/joints",
  // "mcqs-point/biology/skeletal-system/tendons",
  // "mcqs-point/biology/skeletal-system/ligaments",

  // "mcqs-point/general-knowledge",
  // "mcqs-point/general-knowledge/pakistan",
  // "mcqs-point/general-knowledge/india",
  // "mcqs-point/general-knowledge/world-knowledge",
];

const data = [
  ...singleroute,
  ...class9route,
  ...class10route,
  ...class11route,
  ...class12route,
  ...mcqspointroute,
  ...vuroute,
];
// import sitemapMcqsData from "@/src/app/sitemap/mcqs/sitemapMcqsData"

// // Assuming SitemapFile is the correct type
// type SitemapFile = {
//   url: string
//   lastModified?: string | Date
//   changeFrequency?:
//     | "always"
//     | "daily"
//     | "hourly"
//     | "weekly"
//     | "monthly"
//     | "yearly"
//     | "never"
//   priority?: number
// }

// const FRONTEND_URL = process.env.NEXT_PUBLIC_SITE_URL

// export default async function sitemap(): Promise<SitemapFile[]> {
//   try {
//     const RoutesData: SitemapFile[] = data.map((data) => ({
//       url: `${FRONTEND_URL}/${data}/`,
//       lastModified: new Date().toISOString(),
//       priority: 0.8,
//       changeFrequency: "weekly" as "weekly"
//     }))

//     // Combine all routes
//     const routes: SitemapFile[] = [
//       {
//         url: `${FRONTEND_URL}/`,
//         lastModified: new Date().toISOString(),
//         priority: 1,
//         changeFrequency: "always"
//       },
//       ...RoutesData,
//       ...(await sitemapMcqsData()),
//     ]

//     return routes
//   } catch (error) {
//     console.error("Error", error)
//     return []
//   }
// }

// const singleroute = [
//   "class-9",
//   "class-10",
//   "class-11",
//   "class-12",
//   "vu",
//   "book-point",
//   "online-test-point",
//   "date-sheet",
//   "result",
//   "notes",
//   "past-paper",
//   "pairing-scheme",
//   "about-us",
//   "contact-us",
//   "blogs",
//   "blogs/catgeory",
//   "blogs/tag",
//   "disclaimer",
//   "cookies-policy",
//   "faqs",
//   "report-a-bug",
//   "user-experience",
//   "privacy-policy",
//   "terms-and-conditions",
//   "request-feature",
//   "suggest-quiz",
//   "explore-topics",
//   "jobs-opportunities",
//   "study-group",
//   "success-stories"
// ]

// const class9route = [
//   "class-9/books",
//   "class-9/books/punjab-board-biology",
//   "class-9/books/punjab-board-biology/english-medium",
//   "class-9/books/punjab-board-biology/urdu-medium",
//   "class-9/books/punjab-board-chemistry",
//   "class-9/books/punjab-board-chemistry/english-medium",
//   "class-9/books/punjab-board-chemistry/urdu-medium",
//   "class-9/books/punjab-board-computer-science",
//   "class-9/books/punjab-board-computer-science/english-medium",
//   "class-9/books/punjab-board-computer-science/urdu-medium",
//   "class-9/books/punjab-board-economics",
//   "class-9/books/punjab-board-english",
//   "class-9/books/punjab-board-general-math",
//   "class-9/books/punjab-board-general-math/english-medium",
//   "class-9/books/punjab-board-general-math/urdu-medium",
//   "class-9/books/punjab-board-ikhlaqiat",
//   "class-9/books/punjab-board-islamiyat",
//   "class-9/books/punjab-board-math",
//   "class-9/books/punjab-board-math/english-medium",
//   "class-9/books/punjab-board-math/urdu-medium",
//   "class-9/books/punjab-board-pak-study",
//   "class-9/books/punjab-board-pak-study/english-medium",
//   "class-9/books/punjab-board-pak-study/urdu-medium",
//   "class-9/books/punjab-board-physics",
//   "class-9/books/punjab-board-physics/english-medium",
//   "class-9/books/punjab-board-physics/urdu-medium",
//   "class-9/books/punjab-board-tarjuma-tul-quran",
//   "class-9/books/punjab-board-urdu",

//   "class-9/date-sheet",
//   "class-9/notes",
//   "class-9/online-test",
//   "class-9/pairing-scheme",
//   "class-9/past-paper",
//   "class-9/result"
// ]

// const class10route = [
//   "class-10/books",
//   "class-10/date-sheet",
//   "class-10/notes",
//   "class-10/online-test",
//   "class-10/pairing-scheme",
//   "class-10/past-paper",
//   "class-10/result"
// ]

// const class11route = [
//   "class-11/books",
//   "class-11/date-sheet",
//   "class-11/notes",
//   "class-11/online-test",
//   "class-11/pairing-scheme",
//   "class-11/past-paper",
//   "class-11/result"
// ]

// const class12route = [
//   "class-12/books",
//   "class-12/date-sheet",
//   "class-12/notes",
//   "class-12/online-test",
//   "class-12/pairing-scheme",
//   "class-12/past-paper",
//   "class-12/result"
// ]

// const vuroute = [
//   "vu/handouts",

//   "vu/mid-mark-calculator",
//   "vu/final-mcqs",
//   "vu/mid-mcqs",

//   "vu/final-mcqs/cs101",
//   "vu/final-mcqs/cs201",
//   "vu/final-mcqs/cs302",
//   "vu/final-mcqs/eng201",
//   "vu/final-mcqs/mgt211",

//   "vu/mid-mcqs/cs101",
//   "vu/mid-mcqs/cs201",
//   "vu/mid-mcqs/cs302",
//   "vu/mid-mcqs/eng201",
//   "vu/mid-mcqs/mgt211",

//   "vu/handouts/cs001",
//   "vu/handouts/cs101",
//   "vu/handouts/cs201",
//   "vu/handouts/cs202",
//   "vu/handouts/cs205",
//   "vu/handouts/cs206",
//   "vu/handouts/cs301",
//   "vu/handouts/cs302",
//   "vu/handouts/cs304",
//   "vu/handouts/cs310",
//   "vu/handouts/cs311",
//   "vu/handouts/cs312",
//   "vu/handouts/cs315",
//   "vu/handouts/cs401",
//   "vu/handouts/cs402",
//   "vu/handouts/cs403",
//   "vu/handouts/cs405",
//   "vu/handouts/cs407",
//   "vu/handouts/cs408",
//   "vu/handouts/cs410",
//   "vu/handouts/cs411",
//   "vu/handouts/cs432",
//   "vu/handouts/cs435",
//   "vu/handouts/eng201",
//   "vu/handouts/mgt211",

//   "vu/handouts/mth001",
//   "vu/handouts/mth100",
//   "vu/handouts/mth101",
//   "vu/handouts/mth102",
//   "vu/handouts/mth201",
//   "vu/handouts/mth202",
//   "vu/handouts/mth301",
//   "vu/handouts/mth302",
//   "vu/handouts/mth303",
//   "vu/handouts/mth401",
//   "vu/handouts/mth501",
//   "vu/handouts/mth601",
//   "vu/handouts/mth603",
//   "vu/handouts/mth621",
//   "vu/handouts/mth622",
//   "vu/handouts/mth631",
//   "vu/handouts/mth632",
//   "vu/handouts/mth633",
//   "vu/handouts/mth634",
//   "vu/handouts/mth641",
//   "vu/handouts/mth701",
//   "vu/handouts/mth706",
//   "vu/handouts/mth7123",
//   "vu/handouts/mth718",
//   "vu/handouts/mth721",

//   "vu/handouts/pak301",
//   "vu/handouts/pak302",

//   "vu/handouts/phy101",
//   "vu/handouts/phy301"

// ]

// const mcqspointroute = [
//   "mcqs-point",
//   "mcqs-point/physics",
//   "mcqs-point/chemistry",

//   "mcqs-point/biology",
//   "mcqs-point/biology/skeletal-system",
//   "mcqs-point/biology/skeletal-system/bones",
//   "mcqs-point/biology/skeletal-system/skeleton",
//   "mcqs-point/biology/skeletal-system/joints",
//   "mcqs-point/biology/skeletal-system/tendons",
//   "mcqs-point/biology/skeletal-system/ligaments",

//   "mcqs-point/general-knowledge",
//   "mcqs-point/general-knowledge/pakistan",
//   "mcqs-point/general-knowledge/india",
//   "mcqs-point/general-knowledge/world-knowledge",

//   "class-9/mcqs",
//   "class-9/mcqs/physics",
//   "class-9/mcqs/physics/chapter-1",
//   "class-9/mcqs/physics/chapter-2",
//   "class-9/mcqs/physics/chapter-3",
//   "class-9/mcqs/physics/chapter-4",
//   "class-9/mcqs/physics/chapter-5",
//   "class-9/mcqs/physics/chapter-6",
//   "class-9/mcqs/physics/chapter-7",
//   "class-9/mcqs/physics/chapter-8",
//   "class-9/mcqs/physics/chapter-9",
//   "class-9/mcqs/biology",
//   "class-9/mcqs/biology/chapter-1",
//   "class-9/mcqs/biology/chapter-2",
//   "class-9/mcqs/biology/chapter-3",
//   "class-9/mcqs/biology/chapter-4",
//   "class-9/mcqs/biology/chapter-5",
//   "class-9/mcqs/biology/chapter-6",
//   "class-9/mcqs/biology/chapter-7",
//   "class-9/mcqs/biology/chapter-8",
//   "class-9/mcqs/biology/chapter-9",
//   "class-9/mcqs/chemistry",
//   "class-9/mcqs/chemistry/chapter-1",
//   "class-9/mcqs/chemistry/chapter-2",
//   "class-9/mcqs/chemistry/chapter-3",
//   "class-9/mcqs/chemistry/chapter-4",
//   "class-9/mcqs/chemistry/chapter-5",
//   "class-9/mcqs/chemistry/chapter-6",
//   "class-9/mcqs/chemistry/chapter-7",
//   "class-9/mcqs/chemistry/chapter-8",

//   "class-10/mcqs",
//   "class-10/mcqs/physics",
//   "class-10/mcqs/physics/chapter-1",
//   "class-10/mcqs/physics/chapter-2",
//   "class-10/mcqs/physics/chapter-3",
//   "class-10/mcqs/physics/chapter-4",
//   "class-10/mcqs/physics/chapter-5",
//   "class-10/mcqs/physics/chapter-6",
//   "class-10/mcqs/physics/chapter-7",
//   "class-10/mcqs/physics/chapter-8",
//   "class-10/mcqs/physics/chapter-9",
//   "class-10/mcqs/biology",
//   "class-10/mcqs/biology/chapter-1",
//   "class-10/mcqs/biology/chapter-2",
//   "class-10/mcqs/biology/chapter-3",
//   "class-10/mcqs/biology/chapter-4",
//   "class-10/mcqs/biology/chapter-5",
//   "class-10/mcqs/biology/chapter-6",
//   "class-10/mcqs/biology/chapter-7",
//   "class-10/mcqs/biology/chapter-8",
//   "class-10/mcqs/biology/chapter-9",
//   "class-10/mcqs/chemistry",
//   "class-10/mcqs/chemistry/chapter-1",
//   "class-10/mcqs/chemistry/chapter-2",
//   "class-10/mcqs/chemistry/chapter-3",
//   "class-10/mcqs/chemistry/chapter-4",
//   "class-10/mcqs/chemistry/chapter-5",
//   "class-10/mcqs/chemistry/chapter-6",
//   "class-10/mcqs/chemistry/chapter-7",
//   "class-10/mcqs/chemistry/chapter-8",

//   "class-11/mcqs",
//   "class-11/mcqs/physics",
//   "class-11/mcqs/physics/chapter-1",
//   "class-11/mcqs/physics/chapter-2",
//   "class-11/mcqs/physics/chapter-3",
//   "class-11/mcqs/physics/chapter-4",
//   "class-11/mcqs/physics/chapter-5",
//   "class-11/mcqs/physics/chapter-6",
//   "class-11/mcqs/physics/chapter-7",
//   "class-11/mcqs/physics/chapter-8",
//   "class-11/mcqs/physics/chapter-9",
//   "class-11/mcqs/physics/chapter-10",
//   "class-11/mcqs/physics/chapter-11",
//   "class-11/mcqs/biology",
//   "class-11/mcqs/biology/chapter-1",
//   "class-11/mcqs/biology/chapter-2",
//   "class-11/mcqs/biology/chapter-3",
//   "class-11/mcqs/biology/chapter-4",
//   "class-11/mcqs/biology/chapter-5",
//   "class-11/mcqs/biology/chapter-6",
//   "class-11/mcqs/biology/chapter-7",
//   "class-11/mcqs/biology/chapter-8",
//   "class-11/mcqs/biology/chapter-9",
//   "class-11/mcqs/biology/chapter-10",
//   "class-11/mcqs/biology/chapter-11",
//   "class-11/mcqs/biology/chapter-12",
//   "class-11/mcqs/biology/chapter-13",
//   "class-11/mcqs/biology/chapter-14",
//   "class-11/mcqs/chemistry",
//   "class-11/mcqs/chemistry/chapter-1",
//   "class-11/mcqs/chemistry/chapter-2",
//   "class-11/mcqs/chemistry/chapter-3",
//   "class-11/mcqs/chemistry/chapter-4",
//   "class-11/mcqs/chemistry/chapter-5",
//   "class-11/mcqs/chemistry/chapter-6",
//   "class-11/mcqs/chemistry/chapter-7",
//   "class-11/mcqs/chemistry/chapter-8",
//   "class-11/mcqs/chemistry/chapter-9",
//   "class-11/mcqs/chemistry/chapter-10",
//   "class-11/mcqs/chemistry/chapter-11",

//   "class-12/mcqs",
//   "class-12/mcqs/physics",
//   "class-12/mcqs/physics/chapter-1",
//   "class-12/mcqs/physics/chapter-2",
//   "class-12/mcqs/physics/chapter-3",
//   "class-12/mcqs/physics/chapter-4",
//   "class-12/mcqs/physics/chapter-5",
//   "class-12/mcqs/physics/chapter-6",
//   "class-12/mcqs/physics/chapter-7",
//   "class-12/mcqs/physics/chapter-8",
//   "class-12/mcqs/physics/chapter-9",
//   "class-12/mcqs/physics/chapter-10",
//   "class-12/mcqs/biology",
//   "class-12/mcqs/biology/chapter-1",
//   "class-12/mcqs/biology/chapter-2",
//   "class-12/mcqs/biology/chapter-3",
//   "class-12/mcqs/biology/chapter-4",
//   "class-12/mcqs/biology/chapter-5",
//   "class-12/mcqs/biology/chapter-6",
//   "class-12/mcqs/biology/chapter-7",
//   "class-12/mcqs/biology/chapter-8",
//   "class-12/mcqs/biology/chapter-9",
//   "class-12/mcqs/biology/chapter-10",
//   "class-12/mcqs/biology/chapter-11",
//   "class-12/mcqs/biology/chapter-12",
//   "class-12/mcqs/biology/chapter-13",
//   "class-12/mcqs/chemistry",
//   "class-12/mcqs/chemistry/chapter-1",
//   "class-12/mcqs/chemistry/chapter-2",
//   "class-12/mcqs/chemistry/chapter-3",
//   "class-12/mcqs/chemistry/chapter-4",
//   "class-12/mcqs/chemistry/chapter-5",
//   "class-12/mcqs/chemistry/chapter-6",
//   "class-12/mcqs/chemistry/chapter-7",
//   "class-12/mcqs/chemistry/chapter-8",
//   "class-12/mcqs/chemistry/chapter-9",
//   "class-12/mcqs/chemistry/chapter-10",
//   "class-12/mcqs/chemistry/chapter-11",
//   "class-12/mcqs/chemistry/chapter-12",
//   "class-12/mcqs/chemistry/chapter-13",
//   "class-12/mcqs/chemistry/chapter-14",
//   "class-12/mcqs/chemistry/chapter-15",
//   "class-12/mcqs/chemistry/chapter-16"
// ]

// const data = [
//   ...singleroute,
//   ...class9route,
//   ...class10route,
//   ...class11route,
//   ...class12route,
//   ...mcqspointroute,
//   // ...vuroute
// ]
