"use client"
import { QueryClient, QueryClientProvider } from "react-query"

type Props = {
  children: React.ReactNode
}

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider
