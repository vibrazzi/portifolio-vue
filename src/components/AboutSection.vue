<template>
  <section class="text-white mt-18" id="about">
    <!-- Gradiente de fundo -->
    <div class="absolute z-0 top-[93rem] inset-x-0 h-70 flex items-start">
      <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
    </div>

    <!-- Conteúdo principal -->
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
      <!-- Educação -->
      <div data-aos="flip-right">
        <h2 class="text-4xl font-bold text-white text-left">Educação</h2>
        <div class="space-y-8 py-8">
          <div
            v-for="element in education"
            :key="element.id"
            class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
          >
            <div class="w-1/4">
              <img
                src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                alt="Ícone de graduação"
              />
            </div>
            <div class="w-3/4 pl-4">
              <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                {{ element.School }}
              </h3>
              <p class="text-white">{{ element.program }}</p>
              <p class="text-white">{{ element.year }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sobre Mim -->
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
        <h2 class="text-4xl font-bold text-white md:text-center text-left">
          Mais
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">sobre</span>
          mim
        </h2>
        <p class="text-base lg:text-lg mt-0 py-8 text-left">
          Eu sempre fui apaixonado por música, foi algo que dediquei minha vida inteira, com todo o amor. Tenho até duas músicas no Spotify, algo de que me orgulho muito. No meio dessa jornada, tive a ideia de criar um site para divulgar minhas músicas, e foi assim que tive meu primeiro contato com o desenvolvimento. Foi uma experiência tão incrível! Quanto mais eu aprendia, mais eu me encantava. Isso me motivou a mergulhar de cabeça nesse mundo. Acabei colocando minhas produções musicais de lado para focar nos estudos e entrei no curso de Análise e Desenvolvimento de Sistemas. No curso, explorei várias áreas e aprendi de tudo um pouco. Mas o que realmente conquistou meu coração foi o desenvolvimento Front-End, embora também tenha tido contato com o Back-End. Além disso, eu me considero uma pessoa muito empática, uma habilidade que desenvolvi ao trabalhar por muitos anos com atendimento ao cliente. Agora, estou em busca de uma oportunidade para crescer como profissional e colocar em prática tudo o que aprendi.
        </p>
        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
          <!-- Espaço para adicionar ícones ou informações adicionais -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const education = ref([
  {
    id: 1,
    School: 'Faculdade Descomplica',
    program: 'Análise e Desenvolvimento de Sistemas',
    year: '2024 a 2026',
  },
  {
    id: 2,
    School: 'Alura',
    program: 'Desenvolvedor Front-End',
    year: '2023',
  },
  {
    id: 3,
    School: 'Coursera',
    program: 'Desenvolvedor Front-End',
    year: '2022 a 2023',
  },
  {
    id: 4,
    School: 'Dio',
    program: 'BootCamp Desenvolvedor Front-End',
    year: '2022',
  },
  {
    id: 5,
    School: 'Dio',
    program: 'BootCamp Desenvolvedor Mobile',
    year: '2022',
  },
]);
</script>
