const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EFBC9B',
        secondary: '#FBF3D5',
        background: '#D6DAC8',
        text: '#9CAFAA',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [require('daisyui')],
};
