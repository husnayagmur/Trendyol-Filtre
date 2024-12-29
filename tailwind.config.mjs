/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#fefefe',
        'dark-grey': '#404040',
        'light-black': '#1b1b1b',
        'orange': '#f27a1a',
        'dark-black':'##333',
        'mediumdark-gray':'#F3F3F3',

      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"], // Corrected the font-family definition
        'montserrat': ['Montserrat', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
