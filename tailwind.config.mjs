/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EDF7',
          100: '#CCE0F5',
          200: '#99C2EB',
          300: '#66A3E0',
          400: '#3385D6',
          500: '#0A2463', // navy blue (primary)
          600: '#091D4F',
          700: '#07163B',
          800: '#050F28',
          900: '#020714',
        },
        secondary: {
          50: '#F2F7FA',
          100: '#E5EFF4',
          200: '#CCDFEA',
          300: '#B2CFE0',
          400: '#99BFD5',
          500: '#7CA5B8', // pastel blue (secondary)
          600: '#648496',
          700: '#4C6371',
          800: '#32424B',
          900: '#192126',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};