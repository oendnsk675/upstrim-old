const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"]
      },

      colors: {
        primary: '#100F11',
        secondary: '#DBD1D1',
        "stone-800": "#292524"
      },
      width: {
        '29em': '29em',
        '29%': '29%',
        '45%': '45%',
        '38%': '38%',
        '58%': '58%',
      },
      padding: {
        '19em': '19em',
        '22em': '22em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}