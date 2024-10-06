'use client'
import React from 'react'
import Navbar from '@/src/components/layout/navbar/page'
import Footer from '@/src/components/layout/footer/page'
import Header from '@/src/components/layout/header/page'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AboutUs from './about'
import Service from './service'

export default function HomeView() {
  return (
    <React.Fragment>
      <header className="bg-hero bg-hero-2">
        <Navbar />
        <Header />
      </header>
      <main>
        <AboutUs />
        <Service />
      </main>
      <Footer />
    </React.Fragment>
  )
}
