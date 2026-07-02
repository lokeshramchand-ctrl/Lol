import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  build: {
    sourcemap: true,
    // terserOptions:
    chunkSizeWarningLimit: 1600,
  },
  plugins: [
    tailwindcss(),
    vue(),
    robots(),
    sitemap({
      hostname: 'https://hetari.github.io/',
      basePath: 'portfolio',
      changefreq: 'hourly', // default: 'daily'
      priority: 1,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
server: {
  host: true,          // ensures external access works
  port: 5173,          // keep consistent with your dev server
  hmr: {
    protocol: 'ws',    // use WebSocket
    host: 'localhost', // force HMR to connect locally
    port: 5173
  },
  watch: {
    usePolling: true,  // helps on Windows/WSL/MINGW
    interval: 1000     // adjust if needed
  }
},

  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
    force: true,
  },
});
