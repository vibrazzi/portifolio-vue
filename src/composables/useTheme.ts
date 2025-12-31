import { ref, watch, onMounted } from 'vue'

const isDark = ref<boolean>(false)

export function useTheme() {
  const toggleTheme = (): void => {
    isDark.value = !isDark.value
  }

  const setTheme = (dark: boolean): void => {
    isDark.value = dark
  }

  const applyTheme = (): void => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  const saveTheme = (): void => {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  const loadTheme = (): void => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }

  watch(isDark, () => {
    applyTheme()
    saveTheme()
  })

  onMounted(() => {
    loadTheme()
    applyTheme()
  })

  return {
    isDark,
    toggleTheme,
    setTheme
  }
}