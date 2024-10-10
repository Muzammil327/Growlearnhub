import React from "react"
import Link from "next/link"

interface HeadingProps {
  children: React.ReactNode
  className?: string
  variant?: "white" | "black" | "link"
}

const variantClasses = {
  white: "text-white",
  black: "text-black",
  link: "text-emerald-400 hover:text-emerald-500 hover:underline"
}

export function Heading1({
  children,
  className = "",
  variant = "white",
  ...props
}: HeadingProps) {
  return (
    <h1
      className={`
        ${className}
      ${variantClasses[variant]}
      font-bold lg:text-5xl text-4xl mb-4
    `}
      {...props}
    >
      {children}
    </h1>
  )
}

// Heading 2
export const Heading2: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h2 className="font-bold text-gray-800 lg:text-4xl text-3xl mb-4">
    {children}
  </h2>
)

// Heading 3
export const Heading3: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h3 className="font-bold text-gray-800 lg:text-3xl text-2xl mb-4">
    {children}
  </h3>
)

// Heading 4
export const Heading4: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h4 className="font-bold text-gray-800 lg:text-2xl text-xl mb-4">
    {children}
  </h4>
)

// Heading 5
export const Heading5: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h5 className="font-bold text-gray-800 lg:text-xl text-lg mb-4">
    {children}
  </h5>
)

// Heading 6
export const Heading6: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h6 className="font-bold text-gray-800 lg:text-lg text-base mb-4">
    {children}
  </h6>
)

// Span Component
export const Span: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block mt-4 text-blue-500 underline">{children}</span>
)

// Link Component
export const Links: React.FC<{
  children: React.ReactNode
  slug: string
  className?: string
}> = ({ children, slug, className }) => (
  <Link
    href={slug}
    className={`link ${className}`}
  >
    {children}
  </Link>
)
