/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: ['dark'],
      backgroundImage: ['dark']
    }
  },
  zIndex: {
    999: '999'
  },
  maxWidth: {
    '140px': '140px'
  },
  plugins: []
}
