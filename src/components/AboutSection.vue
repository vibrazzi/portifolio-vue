<template >
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-70 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">Educação</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                    class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
                    >
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">Mais
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">sobre</span>
                    mim
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8"> Desde cedo, sempre fui apaixonado por desafios que envolvem criatividade e inovação, algo que marcou minha trajetória desde quando me dedicava completamente à música. Ao longo dessa jornada, aprendi a importância de criar algo único, tanto que cheguei a lançar duas músicas no Spotify. Foi nesse caminho que descobri minha segunda paixão, o desenvolvimento, ao criar um site para divulgar meu trabalho musical. Desde então, mergulhei de cabeça nesse universo e, motivado pela vontade de aprender, me matriculei no curso de Análise e Desenvolvimento de Sistemas.

Hoje, apesar de ter explorado várias áreas da tecnologia, escolhi seguir como Desenvolvedor Front-End, pois me encanta a ideia de criar interfaces que conectam pessoas e entregam experiências incríveis. Além disso, minha experiência de anos na área de atendimento ao cliente me ajudou a desenvolver empatia e uma visão centrada no usuário, competências que acredito serem essenciais para criar produtos que realmente façam a diferença.

Estou à procura de uma oportunidade que me permita crescer como profissional e contribuir com minha paixão por tecnologia, enquanto ajudo a transformar a vida das pessoas (e dos animais de estimação) com soluções inovadoras. Sei que tenho muito a agregar, seja trabalhando em equipe, escrevendo códigos limpos ou contribuindo com ideias criativas. Estou ansioso para fazer parte desse ecossistema incrível que vocês estão construindo!
                </p>
                <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education=ref([
    {
        id:1,
        School:'Faculdade Descomplica',
        program:'Analise e Desenvolvimento de Sistemas',
        year:'2024 a 2026'
    },
    {
        id:1,
        School:'Alura',
        program:'Desenvolvedor Front-End',
        year:'2023'
    },
    {
        id:1,
        School:'Coursera',
        program:'Desenvolvedor Front-End',
        year:'2022 a 2023'
    },
    {
        id:1,
        School:'Dio',
        program:'BootCamp Desenvolvedor Front-End',
        year:'2022'
    },
    {
        id:1,
        School:'Dio',
        program:'BootCamp Desenvolvedor Mobile',
        year:'2022'
    }
])
</script>