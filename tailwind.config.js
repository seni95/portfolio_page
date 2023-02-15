
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors:{
      'color-bg':'#fcfcfc',
      'color-bg-dark':'#f5f0f0',
      'primary-content':'#ffb3b5',
      'title-text':'#534343',
      'header-color':'#f3eaeb',
      'selected':'#ffb3b5',
      'main-container':'#FAF2F1',
      'blue':'#2980b9',
      'point':'#9c4146'
    },
    fontFamily:{
      'doHyeon':['"Do Hyeon"', 'sans-serif'],
    },
    screens:{
      'lg':'1500px',
      'sm': '640px',
      'md': '768px',
      'icon':'1200px'
    }
  },
  plugins: [],
}
