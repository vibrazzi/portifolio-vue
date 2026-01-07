<template>
  <section
    class="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    id="services"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
        >
          Meus
          <span
            class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
          >
            Serviços
          </span>
        </h2>
        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Desenvolvimento de aplicações web modernas utilizando JavaScript,
          TypeScript, React e Vue.js, com foco em usabilidade, performance e
          integração com plataformas como Shopify e ServiceNow.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="service-card group relative"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 200"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"
          ></div>

          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
          ></div>

          <div class="relative p-6 sm:p-8 lg:p-10 h-full flex flex-col">
            <div class="relative mb-8">
              <div
                class="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              >
                <i :class="service.icon" class="text-3xl text-white"></i>
              </div>

              <div
                class="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-60 group-hover:scale-150 transition-all duration-500"
              ></div>
              <div
                class="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-500 rounded-full opacity-40 group-hover:scale-150 transition-all duration-700"
              ></div>
            </div>

            <div class="text-center flex-grow">
              <h3
                class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300"
              >
                {{ service.name }}
              </h3>
              <p
                class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
              >
                {{ service.description }}
              </p>

              <ul class="space-y-2 mb-8">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center justify-start text-sm text-gray-500 dark:text-gray-400"
                >
                  <svg
                    class="w-4 h-4 text-primary mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

interface Service {
  id: number;
  icon: string;
  name: string;
  description: string;
  features: string[];
}

const services = ref<Service[]>([
  {
    id: 1,
    icon: "fas fa-shopping-cart",
    name: "Desenvolvimento Front-End para E-commerce",
    description:
      "Desenvolvimento de aplicativos e sites para usuários Shopify e ServiceNow utilizando LIT, StoryBook, React, Liquid, JavaScript e TypeScript.",
    features: [
      "Criação de web components",
      "Integração com APIs e fluxos Shopify/ServiceNow",
      "Otimização de performance e usabilidade",
      "Interfaces responsivas",
    ],
  },
  {
    id: 2,
    icon: "fas fa-brain",
    name: "Desenvolvimento de Assistentes de IA",
    description:
      "Criação de assistentes inteligentes, utilizando FastAPI, Groq API e interfaces modernas para experiências interativas.",
    features: [
      "Integração com APIs de IA (Groq, Ollama)",
      "Respostas rápidas e estruturadas",
      "Interfaces de chat responsivas",
      "Deploy e otimização para produção",
    ],
  },
  {
    id: 3,
    icon: "fas fa-plug",
    name: "Integração e Consumo de APIs",
    description:
      "Integração de APIs REST, consumo de dados, autenticação e manipulação de estados com JavaScript, TypeScript, React e Vue.js.",
    features: [
      "Consumo de APIs REST e GraphQL",
      "Gerenciamento de autenticação e tokens",
      "Manipulação de estados e dados",
      "Otimização de requisições e performance",
    ],
  },
]);
</script>

<style scoped>
.service-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px);
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.service-card:hover .absolute.inset-0.bg-gradient-to-br {
  animation: gradient-shift 3s ease infinite;
  background-size: 200% 200%;
}

.service-card:hover .fa-brain,
.service-card:hover .fa-layer-group,
.service-card:hover .fa-cloud {
  animation: code-bounce 1s ease-in-out infinite alternate;
}

.service-card:hover .fa-paint-brush {
  animation: brush-rotate 2s linear infinite;
}

.service-card:hover .fa-plug {
  animation: plug-glow 1.5s ease-in-out infinite alternate;
}

.service-card:hover .fa-rocket {
  animation: rocket-fly 1s ease-in-out infinite alternate;
}

@keyframes code-bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
}

@keyframes server-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes mobile-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}

@keyframes brush-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes plug-glow {
  from {
    filter: brightness(1);
  }
  to {
    filter: brightness(1.3) drop-shadow(0 0 10px rgba(245, 158, 11, 0.5));
  }
}

@keyframes rocket-fly {
  from {
    transform: translateY(0) rotate(-5deg);
  }
  to {
    transform: translateY(-8px) rotate(5deg);
  }
}

.service-card:hover ul li {
  animation: feature-appear 0.6s ease-out forwards;
}

.service-card:hover ul li:nth-child(1) {
  animation-delay: 0.1s;
}
.service-card:hover ul li:nth-child(2) {
  animation-delay: 0.2s;
}
.service-card:hover ul li:nth-child(3) {
  animation-delay: 0.3s;
}
.service-card:hover ul li:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes feature-appear {
  from {
    opacity: 0.6;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .service-card {
    margin-bottom: 1rem;
  }

  .service-card:hover {
    transform: translateY(-4px);
  }
}

.stats-container .group:hover .text-3xl {
  background: linear-gradient(
    45deg,
    theme("colors.primary"),
    theme("colors.pink.500")
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .service-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(245, 158, 11, 0.1);
}

button:hover svg {
  transform: translateX(4px);
}

.service-card {
  opacity: 0;
  animation: card-load 0.8s ease-out forwards;
}

.service-card:nth-child(1) {
  animation-delay: 0.1s;
}
.service-card:nth-child(2) {
  animation-delay: 0.2s;
}
.service-card:nth-child(3) {
  animation-delay: 0.3s;
}
.service-card:nth-child(4) {
  animation-delay: 0.4s;
}
.service-card:nth-child(5) {
  animation-delay: 0.5s;
}
.service-card:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes card-load {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
