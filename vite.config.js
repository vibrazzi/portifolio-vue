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
    open: true, // Abre o navegador automaticamente ao iniciar o servidor
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:3000', // Proxy para o backend
        changeOrigin: true, // Permite redirecionar para origens diferentes
        secure: false, // Permite conexões HTTP não seguras (útil para desenvolvimento)
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove o prefixo "/api" ao encaminhar
      },
    },
  },
});
