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
        black: '#171B24',
        grey: '#F6F6F6',
        dark: '#2F323A',
        'opacity-black': '#5D6066',
        line: '#E8E9EA'
      },
      fontFamily: {
        manrope: ['Manrope', 'Arial', 'sans-serif'],
      },
      container: {
        padding: '15px',
        center: true,
        screens: {
          lg: '1160px'
        },
      },
    },
  },
  plugins: [],
};
export default config;
