import { defineConfig } from 'vite';

export default defineConfig({
  base: '/checkoutA/',   // ← 你的仓库名!!!
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
