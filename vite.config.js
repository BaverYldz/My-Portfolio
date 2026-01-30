import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    minify: 'esbuild', // Switch to esbuild for better React compatibility
    rollupOptions: {
      output: {
        manualChunks: {
          // Simple chunking strategy
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['gsap'],
          'utils-vendor': ['react-countup', 'react-responsive', '@emailjs/browser']
        }
      }
    },
    chunkSizeWarningLimit: 1600,
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'gsap', 'react', 'react-dom'],
    force: true,
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})