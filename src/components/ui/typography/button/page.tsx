import React, { ReactNode } from "react"
import styles from "./Button.module.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  title?: string
  disabled?: boolean
  onClick?: () => void
  loading?: boolean
  variant?: "outline" | "solid"
  href?: string // Optional href prop for links
}

export default function ButtonComponents({
  children,
  className = "",
  type = "button",
  title,
  disabled = false,
  onClick,
  loading = false,
  variant = "outline",
  href
}: ButtonProps) {
  const variantClasses = {
    outline: "text-color1 ring-1 ring-color1 dark:ring-white",
    solid: "bg-color1 hover:bg-white text-white hover:text-color1"
  }

  const isLink = !!href

  const commonProps = {
    className: `${className} ${styles.button} ${variantClasses[variant]} ${
      loading ? "cursor-not-allowed opacity-50" : ""
    }`,
    title,
    disabled: disabled || loading,
    "aria-label": title
  }

  // Render as a link if href is provided, else render as a button
  if (isLink) {
    return (
      <a
        href={href}
        className={`${commonProps.className} inline-block`}
        aria-label={title}
      >
        {loading ? "Processing..." : children}
      </a>
    )
  } else {
    return (
      <button {...commonProps} onClick={onClick} type={type}>
        {loading ? "Processing..." : children}
      </button>
    )
  }
}
