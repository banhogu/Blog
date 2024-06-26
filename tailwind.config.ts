const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //다크 모드 클래스 지정
  content: ['./(app|src)/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'my-gray': 'rgb(241, 241, 239)',
        'my-strong-gray': 'rgb(234, 234, 232)',
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
