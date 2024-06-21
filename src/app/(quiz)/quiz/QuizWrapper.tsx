import React from 'react'
import Container from '@/src/components/element/container'
import Sidebar from '@/src/components/element/sidebar'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Form from '@/src/components/element/form/page'
import BreadCrumb from '@/src/components/element/breadcrumb'
import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'
import ImageContainer from '@/src/components/element/image'

export default function BookWrapper(data: {
  title: string
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
          <div className="quiz">
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
              {/* <h2>What We Offer:</h2>
              <ul>
                <li>Free Textbooks</li>
                <li>Subject Notes</li>
                <li>Pairing Schemes</li>
                <li>Online MCQ Tests</li>
                <li>Quiz</li>
                <li>Past Papers</li>
              </ul> */}
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

              <p>
                You can give your opinion or any question you have to ask below
                in the comment section area.
              </p>
              <Form url={data.url} />
            </div>
            <div className="c2">
              <Sidebar
                title={data.title}
                url={data.url}
                list={clist}
                videoId="HGI3-gVuCig"
              />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
const clist = [
  { title: 'Class 9 Books', link: '/books/class-9/' },
  {
    title: 'Class 9 Physics Books Punjab',
    link: '/books/class-9/punjab-board-physics/',
  },
  {
    title: 'Class 9 Biology Books Punjab',
    link: '/books/class-9/punjab-board-biology/',
  },
  {
    title: 'Class 9 Chemistry Books Punjab',
    link: '/books/class-9/punjab-board-chemistry/',
  },
  {
    title: 'Class 9 Math Books Punjab',
    link: '/books/class-9/punjab-board-math/',
  },
  {
    title: 'Class 9 English Books Punjab',
    link: '/books/class-9/punjab-board-english/',
  },
  {
    title: 'Class 9 Urdu Books Punjab',
    link: '/books/class-9/punjab-board-urdu/',
  },
  {
    title: 'Class 9 Pak Study Books Punjab',
    link: '/books/class-9/punjab-board-pak-study/',
  },
  {
    title: 'Class 9 Islamiat Books Punjab',
    link: '/books/class-9/punjab-board-islamiat/',
  },
  {
    title: 'Class 9 General Math Books Punjab',
    link: '/books/class-9/punjab-board-general-math/',
  },
  {
    title: 'Class 9 Computer Science Books Punjab',
    link: '/books/class-9/punjab-board-computer-science/',
  },
  {
    title: 'Class 9 Economics Books Punjab',
    link: '/books/class-9/punjab-board-economics/',
  },
  {
    title: 'Class 9 Tarjuma tul Quran Books Punjab',
    link: '/books/class-9/punjab-board-tarjuma-tul-quran/',
  },
  {
    title: 'Class 9 Ikhlaqiat Books Punjab',
    link: '/books/class-9/punjab-board-ikhlaqiat/',
  },
  // class 10
  { title: 'Class 10 Books', link: '/books/class-10/' },
  {
    title: 'Class 10 Physics Books Punjab',
    link: '/books/class-10/punjab-board-physics/',
  },
  {
    title: 'Class 10 Biology Books Punjab',
    link: '/books/class-10/punjab-board-biology/',
  },
  {
    title: 'Class 10 Chemistry Books Punjab',
    link: '/books/class-10/punjab-board-chemistry/',
  },
  {
    title: 'Class 10 Math Books Punjab',
    link: '/books/class-10/punjab-board-math/',
  },
  {
    title: 'Class 10 English Books Punjab',
    link: '/books/class-10/punjab-board-english/',
  },
  {
    title: 'Class 10 Urdu Books Punjab',
    link: '/books/class-10/punjab-board-urdu/',
  },
  {
    title: 'Class 10 Pak Study Books Punjab',
    link: '/books/class-10/punjab-board-pak-study/',
  },
  {
    title: 'Class 10 Islamiat Books Punjab',
    link: '/books/class-10/punjab-board-islamiat/',
  },
  {
    title: 'Class 10 General Math Books Punjab',
    link: '/books/class-10/punjab-board-general-math/',
  },
  {
    title: 'Class 10 Computer Science Books Punjab',
    link: '/books/class-10/punjab-board-computer-science/',
  },
  {
    title: 'Class 10 Economics Books Punjab',
    link: '/books/class-10/punjab-board-economics/',
  },
  {
    title: 'Class 10 Tarjuma tul Quran Books Punjab',
    link: '/books/class-10/punjab-board-tarjuma-tul-quran/',
  },
  {
    title: 'Class 10 Ikhlaqiat Books Punjab',
    link: '/books/class-10/punjab-board-ikhlaqiat/',
  },
  // class 11
  { title: 'Class 11 Books', link: '/books/class-11/' },
  { title: 'Class 12 Books', link: '/books/class-12/' },
]
