<template>
    <section class="text-white mt-10" id="projects">
      <div class="px-4 xl:pl-16">
        <div class="md:flex md:justify-between xl:pr-16">
          <h2 class="text-4xl font-bold text-white">Meus ultimos projetos</h2>
        </div>
        <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
            data-aos="fade-right">
          <div v-for="project in filteredProjects" :key="project.id">
            <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                 :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }">
              <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                          hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <a class="link-button"
                   :href="project.webURL">Acessar Projeto</a>
                <a class="link-button"
                   :href="project.gitURL">Ver Código</a>
              </div>
            </div>
            <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
              <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
              <p class="text-[#ADB7BE]">{{ project.description }}</p>
              <div class="flex flex-wrap p-2.5">
                <div v-for="technology in project.technologies" :key="technology"
                     class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                     style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                  <p class="px-1 py-2">{{ technology }}</p>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const Projects = ref([
    {
      id: 1,
      category: 'web development',
      image: 'telaloginproj.png',
      title: 'Projeto: Tela Login React',
      description: 'A Tela de login oferece uma interface intuitiva de para efetuar o login',
      technologies: ['React', 'Vite', 'JavaScript'],
      gitURL: 'https://github.com/vibrazzi/tela-React-Login',
      webURL: 'https://tela-react-login.vercel.app/'
    },
    {
      id: 2,
      category: 'Mobile App',
      image: 'loginpageproj.png',
      title: 'Projeto: Login Page Angular',
      description: 'A pagina de login oferece uma interface fácil de usar para logar',
      technologies: ['Angular', 'SASS', 'TypeScript', 'Figma'],
      gitURL: 'https://github.com/vibrazzi/LoginPage',
      webURL: 'https://login-page-six-livid.vercel.app/login'
    },
    {
      id: 3,
      category: 'web development',
      image: 'portifólioproj.png',
      title: 'Projeto: Portifólio Vue',
      description: 'Essa é uma aplicação frontend desenvolvida com Vue.js para exibir um portfólio interativo e moderno',
      technologies: ['vue.js 3', 'vuex', 'Express'],
      gitURL: 'https://github.com/vibrazzi/portifolio-vue',
      webURL: 'https://portifolio-vue-delta.vercel.app/'
    }
  ]);
  
  const selectedCategory = ref('all');
  const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
      return Projects.value;
    }
    return Projects.value.filter(
      (project) =>
        project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase()
    );
  });
  </script>
  
  <style>
  .link-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #6a2700;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .link-button:hover {
    background-color: #6a2700;
    transform: scale(1.05);
  }
  </style>
  