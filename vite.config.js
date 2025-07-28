import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Code splitting optimizasyonu
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          animations: ['gsap', '@gsap/react'],
          utils: ['react-countup', 'react-responsive']
        }
      }
    },
    // Chunk size warning threshold
    chunkSizeWarningLimit: 1000,
    // Asset compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Asset optimization
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  server: {
    // Development server optimization
    fs: {
      cachedChecks: false
    }
  }
})