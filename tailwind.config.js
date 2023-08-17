/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: '1166px',
      },
      fontFamily:{
        Poppins: ['Poppins', "sans-serif"]
      },
      colors:{
        black1:"#203239",
        spancolor:"#FF7527",
        bannercoloer:"#EEEDDE",
        aftercoloer:"#FF7527",
        aAftercolor:"#D6D5C7",
        buttoncolor:"#F1D5B9",
        buttonhover:"#EEEDDE",
        footerTwo:"#203239"


      },
      fontSize:{
      size56:"56px",
      size32:"32px"
      },
      lineHeight:{
       l150:"150%",
        l30:"30px"
      },
      spacing:{
        p68:"68px",
        p170:"170px"
      }
    
    },
  },
  plugins: [require("limbcss")],
}