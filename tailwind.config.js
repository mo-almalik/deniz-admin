/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: '#2E57A6',
        secondary: '#2F7DF9',
        success: '#095BDB',
        light: '#f1f2f6',
        dark: '#34495e',
        // gray: '#7f8c8d',

      },
      screens:{
        "xs":"480px",
        "sm":"640px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
        "2xl":"1536px"
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('tailwind-scrollbar'),
  ],

}