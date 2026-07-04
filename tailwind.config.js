/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fff7fb',
        paper: '#ffffff',
        taupe: '#382d3b',
        beige: '#efddf0',
        charcoal: '#221825',
        obsidian: '#382d3b',
        'dark-surface': '#4b3a50',
        'muted-dark': '#4b454c',
        'muted-light': '#feebfe',
        peach: '#d8bede',
        coral: '#836d8a',
        rose: '#695570',
        blush: '#ffefff',
        mint: '#e6dbf5',
        leaf: '#675f75',
        'mint-strong': '#cdc2dc',
        'border-light': '#cdc4cc',
        'border-dark': 'rgba(244, 218, 251, 0.18)',
      },
      fontFamily: {
        sans: ['Libre Franklin', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        sidebar: '256px',
        'section-gap': '5rem',
      },
    },
  },
  plugins: [],
};
