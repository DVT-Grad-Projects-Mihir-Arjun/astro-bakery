export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      }
    }
  }
}