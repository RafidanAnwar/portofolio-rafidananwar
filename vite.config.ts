import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Menggunakan relative path agar aman untuk deployment di sub-folder GitHub Pages
});
