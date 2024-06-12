/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#D34004',
      'black': '#181818',
      'white': '#ffffff',
      'orange': '#FC8454',
      'gray': '#262522',
      'hover': '#FFDE85',
      'green': '#84E686',
    },
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 15s ease-in-out infinite',
        zoomOut: 'zoomOut 15s ease-in-out infinite',
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

