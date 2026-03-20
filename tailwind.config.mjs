export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        bakery: {
          cream: '#FDF6EC',
          brown: '#6B3F1F',
          gold:  '#D4A847',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      }
    }
  }
}