/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#131313',
        while: '#ECEFF4'
      },
      maxWidth: {
        layout: '1200px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
