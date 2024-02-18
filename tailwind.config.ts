import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FCEC41',
        'yellow-light': '#f7eb79',
        'yellow-dark': '#c9b802',
        black: '#171B24',
        grey: '#F6F6F6',
        dark: '#2F323A',
        'opacity-black': '#5D6066',
        line: '#E8E9EA',
        red: '#f06359',
        'black-opacity': 'rgba(0, 0, 0, 0.54)',
        dot: '#ccc'
      },
      fontFamily: {
        manrope: ['Manrope', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h2': '34px',
      },
      boxShadow: {
        cart: '0px 10px 10px 0px #3610A666',
      },
      container: {
        padding: '15px',
        center: true,
        screens: {
          lg: '1160px'
        },
      },
      height: {
        'hero-background': '220px',
        'hero-background-lg': '420px',
        'hero-background-sm': '300px'
      },
    },
  },
  plugins: [],
};
export default config;
