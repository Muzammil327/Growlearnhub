import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU CS302 Mid Term Abbreviation',
  description:
    'Here you can get cs302 mid term abbreviations in chapter wise and topic wise in the form of list.',
  canonical: '/vu/mid-term/cs302/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs302/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs302',
    'mid term cs302',
    'abbreviations',
    'cs302 abbreviations',
    'mid term cs302 abbreviations',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS302 Mid Term Abbreviations">
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
    title: 'PIA',
    name: 'Pakistan International Airline',
  },
  {
    title: 'PIA',
    name: 'Pakistan International Airline',
  },
  {
    title: 'PIA',
    name: 'Pakistan International Airline',
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
