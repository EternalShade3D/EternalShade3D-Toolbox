/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0f',
          elevated: '#0e0e16',
          card: '#141420',
          surface: '#1a1a2b',
          border: '#202032',
          borderMedium: '#2a2a45',
          borderHover: '#33334e',
          text: '#f0f0f8',
          muted: '#8b8ba7',
          dim: '#545470',
          heading: '#ffffff',
          accent: '#7c5cfc',
          accentHover: '#6945f9',
          accentLight: '#a48eff',
          accentSubtle: 'rgba(124, 92, 252, 0.1)',
          accentBorder: 'rgba(124, 92, 252, 0.3)',
          gold: '#f0c040',
          goldHover: '#e0b030',
          goldGlow: 'rgba(240, 192, 64, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 32px rgba(240, 192, 64, 0.25), 0 8px 24px rgba(0, 0, 0, 0.5)',
        'glow-purple': '0 0 32px rgba(124, 92, 252, 0.2), 0 8px 24px rgba(0, 0, 0, 0.5)',
      }
    }
  },
  plugins: [],
}
