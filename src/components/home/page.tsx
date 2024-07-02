'use client'
import React from 'react'
import Counter from '@/src/components/home/couter'
import AboutUs from '@/src/components/home/about'
import Navbar from '@/src/components/layout/navbar/page'
import Footer from '@/src/components/layout/footer/page'
import Header from '@/src/components/layout/header/page'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Container from '../element/container'
import ServiceSection1 from './service'
import BlogSection3 from './blog'
import BookSection2 from './section2/book'

export default function HomeView() {
  return (
    <>
      <header className="bg-hero bg-hero-2">
        <Navbar />
        <Header title="Innovative Education Academic Platform for Your Career." />
      </header>
      <ServiceSection1 />
      <BookSection2 />
      <BlogSection3 />
      <Footer />
    </>
  )
}
