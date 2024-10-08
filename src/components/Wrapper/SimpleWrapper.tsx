"use client"
import React from "react"
import dynamic from "next/dynamic"
import Container from "@/src/components/element/container"
import SubHeader from "@/src/components/layout/header/subheader/page"
import BreadCrumb from "@/src/components/element/breadcrumb"
import Navbar from "@/src/components/layout/navbar/page"
import { ImageContainerLoading } from "@/src/components/ui/ImageContainer"
import Sidebar from "@/src/components/sidebar/page"

const Form = dynamic(() => import("@/src/components/element/form"))
const Newsletter = dynamic(() => import("@/src/components/layout/newsletter/page"))
const Footer = dynamic(() => import("@/src/components/layout/footer/page"))

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
  url,
}: {
  title: string
  b1: string
  b2?: string
  b3?: string
  b4?: string
  b1Link?: string | undefined
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
              {image && (
                <ImageContainerLoading
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
              <Form url={`https://growlearnhub.com${url}`} />
            </div>
            <div className="lg:col-span-3">
              {clist && <Sidebar title={title} url={url} list={clist} />}
            </div>
          </div>
        </Container>
      </main>
    </React.Fragment>
  )
}
