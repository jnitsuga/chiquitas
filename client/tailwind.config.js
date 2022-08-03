/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'jc-lilypad-01': "url('../public/jc-lilypad-01.png')",
      'jc-lilypad-02': "url('../public/jc-lilypad-02.png')",
      'jc-ridethewave-01': "url('../public/jc-ridethewave-01.png')",
      'jc-ridethewave-02': "url('../public/jc-ridethewave-02.png')",
      'macarons-01': "url('../public/macarons-01.jpg')",
      'macarons-doodle-01': "url('../public/macarons-doodle-01.png')",
      'macarons-doodle-01-op80': "url('../public/macarons-doodle-01-op80.png')",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xs': '390px',
      // => @media (min-width: 390px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
