const colors = require('tailwindcss/colors');


module.exports = {
  purge: [],
  darkMode: false, 
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
     },
    boxShadow: {
      sm: '0 20px 25px -10px #f5f1f1',
    },
    gridTemplateColumns: {
     'auto': 'repeat(auto-fill, 11rem)',
     'gifs': '30% 40% 30%',
     'full': '100%'
    },
    screens: {
      'tablet': '850px',
      'laptop': '1024px',
      'desktop': '1280px',
      'mobile': '544px',
      'mobilexs': '481px'
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
        red:{
          cardHover: '#e4b2b2'
        },
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
          backgroundCard: '#f5f1f1'
        },
        blue: {
          bg: '#4789cf',
          secondayBlue: '#355d89',
          generalBlueColor: '#4789cf',
          BlueButtonColor: '#4789cf',
          BlueColor: '#2958af'
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
