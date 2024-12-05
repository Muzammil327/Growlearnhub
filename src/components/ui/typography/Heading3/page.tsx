interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading3({ children, className }: HeadingProps) {
  return (
    <h3
      className={`my-2 border-y py-2 text-xl font-bold text-primary lg:text-2xl ${className || ""}`}
    >
      {children}
    </h3>
  );
}
