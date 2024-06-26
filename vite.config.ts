import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import * as path from "node:path";
import UnocssVitePlugin from 'unocss/vite'


export default defineConfig({
  plugins: [vue(), dts(), UnocssVitePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // Add this alias
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyLibrary',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' }
      }
    }
  }
})