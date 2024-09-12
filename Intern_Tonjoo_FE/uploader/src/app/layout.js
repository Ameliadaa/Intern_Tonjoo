import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Image Re-Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-800">
        <nav className="bg-primary p-4">
          <div className="container mx-auto">
            <h1 className="text-white text-2xl">Tailwind CSS</h1>
          </div>
        </nav>
        <main className="container mx-auto mt-10">{children}</main>
      </body>
    </html>
  )
}
