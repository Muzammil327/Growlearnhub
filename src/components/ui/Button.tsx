import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button type="button" className={`${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
