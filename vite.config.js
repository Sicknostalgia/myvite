import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // // tells Vite to generate relative URLs in the build. This is particularly useful when deploying the app to a subdirectory or when the exact deployment path is not known in advance.
  base: './',
})
