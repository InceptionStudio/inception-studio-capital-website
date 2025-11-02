import type { Config } from 'tailwindcss'
export default {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container:{ center:true, padding:'1rem', screens:{ '2xl':'1280px' } },
      colors: {
        brand: {
          50: '#fef2f0',
          100: '#fde3df',
          200: '#fcc7be',
          300: '#f9a18d',
          400: '#f57250',
          500: '#dd4218',
          600: '#c73815',
          700: '#a62f13',
          800: '#852611',
          900: '#6a1f0e',
          950: '#3a0f07',
        }
      }
    }
  },
  plugins: []
} satisfies Config
