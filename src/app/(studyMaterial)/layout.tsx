import Footer from '@/src/components/layout/footer/page';
import Navbar from '@/src/components/layout/navbar/page';
import "./style.css";

export default function StudyMaterialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
