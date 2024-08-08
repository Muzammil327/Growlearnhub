import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  text?: string
  onClick?: () => void
  disable?: any
}

const ButtonOutline: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  text,
  disable,
}) => {
  return (
    <button
      type="button"
      className={`${className} bg-color2 text-white py-2 px-6 rounded-md duration-300 ease-in-out hover:bg-white hover:text-color2 border-2 border-solid border-color2`}
      onClick={onClick}
      aria-label={text}
      disabled={disable}
    >
      {children}
    </button>
  )
}

export default ButtonOutline
