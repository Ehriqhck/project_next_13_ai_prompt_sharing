/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./index.html",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        varino: ['var(--font-varino-normal)']
      },
      colors: {
        'primary-orange': '#FF5722'
      },
      backgroundImage: {
        'ui-corners': "url('/assets/icons/actions/ui-corners.svg')"
      }
    }
  },
  darkMode: 'class',
  plugins: [
    
  ]
}
