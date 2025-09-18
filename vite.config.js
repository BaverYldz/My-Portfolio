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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console for debugging
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 1, // Reduce passes to prevent over-optimization
      },
      mangle: {
        toplevel: false, // Disable toplevel mangling for Three.js compatibility
        keep_fnames: true, // Keep function names for Three.js
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React ve DOM ayrı chunk
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }

          // Three.js - daha conservative chunking
          if (id.includes('three')) {
            return 'three-core';
          }

          // React Three utilities
          if (id.includes('@react-three')) {
            return 'three-utils';
          }

          // GSAP animasyonları ayrı chunk
          if (id.includes('gsap')) {
            return 'animation-vendor';
          }

          // Diğer utilities
          if (id.includes('react-countup') || id.includes('react-responsive') || id.includes('@emailjs/browser')) {
            return 'utils-vendor';
          }

          // Node modules'teki diğer büyük paketler
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase limit
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'gsap'],
    force: true, // Force re-optimization
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})