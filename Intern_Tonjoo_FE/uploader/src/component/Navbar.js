"use client";

import Image from 'next/image'
import Logo from "../../public/Logo.svg"; 

export default function Navbar() {
  return (

    <nav className=" bg-primary flex flex-row justify-between ">
      <div className="container mx-auto flex flex-row justify-between py-6 px-6">     
        <div className="flex flex-row">
          <Image src={Logo} />
          <h1 className="text-white text-2xl ml-6 font-semibold">Tonjoo</h1>
        </div>        
        <button className="border border-white text-white px-6 py-1 rounded-lg hover:bg-white hover:text-primary transition duration-300">
          Login
        </button>
      </div>
    </nav>
  );
}
