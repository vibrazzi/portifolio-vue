<template>
  <section class="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="projects">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Meus
          <span class="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(project, index) in Projects"
          :key="project.id"
          class="project-card group relative"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 200"
        >
          <div class="relative overflow-hidden rounded-2xl aspect-video mb-6 bg-gray-200 dark:bg-gray-800">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div class="flex space-x-4">
                <a
                  :href="project.webURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-btn bg-white text-gray-900 hover:bg-primary hover:text-white transform hover:scale-110"
                  aria-label="Ver projeto ao vivo"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <a
                  :href="project.gitURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-btn bg-gray-900 text-white hover:bg-gray-800 transform hover:scale-110"
                  aria-label="Ver código no GitHub"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                :href="project.webURL"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-primary to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <i class="fas fa-external-link-alt mr-2"></i>
                Ver Projeto
              </a>
              <a
                :href="project.gitURL"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <i class="fab fa-github mr-2"></i>
                Ver Código
              </a>
            </div>
          </div>

          <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm transform scale-105"></div>
        </div>
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

const Projects = ref([
  {
    id: 1,
    category: 'web development',
    image: '/SiteVinhos.png',
    title: 'Vitrine de Vinhos Premium',
    description:
      'Site desenvolvido com para exibir uma vitrine de vinhos da W Lounge Premium, combinando estética sofisticada com funcionalidade intuitiva.',
    technologies: ['Vue.js 3', 'Vuex', 'JavaScript', 'CSS3'],
    gitURL: 'https://github.com/vibrazzi/vitrine-vinhos',
    webURL: 'https://vitrine-vinhos.vercel.app/',
  },
  {
    id: 2,
    category: 'web development',
    image: '/TELALOGIN.png',
    title: 'Tela de Login React',
    description:
      'Interface moderna de autenticação desenvolvida com React, focando em experiência do usuário e design responsivo.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS3'],
    gitURL: 'https://github.com/vibrazzi/tela-React-Login',
    webURL: 'https://tela-react-login.vercel.app/',
  },
  {
    id: 3,
    category: 'web development',
    image: '/LOGINPAGE.png',
    title: 'Login Page Angular',
    description:
      'Página de login elegante e funcional desenvolvida com Angular, implementando boas práticas de TypeScript e design moderno.',
    technologies: ['Angular', 'SASS', 'TypeScript', 'Figma'],
    gitURL: 'https://github.com/vibrazzi/LoginPage',
    webURL: 'https://login-page-six-livid.vercel.app/login',
  },
])
</script>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(30px);
  animation: projectFadeIn 0.8s ease-out forwards;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.3s; }
.project-card:nth-child(3) { animation-delay: 0.5s; }

@keyframes projectFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-8px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.action-btn {
  @apply w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-300 shadow-lg;
}

.action-btn:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.filter-btn {
  position: relative;
  overflow: hidden;
}

.filter-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.filter-btn:hover::before {
  left: 100%;
}

.project-card span:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-card img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-card:hover span {
  animation: techTagFloat 0.6s ease-out forwards;
}

.project-card:hover span:nth-child(1) { animation-delay: 0.1s; }
.project-card:hover span:nth-child(2) { animation-delay: 0.2s; }
.project-card:hover span:nth-child(3) { animation-delay: 0.3s; }
.project-card:hover span:nth-child(4) { animation-delay: 0.4s; }
.project-card:hover span:nth-child(5) { animation-delay: 0.5s; }

@keyframes techTagFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

.project-card {
  will-change: transform, opacity;
}

@media (max-width: 640px) {
  .project-card {
    margin-bottom: 2rem;
  }

  .action-btn {
    @apply w-10 h-10 text-base;
  }

  .filter-btn {
    @apply px-4 py-2 text-sm;
  }
}

.project-card:hover .absolute.top-4.left-4 span {
  animation: badgePulse 1s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.project-card:hover .flex.gap-3 a {
  animation: buttonSlideUp 0.6s ease-out forwards;
}

.project-card:hover .flex.gap-3 a:first-child {
  animation-delay: 0.1s;
}

.project-card:hover .flex.gap-3 a:last-child {
  animation-delay: 0.2s;
}

@keyframes buttonSlideUp {
  from {
    opacity: 0.8;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dark .project-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 20px rgba(245, 158, 11, 0.1);
}

* {
  transition-property: color, background-color, border-color, transform, opacity, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.bg-gradient-to-r.from-primary\/10:hover {
  background: linear-gradient(45deg, rgba(245, 158, 11, 0.15), rgba(236, 72, 153, 0.15));
  transform: scale(1.02);
  transition: all 0.3s ease;
}
</style>
