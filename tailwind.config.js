/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silent: {
          void: '#070707',
          black: '#0A0A0A',
          carbon: '#0F0F0F',
          graphite: '#141414',
          slate: '#1B1B1B',
          ash: '#6E6E6E',
          silver: '#9B9B9B',
          bone: '#EDEDED',
          blood: '#24080C',
          bloodGlow: '#3B0D13',
          bloodDim: '#160507',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Didot', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cinzel Decorative"', 'serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.25em',
        'hyper-wide': '0.35em',
        'cryptic': '0.5em',
      },
      boxShadow: {
        'blood-subtle': '0 0 40px -10px rgba(36, 8, 12, 0.4)',
        'blood-intense': '0 0 60px -5px rgba(59, 13, 19, 0.6)',
        'obsidian-glow': '0 20px 50px -10px rgba(0, 0, 0, 0.95)',
      },
      animation: {
        'fade-slow': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
