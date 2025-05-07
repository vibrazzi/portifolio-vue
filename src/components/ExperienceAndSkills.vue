<template>
  <section class="text-white" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl"></span>
      </span>
    </div>
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
      <!-- Habilidades Técnicas -->
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[90%] mb-12 md:mb-0">
        <h2 class="text-4xl font-bold text-white text-left">
          Habilidades
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Técnicas
          </span>
        </h2>
        <div class="mt-8" v-for="skill in Skills" :key="skill.id">
          <div class="flex items-end justify-between" data-aos="fade-right">
            <h4 class="font-semibold uppercase text-white">
              {{ skill.name }}
            </h4>
            <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
          </div>
          <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
            <div
              class="h-1 rounded-full bg-primary"
              :style="{ width: skill.width }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Experiências -->
      <div class="mt-12 md:mt-0" data-aos="flip-left">
        <h2 class="text-4xl font-bold text-white text-left mb-6">
          Experiências
        </h2>
        <div class="space-y-8 py-8" data-aos="fade-left">
          <div
            v-for="element in Experiences"
            :key="element.id"
            class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
          >
            <div class="w-1/4">
              <img
                :src="element.icon"
                :alt="element.role"
                class="w-16 h-16"
              />
            </div>
            <div class="w-3/4 pl-4">
              <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {{ element.role }}
              </h3>
              <p class="text-white">{{ element.company }}</p>
              <p class="text-white">{{ element.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const Skills = ref([
  { id: 1, name: 'HTML & CSS', width: '100%' },
  { id: 2, name: 'React', width: '90%' },
  { id: 3, name: 'JavaScript', width: '98%' },
  { id: 4, name: 'TypeScript', width: '95%' },
  { id: 5, name: 'Vue', width: '70%' },
]);

const Experiences = ref([
  {
    id: 1,
    role: 'Desenvolvedor Front-End',
    company: 'W Premium Lounge',
    date: 'Jan 2024 - Presente',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/code.png',
  },
  {
    id: 2,
    role: 'Estagiário de TI',
    company: 'Descomplica',
    date: 'Ago 2024 - Jan 2025',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/learning.png',
  },
  {
    id: 3,
    role: 'Suporte Técnico',
    company: 'Netflix',
    date: 'Jan 2020 - Jul 2024',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/customer-support.png',
  },
]);
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
