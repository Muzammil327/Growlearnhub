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
    <>
      <Navbar />
      <main>
        <SubHeader title={data.title} />
        <Container>{data.children}</Container>
      </main>
      <Footer />
    </>
  )
}
