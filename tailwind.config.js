/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main_text_color: '#575b5b',
        main_bg_color: '#f7f7f7',
        error_modal_bg: '#EA7171',
        success_modal_bg: '#71ea71',
        secondary_text_color: '#8f9b9a',
        form_bg_color: '#f8f7fa',
        slide_bar_bg: '#649c9e',
        input_bg: '#fcf5eb',
        primary: '#326563',
        orange_red_color: '#f46d5b'
      },
      screens: {
        sm: '320px',
        md: '768px',
        xl: '1280px',
        lg: '1064px'
      }
    }
  },
  plugins: []
}
