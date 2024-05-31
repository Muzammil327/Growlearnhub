import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Social() {
  return (
    <div className="mt-6">
      <ul className="flex items-center gap-4">
        <li className="h-10 w-10 rounded-md ring-1 ring-gray-600 flex items-center justify-center text-white ">
          <Link href="" aria-label="Facebook Share Link">
            <FaFacebookF />
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md ring-1 ring-gray-600 flex items-center justify-center text-white ">
          <Link href="" aria-label="twitter share link">
            <FaTwitter />
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md ring-1 ring-gray-600 flex items-center justify-center text-white ">
          <Link href="" aria-label="youtube share link">
            <FaYoutube />
          </Link>
        </li>
        <li className="h-10 w-10 rounded-md ring-1 ring-gray-600 flex items-center justify-center text-white ">
          <Link href="" aria-label="instagram share link">
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </div>
  );
}
