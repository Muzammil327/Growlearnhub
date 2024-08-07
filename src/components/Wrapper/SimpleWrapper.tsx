import React from 'react'
import Container from '@/src/components/element/container'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Form from '@/src/components/element/form/page'
import BreadCrumb from '@/src/components/element/breadcrumb'
import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'
import './style.scss'
import ImageContainer from '@/src/components/element/image'

export default function SimpleWrapper(data: {
  title: string
  clist?: any
  title1?: string
  image?: string | undefined
  url: string
  link1?: string
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
    <>
      {' '}
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
              {data.image && (
                <ImageContainer
                  image={`${data.image}`}
                  title={data.title}
                  class="my-4"
                  height={720}
                  width={1280}
                  priority
                />
              )}
              {data.children}
              {/* {mainData.map((data: any) => {
                return (
                  <div key={data.bookName}>
                    <h3 className="text-xl font-semibold py-2">Class 9 Quiz</h3>
                    <p>
                      Our collection of <strong>9th Class Solved Quiz</strong>{' '}
                      encompasses all subjects included Physics, Biology,
                      Chemistry, Math, English, Urdu, Pak Study, Islamiat,
                      General Math, Computer Science, Economics, Tarjuma Tul
                      Quran, Ikhlaqiat, ensuring you have the resources you need
                      to succeed.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
                      <Card3
                        key={data.bookName}
                        title={data.bookName}
                        link={data.link}
                      />
                    </div>
                  </div>
                )
              })} */}
              <p>
                You can give your opinion or any question you have to ask below
                in the comment section area.
              </p>
              <Form url={`https://growlearnhub.com${data.url}`} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
