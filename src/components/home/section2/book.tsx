'use client'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Container from '../../element/container'

export default function BookSection2() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="my-20">
      <Container>
        <h2>Books</h2>

        <Slider {...settings} className="flex gap-2">
          <div className="relative group w-full overflow-hidden !mx-1">
            <div className="image relative w-full h-40">
              <img
                src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                alt=""
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
            </div>{' '}
            <div>
              <div className="body absolute inset-x-0 top-1/3 text-center">
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
          </div>
          <div className="relative group w-full overflow-hidden !mx-1">
            <div className="image relative w-full h-40">
              <img
                src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                alt=""
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
            </div>{' '}
            <div>
              <div className="body absolute inset-x-0 top-1/3 text-center">
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
          </div>
          <div className="relative group w-full overflow-hidden !mx-1">
            <div className="image relative w-full h-40">
              <img
                src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                alt=""
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
            </div>{' '}
            <div>
              <div className="body absolute inset-x-0 top-1/3 text-center">
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
          </div>

          {/* <div className="relative group w-full overflow-hidden !mx-1">
            <div className="image relative w-full h-40">
              <img
                src="https://preview.colorlib.com/theme/academia/images/image_3.jpg"
                alt=""
                className="rounded-md h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
            </div>
            <div>
              <div className="body absolute inset-x-0 top-1/3 text-center">
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
          </div>

          <div className="cards relative group overflow-hidden !mr-4">
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
          </div> */}
        </Slider>
      </Container>
    </section>
  )
}
