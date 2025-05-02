import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    vue(), // Plugin para suporte ao Vue.js
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Suporte ao Tailwind CSS
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias para facilitar importações
    },
  },
  server: {
    host: '0.0.0.0', // Permite acesso externo ao servidor de desenvolvimento
    port: 5173, // Porta padrão do Vite
  },
});
