<template>
  <section
    class="relative py-20 lg:py-32 bg-gray-900 dark:bg-gray-950 transition-colors duration-300"
    id="skills"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 xl:gap-20">
        <div class="space-y-8" data-aos="fade-right">
          <div class="text-center lg:text-left">
            <h2 class="text-4xl sm:text-5xl font-bold text-white mb-8">
              Habilidades
              <span
                class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
              >
                Técnicas
              </span>
            </h2>
          </div>

          <div class="space-y-8">
            <div
              v-for="(skill, index) in Skills"
              :key="skill.id"
              class="skill-item"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
            >
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-primary to-pink-500 rounded-lg flex items-center justify-center"
                  >
                    <i :class="skill.icon" class="text-white text-lg"></i>
                  </div>
                  <h4 class="text-lg font-semibold text-white">
                    {{ skill.name }}
                  </h4>
                </div>
                <span class="text-primary font-bold text-lg">{{
                  skill.width
                }}</span>
              </div>

              <div class="relative">
                <div
                  class="h-3 bg-gray-800 dark:bg-gray-700 rounded-full overflow-hidden"
                >
                  <div
                    class="h-full bg-gradient-to-r from-primary to-pink-500 rounded-full transition-all duration-1000 ease-out skill-progress"
                    :style="{ width: '0%' }"
                    :data-width="skill.width"
                  ></div>
                </div>

                <div
                  class="absolute top-1/2 transform -translate-y-1/2 w-full h-full pointer-events-none"
                >
                  <div
                    class="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                    :style="{
                      left: skill.width,
                      transform: 'translateX(-50%) translateY(-50%)',
                    }"
                  ></div>
                </div>
              </div>

              <p class="text-gray-400 text-sm mt-2">
                {{ skill.description }}
              </p>
            </div>
          </div>

          <div class="pt-8" data-aos="fade-up" data-aos-delay="600">
            <h4 class="text-white font-semibold mb-4">Outras Tecnologias:</h4>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in additionalTechs"
                :key="tech"
                class="px-3 py-2 bg-gray-800 dark:bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-8" data-aos="fade-left" data-aos-delay="200">
          <div class="text-center lg:text-left">
            <h2 class="text-4xl sm:text-5xl font-bold text-white mb-8">
              Experiências
            </h2>
          </div>

          <div class="relative">
            <div
              class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-pink-500"
            ></div>

            <div class="space-y-8">
              <div
                v-for="(experience, index) in Experiences"
                :key="experience.id"
                class="experience-card relative group"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 200"
              >
                <div
                  class="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-primary to-pink-500 rounded-full border-4 border-gray-900 dark:border-gray-950 shadow-lg group-hover:scale-125 transition-transform duration-300"
                ></div>

                <div
                  class="ml-16 bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-700 group-hover:border-primary/30 transform group-hover:-translate-y-1"
                >
                  <div class="flex items-start space-x-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    >
                      <i
                        :class="experience.iconClass"
                        class="text-white text-xl"
                      ></i>
                    </div>

                    <div class="flex-1 min-w-0">
                      <h3
                        class="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300"
                      >
                        {{ experience.role }}
                      </h3>
                      <p class="text-gray-300 font-medium mb-2">
                        {{ experience.company }}
                      </p>
                      <div class="flex items-center text-sm text-gray-400 mb-3">
                        <i class="far fa-calendar-alt mr-2"></i>
                        {{ experience.date }}
                      </div>

              <p v-if="experience.description" class="text-gray-400 text-sm leading-relaxed">
                {{ experience.description }}
              </p>

              <ul
                v-if="experience.highlights && experience.highlights.length"
                class="mt-3 space-y-2 text-gray-400 text-sm leading-relaxed"
              >
                <li v-for="item in experience.highlights" :key="item" class="flex items-start">
                  <i class="fas fa-circle text-primary text-[0.45rem] mr-2 mt-1.5"></i>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="skill in experience.skills"
                  :key="skill"
                          class="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute inset-0 bg-gradient-to-r from-primary/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

const Skills = ref([
  {
    id: 1,
    name: "IA Generativa & MLOps",
    width: "95%",
    icon: "fas fa-brain",
    description: "Pipelines GenAIOps, guardrails, monitoramento e avaliação contínua.",
  },
  {
    id: 2,
    name: "Desenvolvimento Full Stack",
    width: "92%",
    icon: "fas fa-layer-group",
    description: "Shopify apps, React, Vue 3, Node/FastAPI e integrações de parceiros.",
  },
  {
    id: 3,
    name: "Cloud & DevOps",
    width: "88%",
    icon: "fas fa-cloud",
    description: "CI/CD GitHub Actions, Docker, SRE, métricas e observabilidade end-to-end.",
  },
  {
    id: 4,
    name: "Python & FastAPI",
    width: "90%",
    icon: "fab fa-python",
    description: "APIs performáticas, validações Pydantic, streaming SSE e automação.",
  },
  {
    id: 5,
    name: "React & Vue.js",
    width: "85%",
    icon: "fab fa-vuejs",
    description: "Componentização, SSR, design systems e UX responsiva orientada a dados.",
  },
]);

const Experiences = ref([
  {
    id: 1,
    role: "Desenvolvedor Full Stack",
    company: "87 Labs",
    date: "Jul 2025 - Presente",
    iconClass: "fas fa-laptop-code",
    highlights: [
      "Construção end-to-end de apps Shopify cobrindo storefront, backend Node/Go e integrações com parceiros.",
      "Componentes com LIT, React, Liquid e JavaScript conectados a APIs REST/GraphQL e automações serverless.",
      "Arquitetura full stack observável com métricas, logs e automações de alerta em tempo real.",
      "Otimização contínua de performance e UX responsiva alinhada a SEO e objetivos comerciais.",
    ],
    skills: ["React", "LIT", "Node.js", "Go", "Shopify", "CI/CD"],
  },
  {
    id: 2,
    role: "Desenvolvedor Full Stack",
    company: "W Premium Lounge",
    date: "Jan 2024 - Mai 2025",
    iconClass: "fas fa-code",
    highlights: [
      "Delivery de UI com Vue 3, Vuex e componentes reutilizáveis integrados a APIs Express/Node e FastAPI.",
      "Criação de vitrine de vinhos com UX interativa e recomendações personalizadas a partir de dados de clientes.",
      "Pipelines full stack monitorando usabilidade, performance e acessibilidade com inspeções recorrentes.",
      "Manutenção de infraestrutura Docker/CI e gestão de ambientes com banco de dados gerenciado.",
    ],
    skills: ["Vue 3", "Vuex", "FastAPI", "Express", "Docker", "UX"],
  },
]);

const additionalTechs = ref([
  "LLMs",
  "Arquitetura Multiagente",
  "TypeScript",
  "JavaScript",
  "Docker",
  "Railway",
  "Groq API",
  "Ollama",
  "CI/CD",
  "REST APIs",
  "Git",
]);

onMounted(() => {
  setTimeout(() => {
    const progressBars = document.querySelectorAll(".skill-progress");
    for (const bar of progressBars) {
      const width = bar.dataset.width;
      bar.style.width = width;
    }
  }, 500);
});
</script>

<style scoped>
/* Skill progress animation */
.skill-progress {
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Skill item animations */
.skill-item {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInSkill 0.8s ease-out forwards;
}

.skill-item:nth-child(1) {
  animation-delay: 0.1s;
}
.skill-item:nth-child(2) {
  animation-delay: 0.2s;
}
.skill-item:nth-child(3) {
  animation-delay: 0.3s;
}
.skill-item:nth-child(4) {
  animation-delay: 0.4s;
}
.skill-item:nth-child(5) {
  animation-delay: 0.5s;
}

@keyframes slideInSkill {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Experience card animations */
.experience-card {
  opacity: 0;
  transform: translateY(30px);
  animation: slideInExperience 0.8s ease-out forwards;
}

.experience-card:nth-child(1) {
  animation-delay: 0.2s;
}
.experience-card:nth-child(2) {
  animation-delay: 0.4s;
}
.experience-card:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes slideInExperience {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Icon hover animations */
.skill-item:hover .fa-brain {
  animation: htmlBounce 0.6s ease-in-out;
}

.skill-item:hover .fa-layer-group {
  animation: reactSpin 1s ease-in-out;
}

.skill-item:hover .fa-cloud {
  animation: jsPulse 0.8s ease-in-out;
}

.skill-item:hover .fa-python {
  animation: codeBlink 1s ease-in-out;
}

.skill-item:hover .fa-vuejs {
  animation: vueShake 0.5s ease-in-out;
}

@keyframes htmlBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes reactSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes jsPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes codeBlink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes vueShake {
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

/* Experience icon animations */
.experience-card:hover .fa-code {
  animation: codeFlow 1.5s ease-in-out infinite;
}

.experience-card:hover .fa-wine-glass-alt {
  animation: wineSwirl 2s ease-in-out infinite;
}

.experience-card:hover .fa-headset {
  animation: headsetGlow 1s ease-in-out infinite alternate;
}

@keyframes codeFlow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes wineSwirl {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

@keyframes headsetGlow {
  from {
    filter: brightness(1);
  }
  to {
    filter: brightness(1.3) drop-shadow(0 0 8px rgba(245, 158, 11, 0.5));
  }
}

/* Additional tech badges animation */
.additional-techs span {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInTech 0.6s ease-out forwards;
}

.additional-techs span:nth-child(1) {
  animation-delay: 0.1s;
}
.additional-techs span:nth-child(2) {
  animation-delay: 0.2s;
}
.additional-techs span:nth-child(3) {
  animation-delay: 0.3s;
}
.additional-techs span:nth-child(4) {
  animation-delay: 0.4s;
}
.additional-techs span:nth-child(5) {
  animation-delay: 0.5s;
}
.additional-techs span:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes fadeInTech {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Progress bar glow effect */
.skill-progress {
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
}
@media (max-width: 1024px) {
  .experience-card .ml-16 {
    margin-left: 0;
  }

  .absolute.left-8 {
    display: none;
  }
}

@media (max-width: 640px) {
  .experience-card .absolute.left-6 {
    left: 1rem;
  }

  .experience-card .ml-16 {
    margin-left: 3rem;
  }
}

/* Dark mode specific enhancements */
.dark .experience-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(245, 158, 11, 0.1);
}

/* Timeline line glow */
.absolute.w-0\.5 {
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
}

/* Loading states */
.skill-item,
.experience-card {
  will-change: transform, opacity;
}
</style>
