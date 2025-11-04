<template>
  <section class="relative w-full min-h-screen flex items-start lg:items-center overflow-hidden bg-gray-900 dark:bg-gray-950 transition-colors duration-300 pt-24 lg:pt-32 pb-16"
           data-aos="fade-up" data-aos-duration="1000">
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>

      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 6" :key="i"
             class="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
             :style="{
               left: Math.random() * 100 + '%',
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 5 + 's',
               animationDuration: (Math.random() * 3 + 3) + 's'
             }">
        </div>
      </div>
    </div>

    <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center">

        <div class="order-1 lg:order-2 flex justify-center lg:justify-end"
             data-aos="fade-left" data-aos-delay="300">
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-primary to-pink-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500"></div>

            <div class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-primary/25">
              <img
                src="@/assets/fotoo.jpg"
                alt="Webert Fernandes - Desenvolvedor"
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce">
              React
            </div>
            <div class="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style="animation-delay: 1s;">
              Python
            </div>
            <div class="absolute -top-2 -left-6 sm:-top-4 sm:-left-10 w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style="animation-delay: 1s;">
              IA
            </div>
          </div>
        </div>

        <div class="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <div data-aos="fade-right" data-aos-delay="200">
            <p class="text-primary font-medium text-lg mb-2 tracking-wide">Olá, eu sou</p>
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span class="block">Webert</span>
              <span class="block bg-gradient-to-r from-primary via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Fernandes
              </span>
            </h1>
          </div>

          <div data-aos="fade-right" data-aos-delay="400">
            <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 dark:text-gray-400 font-light mb-4">
              Desenvolvedor Full Stack | Especializando em IA Generativa
            </h2>
            <div class="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span
                v-for="tech in ['GenAIOps', 'LLMs', 'Python', 'FastAPI', 'React', 'Vue.js', 'Shopify', 'CI/CD', 'Arquitetura Multiagente']"
                :key="tech"
                    class="px-3 py-1 bg-gray-800 dark:bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-primary transition-colors duration-300">
                {{ tech }}
              </span>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-delay="600">
            <div class="space-y-4 text-gray-400 dark:text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Trabalhando com GenAIOps e IA Generativa, aplicando conhecimentos em desenvolvimento full stack, arquiteturas
multiagente e práticas de CI/CD para implementar soluções baseadas em LLMs.
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
               data-aos="fade-up" data-aos-delay="800">
            <button class="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transform text-sm sm:text-base">
            <span class="relative z-10">
              <a href="#contact" class="flex items-center justify-center space-x-2">
                <span>Entre em Contato</span>
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button class="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 transform text-sm sm:text-base">
              <a href="/curriculo_Webert_Dev.pdf" download="Curriculo_Webert_Fernandes" class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download CV</span>
              </a>
            </button>
          </div>

          <div class="flex justify-center lg:justify-start space-x-6 pt-6"
               data-aos="fade-up" data-aos-delay="1000">
            <a v-for="social in socialLinks" :key="social.name"
               :href="social.url"
               :aria-label="social.name"
               class="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110 transform hover:shadow-lg">
              <i :class="social.icon" class="text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true,
  offset: 100
})

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/vibrazzi',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/webertfernandes',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:webertfernandes16@gmail.com',
    icon: 'fas fa-envelope'
  }
])
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(12px);
    opacity: 0;
  }
}

.animate-float {
  animation: float infinite ease-in-out;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
  background-size: 200% 200%;
}

.animate-scroll {
  animation: scroll 2s infinite;
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
  }

  .w-72 {
    width: 16rem;
  }

  .h-72 {
    height: 16rem;
  }
}

.dark .bg-gray-800 {
  background-color: #1f2937;
}

.dark .border-gray-700 {
  border-color: #374151;
}

.dark .text-gray-300 {
  color: #d1d5db;
}

.dark .text-gray-400 {
  color: #9ca3af;
}

.dark .text-gray-500 {
  color: #6b7280;
}
</style>
