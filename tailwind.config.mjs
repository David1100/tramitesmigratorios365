/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1e2849',
        'primary-dark': '#0f1424',
        'primary-light': '#2a3a6e',
        'secondary': '#b40003',
        'secondary-dark': '#8a0002',
        'secondary-light': '#d90004',
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
        'surface': '#f8f9ff',
        'background': '#f8f9ff',
        'on-background': '#1e2849',
        'on-surface': '#1e2849',
        'on-surface-variant': '#5a6278',
        'surface-container-low': '#ffffff',
        'surface-container': '#eef1f8',
        'surface-container-high': '#e2e5ef',
        'surface-container-highest': '#d8dce6',
        'surface-container-lowest': '#f4f5fa',
        'outline': '#9ca3b4',
        'outline-variant': '#d1d5e0',
        'primary-container': '#d5dce8',
        'on-primary-container': '#1e2849'
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        '2xl': '0.75rem',
        'full': '9999px'
      },
      spacing: {
        'gutter': '24px',
        'unit': '8px',
        'margin-mobile': '12px',
        'margin-desktop': '64px',
        'container-max': '1200px'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'body-lg': ['18px', {'lineHeight': '28px', 'fontWeight': '400'}],
        'label-md': ['14px', {'lineHeight': '20px', 'letterSpacing': '0.01em', 'fontWeight': '500'}],
        'headline-md': ['24px', {'lineHeight': '32px', 'fontWeight': '600'}],
        'body-sm': ['14px', {'lineHeight': '20px', 'fontWeight': '400'}],
        'display-lg': ['48px', {'lineHeight': '56px', 'letterSpacing': '-0.02em', 'fontWeight': '700'}],
        'label-sm': ['12px', {'lineHeight': '16px', 'letterSpacing': '0.02em', 'fontWeight': '600'}],
        'headline-lg-mobile': ['24px', {'lineHeight': '32px', 'fontWeight': '600'}],
        'headline-lg': ['32px', {'lineHeight': '40px', 'letterSpacing': '-0.01em', 'fontWeight': '600'}],
        'body-md': ['16px', {'lineHeight': '24px', 'fontWeight': '400'}]
      },
      maxWidth: {
        'container-max': '1200px'
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(30, 40, 73, 0.08), 0 2px 4px -2px rgba(30, 40, 73, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(30, 40, 73, 0.1), 0 8px 10px -6px rgba(30, 40, 73, 0.08)',
        'button': '0 4px 14px 0 rgba(30, 40, 73, 0.35)',
        'button-hover': '0 6px 20px 0 rgba(30, 40, 73, 0.45)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
