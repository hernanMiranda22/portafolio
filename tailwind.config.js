/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#111210', // Cambia el valor hexadecimal a tu color personalizado
        customColorBorder: '#263238'
      },
    },
  },
  plugins: [],
};

