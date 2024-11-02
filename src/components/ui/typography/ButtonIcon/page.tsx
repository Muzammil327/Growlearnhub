import React, { ReactNode } from "react"
import styles from "./ButtonIcon.module.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  target?: "_blank" | "_self" | "_parent" | "_top"
  title?: string
  disabled?: boolean
  onClick?: () => void
  loading?: boolean
  variant?: "outline" | "solid"
  href?: string // Optional href prop for links
}

export default function ButtonIconComponents({
  children,
  className = "",
  type = "button",
  title,
  disabled = false,
  onClick,
  target,
  loading = false,
  variant = "outline",
  href
}: ButtonProps) {
  const variantClasses = {
    outline: "text-color1 dark:text-white ring-1 ring-color1 dark:ring-white",
    solid:
      "bg-color1 hover:bg-white text-white hover:text-white border-[1px] border-solid border-white"
  }

  const isLink = !!href

  const commonProps = {
    className: `${className} ${variantClasses[variant]} ${styles.button}`,
    title,
    disabled: disabled || loading,
    "aria-label": title
  }

  if (isLink) {
    // Render an anchor tag styled as a button
    return (
      <a
        href={href}
        className={`${commonProps.className} inline-block`}
        aria-label={title}
        target={target}
      >
        {children}
      </a>
    )
  } else {
    // Render a button element
    return (
      <button {...commonProps} onClick={onClick} type={type}>
        {children}
      </button>
    )
  }
}
