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
    role: "Desenvolvedor Front-end",
    company: "Cangooroo",
    date: "Fev 2026 - Presente",
    iconClass: "fas fa-plane",
    highlights: [
      "Desenvolvimento e manutenção de sites de turismo com foco em interfaces de usuário.",
      "Implementação de layouts responsivos e otimização da experiência do usuário no front-end.",
    ],
    skills: ["JavaScript", "TypeScript", "React", "Front-end"],
  },
  {
    id: 2,
    role: "Desenvolvedor Web",
    company: "87 Labs",
    date: "Jun 2025 - Fev 2026",
    iconClass: "fas fa-shopping-cart",
    highlights: [
      "Construção de aplicativos personalizados integrados à plataforma Shopify.",
      "Desenvolvimento de soluções web voltadas para o ecossistema de e-commerce.",
    ],
    skills: ["JavaScript", "TypeScript", "React", "Shopify"],
  },
  {
    id: 3,
    role: "Suporte Técnico",
    company: "Netflix",
    date: "Set 2021 - Set 2023",
    iconClass: "fas fa-headset",
    highlights: [
      "Atendimento e suporte técnico para usuários da plataforma de streaming.",
      "Resolução de problemas de conectividade, acessos e usabilidade.",
    ],
    skills: ["Suporte Técnico", "Atendimento ao Cliente", "Troubleshooting"],
  },
];