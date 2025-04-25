import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss'; // Ajuste aqui para o Tailwind correto

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // Aqui vai apenas o Vue
  css: {
    postcss: {
      plugins: [tailwindcss()], // Plugin do Tailwind CSS adicionado de forma explícita
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
