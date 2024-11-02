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

export default function Heading3({
  children,
  className,
  variant = "white"
}: HeadingProps) {
  return (
    <h3
      className={`font-bold lg:text-2xl text-xl my-4 ${className || ""} ${variantClasses[variant] || ""}`}
    >
      {children}
    </h3>
  )
}
