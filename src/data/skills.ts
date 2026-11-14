export interface SkillGroup {
  id: number;
  category: string;
  description: string;
  items: string[];
}

export const SkillGroups: SkillGroup[] = [
  {
    id: 1,
    category: "Front-end & Arquitetura UI",
    description:
      "Construção de interfaces escaláveis, componentização limpa e refatoração de código legado com foco em performance.",
    items: ["React", "TypeScript", "JavaScript"],
  },
  {
    id: 2,
    category: "E-commerce & Plataformas",
    description:
      "Desenvolvimento de widgets interativos, Web Components nativos e soluções integradas para ambientes corporativos.",
    items: ["Shopify", "Lit", "Liquid", "ServiceNow"],
  },
  {
    id: 3,
    category: "IA Generativa & Back-end",
    description:
      "Orquestração de fluxos multiagente, streaming em tempo real (SSE) e APIs estruturadas para produtos baseados em LLMs.",
    items: ["Python", "IA Generativa", "FastAPI", "Groq API"],
  },
  {
    id: 4,
    category: "Engenharia & Entrega",
    description:
      "Padronização visual, containerização, versionamento e esteiras de deploy contínuo orientadas à confiabilidade.",
    items: ["Tailwind CSS", "Docker", "Git", "CI/CD"],
  },
];