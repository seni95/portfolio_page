
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
      'point':'#9c4146',
      'NETLIFY':'#c44569',
      'yellow':'#fed330',
      'skill2':'#fa8231',
      'skill3':'#f7b731',
      'skill4':'#fc5c65',
      'skill5':'#d1d8e0',
      'skill6':'#a55eea',
      'skill7':'#778ca3',
      'skill8':'#4b7bec',
      'white':'#fff'
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
