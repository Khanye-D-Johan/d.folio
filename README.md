# `D.Folio`: My Professional Portfolio

[View Portfolio](https://khanyej.netlify.app/)

The `D.Folio` project is structure as follows:

```text
.
├── public/
├── src/
│   ├── assets/
|   |   ├── images/
|   |   └── css/
|   |
│   ├── components/
|   |   ├── Footer.astro
|   |   ├── Hero.astro
|   |   ├── Navbar.astro
|   |   └── ProjectCard.astro
|   |
│   ├── content/
│   ├── layouts/
│   └── pages/
|       ├── index.astro
|       ├── about.astro
|       ├── projects.astro
|       ├── contact.astro
|       └── blog/
|
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

----

## TODO - Getting started

- [ ] Contact:
  1. [ ] Phone
  2. [ ] Mail - Send mail feat.(Showcase skill)
  3. [ ] FB - #TODO: Create 'Professional Acc.'
- [ ] About Me
  - [ ] Skills
- [ ] Projects
- [ ] Blog

_**NB-2-REM**:
"code fence/Dynamic JS, i.e., `{}` exec. js" is exec. @ build time &
`.js` scripts are sent to the browser_.

----

### D.Folio x Blog: Features

- 100/100 Lighthouse performance
- SEO-friendly with canonical URLs and OpenGraph data
- Sitemap support x RSS Feed support
- Markdown & MDX `blogs` support

----

## Project

### Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

----

### Help & Useful Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

----

[Astro documentation](https://docs.astro.build)
[Astro Comm. on Discord](https://astro.build/chat).

----
