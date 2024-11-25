import React from "react";
import Footer from "@/src/components/layout/footer/page";
import Navbar from "@/src/components/layout/navbar/page";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
