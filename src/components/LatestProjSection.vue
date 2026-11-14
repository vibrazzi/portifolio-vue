<template>
  <section
    id="projects"
    class="py-20 lg:py-28 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="max-w-2xl scroll-reveal">
        <p class="text-xs font-mono uppercase tracking-wider text-primary mb-2">
          Projetos em que trabalhei
        </p>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
          Projetos em Destaque
        </h2>
        <p class="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Soluções desenvolvidas com foco em arquitetura limpa, performance em produção e aplicações reais de Inteligência Artificial e E-commerce.
        </p>
      </div>

      <!-- Unified Symmetrical Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.id"
          class="scroll-reveal-card group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-primary/60 dark:hover:border-primary/60 flex flex-col justify-between transition-colors duration-200"
        >
          <div class="flex-1 flex flex-col">
            <!-- Unified Media Header (aspect-video) -->
            <div
              v-if="project.image && !imageErrors[project.id]"
              class="aspect-video bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden relative"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
                @error="imageErrors[project.id] = true"
              />
            </div>

            <div
              v-else
              class="aspect-video bg-zinc-100/80 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between"
            >
              <div class="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>&lt;shopify-reviews-widget /&gt;</span>
                <span>Lit · Liquid</span>
              </div>
              <div class="space-y-1.5 my-auto">
                <p class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Web Components &amp; Theme App Extension
                </p>
                <p class="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Shadow DOM isolado · Storefront de alta performance
                </p>
              </div>
              <div class="text-xs font-mono text-primary">
                87Labs · Ecossistema Shopify
              </div>
            </div>

            <!-- Unified Card Body -->
            <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div class="space-y-4">
                <div>
                  <p class="text-xs font-mono text-primary mb-1.5">
                    {{ project.category }}
                  </p>
                  <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-primary transition-colors duration-150">
                    {{ project.title }}
                  </h3>
                  <p class="mt-1 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {{ project.subtitle }}
                  </p>
                </div>

                <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {{ project.description }}
                </p>

                <ul class="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li
                    v-for="highlight in project.highlights"
                    :key="highlight"
                    class="flex items-start gap-2"
                  >
                    <span class="text-primary text-xs mt-1 shrink-0" aria-hidden="true">—</span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <!-- Unboxed Clean Stack Line -->
              <div class="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {{ project.technologies.join(' · ') }}
              </div>
            </div>
          </div>

          <!-- Standardized Card Footer -->
          <div class="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-950/40">
            <template v-if="project.webURL || project.gitURL">
              <div class="flex items-center gap-4">
                <a
                  v-if="project.gitURL"
                  :href="project.gitURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors duration-150 whitespace-nowrap"
                >
                  <i class="fab fa-github text-sm" aria-hidden="true"></i>
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  v-if="project.webURL"
                  :href="project.webURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity duration-150 whitespace-nowrap"
                >
                  <span>Live Demo</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <button
                v-if="project.embedURL"
                type="button"
                @click="openDemoModal(project)"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-primary text-white dark:text-zinc-950 hover:opacity-90 transition-opacity duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <i class="fas fa-play text-[10px]" aria-hidden="true"></i>
                <span>Testar Aqui</span>
              </button>
            </template>

            <span v-else class="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {{ project.contextNote }}
            </span>
          </div>
        </article>
      </div>
    </div>

    <!-- Accessible Interactive Live Demo Modal with @starting-style -->
    <div
      v-if="activeDemoProject"
      class="demo-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="`Live Demo — ${activeDemoProject.title}`"
      @click.self="closeDemoModal"
    >
      <div class="demo-modal-panel w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col">
        <div class="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
              {{ activeDemoProject.title }} — Live Demo
            </p>
            <p class="text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate">
              {{ activeDemoProject.embedURL }}
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <a
              v-if="activeDemoProject.webURL"
              :href="activeDemoProject.webURL"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3 py-1.5 rounded-md text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
            >
              Abrir em nova aba ↗
            </a>
            <button
              type="button"
              @click="closeDemoModal"
              class="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Fechar demo"
            >
              ✕
            </button>
          </div>
        </div>

        <div class="relative flex-1 bg-zinc-100 dark:bg-zinc-950">
          <div
            v-if="iframeLoading"
            class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-zinc-50 dark:bg-zinc-950"
          >
            <div class="w-8 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 border-t-primary animate-spin mb-3"></div>
            <p class="text-xs font-mono text-zinc-600 dark:text-zinc-400">
              Conectando à aplicação ao vivo...
            </p>
          </div>
          <iframe
            v-if="activeDemoProject.embedURL"
            :src="activeDemoProject.embedURL"
            :title="`${activeDemoProject.title} — Live Demo`"
            class="w-full h-full border-0 bg-white"
            allow="clipboard-write"
            @load="iframeLoading = false"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { Projects, type Project } from '@/data/projects'

const projects: Project[] = Projects
const imageErrors = reactive<Record<number, boolean>>({})
const activeDemoProject = ref<Project | null>(null)
const iframeLoading = ref<boolean>(true)

const openDemoModal = (project: Project): void => {
  iframeLoading.value = true
  activeDemoProject.value = project
}

const closeDemoModal = (): void => {
  activeDemoProject.value = null
}

const handleKeyDown = (event: { key: string }): void => {
  if (event.key === 'Escape' && activeDemoProject.value) {
    closeDemoModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.text-balance {
  text-wrap: balance;
}

.demo-modal-backdrop {
  opacity: 1;
  transition: opacity 0.2s ease-out;
}

.demo-modal-panel {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

@starting-style {
  .demo-modal-backdrop {
    opacity: 0;
  }

  .demo-modal-panel {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
}
</style>
