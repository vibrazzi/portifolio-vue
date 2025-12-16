<template>
  <Transition name="back-to-top">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 group bg-gradient-to-r from-primary to-pink-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 backdrop-blur-sm"
      aria-label="Voltar ao topo"
    >
      <svg
        class="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>

      <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
        <path
          class="text-white/20"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="text-white transition-all duration-300"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          :stroke-dasharray="`${scrollProgress}, 100`"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollProgress = ref(0)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  isVisible.value = scrollTop > 300

  scrollProgress.value = Math.min((scrollTop / docHeight) * 100, 100)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-to-top-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

@media (max-width: 640px) {
  button {
    bottom: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }

  .w-6 {
    width: 1.25rem;
  }

  .h-6 {
    height: 1.25rem;
  }
}

.dark button {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.dark button:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
</style>