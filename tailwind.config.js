/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/*.{html,js,jsx}',
    './src/modules/*.{html,js,jsx}',
    './src/*.{html,js,jsx}',
    
  ],
  theme: {
    extend: {
      borderRadius: {
        'default': '18px'
      }
    },
  },
  plugins: [],
}

