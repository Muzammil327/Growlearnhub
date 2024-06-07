import React from 'react'
import { text } from 'stream/consumers'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  text: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  text,
}) => {
  return (
    <button
      type="button"
      className={`${className}`}
      onClick={onClick}
      aria-label={text}
    >
      {children}
    </button>
  )
}

export default Button
