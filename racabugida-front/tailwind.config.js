/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EC4899', // Club pink
        secondary: '#6366F1', // Club blue
        accent: '#FBBF24', // Club yellow
        dark: '#1F2937',
        light: '#F3F4F6',
      },
    },
  },
  plugins: [],
} 