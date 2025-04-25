<template>
   <section class="text-white mt-20" id="contact">
      <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Contato</h2>
      <div class="grid md:grid-cols-2 gap-8 px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
          <!-- Informações de Contato -->
          <div>
              <p class="text-[#adb7be]"></p>
              <div class="space-y-8">
                  <!-- E-mail -->
                  <div class="flex items-center">
                      <div class="p-3" style="background-color: #1a233a; border-radius: 50%;">
                          <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="email" class="w-7">
                      </div>
                      <div class="ml-5">
                          <h4 class="text-lg font-semibold">E-mail</h4>
                          <a href="mailto:webertfernandes16@gmail.com" class="group flex items-center space-x-2" style="color: #f97316; transition: color 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" style="transition: transform 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <span>webertfernandes16@gmail.com</span>
                          </a>
                      </div>
                  </div>
                  <!-- WhatsApp -->
                  <div class="flex items-center">
                      <div class="p-3" style="background-color: #1a233a; border-radius: 50%;">
                          <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-7">
                      </div>
                      <div class="ml-5">
                          <h4 class="text-lg font-semibold">WhatsApp</h4>
                          <a href="https://wa.me/5534997926005" target="_blank" class="group flex items-center space-x-2" style="color: #f97316; transition: color 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" style="transition: transform 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <span>(34)99792-6005</span>
                          </a>
                      </div>
                  </div>
                  <!-- LinkedIn -->
                  <div class="flex items-center">
                      <div class="p-3" style="background-color: #1a233a; border-radius: 50%;">
                          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-7">
                      </div>
                      <div class="ml-5">
                          <h4 class="text-lg font-semibold">LinkedIn</h4>
                          <a href="https://www.linkedin.com/in/webert-fernandes-2b6463253/" target="_blank" class="group flex items-center space-x-2" style="color: #f97316; transition: color 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" style="transition: transform 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <span>Visitar perfil</span>
                          </a>
                      </div>
                  </div>
                  <!-- GitHub -->
                  <div class="flex items-center">
                      <div class="p-3" style="background-color: #1a233a; border-radius: 50%;">
                          <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" class="w-7">
                      </div>
                      <div class="ml-5">
                          <h4 class="text-lg font-semibold">GitHub</h4>
                          <a href="https://github.com/vibrazzi" target="_blank" class="group flex items-center space-x-2" style="color: #f97316; transition: color 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <img src="https://img.icons8.com/material-outlined/24/orange/arrow.png" alt="arrow" class="w-4" style="transition: transform 0.3s;" onmouseover="this.style.color='#3498db'" onmouseout="this.style.color='#f97316'">
                              <span>Visitar repositório</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Formulário de Contato -->
          <div class="bg-[#1a233a] p-8 rounded-lg shadow-md">
              <form class="space-y-6">
                  <div>
                      <label for="email" class="block text-sm font-medium text-gray-300">Seu e-mail</label>
                      <input type="email" id="email" name="email" class="block w-full mt-2 p-3" style="background-color: #111827; color: #ffffff; border-radius: 8px;" placeholder="email@gmail.com">
                  </div>
                  <div>
                      <label for="subject" class="block text-sm font-medium text-gray-300">Assunto</label>
                      <input type="text" id="subject" name="subject" class="block w-full mt-2 p-3" style="background-color: #111827; color: #ffffff; border-radius: 8px;" placeholder="Digite o assunto">
                  </div>
                  <div>
                      <label for="message" class="block text-sm font-medium text-gray-300">Mensagem</label>
                      <textarea id="message" name="message" class="block w-full mt-2 p-3" style="background-color: #111827; color: #ffffff; border-radius: 8px;" placeholder="Sua mensagem"></textarea>
                  </div>
                  <button type="submit" class="w-full py-3" style="background-color: #f97316; color: white; border-radius: 8px; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#3498db'" onmouseout="this.style.backgroundColor='#f97316'">
                      Enviar
                  </button>
              </form>
          </div>
      </div>
  </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        subject: "",
        message: "",
      };
    },
    methods: {
      async enviarMensagem() {
        const payload = {
          email: this.email,
          subject: this.subject,
          message: this.message,
        };
  
        try {
          const response = await fetch("http://localhost:3000/enviar-formulario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
  
          if (response.ok) {
            alert("Recebi sua mensagem, obrigado!");
            this.email = "";
            this.subject = "";
            this.message = "";
          } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.error}`);
          }
        } catch (error) {
          alert("Erro de conexão. Tente novamente mais tarde.");
          console.error(error);
        }
      },
    },
  };
  </script>
  