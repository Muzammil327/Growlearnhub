import React from 'react'
import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'
import AdminSidebar from '@/src/components/dashboard/admin/AdminSidebar'
import '@/src/app/(main)/(dashboard)/globals.scss'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="lg:grid lg:grid-cols-9 lg:gap-10">
        <aside className="xl:col-span-2 lg:col-span-3">
          <AdminSidebar />
        </aside>
        <section className="xl:col-span-7 lg:col-span-6 mx-5">{children}</section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
