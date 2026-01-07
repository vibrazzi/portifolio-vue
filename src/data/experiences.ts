export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  iconClass: string;
  description?: string;
  highlights: string[];
  skills: string[];
}

export const Experiences: Experience[] = [
  {
    id: 1,
    role: "Analista de Sistemas",
    company: "87 Labs - Remoto",
    date: "Jul 2024 - Presente",
    iconClass: "fas fa-laptop-code",
    highlights: [
      "Desenvolvimento de aplicações web responsivas utilizando JavaScript, TypeScript, React e Vue.js.",
      "Criação de web components reutilizáveis com LIT para interfaces modulares e performáticas.",
      "Integração de soluções com a plataforma Shopify, criando apps e funcionalidades personalizadas.",
      "Análise de requisitos e definição de arquiteturas robustas para otimização de performance e usabilidade.",
      "Colaboração em projetos que envolvem APIs, bancos de dados e interfaces de usuário interativas.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "LIT",
      "Shopify",
      "ServiceNow",
      "APIs",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 2,
    role: "Desenvolvedor Web",
    company: "W Premium Lounge - Remoto",
    date: "Mar 2025 - Mai 2025",
    iconClass: "fas fa-code",
    highlights: [
      "Desenvolvimento de sistema de cardápio digital interativo com Vue 3 e integração de APIs.",
      "Criação de interfaces responsivas e otimizadas para dispositivos móveis e desktop.",
      "Implementação de funcionalidades que melhoram a experiência do usuário em ambientes premium.",
      "Trabalho com tecnologias modernas para garantir performance e acessibilidade.",
    ],
    skills: ["Vue.js", "JavaScript", "APIs", "HTML", "CSS", "Responsividade"],
  },
];