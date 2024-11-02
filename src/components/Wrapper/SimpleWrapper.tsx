"use client"
import React from "react"
import dynamic from "next/dynamic"
import Container from "@/src/components/ui/Container"
import SubHeader from "@/src/components/layout/header/subheader/page"
import BreadCrumb from "@/src/components/ui/breadcrumb"
import { ImageContainerLoading } from "@/src/components/ui/ImageContainer"
import Sidebar from "@/src/components/ui/sidebar/page"
const Form = dynamic(() => import("@/src/components/ui/form/CommentForm"))

interface BreadCrumbProps {
  title: string
  link?: string
}

interface Iprops {
  data: {
    title: string
    breadcrumbs: BreadCrumbProps[]
    image?: string
    canonical: string
    url: string
  }
  children?: React.ReactNode
}

export default function SimpleWrapper({ data, children }: Iprops) {
  return (
    <React.Fragment>
      <main>
        <SubHeader title={data.title} />
        <Container>
          <div className="grid lg:grid-cols-11 grid-cols-1 md:gap-6 md:my-20 sm:my-10 my-5">
            <div className="lg:col-span-8 col-span-1">
              <BreadCrumb breadcrumbs={data.breadcrumbs} />
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
              <Form url={`https://growlearnhub.com${data.canonical}`} />
            </div>
            <aside className="lg:col-span-3 col-span-1">
              <Sidebar title={data.title} url={data.url} />
            </aside>
          </div>
        </Container>
      </main>
    </React.Fragment>
  )
}
