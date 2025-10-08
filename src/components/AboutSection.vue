<template>
  <section class="relative py-10 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300" id="about">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">

        <div class="space-y-8" data-aos="fade-right" data-aos-duration="800">
          <div class="text-center lg:text-left">
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              <span class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Educação
              </span>
            </h2>
          </div>

          <div class="relative">
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-pink-500"></div>

            <div class="space-y-6">
              <div
                v-for="(element, index) in education"
                :key="element.id"
                class="education-card relative group"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 150"
              >
                <div class="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-primary to-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                <div class="ml-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-primary/30 transform group-hover:-translate-y-1">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>

                    <div class="flex-1 min-w-0">
                      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                        {{ element.School }}
                      </h3>
                      <p class="text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {{ element.program }}
                      </p>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <i class="far fa-calendar-alt mr-2"></i>
                        {{ element.year }}
                      </div>
                    </div>
                  </div>

                  <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div class="text-center lg:text-left">
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Mais
              <span class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                sobre
              </span>
              mim
            </h2>
          </div>

          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-primary/5 to-pink-500/5 rounded-3xl opacity-50"></div>

            <div class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                  Eu sempre fui apaixonado por música, foi algo que dediquei minha vida inteira, com todo o amor. Tenho até duas músicas no Spotify, algo de que me orgulho muito. No meio dessa jornada, tive a ideia de criar um site para divulgar minhas músicas, e foi assim que tive meu primeiro contato com o desenvolvimento. Foi uma experiência tão incrível! Quanto mais eu aprendia, mais eu me encantava. Isso me motivou a mergulhar de cabeça nesse mundo. Acabei colocando minhas produções musicais de lado para focar nos estudos e entrei no curso de Análise e Desenvolvimento de Sistemas. No curso, explorei várias áreas e aprendi de tudo um pouco. Mas o que realmente conquistou meu coração foi o desenvolvimento Front-End, embora também tenha tido contato com o Back-End. Além disso, eu me considero uma pessoa muito empática, uma habilidade que desenvolvi ao trabalhar por muitos anos com atendimento ao cliente. Agora, estou em busca de uma oportunidade para crescer como profissional e colocar em prática tudo o que aprendi.
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="400">
            <div v-for="skill in personalSkills" :key="skill.name"
                 class="group bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div class="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i :class="skill.icon" class="text-white text-xl"></i>
              </div>
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {{ skill.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 lg:mt-32">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span class="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Também sou
            </span>
            <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              músico! 🎵
            </span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Confira minhas duas músicas no Spotify e mergulhe no meu mundo musical
          </p>
        </div>

        <div class="bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-3xl p-8 lg:p-12 border border-primary/20" data-aos="zoom-in" data-aos-delay="200">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            <div class="relative group" data-aos="fade-up" data-aos-delay="300">
              <div class="absolute -inset-2 bg-gradient-to-r from-primary to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
              <div class="relative bg-black/10 dark:bg-black/20 rounded-2xl p-4 backdrop-blur-sm border border-primary/20">
                <iframe
                  data-testid="embed-iframe"
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/7HdL53DrtK9p1zqc6JZ3XY?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  class="w-full rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                </iframe>
              </div>
            </div>

            <div class="relative group" data-aos="fade-up" data-aos-delay="400">
              <div class="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
              <div class="relative bg-black/10 dark:bg-black/20 rounded-2xl p-4 backdrop-blur-sm border border-pink-500/20">
                <iframe
                  data-testid="embed-iframe"
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/3C4AUuNwYPjGQgyE7YhnGq?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  class="w-full rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                </iframe>
              </div>
            </div>
          </div>

          <div class="mt-12 text-center" data-aos="fade-up" data-aos-delay="500">
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a href="https://open.spotify.com/artist/0E7kdLTbivs01br4APOfRX?si=0x5VxA1BRW6UxG98zOUbUA" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                <i class="fab fa-spotify mr-3 text-xl"></i>
                <span class="font-semibold text-lg">Ouça mais no Spotify</span>
              </a>

              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div class="w-4 h-4 bg-primary rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                <div class="w-4 h-4 bg-pink-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                <div class="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
              </div>
            </div>

            <div class="mt-8 flex justify-center">
              <div class="bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-3 border border-gray-200 dark:border-gray-700">
                <p class="text-sm text-gray-600 dark:text-gray-400 italic flex items-center">
                  <i class="fas fa-headphones mr-2 text-green-500"></i>
                  Ouça com fones para uma experiência completa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Inicializar AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
})

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
])

const personalSkills = ref([
  {
    name: 'Música',
    icon: 'fas fa-music'
  },
  {
    name: 'Criatividade',
    icon: 'fas fa-lightbulb'
  },
])
</script>

<style scoped>
/* Timeline animations */
.education-card {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease-out forwards;
}

.education-card:nth-child(1) { animation-delay: 0.1s; }
.education-card:nth-child(2) { animation-delay: 0.2s; }
.education-card:nth-child(3) { animation-delay: 0.3s; }
.education-card:nth-child(4) { animation-delay: 0.4s; }
.education-card:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Timeline line animation */
.education-card::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, theme('colors.primary'), transparent);
  opacity: 0;
  animation: lineGrow 1s ease-out forwards;
  animation-delay: calc(var(--index) * 0.2s);
}

@keyframes lineGrow {
  to {
    opacity: 1;
  }
}

/* Hover effects for education cards */
.education-card:hover .fas.fa-graduation-cap {
  animation: graduationBounce 0.6s ease-in-out;
}

@keyframes graduationBounce {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(-5deg); }
  75% { transform: translateY(-2px) rotate(5deg); }
}

/* Personal skills animations */
.group:hover .fas.fa-music {
  animation: musicNote 1s ease-in-out infinite;
}

.group:hover .fas.fa-heart {
  animation: heartBeat 1s ease-in-out infinite;
}

.group:hover .fas.fa-lightbulb {
  animation: lightBulbFlicker 1.5s ease-in-out infinite;
}

.group:hover .fas.fa-star {
  animation: starTwinkle 1s ease-in-out infinite;
}

@keyframes musicNote {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-3px); }
  50% { transform: translateY(-6px); }
  75% { transform: translateY(-3px); }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes lightBulbFlicker {
  0%, 100% { opacity: 1; filter: brightness(1); }
  50% { opacity: 0.7; filter: brightness(1.5); }
}

@keyframes starTwinkle {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(5deg) scale(1.1); }
  75% { transform: rotate(-5deg) scale(1.1); }
}

/* Spotify button animation */
.bg-green-500:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);
}

/* Story content animation */
.prose p {
  opacity: 0;
  animation: textReveal 1s ease-out forwards;
  animation-delay: 0.8s;
}

@keyframes textReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .education-card {
    margin-left: 0;
  }

  .absolute.left-8 {
    display: none;
  }

  .ml-16 {
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .grid.grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .education-card .absolute.left-6 {
    left: 1rem;
  }

  .education-card .ml-16 {
    margin-left: 3rem;
  }
}

/* Dark mode specific enhancements */
.dark .education-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 20px rgba(245, 158, 11, 0.1);
}

.dark .bg-gray-50 {
  background-color: #1f2937;
}

.dark .border-gray-200 {
  border-color: #374151;
}

/* Loading animations */
.education-card,
.group {
  will-change: transform;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
