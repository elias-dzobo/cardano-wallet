import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    target: 'esnext' // Ensure modern JavaScript features are supported
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext', // Ensure esbuild targets modern JavaScript environments
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
