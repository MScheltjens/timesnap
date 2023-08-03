/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing' : "url('/landing.jpg')",
        'photography' : "url('/photography.jpg')",
        'mixed-art' : "url('/mixed-art.jpg')",
      },
      fontSize: {
        'xs': '.65rem'
      },
    },
  },
  variants: {
    extend: {},
  }, 
  plugins: [require('@tailwindcss/aspect-ratio')]
}
