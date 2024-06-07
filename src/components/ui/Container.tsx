export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto md:px-4 sm:px-4 px-2">{children}</div>
  )
}
