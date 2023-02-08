/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      screens : {
        sm: '270px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
