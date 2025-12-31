# Vue.js Portfolio Project - AI Coding Guidelines

## Architecture Overview
This is a modern Vue 3 portfolio website using Composition API with `<script setup>` syntax. Key architectural decisions:
- **Lazy Loading**: All major components are loaded asynchronously using `defineAsyncComponent` in `App.vue` for performance
- **Suspense Boundaries**: App.vue wraps content in `<Suspense>` with a custom loading spinner fallback
- **Theme System**: Centralized dark/light mode via `useTheme` composable, persisting to localStorage and respecting system preferences
- **Responsive Design**: Mobile-first with Tailwind CSS, using responsive prefixes (sm:, md:, lg:)

## Key Technologies & Patterns
- **Vue 3 + TypeScript**: Use Composition API with `<script setup lang="ts">`. Entry point is `src/main.ts`
- **Vite Build Tool**: Fast HMR dev server. Alias `@` maps to `src/` directory
- **Tailwind CSS**: Custom color palette (primary: amber-500, secondary: pink-500). Dark mode via `class` strategy
- **Animations**: AOS library for scroll-triggered animations. Smooth scroll enabled globally in `App.vue`
- **Carousels**: vue3-carousel for project showcases
- **Testing**: Jest + Vue Test Utils. Tests in `tests/unit/` with `.test.js` extension

## Component Conventions
- **File Naming**: PascalCase (e.g., `NavBar.vue`, `HeroSection.vue`)
- **Structure**: Template > Script setup with `lang="ts"` > Style. Use single-file components
- **Async Imports**: Use `defineAsyncComponent(() => import('@/components/...'))` for major sections
- **Props/Emits**: Define with TypeScript types when possible
- **Styling**: Tailwind utility classes. Custom gradients for branding (from-primary to-pink-500)
- **TypeScript**: All components use `<script setup lang="ts">`. Define interfaces for data structures in component files or data files

## Development Workflow
- **Start Dev**: `npm run dev` (serves on localhost:5173 with auto-open)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview` (local production preview)
- **Test**: `npm run test` (Jest unit tests)
- **Lint**: `npx eslint src/` (ESLint with Vue plugin)

## Theme Implementation
- **Composable**: `src/composables/useTheme.js` provides `isDark`, `toggleTheme()`, `setTheme()`
- **Application**: Classes `dark:` and `light:` on `document.documentElement`
- **Persistence**: localStorage key 'theme', falls back to `prefers-color-scheme`
- **Toggle Component**: `ThemeToggle.vue` in navbar

## Example Patterns
- **Navigation Scroll**: Use `scrollToSection(href)` with smooth behavior for anchor links
- **Responsive Classes**: `px-4 sm:px-6 lg:px-8` for progressive spacing
- **Gradient Text**: `bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent`
- **Hover Effects**: Combine `group` with `group-hover:` for interactive elements
- **Backdrop Blur**: `bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl` for glassmorphism

## Data Separation
- **Data Files**: Static data (skills, experiences, projects) is separated into `src/data/` files (e.g., `skills.js`, `experiences.js`, `projects.js`)
- **Import Pattern**: Components import data as `import { DataName as dataName } from '@/data/file.js'` then wrap in `ref()` for reactivity
- **Purpose**: Keeps components focused on presentation, enables easy data updates without touching UI logic</content>
<parameter name="filePath">/home/webert/portifolio-vue/.github/copilot-instructions.md