import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-portfolio/", // <-- Intha line-a add pannunga
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});