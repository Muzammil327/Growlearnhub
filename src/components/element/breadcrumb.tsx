import React from "react";
import Link from "next/link";

interface Iprops {
  b1: string;
  b2: string;
  b1Link: string;
}

export default function BreadCrumb({ b1, b2, b1Link }: Iprops) {
  return (
    <section
      className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
      aria-label="Breadcrumb"
    >
      <ol className="flex md:flex-row flex-col md:items-center md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center md:mb-0 mb-2">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center md:mb-0 mb-2">
            <svg
              className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
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
            <Link
              href={b1Link}
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2"
            >
              {b1}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center md:mb-0 mb-2">
            <svg
              className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
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
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
              {b2}
            </span>
          </div>
        </li>
      </ol>
    </section>
  );
}
