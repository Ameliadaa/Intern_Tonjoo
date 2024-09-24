// "use client";

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// const Navigasi = () => {
//   const pathname = usePathname();

//   return (
//     <div className="p-4 rounded-lg mb-6 bg-white border-b">
//       <ul className="flex ">
//         <li className="mr-1 ">
//           <Link
//             href="/"
//             className={`inline-block py-4 px-4 ${
//               pathname === '/' || pathname.includes('/pharsed') || pathname.includes('/LinkURL')
//                 ? 'bg-primary text-white font-semibold'
//                 : 'hover:text-white hover:bg-secondary'
//             }`}
//           >
//             Reupload Image in Text
//           </Link>
//         </li>
//         <li className="mr-1">
//           <Link
//             href="/LinkReupload"
//             className={`inline-block py-4 px-4 ${pathname === '/LinkReupload' ? 'bg-primary text-white font-semibold' : 'hover:text-white hover:bg-secondary '}`}
//           >
//             Link Reupload
//           </Link>
//         </li>
//         <li className="mr-1">
//           <Link
//             href="/FileUpload"
//             className={`inline-block py-4 px-4   ${pathname === '/FileUpload' ? 'bg-primary text-white font-semibold' : 'hover:text-white hover:bg-secondary '}`}
//           >
//             File Upload
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navigasi;

"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigasi = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 rounded-lg mb-6 bg-white border-b">
      <ul className="flex">
        <li className="mr-1">
          <Link
            href="/"
            className={`inline-block py-4 px-4 ${
              pathname === '/' || pathname === '/Pharsed' || pathname === '/ListURL'
                ? 'bg-primary text-white font-semibold'
                : 'hover:text-white hover:bg-secondary'
            }`}
          >
            Reupload Image in Text
          </Link>
        </li>
        <li className="mr-1">
          <Link
            href="/LinkReupload"
            className={`inline-block py-4 px-4 ${
              pathname === '/LinkReupload' ? 'bg-primary text-white font-semibold' : 'hover:text-white hover:bg-secondary'
            }`}
          >
            Link Reupload
          </Link>
        </li>
        <li className="mr-1">
          <Link
            href="/FileUpload"
            className={`inline-block py-4 px-4 ${
              pathname === '/FileUpload' ? 'bg-primary text-white font-semibold' : 'hover:text-white hover:bg-secondary'
            }`}
          >
            File Upload
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigasi;

