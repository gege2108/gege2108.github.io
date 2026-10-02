# Portfolio — Germain Potet

Site personnel bilingue (FR / EN) construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com).

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:4321
```

## Modifier le contenu

Tout le texte (expériences, projets, compétences, langues…) est dans **`src/data/content.ts`**.
Chaque texte est un objet `{ fr: '…', en: '…' }`.

- Photo : `public/images/profile.jpg`
- CV : `public/CV_Germain_Potet_FR.pdf` (version FR) et `public/CV_Germain_Potet_EN.pdf` (version EN)
- Image d'un projet : ajoute-la dans `public/images/` puis renseigne `image: 'images/mon-image.png'`

## Structure

```
src/
├─ data/content.ts          ← contenu du site
├─ components/Portfolio.astro ← mise en page de toutes les sections
├─ layouts/Base.astro       ← <head>, SEO, thème sombre
├─ pages/index.astro        ← version française (/)
└─ pages/en/index.astro     ← version anglaise (/en/)
```

## Déploiement (GitHub Pages)

1. Crée un repo public nommé **`gege2108.github.io`** sur GitHub.
2. Pousse ce dossier sur la branche `main`.
3. Dans le repo : **Settings → Pages → Source : GitHub Actions**.
4. Le workflow `.github/workflows/deploy.yml` publie le site sur https://gege2108.github.io à chaque push.

Avec un autre nom de repo (ex. `portfolio`), ajoute `base: '/portfolio'` dans `astro.config.mjs`.
