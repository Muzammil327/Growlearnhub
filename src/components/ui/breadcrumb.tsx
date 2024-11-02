import React from "react"
import Link from "next/link"
import Head from "next/head"

interface BreadcrumbItem {
  title: string
  link?: string
}

interface Iprops {
  breadcrumbs: BreadcrumbItem[]
}

export default function BreadCrumb({ breadcrumbs }: Iprops) {
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.title,
      item: breadcrumb.link
        ? `https://www.growlearnhub.com${breadcrumb.link}`
        : undefined
    }))
  }

  return (
    <>
      <Head>
        {/* Injecting Breadcrumb Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsSchema)}
        </script>
      </Head>

      <section
        className="flex md:px-5 px-4 mb-4 py-4 border border-gray-200 dark:border-gray-700 rounded-md dark:bg-gray-900 bg-gray-50"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center capitalize">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="inline-flex items-center gap-2">
              {breadcrumb.link ? (
                <Links Link={breadcrumb.link} title={breadcrumb.title} />
              ) : (
                <WithoutLinks title={breadcrumb.title} />
              )}
              {index < breadcrumbs.length - 1 && <Arrow />}
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}

function Arrow() {
  return (
    <svg
      className="w-3 h-3 t1 !mx-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  )
}

function Links(Iprops: {
  Link: string | undefined
  title: string | undefined
}) {
  return (
    <Link
      href={`${Iprops.Link}`}
      className="inline-flex items-center sm:text-sm text-xs font-medium text-gray-700 dark:text-white hover:text-blue-600"
    >
      {Iprops.title}
    </Link>
  )
}

function WithoutLinks(Iprops: { title: string | undefined }) {
  return (
    <span className="ms-1 !py-0 sm:!text-sm !text-xs font-medium text-gray-500 dark:text-white md:ms-2">
      {Iprops.title}
    </span>
  )
}
