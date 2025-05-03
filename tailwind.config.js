/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Define os arquivos onde o Tailwind será aplicado
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b', // Cor primária personalizada
        secondary: '#ec4899', // Cor secundária personalizada
        dark: '#1a233a', // Cor adicional para temas escuros
        light: '#f3f4f6', // Cor adicional para temas claros
      },
      spacing: {
        '128': '32rem', // Exemplo de espaçamento personalizado
        '144': '36rem',
        '160': '40rem', // Novo espaçamento adicionado
      },
      borderRadius: {
        '4xl': '2rem', // Exemplo de borda arredondada personalizada
        '5xl': '2.5rem', // Novo valor de borda arredondada
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fonte padrão personalizada
        serif: ['Merriweather', 'serif'], // Fonte adicional
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin para estilizar formulários
    require('@tailwindcss/typography'), // Plugin para tipografia
    require('@tailwindcss/aspect-ratio'), // Plugin para proporções de aspecto
  ],
};
