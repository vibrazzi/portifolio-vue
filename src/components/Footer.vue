<template>
  <footer class="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-10 transition-colors duration-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="text-center sm:text-left">
        <button
          type="button"
          @click="scrollToTop"
          class="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          Webert Fernandes
        </button>
        <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          © {{ currentYear }} · Engenheiro Web &amp; IA Generativa
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        <a
          href="https://github.com/vibrazzi"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary transition-colors duration-150 whitespace-nowrap"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/webert-fernandes-2b6463253/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary transition-colors duration-150 whitespace-nowrap"
        >
          LinkedIn
        </a>
        <a
          href="/curriculo_Webert_Dev.pdf"
          download="Curriculo_Webert_Fernandes.pdf"
          class="hover:text-primary transition-colors duration-150 whitespace-nowrap"
        >
          Currículo (PDF)
        </a>
        <a
          href="mailto:webertfernandes16@gmail.com"
          class="hover:text-primary transition-colors duration-150 whitespace-nowrap"
        >
          E-mail
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed<number>(() => new Date().getFullYear())

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
