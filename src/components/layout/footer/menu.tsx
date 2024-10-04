import React from 'react'
import Link from 'next/link'
import QuestionMarkCircleIcon from '@/src/components/layout/footer/QuestionMarkCircleIcon'
import BookOpenIcon from '@/src/components/layout/footer/BookOpenIcon'

const footer = [
  {
    id: 0,
    name: 'Books',
    link: '/book-point/',
    icon: QuestionMarkCircleIcon,
  },
  {
    id: 1,
    name: 'Mcqs',
    link: '/mcqs-point/',
    icon: BookOpenIcon,
  },
  {
    id: 2,
    name: 'Online Tests',
    link: '/online-test-point/',
    icon: BookOpenIcon,
  },
  {
    id: 3,
    name: 'Topic Explorer',
    link: '/',
    icon: BookOpenIcon,
  },
]
const footer2 = [
  {
    name: 'Class 9',
    link: '/class-9/',
    icon: BookOpenIcon,
  },
  {
    name: 'Class 10',
    link: '/class-10/',
    icon: BookOpenIcon,
  },
  {
    name: 'Class 11',
    link: '/class-11/',
    icon: BookOpenIcon,
  },
  {
    name: 'Class 12',
    link: '/class-12/',
    icon: BookOpenIcon,
  },
  {
    name: 'VU',
    link: '/vu/',
    icon: BookOpenIcon,
  },
]

export default function FooterMenu() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-8 md:gap-y-6 gap-y-10 lg:pt-2">
        {footer.map((footer) => (
          <div className="flex items-center" key={footer.name}>
            <div className="rounded-md bg-white/5 p-2 mr-5 h-10 w-10 ring-1 ring-gray-600 flex items-center justify-center text-white">
              <footer.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <span className="md:font-semibold font-normal md:text-base text-sm text-white">
              {footer.name}
            </span>
          </div>
        ))}
      </div>
      {/* <Link
        href="/sharp-brain"
        className="mt-5 block w-full  rounded-md bg-white/5 p-2 mr-5 h-10 ring-1 ring-gray-600  items-center justify-center text-white text-center"
      >
        Sharp Your Brain with growlearnhub
      </Link> */}
      <div className="grid grid-cols-2 gap-x-8 md:gap-y-6 gap-y-10 lg:pt-2 mt-4">
        {footer2.map((footer) => (
          <div className="flex items-center" key={footer.name}>
            <div className="rounded-md bg-white/5 p-2 mr-5 h-10 w-10 ring-1 ring-gray-600 flex items-center justify-center text-white">
              <footer.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <Link
              href={footer.link}
              title={footer.name}
              className="md:font-semibold font-normal md:text-base text-sm text-white"
            >
              {footer.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
