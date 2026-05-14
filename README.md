# Portfolio — Marion Bozzo

Portfolio personnel de **Marion Bozzo**, Développeuse Full-Stack en formation à ForEach Academy et en recherche d'alternance **Concepteur Développeur d'Applications** pour septembre 2026.

**Site en ligne** : [bozzomarion59-coder.github.io/portfolio_Marion](https://bozzomarion59-coder.github.io/portfolio_Marion/)

**Contact** : [bozzomarion59@gmail.com](mailto:bozzomarion59@gmail.com) — [LinkedIn](https://www.linkedin.com/in/marion-bozzo-dev) — [GitHub](https://github.com/bozzomarion59-coder)

---

## Sommaire

- [Aperçu](#aperçu)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Lancer le projet en local](#lancer-le-projet-en-local)
- [Formulaire de contact](#formulaire-de-contact)
- [Déploiement sur GitHub Pages](#déploiement-sur-github-pages)
- [Sécurité et fichiers ignorés par Git](#sécurité-et-fichiers-ignorés-par-git)
- [Ajouter ou modifier un projet](#ajouter-ou-modifier-un-projet)
- [Licence](#licence)

---

## Aperçu

Ce portfolio met en avant **mon parcours**, **mes compétences techniques**, **mes projets** ainsi que **ma recherche d'alternance**. Il est entièrement développé en React + Vite, responsive, accessible et déployé en continu sur GitHub Pages.

Sections du site :

- **Hero** — photo, titre, badge de disponibilité et téléchargement du CV.
- **À propos** — mon histoire, ma reconversion et mes soft skills.
- **Alternance** — détail de ma recherche (formation, dates, contrat, localisation, ce que j'apporte).
- **Compétences** — stack frontend, backend et outils avec niveaux.
- **Parcours** — timeline complète (formations et expériences professionnelles).
- **Projets** — sélection filtrable avec fiches détaillées (contexte, stack, défis, captures).
- **Contact** — téléphone, email, LinkedIn, GitHub, lettre de recommandation et formulaire `mailto:`.

---

## Stack technique

| Catégorie     | Technologies                                                    |
| ------------- | --------------------------------------------------------------- |
| Frontend      | React 18, React Router 6, Vite 5                                |
| Styling       | CSS moderne (variables, grid, flexbox), responsive mobile-first |
| Typographie   | Inter et Space Grotesk (Google Fonts)                           |
| Icônes        | Font Awesome 6, devicon                                         |
| Déploiement   | GitHub Pages via GitHub Actions                                 |

---

## Structure du projet

```
portfolio_Marion/
├── .github/
│   └── workflows/
│       └── deploy.yml         CI/CD : build + déploiement GitHub Pages
│
├── public/                    Assets statiques servis tels quels
│   ├── images/
│   │   ├── photo-marion.jpeg  Portrait du hero
│   │   ├── Logo.png           Logo (navbar / favicon)
│   │   └── projets/<slug>/    Captures par projet
│   ├── CV_Marion_Bozzo.pdf
│   ├── lettre-recommandation-marion-bozzo.pdf
│   └── 404.html               Fallback SPA pour GitHub Pages
│
├── src/
│   ├── components/            Composants React réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Alternance.jsx
│   │   ├── Skills.jsx
│   │   ├── Parcours.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── pages/                 Pages routées
│   │   ├── Home.jsx           Page d'accueil (toutes les sections)
│   │   ├── ProjectDetail.jsx  Fiche projet détaillée
│   │   └── NotFound.jsx       Page 404
│   │
│   ├── data/                  Données centralisées
│   │   ├── projects.js        Liste des projets et détails
│   │   ├── skills.js          Compétences, soft skills, langues, centres d'intérêt
│   │   └── timeline.js        Parcours formations et professionnel
│   │
│   ├── styles/
│   │   └── index.css          Tout le CSS du site (thématisé)
│   │
│   ├── App.jsx                Routeur et layout global
│   └── main.jsx               Point d'entrée React
│
├── .env.example               Modèle de variables d'environnement
├── .gitignore                 Fichiers ignorés par Git
├── index.html                 Template HTML Vite
├── package.json
├── package-lock.json
├── vite.config.js             Configuration Vite (base path GitHub Pages)
└── README.md
```

---

## Lancer le projet en local

### Prérequis

- **Node.js** version 18 minimum
- **npm** (livré avec Node)

### Installation

```bash
npm install
```

### Mode développement

```bash
npm run dev
```

Le site est disponible sur **http://localhost:5173/portfolio_Marion/**. Vite recharge automatiquement à chaque modification (hot reload).

### Build production

```bash
npm run build       # génère le dossier dist/
npm run preview     # prévisualise le build localement
```

---

## Formulaire de contact

Le formulaire utilise le protocole **`mailto:`**. Quand un visiteur le remplit et clique sur « Envoyer », son client mail (Apple Mail, Outlook, Gmail, etc.) s'ouvre automatiquement avec le sujet et le message **pré-remplis**. Il lui suffit d'envoyer pour que le message arrive directement dans la boîte mail de Marion.

Aucune API tierce, aucun backend, aucun coût : tout reste 100 % statique.

---

## Déploiement sur GitHub Pages

Le déploiement est **automatique** à chaque push sur `main` grâce au workflow [.github/workflows/deploy.yml](./.github/workflows/deploy.yml).

### Configuration initiale (une seule fois)

1. **Settings** → **Pages** → **Source** : `GitHub Actions`.
2. Pusher la branche `main` — le workflow se lance tout seul.

À chaque push suivant :

1. Le workflow installe les dépendances.
2. Il lance `npm run build`.
3. Il publie le dossier `dist/` sur GitHub Pages.

---

## Sécurité et fichiers ignorés par Git

Le `.gitignore` à la racine exclut tous les fichiers qui **ne doivent jamais être commités** :

| Fichier / dossier            | Raison                                            |
| ---------------------------- | ------------------------------------------------- |
| `.env`, `.env.*.local`       | Variables d'environnement (clés, secrets, tokens) |
| `node_modules/`              | Dépendances installées localement                 |
| `dist/`, `build/`            | Builds générés                                    |
| `*.log`                      | Logs locaux                                       |
| `.DS_Store`, `Thumbs.db`     | Fichiers système macOS et Windows                 |
| `.vscode/`, `.idea/`         | Configuration personnelle d'IDE                   |

### Variables d'environnement

Actuellement, le projet **n'a pas besoin** de variables d'environnement (formulaire en `mailto:`, pas d'API). Le fichier `.env.example` documente néanmoins comment en ajouter proprement si besoin :

```bash
cp .env.example .env
```

Par convention Vite, les variables exposées au navigateur **doivent commencer par `VITE_`** (par exemple `VITE_API_URL`). Les autres restent uniquement disponibles côté build.

---

## Ajouter ou modifier un projet

Toutes les données projets sont centralisées dans [`src/data/projects.js`](./src/data/projects.js).

### 1. Ajouter une entrée dans l'array `projects`

```js
{
  slug: 'mon-projet',           // utilisé dans l'URL /projets/mon-projet
  title: 'Mon projet',
  tagline: "Description courte d'une ligne",
  description: 'Description longue affichée sur la fiche détaillée.',
  cover: '/images/projets/mon-projet/cover.png',
  github: 'https://github.com/...',
  demo: null,                   // ou l'URL de la démo en ligne
  period: '2026',
  role: 'Mon rôle sur le projet',
  stack: ['React', 'Node.js', 'MySQL'],
  highlights: ['Feature 1', 'Feature 2'],
  objectives: ['Objectif 1'],
  challenges: ['Défi technique 1'],
  learnings: ['Apprentissage 1'],
  screenshots: [
    { src: '/images/projets/mon-projet/accueil.png', label: 'Accueil' },
    { src: '/images/projets/mon-projet/admin.png',   label: 'Admin' },
  ],
  featured: true,               // true = badge « projet phare »
}
```

### 2. Déposer les captures dans `public/`

```
public/images/projets/mon-projet/
├── cover.png
├── accueil.png
└── admin.png
```

C'est tout. Vite hot reload affichera le nouveau projet immédiatement.

---

## Licence

© 2026 **Marion Bozzo**. Tous droits réservés.

Le code est ouvert à l'inspection pour vérification de mes compétences, mais le contenu personnel (textes, images, CV) reste ma propriété.
