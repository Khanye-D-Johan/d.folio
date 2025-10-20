# D.Folio ("Portfolio built on `Astro`)

[View Portfolio](https://khanyej.netlify.app/)

## TODO - Getting started

- [x] *_**Deploy site**_
- [ ] Creating `.astro` pages:
  - [x] Home/About
  - [ ] Skills
  - [ ] Contact:
    1. [ ] Phone
    2. [ ] Mail - Send mail feat.(Showcase skill)

  - [ ] Projects
  - [ ] Blog

- [x] Creating `md` post in `/blog` page
- [x] JS:
  - [x] Dynamic content
  - [x] Writing `JS` expr. in `astro` templates
  - [x] Conditional Rendering

- [x] Styling Pages:
  - [x] Ind. pages
  - [x] using CSS vars.
  - [x] Site wide styling(`Global styles`)

- [ ] Astro Components:
  - [x] Navigation Component
  - [x] Footer Component
  - [ ] Socials Component:
    1. [x] Github
    2. [x] LinkedIn
    3. [x] X(Twitter)
    4. [x] Instagram
    5. [ ] FB - #TODO: Create 'Professional Acc.'
- [x] Responsive Nav _("prepare: 4 Mobile Hamburger Component")_
- [x] Send Script to Browser - *_**NB-2-REM**: "code fence/Dynamic JS, i.e., `{}` exec. js" is exec. @ build time & `.js` scripts are sent to the browser_.
- [ ] Layouts:
  - [ ] Reusable Layout
  - [ ] Pass Content 2  Layouts via `<slot />`
  - [ ] Pass Data from `.md` frontmatter to Layout
  - [ ] Nesting Layouts

## Useful Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

[Astro documentation](https://docs.astro.build)

[Astro Comm. on Discord](https://astro.build/chat).

----

## Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.


## Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
