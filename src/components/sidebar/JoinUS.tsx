import React from 'react'
import Link from 'next/link'

export default function JoinUS() {
  return (
    <div className="joinsocials mb-5">
      <div className="title">
        <h3>Join Us:</h3>
      </div>
      <div className="flex gap-3">
        <ul className="flex gap-2 items-center">
          <li className="bg-[#1877F2] p-2 rounded-md text-white">
            <Link href="https://web.facebook.com/edusharpmind/" aria-label="Facebook page">
              <svg
                fill="#fff"
                width="20px"
                height="20px"
                viewBox="-7 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                className="jam jam-facebook"
              >
                <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
              </svg>
            </Link>
          </li>
          <li className="bg-red-600 p-2 rounded-md text-white">
            <Link href="#" target="_blank" aria-label="youtube channel">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M13.478 3.399c.6.161 1.072.634 1.234 1.234C15 5.728 15 8 15 8s0 2.272-.288 3.367a1.754 1.754 0 01-1.234 1.234C12.382 12.89 8 12.89 8 12.89s-4.382 0-5.478-.289a1.754 1.754 0 01-1.234-1.234C1 10.283 1 8 1 8s0-2.272.288-3.367c.162-.6.635-1.073 1.234-1.234C3.618 3.11 8 3.11 8 3.11s4.382 0 5.478.289zm-3.24 4.612l-3.645 2.1V5.9l3.644 2.11z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
