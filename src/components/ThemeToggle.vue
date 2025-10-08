<template>
  <button
    @click="toggleTheme"
    class="theme-toggle-btn group relative p-3 rounded-xl transition-all duration-500 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg hover:shadow-xl"
    :class="isDark
      ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
      : 'bg-gradient-to-br from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200'"
    aria-label="Alternar tema"
  >
    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

    <Transition name="icon-fade" mode="out-in">
      <div v-if="!isDark" key="sun" class="relative z-10">
        <svg
          class="w-6 h-6 text-yellow-600 animate-spin-slow"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div v-else key="moon" class="relative z-10">
        <svg
          class="w-6 h-6 text-blue-200"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <div class="absolute top-1 right-1 w-1 h-1 bg-blue-100 rounded-full animate-twinkle"></div>
        <div class="absolute bottom-1 left-0 w-1 h-1 bg-blue-100 rounded-full animate-twinkle" style="animation-delay: 0.3s;"></div>
      </div>
    </Transition>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.theme-toggle-btn {
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}

.theme-toggle-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  padding: 1px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(236, 72, 153, 0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.theme-toggle-btn:hover::before {
  opacity: 1;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.8);
  }
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

.theme-toggle-btn:active {
  transform: scale(0.95);
}

@media (prefers-reduced-motion: reduce) {
  .animate-spin-slow,
  .animate-twinkle {
    animation: none;
  }

  .icon-fade-enter-active,
  .icon-fade-leave-active {
    transition-duration: 0.01ms;
  }
}
</style>