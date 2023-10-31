/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "serif"],
        Poppins: ["Poppins", "sans-serif"], // custom font
        Montserrat: [ "Montserrat", "sans-serif"], // custom font
        Rubik: [ "Rubik", "sans-serif"], // custom font
        IBM: [ "IBM Plex Serif", "serif"], // custom font
        Noto: [ "Noto Sans", "sans-serif"], // custom font      
        Roboto: [ "Roboto", "sans-serif"], // custom font      
      },
    },
    plugins: [],
  },
};
