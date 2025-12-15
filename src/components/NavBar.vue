<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200/20 dark:border-white/10 transition-all duration-500 ease-in-out"
  >
    <div
      class="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-7xl mx-auto"
    >
      <button
        class="group cursor-pointer"
        @click="scrollToTop"
        aria-label="Ir para o topo da página"
      >
        <div class="relative">
          <h1
            class="text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-300 group-hover:scale-105"
          >
            <span
              class="bg-gradient-to-r m-0 from-primary via-pink-500 to-purple-600 bg-clip-text text-transparent"
            >
              Portifólio
            </span>
          </h1>
          <div
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-pink-500 transition-all duration-500 group-hover:w-full"
          ></div>
        </div>
      </button>

      <nav class="hidden md:flex items-center space-x-1">
        <ul class="flex items-center space-x-1">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="relative px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
              @click="scrollToSection(item.href)"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"
              ></div>
            </a>
          </li>
        </ul>

        <div class="ml-6 pl-6 border-l border-gray-200 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </nav>

      <div class="md:hidden flex items-center space-x-3">
        <ThemeToggle />

        <button
          type="button"
          class="relative p-3 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 focus:outline-none transition-all duration-300 hover:scale-110 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Menu de navegação"
        >
          <div class="w-5 h-5 relative">
            <span
              class="absolute block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300"
              :class="isMenuOpen ? 'rotate-45 translate-y-0 top-2' : 'top-1'"
            ></span>
            <span
              class="absolute block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300 top-2"
              :class="
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              "
            ></span>
            <span
              class="absolute block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300"
              :class="isMenuOpen ? '-rotate-45 translate-y-0 top-2' : 'top-3'"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <Transition name="mobile-menu">
      <nav
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white/85 dark:bg-black/85 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10 shadow-xl"
      >
        <div class="px-4 py-6 max-w-7xl mx-auto">
          <ul class="space-y-2">
            <li v-for="(item, index) in Menu" :key="item.name">
              <a
                :href="item.href"
                class="group flex items-center px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transform hover:translate-x-2"
                :style="{ animationDelay: `${index * 0.1}s` }"
                @click="scrollToSection(item.href)"
              >
                <div
                  class="w-2 h-2 bg-gradient-to-r from-primary to-pink-500 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300"
                ></div>
                <span>{{ item.name }}</span>
                <div
                  class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

const Menu = ref([
  { name: "Serviços", href: "#services" },
  { name: "Educação", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
]);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    const offsetTop = section.offsetTop - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

.backdrop-blur-xl {
  backdrop-filter: blur(24px);
}

.group:hover .group-hover\:w-full {
  width: 100%;
}

header {
  border-bottom: 1px solid transparent;
}

@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0)) {
  .backdrop-blur-md {
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }

  .backdrop-blur-xl {
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
  }
}

.nav-item-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-menu nav ul li {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.mobile-menu nav ul li:nth-child(1) {
  animation-delay: 0.1s;
}
.mobile-menu nav ul li:nth-child(2) {
  animation-delay: 0.2s;
}
.mobile-menu nav ul li:nth-child(3) {
  animation-delay: 0.3s;
}
.mobile-menu nav ul li:nth-child(4) {
  animation-delay: 0.4s;
}
.mobile-menu nav ul li:nth-child(5) {
  animation-delay: 0.5s;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
