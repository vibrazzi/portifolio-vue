export interface Skill {
  id: number;
  name: string;
  width: string;
  icon: string;
  description: string;
}

export const Skills: Skill[] = [
  {
    id: 1,
    name: "React",
    width: "95%",
    icon: "fab fa-react",
    description:
      "Criação de interfaces responsivas, SPA e componentização de alta performance.",
  },
  {
    id: 2,
    name: "JavaScript",
    width: "95%",
    icon: "fab fa-js-square",
    description:
      "Desenvolvimento de aplicações web dinâmicas com foco em interatividade e lógica de negócios.",
  },
  {
    id: 3,
    name: "TypeScript",
    width: "90%",
    icon: "fas fa-code",
    description:
      "Tipagem estática para construção de aplicações escaláveis, seguras e de fácil manutenção.",
  },
  {
    id: 4,
    name: "Desenvolvimento Front-end",
    width: "95%",
    icon: "fas fa-desktop",
    description:
      "Foco em layouts fiéis, acessibilidade e excelente experiência do usuário.",
  },
];

export const additionalTechs: string[] = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Shopify",
  "Git",
  "Figma",
];