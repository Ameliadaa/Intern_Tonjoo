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
      {/* <nav className="bg-primary py-6 px-6 flex flex-row justify-between">
      <div className="container mx-auto flex flex-row justify-between ">     
        <div className="flex flex-row">
          <Image src={Logo} />
          <h1 className="text-white text-2xl ml-6">Tonjoo</h1>
        </div>        
        <button className="border border-white text-white px-6 py-1 rounded-lg hover:bg-white hover:text-primary transition duration-300">
          Login
        </button>
      </div>
    </nav> */}
    <Navbar />
        <main className="container mx-auto mt-10">{children}</main>
      </body>
    </html>
  );
}

