/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': "url('https://pledisto.sirv.com/Todo/background3.png')",
        'logo': "url('https://ik.imagekit.io/efpqj5mis/listalogo-2_PN1de18jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1664767117196')"
      },

      fontFamily: {
        'space': ['Space Grotesk']
      },

      colors: {
        'grey-text': '#D6D6D6',
        'purple': '#8685BB',
        'input': '#BFBFBF',
        'fake': '#B5B4D5',
        'fake2': '#7374a9',
        'barney': '#8323CF',
        'blackBg': '#1D1D26',
        'side': '#191921',
        'purpletrans': 'rgba(127, 17, 224, 0.54)',
        'gradient': 'linear-gradient(75.2deg, #C344D7 34.89%, #E492C2 78.63%, #FFD0B1 116.92%)'
        
      },
      
      screens: {
        'navhalf': '555px'
      }
    },

  },
  plugins: [],
}
