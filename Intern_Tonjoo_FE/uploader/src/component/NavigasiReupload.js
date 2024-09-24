"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigasiReupload = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 rounded-lg mb-6 bg-white ">
      <ul className="flex border-b  ">
        <li className="mr-1">
          <Link
            className={`inline-block py-1 px-4 text-xs ${pathname === '/' ? 'bg-primary font-semibold text-white' : 'hover:bg-secondary hover:text-white'}`}
            href="/"
          >
            Input Text
          </Link>
        </li>
        <li className="mr-1">
          <Link
            className={`inline-block py-1 px-4 text-xs ${pathname === '/Pharsed' ? 'bg-primary text-white font-semibold' : 'hover:bg-secondary hover:text-white'}`}
            href="/Pharsed"
          >
            Pharsed Text
          </Link>
        </li>
        <li className="mr-1">
          <Link
            className={`inline-block py-1 px-4 text-xs ${pathname === '/ListURL' ? 'bg-primary text-white font-semibold' : 'hover:bg-secondary hover:text-white'}`}
            href="/ListURL"
          >
            URL List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigasiReupload;
