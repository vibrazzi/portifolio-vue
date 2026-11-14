<template>
  <section
    id="hero"
    class="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- Left Column: Core Positioning & High-Visibility Recruiter Actions -->
        <div class="lg:col-span-7 space-y-6">
          <p class="text-xs sm:text-sm font-mono text-primary font-medium">
            Engenheiro Web
          </p>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08] text-balance">
            Construo interfaces escaláveis e soluções web com <span class="text-primary">IA Generativa</span>.
          </h1>

          <p class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            Sou <strong class="font-semibold text-zinc-900 dark:text-zinc-100">Webert Fernandes</strong>. Atuo na modernização de arquiteturas legadas, desenvolvimento de aplicações React/TypeScript e integração de fluxos inteligentes com Python e LLMs em produção.
          </p>

          <!-- Primary & Secondary Action Bar -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/assets/aistudio/Profile_8cea226e.pdf"
              download="Curriculo_Webert_Fernandes"
              class="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold bg-primary text-white dark:text-zinc-950 hover:opacity-90 transition-opacity duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
            >
              <i class="fas fa-file-arrow-down text-sm" aria-hidden="true"></i>
              <span>Baixar Currículo</span>
            </a>

            <a
              href="https://github.com/vibrazzi"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <i class="fab fa-github text-base" aria-hidden="true"></i>
              <span>GitHub</span>
              <i class="fas fa-arrow-up-right-from-square text-[11px] opacity-60" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/webert-fernandes-2b6463253/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-primary dark:hover:border-primary hover:text-primary transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <i class="fab fa-linkedin text-base" aria-hidden="true"></i>
              <span>LinkedIn</span>
              <i class="fas fa-arrow-up-right-from-square text-[11px] opacity-60" aria-hidden="true"></i>
            </a>
          </div>

          <!-- Clean Unboxed Core Stack Line -->
          <div class="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <p class="text-xs font-mono text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Stack principal:
              <span class="text-zinc-800 dark:text-zinc-200">
                React · TypeScript · JavaScript · Python · Shopify · Lit · ServiceNow · IA Generativa
              </span>
            </p>
          </div>
        </div>

        <!-- Right Column: Clean Editorial Portrait -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="w-full max-w-sm">
            <div class="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900">
              <img
                v-if="!imageError"
                src="@/assets/fotoo.jpg"
                alt="Retrato profissional de Webert Fernandes, Engenheiro Web"
                class="w-full h-full object-cover object-center"
                loading="eager"
                fetchpriority="high"
                referrerPolicy="no-referrer"
                @error="imageError = true"
              />
              <div
                v-else
                class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-100 dark:bg-zinc-900"
              >
                <span class="text-3xl font-bold text-primary">WF</span>
                <span class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Webert Fernandes</span>
              </div>
            </div>
            <div class="mt-3 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 px-1">
              <span>ADS · Descomplica (2024–2026)</span>
              <span>Brasil · Remoto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imageError = ref<boolean>(false)
</script>

<style scoped>
.text-balance {
  text-wrap: balance;
}
</style>
