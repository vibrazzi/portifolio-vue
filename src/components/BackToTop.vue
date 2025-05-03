<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 bg-gradient-to-r from-primary to-pink-500 text-white
    rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-blue-600 shadow-lg"
    aria-label="Voltar ao topo"
  >
    ↥
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Estado para controlar a visibilidade do botão
const isVisible = ref(false);

// Função para verificar a posição do scroll
const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

// Função para rolar suavemente até o topo
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Adiciona o evento de scroll ao montar o componente
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove o evento de scroll ao desmontar o componente
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>