"use client";

import Image from 'next/image'
import Logo from "../../public/Logo.svg"; 

export default function Navbar() {
  return (
 
    <nav className=" bg-primary ">
      <div className=" container mx-auto  py-6 px-6 flex flex-row justify-between">     
        <div className="flex flex-row space-x-6">
          <Image src={Logo} />
          <h1 className="text-white text-3xl font-semibold">Tonjoo</h1>
        </div>        
        <button className="border border-white text-white px-6 py-1 rounded-lg hover:bg-white hover:text-primary transition duration-300">
          Login
        </button>
      </div>
    </nav>

  );
}
