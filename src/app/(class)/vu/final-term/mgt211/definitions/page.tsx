import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'
import Link from 'next/link'

const data = {
  title: 'VU CS201 Mid Term Definitions',
  description:
    'Here you get cs201 mid term containing definitions, mcqs chapter wise, definitions, important topic.',
  canonical: '/vu/mid-term/cs201/definitions/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/mgt211/definitions/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'cs201 definitions',
    'mid term cs201',
    'mid term cs201 definitions',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term MCQ's">
      <div className="my-20">
        {datas.map((data: any) => {
          return (
            <Definition
              title={data.title}
              para={data.para}
              slug={data.slug}
              key={data.id}
            />
          )
        })}
      </div>
    </VUWrapper>
  )
}

const datas = [
  {
    id: 0,
    title: 'Inquiry Letter',
    para: 'Organization collects the information, like purchasing.',
    slug: '/',
  },
  {
    id: 1,
    title: 'Order Letter',
    para: 'Organization places the order for purchasing.',
    slug: '/',
  },
  {
    id: 2,
    title: 'Complaint Letter',
    para: 'Organization complaint already purchased products or acquired services, like quality problem.',
    slug: '/',
  },
  {
    id: 3,
    title: 'Adjustment Letter',
    para: 'Organization send letter for adjustment of accounts. like dues or payment.',
    slug: '/',
  },
  {
    id: 4,
    title: 'Reply to Inquiry Letter',
    para: 'Organization give information, like product cost and delivery method',
    slug: '/',
  },
  {
    id: 5,
    title: 'Chief Information Officer (CIO)',
    para: 'Top Level Manager, who oversees the company information systems.',
    slug: '/',
  },
  {
    id: 6,
    title: 'Financial Accounting',
    para: 'External User',
    slug: '/',
  },
  {
    id: 7,
    title: 'Managerial Accounting',
    para: 'Internal Users',
    slug: '/',
  },
  {
    id: 8,
    title: 'External Failure Costs',
    para: 'Incurred in selling the products in the market, like sale return, repair, service, repair return defects, recalls, liability.',
    slug: '/',
  },
  {
    id: 9,
    title: 'Internal Failure Costs',
    para: 'Paid within the organization. like scrap, re-work, inspection and downgrading.',
    slug: '/',
  },
  {
    id: 10,
    title: 'Appraisal Costs',
    para: 'Inspection, laboratory testing and equipment maintenance cost.',
    slug: '/',
  },
  {
    id: 11,
    title: 'Prevention Costs',
    para: 'preventive network, quality planning and improvement, training, hiring, maintenance.',
    slug: '/',
  },
  {
    id: 12,
    title: 'Consumer Products',
    para: 'consumer are consumed product which are output of industrial products like tea, soap, cooking oil etc.',
    slug: '/',
  },
  {
    id: 13,
    title: 'Industrial Products',
    para: 'Prepared other products, like raw materials, machinery, chemicals, computer hardware and software',
    slug: '/',
  },
  {
    id: 14,
    title: 'Hygiene Factors',
    para: 'Keep employees in the organization.',
    slug: '/',
  },
  {
    id: 15,
    title: 'Motivators',
    para: 'High productivity from workers.',
    slug: '/',
  },
  {
    id: 16,
    title: 'Time Utility',
    para: 'Product available when consumers want it.',
    slug: '/',
  },
  {
    id: 17,
    title: 'Place Utility',
    para: 'Product available where consumers want it.',
    slug: '/',
  },
  {
    id: 18,
    title: 'Ownership Utility',
    para: 'Product takes ownership after facilitating the transaction.',
    slug: '/',
  },
  {
    id: 19,
    title: 'Form Utility',
    para: 'product characteristics like shape, size, color function and style.',
    slug: '/',
  },
  {
    id: 20,
    title: 'National Brands',
    para: 'Same brand is sold throughout the country.',
    slug: '/',
  },
  {
    id: 21,
    title: 'License Brands',
    para: 'Seller buys the Right to sell that brand in the market.',
    slug: '/',
  },
  {
    id: 22,
    title: 'Private Brands',
    para: 'During manufacturing product, use the brand of some retailer..',
    slug: '/',
  },
  {
    id: 23,
    title: 'Product',
    para: 'Offered for sale by an organization and in return it can earn.',
    slug: '/',
  },
  {
    id: 24,
    title: 'Assets',
    para: 'Any economic resource expected to benefit a firm or an individual who owns it.',
    slug: '/',
  },
  {
    id: 25,
    title: 'Tangible Assets',
    para: 'Physical Touch, smelled, or felt with fingertips. like Cash, Building, Automobiles, Machinery & raw Materials.',
    slug: '/',
  },
  {
    id: 26,
    title: 'Intangible Assets',
    para: 'Not physically touch Like Services, Ideas, copy rights & good will.',
    slug: '/',
  },
]

function Definition({
  title,
  para,
  slug,
}: {
  title: string
  para: string
  slug: string
}) {
  return (
    <div>
      <hr className="py-4" />
      <Link href={slug}>
        <h2>{title}</h2>
      </Link>
      <p className="text-medium"> {para}</p>
    </div>
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
