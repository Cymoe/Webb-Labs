/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        nebulaPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        'nebula-pulse': 'nebulaPulse 8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
