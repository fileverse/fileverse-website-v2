/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFDF0A',
        black: '#000000',
        fade: 'rgba(0, 0, 0, 0.25)',
        prp: '#5C0AFF',
        light: '#FFFFFF',
        red: '#FB3449',
      },
    },
    fontSize: {
      default: '14px',
      xxs: '0.375rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      xx: ["'Press Start 2P',cursive"],
    },
  },
  plugins: [],
  important: true,
};
