import type {Metadata} from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Israelcart",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${montserrat.className}`}
    >
    <div className="site_wraper">

      <Header/>
      {children}
      <Footer />
    </div>
    </body>
    </html>
  );
}