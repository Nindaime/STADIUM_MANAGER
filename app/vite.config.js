import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

const config = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/],

    }),
    Pages({
      dirs: [
        { dir: resolve(__dirname, './src/pages'), baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
    }),
    // test multiple instances

  ],
})

export default config