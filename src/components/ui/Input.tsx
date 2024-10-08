import React, { ChangeEvent } from "react"

interface InputProps {
  type: "text" | "email" | "password" | "number" | "tel" | "url" // Adjusted types for more specific input types
  value: string | number // Changed value type to accept both string and number
  placeholder: string
  name: string
  className?: string
  autoComplete?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void // Updated onChange to accept ChangeEvent
}

export default function Input({
  type,
  value,
  name,
  placeholder,
  className,
  onChange,
  autoComplete
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const validDecimal = /^\d*\.?\d*$/

    if (validDecimal.test(value) || type !== "number") {
      onChange(e)
    }
  }
  return (
    <input
      id={name}
      name={name}
      type={type}
      step="3"
      value={value}
      onChange={handleChange}
      className={`shadow-sm rounded-md w-full px-4 py-3 bg-white dark:bg-gray-800 text-black dark:text-white ring-1 ring-gray-200 dark:ring-gray-600 focus:outline-none focus:ring-color1 dark:focus:ring-color1
        ${className}`}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  )
}
