import { defaultDefines } from 'vite';

import vue from '@vite/js/plugin-vue';

import {resolve} from 'path';

export default defineConfig({
  Plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src'),
    },
  },
  server: {
    port:3000
  }
})