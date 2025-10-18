/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF0FE',
          100: '#DDE1FD',
          200: '#BBC4FB',
          300: '#99A6F9',
          400: '#7789F6',
          500: '#5B6FED', // Blue from reference
          600: '#3D51E8',
          700: '#2A3AC7',
          800: '#1F2B94',
          900: '#151D62',
        },
        secondary: {
          50: '#F0F4F8',
          100: '#E1E9F1',
          200: '#C3D3E3',
          300: '#A5BDD5',
          400: '#87A7C7',
          500: '#6991B9', // Complementary gray-blue
          600: '#557494',
          700: '#41576F',
          800: '#2C3A4A',
          900: '#181D25',
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