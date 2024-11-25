"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/src/components/layout/navbar/page";
import Header from "@/src/components/layout/header/page";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import AboutUs from "./about";
import Service from "./service";
const Feedback = dynamic(
  () => import("@/src/app/(main)/_components/feedback/page"),
);
const Topics = dynamic(
  () => import("@/src/app/(main)/_components/topics/page"),
);

export default function HomeView() {
  return (
    <React.Fragment>
      <header className="bg-hero bg-hero-2">
        <Navbar />
        <Header />
      </header>
      <main>
        {/* <AboutUs /> */}
        {/* <Service /> */}
      </main>
      {/* <Feedback /> */}
      {/* <Topics /> */}
    </React.Fragment>
  );
}
