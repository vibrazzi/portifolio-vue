<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-white">Serviços</h2>
    </div>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300"
      >
        <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <img :src="service.icon" alt="service icon" class="mx-auto" />
        </div>
        <div class="text-center">
          <h3
            class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl"
          >
            {{ service.name }}
          </h3>
          <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    id: 1,
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
    name: 'Desenvolvedor Front-End',
    description: 'Criação de interfaces modernas e responsivas.',
  },
  {
    id: 2,
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/web-design.png',
    name: 'Web Design',
    description: 'Design criativo e funcional para websites.',
  },
  {
    id: 3,
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/api.png', // Novo ícone
    name: 'Integração de APIs',
    description: 'Desenvolvimento e integração de APIs RESTful para comunicação eficiente entre sistemas.',
  },
]);
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>