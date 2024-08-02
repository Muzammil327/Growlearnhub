import React from 'react'
import Container from '@/src/components/element/container'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'

export default function VUWrapper(data: {
  title: string
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbar />
      <SubHeader title={data.title} />
      <div className="grid md:grid-cols-8 gap-4">
        <section className="col-span-6">
          <Container>{data.children}</Container>
        </section>
        <aside className="col-span-2"></aside>
      </div>
      <Footer />
    </main>
  )
}
