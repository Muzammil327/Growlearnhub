import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Social() {
  return (
    <div className="mt-6">
      <ul className="flex items-center gap-4">
        <li className="h-10 w-10 rounded-md ring-1 ring-gray-600 flex items-center justify-center text-white ">
          <Link
            href="https://web.facebook.com/edulearn327/"
            aria-label="Facebook Share Link"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md ring-1 ring-gray-600 flex items-center justify-center text-white ">
          <Link
            href="https://www.youtube.com/channel/UCNJVdIvIfkEycYcSe0hXnGA"
            target="_blank"
            aria-label="youtube share link"
          >
            <FaYoutube />
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md ring-1 ring-gray-600 flex items-center justify-center text-white ">
          <Link
            href="https://www.instagram.com/edulearn327/"
            target="_blank"
            aria-label="instagram share link"
          >
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </div>
  )
}
