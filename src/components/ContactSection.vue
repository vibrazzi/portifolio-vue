<template>
  <section
    id="contact"
    class="py-20 lg:py-28 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <!-- Left Column: Direct Conversion Pitch -->
        <div class="lg:col-span-5 space-y-5 scroll-reveal">
          <p class="text-xs font-mono uppercase tracking-wider text-primary">
            Contato
          </p>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
            Aberto a novas conexões e desafios em Engenharia Web &amp; IA.
          </h2>
          <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Para oportunidades de carreira, discussões técnicas ou avaliação de perfil, acesse meus links diretos ou baixe o currículo completo em PDF.
          </p>

          <div class="pt-2">
            <a
              href="/curriculo_Webert_Dev.pdf"
              download="Curriculo_Webert_Fernandes.pdf"
              class="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold bg-primary text-white dark:text-zinc-950 hover:opacity-90 transition-opacity duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <i class="fas fa-file-arrow-down text-sm" aria-hidden="true"></i>
              <span>Download Currículo (PDF)</span>
            </a>
          </div>
        </div>

        <!-- Right Column: High-Usability Direct Links -->
        <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <a
            v-for="channel in contactChannels"
            :key="channel.name"
            :href="channel.url"
            :target="channel.external ? '_blank' : undefined"
            :rel="channel.external ? 'noopener noreferrer' : undefined"
            class="scroll-reveal-card group p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-primary dark:hover:border-primary transition-colors duration-150 flex flex-col justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <i :class="channel.icon" class="text-lg text-primary" aria-hidden="true"></i>
                <h3 class="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {{ channel.name }}
                </h3>
              </div>
              <i class="fas fa-arrow-up-right-from-square text-xs text-zinc-400 group-hover:text-primary transition-colors duration-150" aria-hidden="true"></i>
            </div>

            <div class="space-y-1">
              <p class="text-sm text-zinc-600 dark:text-zinc-400 break-all">
                {{ channel.label }}
              </p>
              <p class="text-xs font-mono text-primary">
                {{ channel.action }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactChannel {
  name: string
  label: string
  action: string
  url: string
  icon: string
  external: boolean
}

const contactChannels: ContactChannel[] = [
  {
    name: 'LinkedIn',
    label: 'in/webert-fernandes-2b6463253',
    action: 'Conectar profissionalmente',
    url: 'https://www.linkedin.com/in/webert-fernandes-2b6463253/',
    icon: 'fab fa-linkedin',
    external: true,
  },
  {
    name: 'GitHub',
    label: 'github.com/vibrazzi',
    action: 'Explorar repositórios',
    url: 'https://github.com/vibrazzi',
    icon: 'fab fa-github',
    external: true,
  },
  {
    name: 'E-mail',
    label: 'webertfernandes16@gmail.com',
    action: 'Enviar mensagem direta',
    url: 'mailto:webertfernandes16@gmail.com',
    icon: 'fas fa-envelope',
    external: false,
  },
  {
    name: 'WhatsApp',
    label: '(34) 99792-6005',
    action: 'Conversar pelo WhatsApp',
    url: 'https://wa.me/5534997926005',
    icon: 'fab fa-whatsapp',
    external: true,
  },
]
</script>

<style scoped>
.text-balance {
  text-wrap: balance;
}
</style>
