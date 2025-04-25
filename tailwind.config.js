/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        secondary: '#ec4899',
      },
    },
  },
  plugins: [],
};
