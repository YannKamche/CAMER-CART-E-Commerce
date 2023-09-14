/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    container: { 
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto']
      }, 
      colors: {
        "primary": '#FD3D57',
        "bg-color": '#F8F8FF',
        "secondary": '#001f3f'
      }
    },
  },
  plugins: [],
}

