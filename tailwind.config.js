/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightbg': '#F4F6FA',
        'grey-navy': '#626C7F',
        'darknavy': '#313E51',
        'pure-white': '#FFFFFF',
        'purple': '#A729F5',
        'navy': '#3B4D66',
        'light-blue': '#ABC1E1',
        'grey-navy': '#626C7F'
      },
      backgroundImage: {
        'pattern-dark': "url('./src/assets/images/bg-mobile.svg')",
        'pattern-light': "url('./src/assets/images/bg-mobile-light.svg')",
        'pattern-dark-tablet': "url('./src/assets/images/bg-tablet.svg')",
        'pattern-light-tablet': "url('./src/assets/images/bg-tablet-light.png')",
      }
    },
  },
  plugins: [],
}

