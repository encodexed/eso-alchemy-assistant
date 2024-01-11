/** @type {import("prettier").Config} */

const config = {
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
};

export default config;
