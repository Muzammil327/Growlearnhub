interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "black" | "link";
}

const variantClasses = {
  white: "text-white",
  black: "text-black",
  link: "text-emerald-400 hover:text-emerald-500 hover:underline",
};

export default function Heading4({
  children,
  className,
  variant = "black",
}: HeadingProps) {
  return (
    <h4
      className={`my-4 text-xl font-bold lg:text-2xl ${className || ""} ${variantClasses[variant] || ""}`}
    >
      {children}
    </h4>
  );
}
