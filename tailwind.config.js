/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: '#45A1D6',
        primary: '#95CAFF',
        secondary: '#C6E3FF',
        button: '#0094FF',
      },
      screens: {
        'sm': '640px', // Ukuran layar kecil (Mobile)
        'md': '768px', // Ukuran layar menengah (Tablet)
        'lg': '1024px', // Ukuran layar besar (Laptop)
        'xl': '1280px', // Ukuran layar ekstra besar (Desktop)
      },
    },
  },
  plugins: [
  ],
}

