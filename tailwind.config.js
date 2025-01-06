/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './styles.css', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#1433d6',
        'soft-white': '#f9fafe',
        charcoal: '#000c2a',
        'blue-gray': '#4d5b7c',
        'light-blue': '#f9fafe',
        'background-blue': '#d6dcea',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        custom: 'rgba(17, 25, 46, 0.1) 0px 0px 0px 2px inset, rgba(0, 12, 42, 0.2) 0px 9px 24px',
      },
    },
  },
  plugins: [],
};
