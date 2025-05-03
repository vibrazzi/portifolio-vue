<template>
  <section id="contact" class="text-white mt-10">
    <!-- Título com maior margem inferior -->
    <h2 class="text-4xl font-bold text-left mb-6 px-4 xl:pl-16">Contato</h2>
    <!-- Informações de Contato -->
    <div class="flex flex-col md:flex-row justify-between items-start gap-16 px-4 xl:px-16">
      <!-- Coluna 1: LinkedIn e GitHub -->
      <div class="space-y-8 md:w-1/2">
        <!-- LinkedIn -->
        <div class="flex items-center">
          <div class="p-3 bg-[#1a233a] rounded-full">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-7" />
          </div>
          <div class="ml-5 flex items-center">
            <h4 class="text-lg font-semibold mr-3">LinkedIn:</h4>
            <a
              href="https://www.linkedin.com/in/webert-fernandes-2b6463253/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center space-x-2 text-[#f97316] hover:text-[#3498db] transition"
            >
              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" />
              <span>Visitar perfil</span>
            </a>
          </div>
        </div>
        <!-- GitHub -->
        <div class="flex items-center">
          <div class="p-3 bg-[#1a233a] rounded-full">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" class="w-7" />
          </div>
          <div class="ml-5 flex items-center">
            <h4 class="text-lg font-semibold mr-3">GitHub:</h4>
            <a
              href="https://github.com/vibrazzi"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center space-x-2 text-[#f97316] hover:text-[#3498db] transition"
            >
              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" />
              <span>Visitar repositório</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Coluna 2: E-mail e WhatsApp -->
      <div class="space-y-8 md:w-1/2">
        <!-- E-mail -->
        <div class="flex items-center">
          <div class="p-3 bg-[#1a233a] rounded-full">
            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="email" class="w-7" />
          </div>
          <div class="ml-5 flex items-center">
            <h4 class="text-lg font-semibold mr-3">Email:</h4>
            <a
              href="mailto:webertfernandes16@gmail.com"
              class="group flex items-center space-x-2 text-[#f97316] hover:text-[#3498db] transition"
            >
              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" />
              <span>webertfernandes16@gmail.com</span>
            </a>
          </div>
        </div>
        <!-- WhatsApp -->
        <div class="flex items-center">
          <div class="p-3 bg-[#1a233a] rounded-full">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-7" />
          </div>
          <div class="ml-5 flex items-center">
            <h4 class="text-lg font-semibold mr-3">WhatsApp:</h4>
            <a
              href="https://wa.me/5534997926005"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center space-x-2 text-[#f97316] hover:text-[#3498db] transition"
            >
              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" />
              <span>(34) 99792-6005</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente é puramente visual e não requer lógica adicional.
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>