import React, { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  title?: string
  disabled?: boolean
  onClick?: () => void
  loading?: boolean
  variant?: "outline" | "solid"
}

export default function Button({
  children,
  className = "",
  type = "button",
  title,
  disabled = false,
  onClick,
  loading = false,
  variant = "outline",
  ...props
}: ButtonProps) {
  const variantClasses = {
    outline:
      "border-[1px] border-solid border-color1 hover:bg-color1 hover:text-white text-color1",
    solid:
      "bg-color1 hover:bg-white text-white hover:text-color1 border-[1px] border-solid border-color1"
  }

  return (
    <button
      className={`
        ${className}
        ${variantClasses[variant]}
        outline-none block justify-center items-center rounded-md shadow-sm text-base font-medium focus:outline-none duration-500 ease-in-out cursor-pointer h-12 px-6 disabled:cursor-not-allowed transition-all
        ${loading ? "cursor-not-allowed opacity-50" : ""}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={title}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
