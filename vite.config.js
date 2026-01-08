import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Quan trọng: Định nghĩa base path trùng với đường dẫn trên URL
  base: '/studio/', 
})
