import Footer from '@/src/components/layout/footer/page';
import Navbar from '@/src/components/layout/navbar/page';
import './article.scss'

export default function RootLayout({
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
