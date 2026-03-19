/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#111111',
        'dark-bg': '#0a0a0a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      transitionTimingFunction: {
        'bounce-light': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        floatOrb1: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(30px,20px)' },
        },
        floatOrb2: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-25px,15px)' },
        },
        floatOrb3: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-20px)' },
        },
      },
      animation: {
        floatOrb1: 'floatOrb1 8s ease-in-out infinite',
        floatOrb2: 'floatOrb2 10s ease-in-out infinite',
        floatOrb3: 'floatOrb3 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}