import React from "react";
import Link from "next/link";

interface Iprops {
  b1: string;
  b2?: string;
  b3?: string;
  b4?: string;
  b1Link?: string | undefined;
  b2Link?: string | undefined;
  b3Link?: string | undefined;
  b4Link?: string | undefined;
}

export default function BreadCrumb({
  b1,
  b2,
  b3,
  b4,
  b1Link,
  b2Link,
  b3Link,
  b4Link,
}: Iprops) {
  return (
    <section
      className="flex md:px-5 px-3 md:py-3 py-2 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
      aria-label="Breadcrumb"
    >
      <ol className="flex sm:flex-row flex-col sm:items-center sm:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center gap-2 sm:mb-0 mb-2">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-3 h-3 me-2.5 sm:block hidden"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
          <Arrow />
        </li>
        {/* second  */}
        {b1 && (
          <li className="inline-flex items-center gap-2 sm:mb-0 mb-2">
            {!b1Link && <WithoutLinks title={b1} />}
            {b1Link && <Links Link={b1Link} title={b1} />}
          </li>
        )}
        {b2 && (
          <li className="inline-flex items-center gap-2 sm:mb-0 mb-2">
            {!b2Link && <WithoutLinks title={b2} />}
            {b2Link && <Links Link={b2Link} title={b2} />}
          </li>
        )}
        {b3 && (
          <li className="inline-flex items-center gap-2 sm:mb-0 mb-2">
            {!b3Link && <WithoutLinks title={b3} />}
            {b3Link && <Links Link={b3Link} title={b3} />}
          </li>
        )}
        {b4 && (
          <li className="inline-flex items-center gap-2 sm:mb-0 mb-2">
            {!b4Link && <WithoutLinks title={b4} />}
            {b4Link && <Links Link={b3Link} title={b4} />}
          </li>
        )}
      </ol>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      className="w-3 h-3 me-2.5"
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
  );
}
function Links(Iprops: {
  Link: string | undefined;
  title: string | undefined;
}) {
  return (
    <>
      <Link
        href={`${Iprops.Link}`}
        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
      >
        {Iprops.title}
      </Link>
      <Arrow />
    </>
  );
}
function WithoutLinks(Iprops: { title: string | undefined }) {
  return (
    <div className="flex items-center">
      <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
        {Iprops.title}
      </span>
    </div>
  );
}
