/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontFamily:{
      // leagueSpartan: ["League Spartan", "sans-serif"],
    // },
    extend: {
      backgroundImage: {
        'banner-image': "url('/src/images/netflix-background.png')",
      }, 
      backgroundColor : {
            
          // light: "#",
          // dark: "var(--key3-bg)",
          primary: "#df0611",
      },
      textColor : {
        primary: "#df0611",
      //   dark: "var(--secondary-text)",
      },
  },
},
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
