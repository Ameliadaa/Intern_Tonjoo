import "./globals.css";

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
      {/* <nav className=" bg-primary ">
      <div className=" container mx-auto  py-6 px-8 flex flex-row justify-between">     
        <div className="flex flex-row space-x-6">
          <Image src={Logo} />
          <h1 className="text-white text-3xl font-semibold">Tonjoo</h1>
        </div>        
        <button className="border border-white text-white px-6 py-1 rounded-lg hover:bg-white hover:text-primary transition duration-300">
          Login
        </button>
      </div>
    </nav>             */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
