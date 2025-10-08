<template>
  <footer class="relative bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black text-white overflow-hidden">
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border-t border-gray-800 dark:border-gray-700">
        <div class="py-12 lg:py-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="space-y-4">
              <div class="group cursor-pointer inline-block" @click="scrollToTop">
                <h3 class="text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:scale-105">
                  <span class="bg-gradient-to-r from-primary via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Webert
                  </span>
                  <span class="text-white"> Fernandes</span>
                </h3>
                <div class="h-0.5 w-0 bg-gradient-to-r from-primary to-pink-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                Desenvolvedor Front-End apaixonado por criar experiências digitais incríveis e interfaces que encantam.
              </p>
              <div class="flex items-center space-x-2 pt-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm text-gray-400">Disponível para novos projetos</span>
              </div>
            </div>

            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-white mb-4">Navegação Rápida</h4>
              <ul class="space-y-3">
                <li v-for="link in navLinks" :key="link.name">
                  <a
                    :href="link.href"
                    @click.prevent="scrollToSection(link.href)"
                    class="group flex items-center text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <i class="fas fa-chevron-right text-xs mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                    <span>{{ link.name }}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-white mb-4">Conecte-se</h4>
              <p class="text-gray-400 text-sm mb-4">
                Vamos criar algo incrível juntos!
              </p>
              <div class="flex space-x-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link group"
                  :aria-label="social.name"
                >
                  <i :class="social.icon" class="text-lg"></i>
                </a>
              </div>
              <div class="pt-4">
                <a
                  href="mailto:webertfernandes16@gmail.com"
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-pink-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  <i class="fas fa-envelope mr-2"></i>
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 dark:border-gray-700 py-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-gray-400 text-sm">
              © {{ currentYear }} Webert Fernandes. Todos os direitos reservados.
            </p>
            <div class="flex items-center space-x-6 text-sm text-gray-400">
              <span class="flex items-center">
                <i class="fas fa-code mr-2 text-primary"></i>
                Feito com Vue.js
              </span>
              <span class="flex items-center">
                <i class="fas fa-heart mr-2 text-pink-500 animate-pulse"></i>
                e muito café
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const navLinks = ref([
  { name: 'Serviços', href: '#services' },
  { name: 'Educação', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
])

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/vibrazzi',
    icon: 'fab fa-github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/webert-fernandes-2b6463253/',
    icon: 'fab fa-linkedin',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5534997926005',
    icon: 'fab fa-whatsapp',
  },
])

const currentYear = computed(() => new Date().getFullYear())

const scrollToSection = (href) => {
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.social-link {
  @apply w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-br;
}

.social-link:nth-child(1):hover {
  @apply from-gray-700 to-gray-800 shadow-lg shadow-gray-700/50;
}

.social-link:nth-child(2):hover {
  @apply from-blue-600 to-blue-700 shadow-lg shadow-blue-600/50;
}

.social-link:nth-child(3):hover {
  @apply from-green-500 to-green-600 shadow-lg shadow-green-500/50;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.social-link:hover {
  animation: float 2s ease-in-out infinite;
}
</style>