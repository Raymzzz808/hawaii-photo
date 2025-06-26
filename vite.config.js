import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
     include: /\.jsx?$/,
    exclude: [],
  },
  resolve:{
    extensions: ['js','jsx'],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
