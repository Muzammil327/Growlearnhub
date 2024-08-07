'use client'
import React from 'react'
import Container from '@/src/components/element/container'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Form from '@/src/components/element/form/page'
import BreadCrumb from '@/src/components/element/breadcrumb'
import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'
import '@/src/styles/Wrapper/style.scss'
import Sidebar from '@/src/components/sidebar/page'

export default function MPSubjectWrapper(data: {
  title: string
  clist?: any
  url: string
  children: React.ReactNode
  b1: string
  b1Link?: string
  b2?: string
  b2Link?: string
  b3?: string
  b3Link?: string
  b4?: string
}) {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <SubHeader title={data.title} />
        <Container>
          <div className="book">
            <div className="c1">
              <BreadCrumb
                b1={data.b1}
                b2={data.b2}
                b3={data.b3}
                b4={data.b4}
                b1Link={data.b1Link}
                b2Link={data.b2Link}
                b3Link={data.b3Link}
              />
              <p>
                Welcome to our Educational Hub, an innovative platform designed
                for high school student in Class 9 to 12, Chartered Accountancy
                (CA), and Virtual University learners to fulfil academic needs.
                Our mission is to provide a one-stop solution for all your
                educational requirements, empowering you to achieve excellence
                in your studies and professional goals.
              </p>
              {data.children}
              <p>
                You can give your opinion or any question you have to ask below
                in the comment section area.
              </p>
              <Form url={`https://growlearnhub.com${data.url}`} />
            </div>
            <div className="c2">
              {data.clist && (
                <Sidebar title={data.title} url={data.url} list={data.clist} />
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  )
}
