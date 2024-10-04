import React from "react"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import ButtonIcon from "../../ui/ButtonIcon"

export default function Social() {
  return (
    <div className="mt-6">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/" aria-label="Facebook Share Link" target="_blank">
            <ButtonIcon>
              <FaFacebookF />
            </ButtonIcon>
          </Link>
        </li>
        <li>
          <Link href="/" target="_blank" aria-label="youtube share link">
            <ButtonIcon>
              <FaYoutube />
            </ButtonIcon>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            aria-label="instagram share link"
          >
            <ButtonIcon>
              <FaInstagram />
            </ButtonIcon>
          </Link>
        </li>
      </ul>
    </div>
  )
}
