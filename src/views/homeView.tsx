import React from 'react'
import Counter from '@/src/components/home/couter'
import AboutUs from '@/src/components/home/about'
import Navbar from '@/src/components/layout/navbar/page'
import Footer from '@/src/components/layout/footer/page'
import Header from '@/src/components/layout/header/page'
import Classes from '../components/home/classes'

export default function page() {
  return (
    <>
      <header className='bg-hero bg-hero-2'>
        <Navbar />
        <Header title="Innovative Education Academic Platform for Your Career." />
      </header>
      <Classes />
      <Footer />
    </>
  )
}
