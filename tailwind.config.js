/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      colors: {
        hijau: '#005f39',
        background: '#fdf4e2',
        aksen: '#fbbf24',
        coklat: '#A16D28'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}