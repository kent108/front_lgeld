/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'pink': '#f9dcd8',

    },
    
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
