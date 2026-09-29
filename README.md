# Data.FI Documentation

The eCHIS Implementation Portal: one place where implementers navigate between community health workflows, reference architecture, integration workflows, standards, metadata packages and implementation guidance for the Data.FI reference eCHIS. Built with [Docusaurus](https://docusaurus.io/).

- **Contributing:** see [CONTRIBUTING.md](CONTRIBUTING.md). Content is plain Markdown in `docs/`, one folder per section, with templates in `templates/`.
- **Standards:** the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/) is the computable source of truth. The portal links into it rather than copying it.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm start       # http://localhost:3000
npm run build   # production build; fails on broken links
npm run serve   # serve the production build (search works here)
```

## Layout

```
docs/                 content, one folder per top-menu section
templates/            starting points for new pages
src/pages/index.js    home page
docusaurus.config.js  site settings
sidebars.js           side menus (generated from the docs/ folders)
```

## Deployment

To be decided (GitHub Pages or Cloudflare Pages). `npm run build` produces a static site in `build/` that either can serve.
