interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading3({
  children,
  className,
}: HeadingProps) {
  return (
    <h3
      className={`border-y my-2 py-2 text-xl text-primary font-bold lg:text-2xl ${className || ""}`}
    >
      {children}
    </h3>
  );
}
