export interface Project {
  id: number;
  category: string;
  featured?: boolean;
  image?: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  gitURL?: string;
  webURL?: string;
  embedURL?: string;
  contextNote?: string;
}

export const Projects: Project[] = [
  {
    id: 1,
    category: "IA Generativa · Projeto Próprio",
    featured: true,
    image: "/image copy 3.png",
    title: "CodeMentor IA",
    subtitle: "Mentoria interativa em lógica de programação com fluxos multiagente",
    description:
      "Plataforma própria de ensino assistido por IA desenvolvida com Python, FastAPI e Groq API. Orquestra fluxos multiagente e LLMs para entregar respostas em streaming em tempo real via Server-Sent Events (SSE), validação de dados com Pydantic e deploy containerizado.",
    highlights: [
      "Orquestração de fluxos multiagente com LLMs via Groq API e streaming SSE em tempo real.",
      "Back-end em Python e FastAPI com tipagem estrita e validação de schemas usando Pydantic.",
      "Arquitetura containerizada com Docker e pipeline automatizado de entrega contínua.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Groq API",
      "Fluxos Multiagente",
      "SSE",
      "Pydantic",
      "Docker",
    ],
    gitURL: "https://github.com/vibrazzi/code-mentor",
    webURL: "https://code-mentor-5208.onrender.com/",
    embedURL: "https://code-mentor-5208.onrender.com/",
  },
  {
    id: 2,
    category: "E-commerce · 87Labs",
    featured: false,
    title: "App de Reviews & Widgets para Shopify",
    subtitle: "Widgets interativos de avaliação de produtos para lojas de alto tráfego",
    description:
      "Aplicação comercial desenvolvida na 87Labs para coleta, moderação e exibição de avaliações de clientes em lojas Shopify. Projetada com Web Components (Lit), Liquid e JavaScript para operar de forma isolada e leve em diferentes temas.",
    highlights: [
      "Widgets encapsulados com Web Components (Lit), evitando conflitos de CSS/JS nos temas.",
      "Integração nativa com Liquid e Theme App Extensions para renderização rápida no storefront.",
    ],
    technologies: ["Shopify", "Lit", "Liquid", "JavaScript", "Web Components"],
    contextNote: "Produto comercial desenvolvido na 87Labs",
  },
  {
    id: 3,
    category: "Web App · Arquitetura Headless",
    featured: false,
    image: "/image copy 2.png",
    title: "Vitrine de Vinhos Premium",
    subtitle: "Catálogo digital headless desenvolvido para a W Premium Lounge",
    description:
      "Interface responsiva e catálogo interativo com curadoria dinâmica de rótulos, gerenciamento de estado centralizado e integração com APIs REST para operação em ambiente de lounge aeroportuário.",
    highlights: [
      "Experiência headless com filtragem instantânea e navegação otimizada para mobile e tablet.",
      "Integração com serviços back-end para atualização dinâmica do portfólio de bebidas.",
    ],
    technologies: ["Vue 3", "Vuex", "Express", "FastAPI", "Tailwind CSS"],
    gitURL: "https://github.com/vibrazzi/vitrine-vinhos",
    webURL: "https://vitrine-vinhos.vercel.app/",
  },
];