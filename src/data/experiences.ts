export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const Experiences: Experience[] = [
  {
    id: 1,
    role: "Desenvolvedor Front-end",
    company: "Cangooroo (T4W)",
    date: "Fev 2026 – Presente",
    current: true,
    summary:
      "Atuação em produtos de Travel Tech integrando recursos de Inteligência Artificial Generativa e modernizando a arquitetura front-end.",
    highlights: [
      "Desenvolvimento de soluções e fluxos web para Travel Tech com integração a modelos de IA Generativa.",
      "Refatoração contínua de código legado para melhorar manutenibilidade, performance e experiência do usuário.",
    ],
    stack: ["React", "TypeScript", "JavaScript", "IA Generativa"],
  },
  {
    id: 2,
    role: "Desenvolvedor Web",
    company: "87Labs",
    date: "Jun 2025 – Fev 2026",
    summary:
      "Construção de aplicações, widgets interativos e integrações customizadas para lojas de alto volume no ecossistema Shopify.",
    highlights: [
      "Criação de aplicações e widgets interativos para Shopify utilizando Web Components (Lit), Liquid e JavaScript.",
      "Desenvolvimento de interfaces modulares e integrações com APIs em projetos envolvendo Shopify e ServiceNow.",
    ],
    stack: ["Shopify", "Lit", "Liquid", "JavaScript", "ServiceNow"],
  },
];