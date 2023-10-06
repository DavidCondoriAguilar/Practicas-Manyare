/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins:["Poppins", "sans-serif"],
        lato:["Lato", "sans-serif"]
      },
      colors: {
        'rosaB':'#FF0062',
      },
      screens: {
        "lgAux": '950px',
      }
    },
  },
  plugins: [],
};
