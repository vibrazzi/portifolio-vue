# Webert Fernandes — Portfólio

[![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)

Portfólio pessoal de **Webert Fernandes** — **Engenheiro Web**. Projetado com foco em estética minimalista tech, alta performance, acessibilidade e conversão para recrutadores e lideranças técnicas.

**Demo em produção:** [portifolio-vue-delta.vercel.app](https://portifolio-vue-delta.vercel.app/)

---

## Destaques da Arquitetura

- **Design Minimalista & Dual-Theme:** Alternância fluida entre Modo Claro (`#1e3a8a`) e Modo Escuro (`#c084fc`) usando variáveis CSS semânticas e persistência automática no `localStorage`.
- **CSS Moderno (Zero JS para Animações):**
  - **Scroll-Driven Animations** nativas via `animation-timeline: view()` e `overflow-x: clip`, executadas diretamente no compositor da GPU com fallback progressivo (`@supports`).
  - **Entrada nativa com `@starting-style`** no modal interativo de Live Demo.
  - Respeito integral a `prefers-reduced-motion`.
- **Carregamento Otimizado:** Componentes carregados sob demanda com `defineAsyncComponent` e `<Suspense>`.
- **Conteúdo Direto e Orientado a Produto:**
  - **Trajetória Profissional:** Atuação atual na **Cangooroo (T4W)** com Travel Tech e IA Generativa e experiência anterior na **87Labs** com aplicações Shopify (Web Components com **Lit**, **Liquid** e **JavaScript**).
  - **Projetos em Destaque:** Grid simétrico apresentando **CodeMentor IA** (com Live Demo interativa integrada via modal), **App de Reviews & Widgets para Shopify** e **Vitrine de Vinhos Premium**.
  - **Stack Técnica Estruturada:** React, TypeScript, JavaScript, Python, Shopify, Lit, ServiceNow e IA Generativa.

---

## Tecnologias Utilizadas

| Tecnologia | Finalidade |
| --- | --- |
| **Vue 3** | Framework reativo com Composition API e `<script setup lang="ts">`. |
| **TypeScript** | Tipagem estrita em componentes, composables e fontes de dados. |
| **Tailwind CSS** | Estilização utilitária com tokens dinâmicos para Light/Dark Mode. |
| **Vite** | Bundler e servidor de desenvolvimento rápido. |
| **Vitest + Vue Test Utils** | Testes unitários em ambiente `jsdom`. |
| **ESLint** | Padronização e análise estática de qualidade de código. |

---

## Pré-requisitos

- **Node.js** `20.x` ou superior ([download](https://nodejs.org/))
- **npm** (ou **bun**)

---

## Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/vibrazzi/portifolio-vue.git
   cd portifolio-vue
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   `http://localhost:3000`

---

## Estrutura do Projeto

```text
portifolio-vue/
├── public/
│   ├── assets/aistudio/         # Currículo em PDF para download direto
│   └── ...                      # Imagens e recursos estáticos públicos
├── src/
│   ├── assets/                  # Imagens processadas pelo Vite
│   ├── components/
│   │   ├── AboutSection.vue     # Perfil, formação e trajetória profissional
│   │   ├── BackToTop.vue        # Botão de retorno rápido ao topo
│   │   ├── ContactSection.vue   # Canais diretos e download de currículo
│   │   ├── ExperienceAndSkills.vue # Capacidades e stack técnica organizada
│   │   ├── Footer.vue           # Rodapé minimalista com links principais
│   │   ├── HeroSection.vue      # Posicionamento, CTAs e retrato
│   │   ├── LatestProjSection.vue # Projetos padronizados e modal de Live Demo
│   │   ├── NavBar.vue           # Navegação fixa responsiva e ThemeToggle
│   │   ├── ThemeToggle.vue      # Alternador de tema claro/escuro
│   │   └── loadingSpinner.vue   # Fallback de carregamento assíncrono
│   ├── composables/
│   │   └── useTheme.ts          # Gerenciamento de tema e localStorage
│   ├── data/
│   │   ├── experiences.ts       # Dados tipados de experiência profissional
│   │   ├── projects.ts          # Dados tipados dos projetos em destaque
│   │   └── skills.ts            # Grupos da stack técnica
│   ├── App.vue                  # Layout raiz, scroll suave e tokens CSS
│   ├── env.d.ts                 # Declarações TypeScript para módulos Vue
│   ├── main.ts                  # Ponto de entrada da aplicação
│   └── style.css                # Tailwind CSS e Scroll-Driven Animations
├── tests/
│   ├── setup.js                 # Setup global do ambiente Vitest
│   └── unit/NavBar.test.js      # Testes unitários da barra de navegação
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js
```

---

## Scripts e Verificações

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor Vite na porta `3000`. |
| `npm run build` | Gera o build de produção otimizado em `dist/`. |
| `npm run preview` | Visualiza localmente o build gerado em `dist/`. |
| `npm test` | Executa a suíte de testes unitários com Vitest. |
| `npx eslint .` | Executa a análise estática com ESLint. |
| `npx tsc --noEmit` | Verifica a tipagem TypeScript de todo o projeto. |

---

## Contato

- **LinkedIn:** [linkedin.com/in/webert-fernandes-2b6463253](https://www.linkedin.com/in/webert-fernandes-2b6463253/)
- **GitHub:** [github.com/vibrazzi](https://github.com/vibrazzi)
- **E-mail:** [webertfernandes16@gmail.com](mailto:webertfernandes16@gmail.com)
- **Portfólio:** [portifolio-vue-delta.vercel.app](https://portifolio-vue-delta.vercel.app/)
