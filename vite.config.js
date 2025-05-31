import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // This is fine for Vercel deployment
  build: {
    rollupOptions: {
      external: [
        // Externalize common dependencies that might cause issues
        'react',
        'react-dom',
        'redux', // If you're using Redux
        // Add any other problematic modules identified in the build logs
      ],
    },
  },
});
