import "./globals.css";
import Navbar from "@/component/Navbar";
import { Poppins } from "next/font/google";
import Image from 'next/image'
import Logo from "../../public/Logo.svg"; 

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Layout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <title>Image Re-Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-fourth text-gray-800 ">              
        <main className="">{children}</main>
      </body>
    </html>
  );
}
