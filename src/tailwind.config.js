/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/pages/**/*.{html,js}",
    "./src/js/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
