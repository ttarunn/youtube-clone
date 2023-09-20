/** @type {import('tailwindcss').Config} */
module.exports = {
  //what files to track
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      'sm': '475px',
      // => @media (min-width: 640px) { ... }
    }
  }
}

