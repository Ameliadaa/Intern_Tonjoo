"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigasi = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 rounded-lg mb-6 bg-third">
      <ul className="flex border-b-black ">
        <li className="mr-1 ">
          <Link
            href="/"
            className={`inline-block py-2 px-4  border-b-2  ${pathname === '/' ? 'bg-primary text-white font-semibold' : 'hover:text-white hover:bg-secondary '}`}
          >
            Reupload Image in Text
          </Link>
        </li>
        <li className="mr-1">
          <Link
            href="/LinkReupload"
            className={`inline-block py-2 px-4 border-b-2 ${pathname === '/LinkReupload' ? 'bg-primary text-white font-semibold' : 'hover:text-white hover:bg-secondary '}`}
          >
            Link Reupload
          </Link>
        </li>
        <li className="mr-1">
          <Link
            href="/FileUpload"
            className={`inline-block py-2 px-4  border-b-2 ${pathname === '/FileUpload' ? 'bg-primary text-white font-semibold' : 'hover:text-white hover:bg-secondary '}`}
          >
            File Upload
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigasi;
