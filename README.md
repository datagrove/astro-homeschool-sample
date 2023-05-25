# Datagrove Homeschool Co-op Template Website

## About

The Datagrove Homeschool Co-op Template Website demonstrates the widgets and features available to member users. Datagrove is committed to open source code, so homeschooling families may customize this codebase as little or as much as they desire. The Datagrove team specific chose the Astro framework to make code customization as easy as accessible as possible - to folks with significant or little to no experience with coding.

[Live template site (work in progress)](dg.homeschool-template.surge.sh) | [GitHub Repo](https://github.com/datagrove/astro-homeschool-sample)

## 🚀 Technology Used
* Astro 
* SolidJS 
* TailwindCSS


```
/
├── public/
│   ├── favicon.svg
|   └── images/
├── src/
│   ├── components/
│   │   ├── common
|   |   |  ├── Header.astro
|   |   |  └── MobileMenu.astro
|   |   ├── widgets
|   |   |   ├── Calendar.astro
|   |   |   ├── Feature.astro
|   |   |   ├── Highlights.astro
|   |   |   └── Programs.astro
|   |   └── Card.astro  
|   ├── content
|   |   ├── events
|   |   ├── features
|   |   ├── guidelines
|   |   ├── highlights
|   |   └── programs
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   |   ├── index.astro
|   |   ├── 404.astro
|   |   ├── contact.md
|   |   ├── faq.mdx
|   |   ├── guideliens.astro
|   |   └── join.md
|   ├── data.ts
|   ├── env.d.ts
|   └── styles.css
├── .gitignore
├── astro.config.mjs
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.cjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

