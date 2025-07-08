/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./assets/js/**/*.js",
    "./node_modules/flowbite/**/*.js" 
  ],
  safelist: [
  'text-aksen', 'bg-aksen', 'text-hijau', 'bg-hijau', 'text-coklat', 'bg-coklat',
  'font-bold', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'
  // Tambahkan class lain yang kamu perlukan
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
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}