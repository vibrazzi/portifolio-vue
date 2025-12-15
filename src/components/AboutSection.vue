<template>
  <section
    class="relative py-16 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
    id="about"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-pink-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
        <div class="space-y-8" data-aos="fade-right" data-aos-duration="800">
          <div class="text-center lg:text-left">
            <h2
              class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span
                class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
              >
                Objetivo
              </span>
            </h2>
          </div>

          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center"
            >
              <i class="fas fa-bullseye text-primary mr-3"></i>
              Objetivo profissional
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Como Analista de Sistemas, especializo-me no desenvolvimento de
              aplicações web inovadoras e responsivas, utilizando tecnologias
              modernas como JavaScript, TypeScript, React, Vue.js e LIT. Minha
              atuação abrange desde a análise detalhada de requisitos e
              integração eficiente de APIs até a definição de arquiteturas
              robustas e otimização de performance e usabilidade. Com
              experiência prática em projetos reais, desenvolvi um sistema de
              cardápio digital interativo para a W Premium Lounge, elevando a
              experiência do usuário em ambientes premium. Atualmente, na 87
              Labs, foco no desenvolvimento de soluções integradas à plataforma
              Shopify, sempre priorizando qualidade técnica, inovação e entrega
              de valor sustentável ao negócio.
            </p>
            <ul
              class="space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
            >
              <li
                v-for="item in objectivePoints"
                :key="item"
                class="flex items-start"
              >
                <i class="fas fa-check-circle text-primary mr-2 mt-1"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center"
            >
              <i class="fas fa-compass text-primary mr-3"></i>
              Princípios operacionais
            </h3>
            <ul
              class="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
            >
              <li
                v-for="principle in principles"
                :key="principle"
                class="flex items-start"
              >
                <i class="fas fa-angle-right text-primary mr-2 mt-1"></i>
                <span>{{ principle }}</span>
              </li>
            </ul>
          </div>

          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center"
            >
              <i class="fas fa-graduation-cap text-primary mr-3"></i>
              Formação
            </h3>
            <div
              v-for="item in education"
              :key="item.id"
              class="mb-4 last:mb-0"
            >
              <p class="text-gray-900 dark:text-white font-semibold">
                {{ item.course }}
              </p>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ item.school }} • {{ item.period }}
              </p>
            </div>
          </div>

          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center"
            >
              <i class="fas fa-tools text-primary mr-3"></i>
              Tecnologias-chave
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in coreTechs"
                :key="tech"
                class="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div
          class="space-y-8"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div class="text-center lg:text-left">
            <h2
              class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Sobre
              <span
                class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
              >
                mim
              </span>
            </h2>
          </div>

          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div
              class="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              <p>
                Minha jornada como Analista de Sistemas começou com a paixão por
                criar soluções digitais que impactam o dia a dia das pessoas. Ao
                longo da minha carreira, desenvolvi aplicações web usando
                JavaScript, TypeScript, React e Vue.js, sempre focando em
                usabilidade e performance. Trabalhei em projetos como o sistema
                de cardápio para a W Premium Lounge e agora na 87 Labs,
                integrando soluções com Shopify.
              </p>
              <p>
                Além do trabalho profissional, criei o CodeMentor AI, uma
                plataforma inovadora de mentoria em programação que utiliza LLMs
                para oferecer aprendizado personalizado em tempo real via
                streaming SSE.
              </p>
            </div>
            <ul
              class="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              <li
                v-for="highlight in aboutHighlights"
                :key="highlight"
                class="flex items-start"
              >
                <i class="fas fa-star text-primary mr-2 mt-1"></i>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>

          <div
            class="relative bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-2xl p-8 shadow-xl border border-primary/20"
          >
            <div class="flex items-start justify-between">
              <div>
                <h3
                  class="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-2"
                >
                  <i class="fas fa-rocket text-primary mr-3"></i>
                  Projeto em destaque
                </h3>
                <h4
                  class="text-xl font-bold text-gray-900 dark:text-white mb-3"
                >
                  CodeMentor AI
                </h4>
              </div>
              <div class="flex space-x-3">
                <a
                  :href="project.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cta-link"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  :href="project.links.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cta-link"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <p
              class="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
            >
              {{ project.description }}
            </p>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <h5
                  class="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center"
                >
                  <i class="fas fa-check text-primary mr-2"></i>
                  Realizações
                </h5>
                <ul
                  class="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                >
                  <li v-for="item in project.highlights" :key="item">
                    • {{ item }}
                  </li>
                </ul>
              </div>
              <div>
                <h5
                  class="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center"
                >
                  <i class="fas fa-toolbox text-primary mr-2"></i>
                  Stack
                </h5>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.stack"
                    :key="tech"
                    class="px-3 py-1 bg-white/80 dark:bg-gray-900/60 text-primary text-xs sm:text-sm rounded-full border border-primary/20"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20 space-y-8" data-aos="fade-up" data-aos-delay="200">
      <div class="text-center space-y-4">
        <h3
          class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
        >
          <span
            class="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
          >
            Também sou
          </span>
          <span
            class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            músico! 🎵
          </span>
        </h3>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Confira minhas duas músicas no Spotify e mergulhe no meu mundo
          musical.
        </p>
      </div>

      <div
        class="bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-3xl border border-primary/20 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 max-w-6xl mx-auto"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          <div class="relative" data-aos="fade-up" data-aos-delay="250">
            <div
              class="absolute -inset-3 bg-gradient-to-r from-primary to-pink-500 rounded-2xl opacity-25 blur-xl"
            ></div>
            <div
              class="relative bg-black/10 dark:bg-black/20 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-primary/25"
            >
              <iframe
                data-testid="embed-iframe"
                style="border-radius: 12px"
                src="https://open.spotify.com/embed/track/7HdL53DrtK9p1zqc6JZ3XY?utm_source=generator"
                width="100%"
                height="200"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Track: Música 1"
                class="w-full rounded-2xl shadow-2xl"
              >
              </iframe>
            </div>
          </div>

          <div class="relative" data-aos="fade-up" data-aos-delay="350">
            <div
              class="absolute -inset-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-25 blur-xl"
            ></div>
            <div
              class="relative bg-black/10 dark:bg-black/20 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-pink-500/25"
            >
              <iframe
                data-testid="embed-iframe"
                style="border-radius: 12px"
                src="https://open.spotify.com/embed/track/3C4AUuNwYPjGQgyE7YhnGq?utm_source=generator"
                width="100%"
                height="480"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Track: Música 2"
                class="w-full rounded-2xl shadow-2xl"
              >
              </iframe>
            </div>
          </div>
        </div>

        <div class="mt-14 text-center" data-aos="fade-up" data-aos-delay="450">
          <div
            class="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10"
          >
            <a
              href="https://open.spotify.com/artist/0E7kdLTbivs01br4APOfRX?si=0x5VxA1BRW6UxG98zOUbUA"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-9 py-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25"
            >
              <i class="fab fa-spotify mr-3 text-xl"></i>
              <span class="font-semibold text-lg">Ouça mais no Spotify</span>
            </a>

            <div class="flex items-center space-x-5">
              <div
                class="w-5 h-5 bg-green-500 rounded-full animate-pulse"
              ></div>
              <div
                class="w-5 h-5 bg-primary rounded-full animate-pulse"
                style="animation-delay: 0.2s"
              ></div>
              <div
                class="w-5 h-5 bg-pink-500 rounded-full animate-pulse"
                style="animation-delay: 0.4s"
              ></div>
              <div
                class="w-5 h-5 bg-purple-500 rounded-full animate-pulse"
                style="animation-delay: 0.6s"
              ></div>
            </div>
          </div>

          <div class="mt-10 flex justify-center">
            <div
              class="bg-gray-100 dark:bg-gray-800 rounded-full px-7 py-3 border border-gray-200 dark:border-gray-700 shadow-inner"
            >
              <p
                class="text-sm text-gray-600 dark:text-gray-400 italic flex items-center"
              >
                <i class="fas fa-headphones mr-2 text-green-500"></i>
                Ouça com fones para uma experiência completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

const objectivePoints = ref([
  "Orquestrar pipelines GenAIOps com monitoramento de métricas e feedback contínuo.",
  "Desenhar arquiteturas multiagente que respeitam guardrails, privacy e compliance.",
  "Alavancar CI/CD para reduzir time-to-market mantendo qualidade e previsibilidade.",
]);

const principles = ref([
  "Colocar confiabilidade, segurança e custo sob medição desde o discovery.",
  "Mapear fluxos ponta-a-ponta para criar telemetria acionável e alertas inteligentes.",
  "Adotar ciclos curtos com documentação viva, testes automatizados e revisão orientada a dados.",
]);

const education = ref([
  {
    id: 1,
    course: "Análise e Desenvolvimento de Sistemas",
    school: "Faculdade Descomplica",
    period: "2024 - 2026",
  },
]);

const coreTechs = ref([
  "React",
  "Vue",
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "Linux",
  "Windows",
  "Office",
]);

const aboutHighlights = ref([
  "Integração de LLMs com arquiteturas RAG usando LangChain para sistemas inteligentes.",
  "Pipelines de dados para embeddings e orquestração de modelos em produção.",
  "APIs seguras com FastAPI, observabilidade via Grafana e conformidade com LGPD.",
]);

const project = ref({
  description:
    "Sistema de mentoria inteligente para ensino de lógica de programação com alta performance e UX otimizada.",
  highlights: [
    "SSE em tempo real",
    "CI/CD no Railway",
    "Validação Pydantic",
    "Containerização Docker",
  ],
  stack: [
    "Python 3.12",
    "SSE",
    "FastAPI",
    "Groq API",
    "Ollama",
    "Docker",
    "Vanilla JS",
    "Railway",
    "CI/CD",
  ],
  links: {
    github: "https://github.com/vibrazzi/code-mentor",
    demo: "https://code-mentor-production-4d2f.up.railway.app",
  },
});
</script>

<style scoped>
.cta-link {
  @apply w-10 h-10 rounded-lg bg-gray-900/80 dark:bg-gray-900 text-white flex items-center justify-center hover:bg-primary transition-all duration-300;
}
</style>
