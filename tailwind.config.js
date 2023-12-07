/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgGray: '#232323',
        borderGray: '#424242',
        footer:'#555555'
      },
      backgroundImage: {
        'hero-pattern': "url('./images/detailBG.jpg')",
        'form-bg': "url('./images/formBg.jpg')",
        "detail-bg": "ur;('./images/detailBG.jpg",
      }
    },
  },
  plugins: [],
}

