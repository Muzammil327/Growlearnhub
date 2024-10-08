import {
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa"
import LinkComponent from "@/src/components/ui/typography/Links/page"

export default function SocialShare() {
  return (
    <ul className="flex gap-4">
      <li className="btnIcon">
        <LinkComponent
          slug="https://github.com/Muzammil327"
          target="_blank"
          title="GitHub"
        >
          <FaGithub size={16} />
        </LinkComponent>
      </li>
      <li className="btnIcon">
        <LinkComponent
          slug="https://www.linkedin.com/in/muzammil327/"
          target="_blank"
          title="LinkedIn"
        >
          <FaLinkedinIn size={16} />
        </LinkComponent>
      </li>
      <li className="btnIcon">
        <LinkComponent
          slug="https://web.facebook.com/edusharpmind/"
          target="_blank"
          title="Facebook"
        >
          <FaFacebookF size={16} />
        </LinkComponent>
      </li>
      <li className="btnIcon">
        <LinkComponent slug="/" target="_blank" title="YouTube">
          <FaYoutube size={16} />
        </LinkComponent>
      </li>
      <li className="btnIcon">
        <LinkComponent slug="/" target="_blank" title="Instagram">
          <FaInstagram size={16} />
        </LinkComponent>
      </li>
      <li className="btnIcon">
        <LinkComponent slug="/" target="_blank" title="Twitter">
          <FaTwitter size={16} />
        </LinkComponent>
      </li>
    </ul>
  )
}
