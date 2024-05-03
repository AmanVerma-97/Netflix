/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'cp':'576px',
      },
      backgroundImage:{
        'hero-pattern': "url('/src/assets/images/login.jpg')",
      }
    },
  },
  plugins: [],
}

