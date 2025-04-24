<template>
    <section class="text-white mt-20" id="contact">
      <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Contato</h2>
      <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
        <!-- Informações de Contato -->
        <div>
          <!-- E-mail -->
          <div class="flex mb-10 items-center">
            <div class="p-2" style="background: #111a3e; width: 50px; height: 46px; border-radius: 50%;">
              <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="E-mail" class="w-6" />
            </div>
            <div class="ml-5 text-white">
              <h4>E-mail</h4>
              <p>webertfernandes16@gmail.com</p>
            </div>
          </div>
        </div>
        <!-- Formulário -->
        <div style="background: #111a3e; border-radius: 20px;">
          <form class="flex flex-col p-2" id="contactForm">
            <!-- Campo E-mail -->
            <div class="mb-6">
              <label for="email" class="text-white block mb-2">Seu e-mail</label>
              <input type="email" id="email" class="bg-[#111827] text-gray-100 rounded-lg block w-full p-2.5" placeholder="email@gmail.com" />
            </div>
            <!-- Campo Assunto -->
            <div class="mb-6">
              <label for="subject" class="text-white block mb-2">Assunto</label>
              <input type="text" id="subject" class="bg-[#111827] text-gray-100 rounded-lg block w-full p-2.5" placeholder="Assunto" />
            </div>
            <!-- Campo Mensagem -->
            <div class="mb-6">
              <label for="message" class="text-white block mb-2">Mensagem</label>
              <textarea id="message" class="bg-[#111827] text-gray-100 rounded-lg block w-full p-2.5" placeholder="Digite sua mensagem aqui"></textarea>
            </div>
            <!-- Botão Enviar -->
            <button type="submit" class="w-full px-6 py-3 rounded-lg bg-primary text-white">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    mounted() {
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        // Captura os valores dos campos
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
  
        // Validação básica
        if (!email || !subject || !message) {
          alert("Por favor, preencha todos os campos!");
          return;
        }
  
        try {
          // Envio ao backend
          const response = await fetch("http://localhost:3000/enviar-formulario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, subject, message }),
          });
  
          if (!response.ok) {
            throw new Error("Erro ao enviar mensagem!");
          }
  
          const result = await response.text();
          alert(result);
        } catch (error) {
          console.error("Erro:", error);
          alert("Erro ao enviar mensagem. Tente novamente.");
        }
      });
    },
  };
  </script>
  