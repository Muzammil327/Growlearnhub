interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading2({ children, className }: HeadingProps) {
  return (
    <h2
      className={`my-2 text-2xl font-bold capitalize text-primary lg:text-3xl ${className || ""}`}
    >
      {children}
    </h2>
  );
}
