/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': "url('https://unix-shop.s3.ap-southeast-1.amazonaws.com/lista/background3.png')",
        'logo': "url('https://unix-shop.s3.ap-southeast-1.amazonaws.com/lista/listalogo-2.webp')"
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
        'blackBg': '#1D1D26'
      }
    },

  },
  plugins: [],
}
