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

      },
      boxShadow: {

        'xl': '0 4px 40px 3px rgba(0,0,0,16%)',
        '2xl': '0 0 4px 0 rgba(0,0,0,25%)'
      },
    },
  },
  plugins: [],
}

/* offset-x | offset-y | blur-radius | spread-radius | color */
// box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
