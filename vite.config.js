import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React ve DOM ayrı chunk
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }

          // Three.js core ayrı chunk  
          if (id.includes('three/build/three.module.js') || id.includes('three/src')) {
            return 'three-core';
          }

          // Three.js utilities ve loaders ayrı chunk
          if (id.includes('@react-three/fiber') || id.includes('@react-three/drei')) {
            return 'three-utils';
          }

          // Post-processing ayrı chunk (opsiyonel yükleme için)
          if (id.includes('@react-three/postprocessing')) {
            return 'three-postprocessing';
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
    chunkSizeWarningLimit: 800, // Daha sıkı limit
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'gsap'],
    exclude: ['@react-three/postprocessing'], // İhtiyaç halinde lazy load
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})