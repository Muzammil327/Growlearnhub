import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  text?: string
  onClick?: () => void
}

const ButtonIcon: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  text,
}) => {
  return (
    <button
      type="button"
      className={`${className} border-2 border-solid border-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 ease-in-out rounded-md p-2 flex items-center justify-center text-black text-xl`}
      onClick={onClick}
      aria-label={text}
    >
      {children}
    </button>
  )
}

export default ButtonIcon
