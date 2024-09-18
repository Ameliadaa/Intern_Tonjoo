import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <title>Image Re-Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-800 font-sans">
        <nav className="bg-primary p-4">
          <div className="container mx-auto flex flex-row justify-between">
            <h1 className="text-white text-2xl">Reuploader</h1>
            <button className="bg-blue-700 text-white px-6 py-2 rounded min-w-24 rounded-lg">
              Login
            </button>
          </div>
        </nav>
        <main className="container mx-auto mt-10">{children}</main>
      </body>
    </html>
  );
}
