import React, { ChangeEvent } from 'react'

interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' // Adjusted types for more specific input types
  value: string | number // Changed value type to accept both string and number
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void // Updated onChange to accept ChangeEvent
}

export default function Input({
  type,
  value,
  placeholder,
  onChange,
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const validDecimal = /^\d*\.?\d*$/

    if (validDecimal.test(value) || type !== 'number') {
      onChange(e)
    }
  }
  return (
    <input
      type={type}
      step="3"
      value={value}
      onChange={handleChange}
      className="shadow-sm rounded-md w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      placeholder={placeholder}
    />
  )
}
