<template>
  <div class="bg-gray-900 dark:bg-gray-950 min-h-screen transition-colors duration-300">
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <main>
            <HeroSection />
            <CodeMentorSection />
            <ServicesSection />
            <AboutSection />
            <ExperienceAndSkills />
            <LatestProjSection />
            <ContactSection />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen bg-gray-900 dark:bg-gray-950">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue'

const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const CodeMentorSection = defineAsyncComponent(() => import('@/components/CodeMentorSection.vue'))
const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'))
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'))
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'))
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'))

import loadingSpinner from './components/loadingSpinner.vue'

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style>
:root {
  --scrollbar-width: 8px;
  --scrollbar-track: #1f2937;
  --scrollbar-thumb: #374151;
  --scrollbar-thumb-hover: #4b5563;
}

.dark {
  --scrollbar-track: #0f1419;
  --scrollbar-thumb: #2d3748;
  --scrollbar-thumb-hover: #4a5568;
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
  transition: background-color 0.2s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}

html {
  scroll-behavior: smooth;
}

body {
  transition: background-color 0.3s ease, color 0.3s ease;
}

::selection {
  background: rgba(245, 158, 11, 0.3);
  color: #ffffff;
}

.dark ::selection {
  background: rgba(245, 158, 11, 0.4);
  color: #ffffff;
}
</style>
