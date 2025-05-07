<template>
  <div class="bg-[#111827] min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ExperienceAndSkills />
          <LatestProjSection />
          <ContactSection />
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

// Importação assíncrona dos componentes para melhorar o desempenho
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'));
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));

// Importação do componente de carregamento
import loadingSpinner from './components/loadingSpinner.vue';
</script>

<style>
/* Estilização global para personalizar a barra de rolagem */
* {
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}

/* Adicione estilos personalizados aqui, se necessário */
</style>
