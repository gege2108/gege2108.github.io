// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site déployé sur https://gege2108.github.io (repo GitHub nommé "gege2108.github.io").
// Si tu utilises un autre nom de repo (ex. "portfolio"), ajoute : base: '/portfolio'
export default defineConfig({
  site: 'https://gege2108.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
