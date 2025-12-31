<template>
  <div class="loading-container">
    <div class="loading-content">
      <div class="relative">
        <div class="spinner-ring"></div>
        <div class="spinner-ring delay-1"></div>
        <div class="spinner-ring delay-2"></div>

        <div class="spinner-center">
          <svg class="w-8 h-8 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.loading-container {
  @apply fixed inset-0 bg-gray-900 dark:bg-gray-950 flex items-center justify-center z-50;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

.loading-content {
  @apply text-center space-y-6;
  animation: fadeIn 0.5s ease-in-out;
}

.spinner-ring {
  @apply absolute inset-0 rounded-full border-2 border-transparent;
  width: 80px;
  height: 80px;
  border-top-color: theme('colors.primary');
  animation: spin 2s linear infinite;
}

.spinner-ring.delay-1 {
  animation-delay: -0.4s;
  border-top-color: theme('colors.pink.500');
  transform: scale(0.8);
}

.spinner-ring.delay-2 {
  animation-delay: -0.8s;
  border-top-color: theme('colors.purple.500');
  transform: scale(0.6);
}

.spinner-center {
  @apply absolute inset-0 flex items-center justify-center;
  width: 80px;
  height: 80px;
}

.loading-text {
  @apply text-white text-lg font-medium;
}

.loading-dots::after {
  content: '';
  animation: dots 1.5s steps(4, end) infinite;
}

.progress-bar {
  @apply w-48 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto;
}

.progress-fill {
  @apply h-full bg-gradient-to-r from-primary to-pink-500 rounded-full;
  animation: progress 2s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dots {
  0%, 20% {
    content: '';
  }
  40% {
    content: '.';
  }
  60% {
    content: '..';
  }
  80%, 100% {
    content: '...';
  }
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dark .loading-container {
  background: linear-gradient(135deg, #0f172a 0%, #020617 100%);
}
</style>
