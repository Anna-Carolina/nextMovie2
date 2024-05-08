/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'brand-dark' : '#00030A',
        'brand-blue-dark': '#000E2A',
        'brand-blue-ligth': '#00B1E9',
        'brand-yellow': '#FAFF00'
      },

      backgroundImage : {
        'home' : 'url(/assets/background.jpg)',
        'filmes' : 'url(/assets/bg-filmes.jpg)',
        'series' : 'url(/assets/bg-series.jpg)'
      }
    },
  },
  plugins: [],
};
