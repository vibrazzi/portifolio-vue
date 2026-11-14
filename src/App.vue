<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-200">
    <Suspense>
      <template #default>
        <div>
          <NavBar @scroll-to="handleScroll" />
          <main>
            <HeroSection ref="heroRef" />
            <AboutSection ref="aboutRef" />
            <LatestProjSection ref="projectsRef" />
            <ExperienceAndSkills ref="skillsRef" />
            <ContactSection ref="contactRef" />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-zinc-950">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, type ComponentPublicInstance } from 'vue'
import loadingSpinner from './components/loadingSpinner.vue'

const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'))
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'))
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'))

const heroRef = ref<ComponentPublicInstance | null>(null)
const aboutRef = ref<ComponentPublicInstance | null>(null)
const projectsRef = ref<ComponentPublicInstance | null>(null)
const skillsRef = ref<ComponentPublicInstance | null>(null)
const contactRef = ref<ComponentPublicInstance | null>(null)

interface ScrollableTarget {
  scrollIntoView?: (options?: { behavior?: 'smooth' | 'auto' }) => void
}

const handleScroll = (sectionName: string) => {
  if (sectionName === 'experience') {
    const experienceEl = document.getElementById('experience')
    if (experienceEl) {
      experienceEl.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }

  const sectionRefs: Record<string, typeof aboutRef> = {
    about: aboutRef,
    projects: projectsRef,
    skills: skillsRef,
    contact: contactRef,
  }

  const targetRef = sectionRefs[sectionName]
  if (targetRef && targetRef.value) {
    const el = (targetRef.value.$el || targetRef.value) as ScrollableTarget
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style>
:root {
  --scrollbar-width: 8px;
  --scrollbar-track: #f4f4f5;
  --scrollbar-thumb: #d4d4d8;
  --scrollbar-thumb-hover: #a1a1aa;
  --color-primary: 30 58 138;      /* #1e3a8a */
  --color-secondary: 37 99 235;    /* #2563eb */
}

.dark {
  --scrollbar-track: #09090b;
  --scrollbar-thumb: #27272a;
  --scrollbar-thumb-hover: #3f3f46;
  --color-primary: 192 132 252;    /* #c084fc */
  --color-secondary: 168 85 247;   /* #a855f7 */
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

::-webkit-scrollbar {
  width: var(--scrollbar-width);
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 84px;
}

::selection {
  background: rgb(var(--color-primary) / 0.2);
}
</style>
