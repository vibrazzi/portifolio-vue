<template>
  <section class="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="code-mentor">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-8 sm:mb-16" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          CodeMentor
          <span class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            IA para Lógica de Programação
          </span>
        </h2>
        <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
          Um projeto desenvolvido para ajudar estudantes e entusiastas da programação a aprimorarem suas habilidades em lógica de programação através de uma IA especializada.
        </p>
      </div>

        <div class="relative overflow-hidden rounded-2xl min-h-[2000px] bg-gray-200 dark:bg-gray-800 mx-auto w-full max-w-6xl px-4" data-aos="fade-up">
          <iframe
            src="https://code-mentor-production-4d2f.up.railway.app/"
            style="width: 100%; height: 2000px; border: none; border-radius: 12px; display: block;"
            title="CodeMentor Chat"
            allow="clipboard-write"
            loading="lazy"
          ></iframe>
        </div>

      <div class="text-center mt-6 sm:mt-8 px-4" data-aos="fade-up" data-aos-delay="200">
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
          Construído com FastAPI, alimentado por modelos Ollama, e hospedado no Railway. Experimente gratuitamente e veja como a IA pode acelerar seu aprendizado!
        </p>
        <div class="flex flex-wrap justify-center gap-2">
          <span class="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-lg">FastAPI</span>
          <span class="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-lg">Python</span>
          <span class="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-lg">Ollama</span>
          <span class="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-lg">Docker</span>
          <span class="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-lg">Railway</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true,
  offset: 100
})
</script>

<style scoped>
* {
  transition-property: color, background-color, border-color, transform, opacity, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>