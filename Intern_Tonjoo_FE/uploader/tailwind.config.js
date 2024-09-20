const { Poppins } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#14B8A6",
        secondary: "#2563EB",
        third: "#D1D4DB",
        fourth:"#F3F4F6", 
                     
      },
    },
    fontFamily: {
      Poppins: ['var(--font-poppins)', 'sans-serif'],
    },
    },
  plugins: [],
};
