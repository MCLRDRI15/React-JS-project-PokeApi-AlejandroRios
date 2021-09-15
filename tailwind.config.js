const colors = require('tailwindcss/colors');


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '850px',
      'laptop': '1024px',
      'desktop': '1280px',
      'mobile': '544px',
      'mobilexs': '370px'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'st': '1.02rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '1xl': '1.4rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        yellow: {
          border: '#c5c5ca33',
          backgroundColor: 'linear-gradient(to right, #d2d733, #d9dd2d, #e0e326, #e7e81d,#eeee10)',
          yellowInput: '#e0e326'
        },
        background:{
          imagebackground: '#e2e46d',
          DEFAULT: '#e0e326'
        },
        white: {
          DEFAULT: '#ffffffff',
        },
        blue: {
          bg: '#4789cf',
          secondayBlue: '#355d89'
        },
        green: {
          light: '#616161',
          DEFAULT: '#999797',
          dark: '#5e5c5c',
        },
        grey: {
          greyColor: '#9c9c9c99',
          HeaderBoxshadow: '#c5c5ca33'
        },
        black: {
          circleShadow: '#0000004d'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
