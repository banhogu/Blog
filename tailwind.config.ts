const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //다크 모드 클래스 지정
  content: ['./(app|src)/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'my-gray': 'rgb(235, 235, 232)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      //다크 모드용
      addVariant('theme-system', '.theme-system &');
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
