import React from 'react'
import Container from '../element/container'

export default function BlogSection3() {
  return (
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
  )
}
