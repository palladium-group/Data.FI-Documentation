# Data.FI Documentation

The eCHIS Implementation Portal: one place where implementers navigate between community health workflows, reference architecture, integration workflows, standards, metadata packages and implementation guidance for the Data.FI reference eCHIS. Content follows the Digital Community Systems Implementation Guide: the method is country-led, and the reference eCHIS is the worked example. Built with [Docusaurus](https://docusaurus.io/).

**Standards:** the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/) is the computable source of truth.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm start       # http://localhost:3000/Data.FI-Documentation/
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

The site is published on GitHub Pages at https://palladium-group.github.io/Data.FI-Documentation/.

Every push to `main` builds and deploys the site automatically through `.github/workflows/deploy.yml`, usually within a couple of minutes. Progress is visible in the repository's **Actions** tab. A deploy can also be started manually from **Actions → Deploy to GitHub Pages → Run workflow**.

Pull requests run a build check (`.github/workflows/build.yml`) that fails on broken links, so problems are caught before they reach `main`.
