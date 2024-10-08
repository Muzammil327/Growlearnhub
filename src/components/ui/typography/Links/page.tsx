import Link from "next/link"
import styles from "./Links.module.scss"

interface LinkProps {
  children: React.ReactNode
  slug: string
  className?: string
  variant?: "link1" | "link2" | "btnLink"
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
  title?: string
  onClick?: () => void // Add the onClick prop here
}

const LinkComponent = ({
  children,
  slug,
  className,
  variant = "link1",
  target,
  rel,
  title,
  onClick // Destructure the onClick prop
}: LinkProps) => {
  const variantClass = styles[variant] || styles.link1 // Default to 'link1' variant

  return (
    <Link
      href={slug}
      className={`${className} ${variantClass}`}
      target={target}
      rel={rel}
      title={title}
    >
      <a onClick={onClick}>{children}</a> {/* Add the onClick here */}
    </Link>
  )
}

export default LinkComponent
