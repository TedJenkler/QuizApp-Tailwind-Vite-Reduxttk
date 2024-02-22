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
        'dark-navy': '#313E51',
        'pure-white': '#FFFFFF',
        'purple': '#A729F5',
        'navy': '#3B4D66',
        'light-blue': '#ABC1E1',
      },
    },
  },
  plugins: [],
}

