import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/chatbot/', // 👈 This ensures correct asset paths on GitHub Pages
  server: {
    hmr: {
      overlay: true
    }
  }
})
