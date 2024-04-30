/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/app/pages/**/*.{js,ts,jsx,tsx}", // paths to all files that contain Tailwind's classes
    ".src/app/components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {'dark-green': '#012532'}
    },
  },
  plugins: [],
}