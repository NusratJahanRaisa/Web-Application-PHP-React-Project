/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        title : ["My Soul", "cursive"],
        title2 : ["Open Sans","sans-serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
