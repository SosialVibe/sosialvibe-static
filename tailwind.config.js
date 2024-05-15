/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", "sans-serif"]
      },
      spacing: {
        '32.5': '8.5rem',
      },
      colors: {
        'primary': '#87C4FF',
        'primary-dark': '#39A7FF',
        'secondary': '#E0F4FF',
        'crims': '#FEEED9',
      }
    },
  },
  plugins: [],
}

