<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
      <!-- Zone 1: Single-line Brand Wordmark -->
      <a
        href="#hero"
        @click.prevent="scrollToTop"
        class="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-primary transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        Webert Fernandes
      </a>

      <!-- Zone 2: Concise Single-Line Navigation Links -->
      <nav class="hidden md:flex items-center gap-7" aria-label="Navegação principal">
        <a
          v-for="item in menuItems"
          :key="item.target"
          :href="`#${item.target}`"
          @click.prevent="scrollToSection(item.target)"
          class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-primary hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Zone 3: Theme Toggle + Primary CV Action -->
      <div class="hidden md:flex items-center gap-3 shrink-0">
        <ThemeToggle />
        <a
          :href="resumeUrl"
          :download="resumeFilename"
          @click.prevent="downloadResume"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-white dark:text-zinc-950 hover:opacity-90 transition-opacity duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
        >
          <span>Currículo</span>
          <i class="fas fa-arrow-down text-xs" aria-hidden="true"></i>
        </a>
      </div>

      <!-- Mobile Controls -->
      <div class="md:hidden flex items-center gap-2 shrink-0">
        <ThemeToggle />
        <button
          type="button"
          class="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menu de navegação"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <Transition name="mobile-menu">
      <nav
        v-if="isMenuOpen"
        class="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 py-4"
        aria-label="Navegação mobile"
      >
        <ul class="space-y-1">
          <li v-for="item in menuItems" :key="item.target">
            <a
              :href="`#${item.target}`"
              @click.prevent="scrollToSection(item.target)"
              class="block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-primary transition-colors duration-150"
            >
              {{ item.name }}
            </a>
          </li>
          <li class="pt-2">
            <a
              :href="resumeUrl"
              :download="resumeFilename"
              @click.prevent="handleMobileResumeDownload"
              class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white dark:text-zinc-950 hover:opacity-90 transition-opacity duration-150"
            >
              <span>Baixar Currículo (PDF)</span>
              <i class="fas fa-arrow-down text-xs" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { useResumeDownload } from '@/composables/useResumeDownload'

interface MenuItem {
  name: string
  target: string
}

const menuItems: MenuItem[] = [
  { name: 'Sobre', target: 'about' },
  { name: 'Experiência', target: 'experience' },
  { name: 'Projetos', target: 'projects' },
  { name: 'Stack', target: 'skills' },
  { name: 'Contato', target: 'contact' },
]

const isMenuOpen = ref<boolean>(false)
const { resumeUrl, resumeFilename, downloadResume } = useResumeDownload()

const emit = defineEmits<{
  (e: 'scroll-to', sectionName: string): void
}>()

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleMobileResumeDownload = (): void => {
  isMenuOpen.value = false
  void downloadResume()
}

const scrollToSection = (sectionName: string): void => {
  isMenuOpen.value = false
  emit('scroll-to', sectionName)
}

const scrollToTop = (): void => {
  isMenuOpen.value = false
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
