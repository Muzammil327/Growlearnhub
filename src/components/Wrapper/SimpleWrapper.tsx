"use client"
import React from "react"
import dynamic from "next/dynamic"
import Container from "@/src/components/ui/Container"
import SubHeader from "@/src/components/layout/header/subheader/page"
import BreadCrumb from "@/src/components/element/breadcrumb"
import Navbar from "@/src/components/layout/navbar/page"
import { ImageContainerLoading } from "@/src/components/ui/ImageContainer"
import Sidebar from "@/src/components/sidebar/page"
const Form = dynamic(() => import("@/src/components/element/form"))

interface Iprops {
  data: {
    title: string
    b1: string
    b2?: string
    b3?: string
    b4?: string
    b1Link?: string | undefined
    b2Link?: string
    b3Link?: string
    image?: string
    clist?: any[]
    canonical?: string
    url?: string
  }
  children?: React.ReactNode
}

export default function SimpleWrapper({ data, children }: Iprops) {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <SubHeader title={data.title} />
        <Container>
          <div className="grid lg:grid-cols-11 md:gap-6 md:my-20 sm:my-10 my-5">
            <div className="lg:col-span-8">
              <BreadCrumb
                b1={data.b1}
                b2={data.b2}
                b3={data.b3}
                b4={data.b4}
                b1Link={data.b1Link}
                b2Link={data.b2Link}
                b3Link={data.b3Link}
              />
              {data.image && (
                <ImageContainerLoading
                  image={`${data.image}`}
                  title={data.title}
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
              <Form url={`https://growlearnhub.com${data.canonical}`} />
            </div>
            <aside className="lg:col-span-3">
              {data.clist && (
                <Sidebar title={data.title} url={data.url} list={data.clist} />
              )}
            </aside>
          </div>
        </Container>
      </main>
    </React.Fragment>
  )
}
