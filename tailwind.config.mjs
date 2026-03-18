/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pink-blush':    '#FFB3C6',
        'pink-hot':      '#FF69B4',
        'pink-rose':     '#D4A0A0',
        'pink-deep':     '#C2185B',
        'lavender':      '#C9B8E8',
        'cream':         '#FFF5F7',
        'charcoal':      '#1E1E2E',
        'charcoal-mid':  '#2A2A3E',
        'charcoal-soft': '#3A3A50',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-light': 'radial-gradient(ellipse at top, #FFE4EC 0%, #FFF5F7 60%)',
        'hero-dark':  'radial-gradient(ellipse at top, #2A1A2E 0%, #1E1E2E 60%)',
      },
      animation: {
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'float':   'float 3.5s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8) rotate(0deg)' },
          '50%':       { opacity: '1',   transform: 'scale(1.2) rotate(180deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
