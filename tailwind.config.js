/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '4xs': '250px',
        '3xs': '300px',
        '2xs': '350px',
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'

      },
      colors: {
        orange_1: '#F26E25',
        gray_1: '#dadada',
        dark_1: '#707070',
        yellow_1: '#F79D21'
      },
      borderColor: {
        orange_1: '#F26E25',

      }
    },
  },
  plugins: [],
}
