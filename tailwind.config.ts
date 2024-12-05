import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#00FFFF',
        'light-primary': '#77FFF7',
        secondary: '#022A27',
        grey: '#8899B2',
        page: '#E7E1DB',
        'secondary-page': '#CDC7C0',
        'secondary-green': '#053D36',
        'secondary-grey': '#B4BACA',
        'green-price-tier': '#31C48D',
        'primary-color-transparent': 'rgba(0, 188, 212, 0.5)',
        'secondary-color': '#D9F5F9',
        'third-color': '#01C5BA',
        'primary-background': 'rgba(0, 188, 212, 0.08)',
        'primary-background-blend': '#091d22',
        'footer-grey-background': 'rgba(0, 0, 0, 0.1)',
        'primary-color': 'rgba(0, 188, 212)',
        'carmel-background': '#383838',
        'carmel-white': '#FFFFFF',
        'carmel-black': '#1A1C1F',
        // 'carmel-grey': '#B4BACA',
        'carmel-light-grey': '#F9F9F9',
        'carmel-dark-grey': '#272E35',
        'carmel-sky-grey': '#F5F5F7',
        'carmel-grey': '#6E757C',
        'membership-gold': '#FFC700',
        'light-grey': 'rgba(0, 0, 0, 0.65)',
        'light-grey-2': '#CECCD6',
        'toggle-grey': '#ccc',
        'neutral-color': '#6B6785',
        'highlight-green-primary': '#6FCF9733',
        'highlight-green-secondary': '#219653',
        'dark-green': '#0A0F12',
        'description-gray': 'rgba(156, 153, 174, 0.8)',
        'description-gray-2': 'rgba(255, 255, 255, 0.8)',
        'dark-purple': '#393556',
        linkedin: '#0077B5',
        twitter: '#00A8FF',
        'dark-blue': '#0077B5',
        'blue-navy': '#016DB0',
        'turquoise-light': '#01FFCA',
        'twitter-teal': '#03A9F4',
        neon: 'rgba(97, 255, 0, 0.2)',
        green: '#61FF00',
        'green-dark': 'rgba(97, 255, 0, 0.08)',
        'bright-green': '#61FF00',
        purple: '#B600D4',
        'light-purple': 'rgba(182, 0, 212, 0.2)',
        // 'dark-purple': 'rgba(182, 0, 212, 0.08)',
        'light-blue': 'rgba(0, 188, 212, 0.2)',
        'dark-green-secondary': '#022A27',
        'dark-turquoise': '#00FFFF3D',
        cyan: '#00FFFF',
        'cyan/50': '#018880',
        'dark-cyan': '#03664E',
        'dark-indigo': '#0E0D17',
        'light-green': '#ADFFAB',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animated'),
    require('@headlessui/tailwindcss')
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'main',
    themes: [
      {
        main: {
          primary: '#00BCD4',
          secondary: '#D926A9',
          accent: '#1FB2A6',
          neutral: '#191D24',
          'base-100': '#2A303C',
          'base-200': '#232731',
          'base-300': '#1D2129',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '0px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
};
export default config;
