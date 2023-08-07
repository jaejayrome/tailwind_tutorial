/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Mullish', 'sans-serif'],
      mono: ['Rokk', 'sans-serif']
    },
    extend: {
      spacing: {
        128 : '32rem'
      }
    },
  },
  plugins: [],
}

