import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk sizes for better loading
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Increase chunk size warning limit (500KB for images is fine)
    chunkSizeWarningLimit: 1000,
    // Use esbuild minifier (faster than terser, default in Vite)
    minify: 'esbuild',
    // Optimize assets - inline small assets as base64
    assetsInlineLimit: 4096,
    // Generate source maps for production (set to false for smaller build)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
