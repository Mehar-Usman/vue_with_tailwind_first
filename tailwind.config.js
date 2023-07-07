/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '50': '36rem',
      },
      spacing2: {
        sm: '100px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'orange': '#ebb618',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'gray': '#888888'
      },
    },
  },
  plugins: [],
}
// module.exports = {
//   theme: {
//     extend: {
//       spacing: {
//         '13': '3.25rem',
//         '15': '3.75rem',
//         '128': '32rem',
//         '200': '36rem',
//       }
//     }
//   }
// }
