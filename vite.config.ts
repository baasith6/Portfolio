import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures proper asset paths when using a custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
