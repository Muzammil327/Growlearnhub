"use client"
import React from "react"
import Container from "@/src/components/element/container"
import SubHeader from "@/src/components/layout/header/subheader/page"
import Form from "@/src/components/element/form/page"
import BreadCrumb from "@/src/components/element/breadcrumb"
import Footer from "@/src/components/layout/footer/page"
import Navbar from "@/src/components/layout/navbar/page"
import ImageContainer from "@/src/components/element/image"
import Link from "next/link"
import Button from "@/src/components/ui/Button"
import Sidebar from "@/src/components/sidebar/page"

export default function SimpleWrapper({
  title,
  b1,
  b2,
  b3,
  b4,
  b1Link,
  b2Link,
  b3Link,
  image,
  children,
  clist,
  url
}: {
  title: string
  b1: string
  b2?: string
  b3?: string
  b4?: string
  b1Link: string | undefined
  b2Link?: string
  b3Link?: string
  image?: string
  children?: React.ReactNode
  clist?: any[]
  url?: string
}) {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <SubHeader title={title} />
        <Container>
          <div className="grid lg:grid-cols-11 md:gap-6 md:my-20 sm:my-10 my-5">
            <div className="lg:col-span-8">
              <BreadCrumb
                b1={b1}
                b2={b2}
                b3={b3}
                b4={b4}
                b1Link={b1Link}
                b2Link={b2Link}
                b3Link={b3Link}
              />
              <p>
                Welcome to our{" "}
                <Link href="/" className="links">
                  Educational Hub
                </Link>{" "}
                , an innovative platform designed for high school student in
                Class 9 to 12, Chartered Accountancy (CA), and Virtual
                University learners to fulfil academic needs. Our mission is to
                provide a one-stop solution for all your educational
                requirements, empowering you to achieve excellence in your
                studies and professional goals.
              </p>
              {image && (
                <ImageContainer
                  image={`${image}`}
                  title={title}
                  class="my-4"
                  height={720}
                  width={1280}
                  priority
                />
              )}
              {children}
              <p>
                You can give your opinion or any question you have to ask below
                in the comment section area.
              </p>
              <div className="flex gap-4">
                <Button>Report / Error</Button>
                <Link href="/suggest-quiz/">
                  <Button>Suggest Quiz</Button>
                </Link>
              </div>
              <Form url={`https://growlearnhub.com${url}`} />
            </div>
            <div className="lg:col-span-3">
              {clist && <Sidebar title={title} url={url} list={clist} />}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  )
}
