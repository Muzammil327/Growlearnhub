import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU MGT201 Final Term Abbreviation',
  description:
    'Here you can get mgt211 final term abbreviations in chapter wise and topic wise in the form of list.',
  canonical: '/vu/final-term/mgt211/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/final-term/mgt211/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'final term',
    'vu final term',
    'mgt211',
    'final term mgt211',
    'abbreviations',
    'mgt211 abbreviations',
    'final term mgt211 abbreviations',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU MGT211 Final Term Abbreviations">
      <div className="relative overflow-x-auto my-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <tbody>
            {datas.map((data: any) => {
              return (
                <tr className="bg-white border-b" key={data.name}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-lg"
                  >
                    {data.title}
                  </th>
                  <td className="px-6 py-4 text-lg">{data.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </VUWrapper>
  )
}

const datas = [
  {
    title: 'GAAP',
    name: 'Generally Accepted Accounting Principles',
  },
  {
    title: 'AIS',
    name: 'ACCOUNTING INFORMATION SYSTEM',
  },
  {
    title: 'CPU',
    name: 'Central Processing Unit',
  },
  {
    title: 'ESS',
    name: 'Executive Support System',
  },
  {
    title: 'EDS',
    name: 'Executive Decision System',
  },
  {
    title: 'DSS',
    name: 'Decision Support System',
  },
  {
    title: 'MIS',
    name: 'Management Information System',
  },
  {
    title: 'CIO',
    name: 'Chief Information Officer',
  },
  {
    title: 'ERP',
    name: 'Enterprise Resource Planning',
  },
  {
    title: 'IS',
    name: 'INFORMATION SYSTEM',
  },
  {
    title: 'ISO',
    name: 'International Standard Organization',
  },
  {
    title: 'TQM',
    name: 'Total Quality Management',
  },
  {
    title: 'JIT',
    name: 'JUST-IN-TIME',
  },
  {
    title: 'LIFO',
    name: 'Last in First out',
  },
  {
    title: 'FIFO',
    name: 'First in First out',
  },
  {
    title: 'PERT',
    name: 'Program Evaluation Review Technique',
  },
  {
    title: 'POP',
    name: 'Point of Purchase',
  },
  {
    title: 'POS',
    name: 'Point of Sales',
  },
  {
    title: 'AIDA',
    name: 'Attention, Interest, Desire and Act',
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
