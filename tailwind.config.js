/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Define os arquivos onde o Tailwind será aplicado
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b', // Cor primária personalizada
        secondary: '#ec4899', // Cor secundária personalizada
        dark: '#1a233a', // Cor adicional para temas escuros
      },
      spacing: {
        '128': '32rem', // Exemplo de espaçamento personalizado
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Exemplo de borda arredondada personalizada
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin para estilizar formulários
    require('@tailwindcss/typography'), // Plugin para tipografia
    require('@tailwindcss/aspect-ratio'), // Plugin para proporções de aspecto
  ],
};
