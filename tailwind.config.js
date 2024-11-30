/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite', // Adjust duration as needed
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' }, // Start off-screen to the left
          '100%': { transform: 'translateX(100%)' }, // End off-screen to the right
        },
      },
      
    },
    
  },
  plugins: [],
}
