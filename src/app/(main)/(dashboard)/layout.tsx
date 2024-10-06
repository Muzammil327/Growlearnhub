import Link from "next/link"
import React from "react"

export default function Dashboardlayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <div className="navbar bg-black py-5">gh</div>
      <main className="grid grid-cols-10 h-screen">
        <div className="sidebar bg-red-500 text-white h-full col-span-2">
          <h2 className="text-2xl font-semibold my-8">Admin Dashboard</h2>
          <ul className="space-y-2 pl-5">
            <li>
              <a
                href="#"
                className="flex items-center px-8 py-3 rounded-md hover:bg-red-600 transition-colors rounded-tl-full rounded-bl-full"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                href="/dashboard/newsletter"
                className="flex items-center px-8 py-3 rounded-md hover:bg-red-600 transition-colors rounded-tl-full rounded-bl-full"
              >
                Newsletter
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-8 py-3 rounded-md hover:bg-red-600 transition-colors rounded-tl-full rounded-bl-full"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-8 py-3 rounded-md hover:bg-red-600 transition-colors rounded-tl-full rounded-bl-full"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-8 py-3 rounded-md hover:bg-red-600 transition-colors rounded-tl-full rounded-bl-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="content col-span-8 px-4 py-12">{children}</div>
      </main>
    </React.Fragment>
  )
}
