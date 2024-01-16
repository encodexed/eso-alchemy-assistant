/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [
    'text-purple-400',
    'text-amber-500',
    'text-emerald-700',
    'text-red-500',
    'text-sky-500',
    'text-green-500',
  ],
};
