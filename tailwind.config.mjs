/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        50: '50', // Menülerin düzgün şekilde üst üste binmesi için
      },
      colors: {
        'light-gray': '#fefefe',
        'dark-grey': '#404040',
        'light-black': '#1b1b1b',
        'orange': '#f27a1a',
        'dark-black':'#333',
        'mediumdark-gray':'#F2F2F2',
        'Lgray':"#F3F3F3",
        'medium-grey':'#B0B0B0'

      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"], // Corrected the font-family definition
        'montserrat': ['Montserrat', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'source-sans':["Source Sans 3", 'serif']
      },
    },
  },
  plugins: [],
};
