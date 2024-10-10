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

export default function Heading1({
  children,
  className,
  variant = "white"
}: HeadingProps) {
  return (
    <h1
      className={`font-bold lg:text-5xl text-4xl my-3 ${className || ""} ${variantClasses[variant] || ""}`}
    >
      {children}
    </h1>
  )
}
