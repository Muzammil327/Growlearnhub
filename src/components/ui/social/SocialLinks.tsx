import React from "react"
import dynamic from "next/dynamic"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
const ButtonIconComponents = dynamic(
  () => import("@/src/components/ui/typography/ButtonIcon/page")
)

export default function SocialLinks() {
  return (
    <div className="mt-6">
      <ul className="flex items-center gap-4">
        <li>
          <ButtonIconComponents href="/" title="Facebook Link" target="_blank">
            <FaFacebookF />
          </ButtonIconComponents>
        </li>
        <li>
          <ButtonIconComponents href="/" title="youtube Link" target="_blank">
            <FaYoutube />
          </ButtonIconComponents>
        </li>
        <li>
          <ButtonIconComponents href="/" title="instagram Link" target="_blank">
            <FaInstagram />
          </ButtonIconComponents>
        </li>
      </ul>
    </div>
  )
}
