/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '2000px'
    },
    fontFamily: {
      sans: ['Roboto Mono', 'monospace'],
      serif: ['Raleway', 'sans-serif'],
    },
    colors: {
      'primary': '#2AB7B7',
      'secondary': '#F7F7F7',
      'backgroundColor': '#292929',
      'whiteColor': '#ffffff',
      'blackColor': '#000000',
    },
    extend: {},
  },
  plugins: [],
}
