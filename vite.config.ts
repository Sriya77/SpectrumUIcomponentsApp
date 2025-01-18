import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['path-browserify', 'os-browserify/browser'],
  },
  define: {
    'process.platform': JSON.stringify('win32'),
    'process.env': {},
  },
  resolve: {
    alias: {
      path: path.resolve(__dirname, 'node_modules/path-browserify'),
      os: path.resolve(__dirname, 'node_modules/os-browserify/browser'),
    },
  },
});