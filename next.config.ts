import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // 1. Enable gzip compression (helps with page load speed)
  compress: true, 
  
  images: {
    // 2. Enable modern image formats (AVIF is 20% smaller than WebP)
    formats: ['image/avif', 'image/webp'],
    // 3. Set custom qualities if you want to force smaller sizes globally
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 4. Optimize package imports (removes unused parts of libraries like Lucide icons)
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;