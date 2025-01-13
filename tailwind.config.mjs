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
        'medium-dark-grey':'#585858 ',
        'light-black': '#1b1b1b',
        'orange': '#f27a1a',
        'dark-black':'#333',
        'mediumdark-gray':'#F2F2F2',
        'Lgray':"#F3F3F3",
        'medium-grey':'#B0B0B0',
        'light-medium-grey':'#FAFAFA',
        'orange-pink':'#ffdfdd',
        'peach':'#ffefe7',
        'darkpeach':'#ff3e62',
        'dark-blue':'#0068cd',
        'star-orange':'#ffc62f',
        'light-orange':'#fff6ec',
        'responsive-bg-gray':'#f7f7f7',
        'responsive-bg-darkgray':'#e8e8e8'

      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"], // Corrected the font-family definition
        'montserrat': ['Montserrat', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'source-sans':["Source Sans 3", 'serif'],
        'lato':["Lato", "serif"]
      },
    },
  },
  plugins: [],
};
