/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bellroy-blue': '#003057',
        'bellroy-tan': '#f5efe7',
        'bellroy-orange': '#ff6b35',
      },
    },
  },
  plugins: [],
}