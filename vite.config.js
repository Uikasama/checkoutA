import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/checkoutA/',   // ⭐ 很关键：仓库名要和 GitHub 仓库一样
  plugins: [react()],
})
