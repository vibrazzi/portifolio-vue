<template>
  <section
    id="skills"
    class="py-20 lg:py-28 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="max-w-2xl scroll-reveal">
        <p class="text-xs font-mono uppercase tracking-wider text-primary mb-2">
          Capacidades Técnicas
        </p>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
          Stack Técnica Organizada
        </h2>
        <p class="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Tecnologias utilizadas no dia a dia para construir interfaces resilientes, widgets escaláveis e integrações com Inteligência Artificial.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="group in skillGroups"
          :key="group.id"
          class="scroll-reveal-card p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60 flex flex-col justify-between space-y-5"
        >
          <div class="space-y-3">
            <h3 class="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {{ group.category }}
            </h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {{ group.description }}
            </p>
          </div>

          <ul class="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
            <li
              v-for="item in group.items"
              :key="item"
              class="text-sm font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
            >
              <span class="text-primary text-xs" aria-hidden="true">›</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SkillGroups, type SkillGroup } from '@/data/skills'

const skillGroups: SkillGroup[] = SkillGroups
</script>

<style scoped>
.text-balance {
  text-wrap: balance;
}
</style>
