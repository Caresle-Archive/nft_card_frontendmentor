/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cs-pr-soft-blue': 'hsl(215, 51%, 70%)',
        'cs-pr-cyan': 'hsl(178, 100%, 50%)',
        'cs-pr-cyan-hover': 'hsla(178, 100%, 50%, 50%)',
        'cs-n-main-bg': 'hsl(217, 54%, 11%)',
        'cs-n-card-bg': 'hsl(216, 50%, 16%)',
        'cs-n-line': 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        'outfit': 'Outfit',
      }
    },
  },
  plugins: [],
}

