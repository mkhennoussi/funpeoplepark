import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.green,
      },
    },
  },
  shortcuts: {
    sidenav_menu_item: 'flex items-center h-12 px-4 rounded-lg text-gray-200  hover:(bg-secondary-500 text-white) transition duration-200 ',
    bg_gradient_app: 'from-primary-500 to-secondary-500 bg-gradient-to-br',
    // sidenav_menu_item: 'flex w-full items-center justify-between py-2 px-5 transition duration-500 rounded-br-4xl rounded-tl-4xl hover:(bg-primary-500 text-white) my-2',
  },
})
