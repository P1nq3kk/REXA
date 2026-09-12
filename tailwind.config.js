/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050A18',
        'background-secondary': '#0A1020',
        card: '#0D1426',
        primary: '#7C4DFF',
        secondary: '#5865F2',
        glow: '#8B5CF6',
        text: {
          main: '#F5F7FF',
          secondary: '#8E97AA',
        },
        border: 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #7C4DFF, #4F46E5)',
      },
    },
  },
  plugins: [],
}
