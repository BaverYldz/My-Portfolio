# Omer Baver Yildiz - Portfolio

Modern ve performanslı React portfolio sitesi. Three.js, GSAP ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Performance Optimizations

Bu portfolio sitesi maksimum performans için aşağıdaki optimizasyonları içerir:

### 📦 Code Splitting & Lazy Loading
- Bileşenler lazy loading ile yüklenir
- Route-based code splitting
- Vendor libraries ayrı chunk'larda

### 🖼️ Image Optimization
- WebP format desteği
- Lazy loading images
- Image compression
- Progressive loading

### ⚡ Build Optimizations
- Terser minification
- Tree shaking
- Dead code elimination
- Asset compression

### 🔧 Caching Strategy
- Service Worker ile static asset caching
- Browser caching optimizasyonu
- CDN hazır yapı

## 🛠️ Tech Stack

- **Frontend:** React 19, Three.js, GSAP
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **3D Models:** GLB/GLTF optimized models
- **Performance:** Service Worker, Lazy Loading

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🏃‍♂️ Getting Started

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Build with bundle analysis
npm run build:analyze
```

## 📊 Performance Metrics

Target performance metrics:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3s

## 🔧 Optimization Tips

1. **Images**: Convert PNG/JPG to WebP format for better compression
2. **Models**: Use GLB format and optimize 3D models with tools like gltfpack
3. **Fonts**: Preload critical fonts
4. **Assets**: Compress and optimize all static assets

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

This project is licensed under the MIT License.
