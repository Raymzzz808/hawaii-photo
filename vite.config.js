import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hawaii-photo/', // 👈 this is the magic line!
  plugins: [react()],
});