/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        cian: '#00E5FF',
        lila: '#B388FF',
        naranja: '#FF8A00',
        amarillo: '#FFD54F',
      }
    },
  },
  plugins: [],
}
