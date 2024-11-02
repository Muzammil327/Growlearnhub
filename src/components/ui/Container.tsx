export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto lg:px-10 md:px-6 sm:px-4 px-3">
      {children}
    </div>
  )
}
