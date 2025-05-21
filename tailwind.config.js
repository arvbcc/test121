/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#C0DFFF',
          300: '#80BFFF',
          400: '#AA01BC',
          500: '#AA01BC',
          600: '#D602C6',
          700: '#D602C6',
          800: '#D602C6',
          900: '#D602C6',
        },
        secondary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          500: '#6F00FE',
          700: '#6F00FE',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981', 
          700: '#047857'
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309'
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C'
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};