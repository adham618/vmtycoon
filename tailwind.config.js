/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-900': '#050748',
        'slate-600': '#6a6a8e',
        'slate-500': '#a6afbd',
        'slate-400': '#c1c3ce',
        'slate-200': '#e6e6e6',
        'gray-400': '#a2a2a2',
        'pink-600': '#e60072',
        'violet-600': '#673AB7',
        'blue-600': '#2196F3',
        'black-400': '#1e2022 ',
        'black-500': '#151515',
        'black-900': '#101010',
        'black-table': '#3c4043',
        'white-200': '#fafaff',
        'white-500': '#f5f5ff',
        white: '#FFFFFF',
        cursor: '#ffbd84',
        common: '#7f7f80',
        uncommon: '#03cb3f',
        rare: '#0248d5',
        legendary: '#6502b6',
        exotic: '#FFB700',
        active: '#2250fc',
        't-border': '#e4e6ef',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        sun: 'url("/images/sun.svg")',
        moon: 'url("/images/moon.svg")',
        'shape-1': 'url("/images/shape-1.svg")',
        'shape-2': 'url("/images/shape-2.svg")',
        'arrow-up': 'url("/images/up-arrow.svg")',
        'hero-gradient': 'url("/images/bg-gradient.jpg")',
        'blue-gradient': 'linear-gradient(to right, #673AB7 0%,#2196F3 100%)',
        'red-gradient': 'linear-gradient(to right, #f92c8b 0%,#b02cd6 100%)',
        'heading-gradient':
          'linear-gradient(to right, #673AB7 0%,#E91E63 36%,#E91E63 65%,#673AB7 100%)',
        'section-gradient':
          'linear-gradient(to bottom, #fff6f3 0%,#fffefb 100%)',
        'pseudo-gradient': 'linear-gradient(to right, #007bff 0%,#ff1f8e 100%)',
        'cursor-gradient': 'linear-gradient(to right, #ffbd84 0%,#ff1f8e 100%)',
        'rarity-gradient':
          'linear-gradient(to bottom, #e4fffe 0%,#ffedf3 100%)',
        'card-progress':
          'linear-gradient(135deg, #9100ff 0%,#3663ff 54%,#00e2ff 100%)',
        breadcrumb: 'linear-gradient(135deg, #ffdee9 0%,#c8fff4  100%)',
        'breadcrumb-img': 'url("/images/breadcrumb-bg.jpg")',
        'breadcrumb-shap': 'url("/images/banner-shap-2.png")',
      },
      boxShadow: {
        btn: '0 10px 15px 0px rgb(56 0 189 / 20%)',
        card: '0 3.4px 2.7px -30px rgba(0, 0, 0, 0.059), 0 8.2px 8.9px -30px rgba(0, 0, 0, 0.071), 0 25px 40px -30px rgba(0, 0, 0, 0.2)',
        image: '-20px 20px 35px #dcdcdc, 20px -40px 35px #ffffff',
        dropdown: '0 0.625rem 2.5rem 0.625rem rgba(140,152,164,0.175)',
        'NFT-body':
          '0 3.4px 2.7px -30px rgb(0 0 0 / 6%), 0 8.2px 8.9px -30px rgb(0 0 0 / 7%), 0 25px 40px -30px rgb(0 0 0 / 20%)',
      },
      zIndex: {
        9999: 'z-index: 9999',
      },
      transition: {
        'overlay-trans': 'transition: 1.2s cubic-bezier(.17, .85, .438, .99)',
      },
      borderRadius: {
        bubble: '68% 32% 64% 36% / 59% 59% 41% 41%',
      },
      keyframes: {
        borderTransform: {
          '0%,100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%;' },
          '14%': { borderRadius: '40% 60% 54% 46% / 49% 60% 40% 51%;' },
          '28%': { borderRadius: '54% 46% 38% 62% / 49% 70% 30% 51%;' },
          '42%': { borderradius: '61% 39% 55% 45% / 61% 38% 62% 39%;' },
          '56%': { borderRadius: '61% 39% 67% 33% / 70% 50% 50% 30%;' },
          '70%': { borderRadius: '50% 50% 34% 66% / 56% 68% 32% 44%;' },
          '84%': { borderRadius: '46% 54% 50% 50% / 35% 61% 39% 65%;' },
        },
      },
      animation: {
        borderTransform: 'borderTransform 6s linear infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        '2xl': '0rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
