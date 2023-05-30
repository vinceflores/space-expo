/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0B0D17', 
        'secondary': '#D0D6F9', 
        'ternary': '#FFFFFF', 
      },
      backgroundImage:{
        'home_desktop': "url('/src/assets/home/background-home-desktop.jpg')", 
        'home_mobile': "url('/src/assets/home/background-home-mobile.jpg')", 
        'home_tablet': "url('/src/assets/home/background-home-tablet.jpg')", 
        'destination_desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'destination_mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'destination_tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'crew_desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crew_mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'crew_tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'technologies_desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'technologies_mobile': "url('/src/assets/technology/background-technology-mobile.jpg')",
        'technologies_tablet': "url('/src/assets/technology/background-technology-tablet.jpg')",
      }
    },
    fontFamily: {
      'bellefair': [ 'Bellefair', 'serif'], 
      'barlow': ['Bellefair', 'serif']
    },
  },
  plugins: [],
}

