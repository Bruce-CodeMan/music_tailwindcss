/*
 * @Date: 2023-07-17 10:41:40
 * @Author: Bruce Hsu
 * @Description: 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          } ,
          "50%": {
            transform: "scaleY(1.5)"
          }
        }
      },
      animation: {
        wavey: "wavey 1000ms linear infinite"
      }
    },
  },
  plugins: [],
}

