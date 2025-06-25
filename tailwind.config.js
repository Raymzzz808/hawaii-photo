/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swiss': '#F1E8E0',
        'brand': '#01244e',
      },
      fontFamily:{
        lora: ['Lora', 'serif'],
        poppins: ['Poppins','sans-serif']
      },
      animation: {
        marquee: 'marquee 80s linear infinite',
        marquee2: 'marquee2 10s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

