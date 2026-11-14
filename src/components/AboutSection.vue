<template>
  <section
    id="about"
    class="py-20 lg:py-28 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left Column: Concise About & Education -->
        <div class="lg:col-span-5 space-y-6 scroll-reveal">
          <div>
            <p class="text-xs font-mono uppercase tracking-wider text-primary mb-2">
              Perfil
            </p>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
              Foco em engenharia limpa, produto e IA aplicada.
            </h2>
          </div>

          <div class="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              Engenheiro Web com atuação prática em ambientes de alta demanda, combinando arquitetura modular de interfaces, integração com APIs, refatoração de sistemas legados e aplicação de modelos de Linguagem (LLMs) em fluxos reais de negócio.
            </p>
            <p>
              Tenho experiência tanto no ecossistema de e-commerce global (Shopify, Lit, Liquid) quanto em plataformas corporativas de Travel Tech, sempre priorizando legibilidade de código, performance e impacto mensurável no produto.
            </p>
          </div>

          <!-- Compact Education Block -->
          <div class="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
            <p class="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Formação Acadêmica
            </p>
            <p class="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Análise e Desenvolvimento de Sistemas
            </p>
            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
              Faculdade Descomplica · 2024 – 2026
            </p>
          </div>
        </div>

        <!-- Right Column: Professional Experience -->
        <div id="experience" class="lg:col-span-7 space-y-6 scroll-reveal">
          <div>
            <p class="text-xs font-mono uppercase tracking-wider text-primary mb-2">
              Trajetória
            </p>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Experiência Profissional
            </h2>
          </div>

          <div class="space-y-6">
            <article
              v-for="experience in experiences"
              :key="experience.id"
              class="scroll-reveal-card p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200"
            >
              <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {{ experience.role }}
                  </h3>
                  <p class="text-sm font-medium text-primary">
                    {{ experience.company }}
                  </p>
                </div>
                <span class="text-xs font-mono tabular-nums text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  {{ experience.date }}
                </span>
              </div>

              <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {{ experience.summary }}
              </p>

              <ul class="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li
                  v-for="item in experience.highlights"
                  :key="item"
                  class="flex items-start gap-2.5"
                >
                  <span class="text-primary mt-1 text-xs" aria-hidden="true">—</span>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {{ experience.stack.join(' · ') }}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Experiences, type Experience } from '@/data/experiences'

const experiences: Experience[] = Experiences
</script>

<style scoped>
.text-balance {
  text-wrap: balance;
}
</style>
