import { createApp } from 'vue'

import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

// @ts-expect-error: Could not find module './App.vue' or its type declarations
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
})