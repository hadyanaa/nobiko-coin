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
      }
    },
  },
  plugins: [
  ],
}

