<template>
  <section
    class="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    id="code-mentor"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8 sm:mb-16" data-aos="fade-up">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
        >
          CodeMentor
          <span
            class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
          >
            IA que ensina Lógica de Programação
          </span>
        </h2>
        <p
          class="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4"
        >
          IA que eu criei usando Groq API e fluxos multiagente para
          entregar respostas em tempo real, validações contextuais e jornadas de
          ensino personalizadas em Logica de Programação.
        </p>
      </div>

      <div
        class="relative overflow-hidden rounded-2xl min-h-[500px] bg-gray-200 dark:bg-gray-800 mx-auto w-full max-w-6xl px-4"
        data-aos="fade-up"
      >
        <iframe
          src="https://code-mentor-production-4d2f.up.railway.app/"
          style="
            width: 100%;
            height: 1600px;
            border: none;
            border-radius: 12px;
            display: block;
          "
          title="CodeMentor Chat"
          allow="clipboard-write"
          loading="lazy"
        ></iframe>
      </div>

      <div
        class="text-center mt-6 sm:mt-8 px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto text-left">
          <div
            class="bg-white/70 dark:bg-gray-800/60 border border-primary/20 rounded-2xl p-6 shadow-lg"
          >
            <h3
              class="flex items-center text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              <i class="fas fa-rocket text-primary mr-3"></i>
              Realizações
            </h3>
            <ul
              class="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
            >
              <li>
                SSE em tempo real com orquestração multiagente para feedback
                imediato.
              </li>
              <li>
                CI/CD no Railway com validações automáticas via Pydantic e
                Pytest.
              </li>
              <li>
                Infra Dockerizada e monitoramento de performance para
                <span class="text-primary font-semibold">~300ms</span> de
                resposta média.
              </li>
            </ul>
          </div>
          <div
            class="bg-white/70 dark:bg-gray-800/60 border border-primary/20 rounded-2xl p-6 shadow-lg"
          >
            <h3
              class="flex items-center text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              <i class="fas fa-toolbox text-primary mr-3"></i>
              Stack
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="badge">Python 3.12</span>
              <span class="badge">FastAPI</span>
              <span class="badge">Groq API</span>
              <span class="badge">Ollama</span>
              <span class="badge">Docker</span>
              <span class="badge">Railway</span>
              <span class="badge">Vanilla JS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});
</script>

<style scoped>
* {
  transition-property: color, background-color, border-color, transform, opacity,
    box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.badge {
  @apply px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-lg;
}
</style>
