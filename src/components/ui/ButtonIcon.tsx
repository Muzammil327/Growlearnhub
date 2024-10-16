import React, { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  title?: string
  disabled?: boolean
  onClick?: () => void
  loading?: boolean
  variant?: "outline" | "solid" | "link"
}

export default function ButtonIcon({
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
      "border-[1px] border-solid border-color1 ",
    solid:
      "bg-color1 hover:bg-white text-white hover:text-white border-[1px] border-solid border-white",
    link: "bg-white/5 ring-1 ring-gray-600 text-white"
  }

  return (
    <button
      className={`
      ${className}
      ${variantClasses[variant]}
      outline-none flex rounded-md shadow-sm sm:text-base text-sm font-medium focus:outline-none duration-500 ease-in-out cursor-pointer h-10 w-10 p-2 disabled:cursor-not-allowed transition-all 
       items-center justify-center ${loading ? "cursor-not-allowed opacity-50" : ""}
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
