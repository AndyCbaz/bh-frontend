/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        laptop: '950px',
      },
      colors: {
        'primary-yellow': '#F4D64C',
        'primary-orange': '#E6822D',
        'primary-gray-dark': '#222529',
        'primary-gray': '#3B4048',
        'primary-gray-light': '#BBBBBB',
        'primary-gray-lighter': '#757575',
      },
    },
  },
  plugins: [],
};
