'use client'
import React from 'react'
import Counter from '@/src/components/home/couter'
import AboutUs from '@/src/components/home/about'
import Navbar from '@/src/components/layout/navbar/page'
import Footer from '@/src/components/layout/footer/page'
import Header from '@/src/components/layout/header/page'
import Classes from '../components/home/classes'
import Container from '../components/element/container'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";

export default function page() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <header className="bg-hero bg-hero-2">
        <Navbar />
        <Header title="Innovative Education Academic Platform for Your Career." />
      </header>

      <section className="my-20">
        <Container>
          <div className="grid grid-cols-3 gap-4">
            <div className=" bg-blue-50 hover:bg-white duration-300 ease-in-out p-5 shadow-md rounded-md hover:shadow-none">
              <div className="icon h-12 w-12 bg-slate-400 rounded-md"></div>
              <div className="body">
                <h3 className="mb-2 mt-6 text-2xl font-semibold">
                  Architecture
                </h3>
                <p className="text-gray-500 !my-0">
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore.
                </p>
              </div>
            </div>
            <div className=" bg-blue-50 hover:bg-white duration-300 ease-in-out p-5 shadow-md rounded-md hover:shadow-none">
              <div className="icon h-12 w-12 bg-slate-400 rounded-md"></div>
              <div className="body">
                <h3 className="mb-2 mt-6 text-2xl font-semibold">
                  Architecture
                </h3>
                <p className="text-gray-500 !my-0">
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore.
                </p>
              </div>
            </div>
            <div className=" bg-blue-50 hover:bg-white duration-300 ease-in-out p-5 shadow-md rounded-md hover:shadow-none">
              <div className="icon h-12 w-12 bg-slate-400 rounded-md"></div>
              <div className="body">
                <h3 className="mb-2 mt-6 text-2xl font-semibold">
                  Architecture
                </h3>
                <p className="text-gray-500 !my-0">
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore.
                </p>
              </div>
            </div>
            <div className=" bg-blue-50 hover:bg-white duration-300 ease-in-out p-5 shadow-md rounded-md hover:shadow-none">
              <div className="icon h-12 w-12 bg-slate-400 rounded-md"></div>
              <div className="body">
                <h3 className="mb-2 mt-6 text-2xl font-semibold">
                  Architecture
                </h3>
                <p className="text-gray-500 !my-0">
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore.
                </p>
              </div>
            </div>
            <div className=" bg-blue-50 hover:bg-white duration-300 ease-in-out p-5 shadow-md rounded-md hover:shadow-none">
              <div className="icon h-12 w-12 bg-slate-400 rounded-md"></div>
              <div className="body">
                <h3 className="mb-2 mt-6 text-2xl font-semibold">
                  Architecture
                </h3>
                <p className="text-gray-500 !my-0">
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore.
                </p>
              </div>
            </div>
            <div className=" bg-blue-50 hover:bg-white duration-300 ease-in-out p-5 shadow-md rounded-md hover:shadow-none">
              <div className="icon h-12 w-12 bg-slate-400 rounded-md"></div>
              <div className="body">
                <h3 className="mb-2 mt-6 text-2xl font-semibold">
                  Architecture
                </h3>
                <p className="text-gray-500 !my-0">
                  Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt labore.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-20">
        <Container>
          <div className="grid grid-cols-4 gap-4">
            <Slider {...settings}>

              <div className="cards relative group overflow-hidden">
                <div className="image relative">
                  <img
                    src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                    alt=""
                    className="rounded-md h-40 w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
                </div>
                <div className="body absolute left-0 right-0 top-[29%] text-center">
                  <h3 className="text-white group-hover:text-gray-300 transition-colors duration-300">
                    CLASS 9
                  </h3>
                </div>
                <div className="button absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="cards relative group overflow-hidden">
                <div className="image relative">
                  <img
                    src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                    alt=""
                    className="rounded-md h-40 w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
                </div>
                <div className="body absolute left-0 right-0 top-[29%] text-center">
                  <h3 className="text-white group-hover:text-gray-300 transition-colors duration-300">
                    CLASS 9
                  </h3>
                </div>
                <div className="button absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="cards relative group overflow-hidden">
                <div className="image relative">
                  <img
                    src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                    alt=""
                    className="rounded-md h-40 w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
                </div>
                <div className="body absolute left-0 right-0 top-[29%] text-center">
                  <h3 className="text-white group-hover:text-gray-300 transition-colors duration-300">
                    CLASS 9
                  </h3>
                </div>
                <div className="button absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="cards relative group overflow-hidden">
                <div className="image relative">
                  <img
                    src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                    alt=""
                    className="rounded-md h-40 w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
                </div>
                <div className="body absolute left-0 right-0 top-[29%] text-center">
                  <h3 className="text-white group-hover:text-gray-300 transition-colors duration-300">
                    CLASS 9
                  </h3>
                </div>
                <div className="button absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>

            </Slider>
          </div>
        </Container>
      </section>

      <section className="my-20">
        <Container>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="image">
                <img
                  src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                  alt=""
                  className="rounded-tl-xl rounded-tr-xl"
                />
              </div>
              <div className="body p-3 bg-slate-200 rounded-bl-md rounded-br-md">
                <span className="text-sm text-gray-400">JAN. 18, 2021</span>
                <h4 className="text-xl pt-1 leading-7 font-semibold">
                  Build your Dream Software & Engineering Career
                </h4>
                <p className="text-base font-light !p-0 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  aperiam provident quidem cum magnam cumque.
                </p>
              </div>
            </div>
            <div>
              <div className="image">
                <img
                  src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                  alt=""
                  className="rounded-tl-xl rounded-tr-xl"
                />
              </div>
              <div className="body p-3 bg-slate-200 rounded-bl-md rounded-br-md">
                <span className="text-xs text-gray-400">JAN. 18, 2021</span>
                <h4 className="text-xl pt-1 leading-7 font-semibold">
                  Build your Dream Software & Engineering Career
                </h4>
                <p className="text-base font-light !p-0 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  aperiam provident quidem cum magnam cumque.
                </p>
              </div>
            </div>
            <div>
              <div className="image">
                <img
                  src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                  alt=""
                  className="rounded-tl-xl rounded-tr-xl"
                />
              </div>
              <div className="body p-3 bg-slate-200 rounded-bl-md rounded-br-md">
                <span className="text-xs text-gray-400">JAN. 18, 2021</span>
                <h4 className="text-xl pt-1 leading-7 font-semibold">
                  Build your Dream Software & Engineering Career
                </h4>
                <p className="text-base font-light !p-0 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  aperiam provident quidem cum magnam cumque.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
