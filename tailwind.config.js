/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#222831",       // for bg-dark
        light: "#EEEEEE",      // for text-light
        primary: "#00ADB5",    // for buttons, accents
      },
    },
  },
  plugins: [],
}
