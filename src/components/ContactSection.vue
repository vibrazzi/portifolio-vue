<template>
  <section id="contact" class="text-white mt-20">
    <h2 class="text-4xl font-bold text-left mb-6 px-4 xl:pl-16">Entre em contato</h2>
    <form @submit.prevent="enviarMensagem" class="space-y-6 bg-[#1a233a] p-8 rounded-lg">
      <div>
        <label for="email" class="block text-sm font-medium">Seu e-mail</label>
        <input 
          v-model="email" 
          type="email" 
          id="email" 
          required 
          class="w-full mt-2 p-3 bg-[#111827] text-gray-100 rounded-lg" 
          placeholder="email@gmail.com" 
        />
      </div>
      <div>
        <label for="subject" class="block text-sm font-medium">Assunto</label>
        <input 
          v-model="subject" 
          type="text" 
          id="subject" 
          required 
          class="w-full mt-2 p-3 bg-[#111827] text-gray-100 rounded-lg" 
          placeholder="Digite o assunto" 
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium">Mensagem</label>
        <textarea 
          v-model="message" 
          id="message" 
          required 
          class="w-full mt-2 p-3 bg-[#111827] text-gray-100 rounded-lg" 
          placeholder="Sua mensagem"
        ></textarea>
      </div>
      <button type="submit" class="w-full py-3 bg-[#f97316] text-white rounded-lg hover:bg-[#3498db] transition">
        Enviar
      </button>
    </form>
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
        const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"; // Variável de ambiente para o backend
        const response = await fetch(`${backendURL}/enviar-formulario`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert("Recebi sua mensagem! Logo retornarei, obrigado!");
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
