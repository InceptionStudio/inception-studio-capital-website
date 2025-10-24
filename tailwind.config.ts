import type { Config } from 'tailwindcss'
export default {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container:{ center:true, padding:'1rem', screens:{ '2xl':'1280px' } }
    }
  },
  plugins: []
} satisfies Config
