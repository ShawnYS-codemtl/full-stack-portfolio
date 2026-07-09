# AGENTS.md - Full-Stack Portfolio

## Current Stack
This repo is a static multi-page portfolio site, not a Next.js/React app.

- Pages: plain HTML files at the repo root (`index.html`, `about.html`, `projects.html`, `project.html`, `map.html`, `trainercard.html`).
- Styling: plain CSS in `css/index.css`, `css/map.css`, plus legacy `trainer-card.css`.
- Client code: browser ES modules in `js/`.
- Data: JavaScript modules in `data/`; the map data is authored in TypeScript and compiled to JavaScript.
- Build tooling: TypeScript only, currently used for `data/locations.ts`.
- Package type: `"type": "module"` in `package.json`.
- External browser assets: Font Awesome CDN, Devicon CDN, Google Fonts (`Press Start 2P` on the map page).
- Static assets: images in `images/`, resume PDF in `assets/`.

There is no bundler, no server framework, no Tailwind, no React runtime, and no app router. Keep changes compatible with direct static hosting such as GitHub Pages.

## Useful Commands
- `npm run build:map` - compiles `data/locations.ts` to `data/locations.js`.
- `npm test` - placeholder only; it currently exits with an error.
- `npm start` - currently points to `node index.js`, but no root `index.js` exists. Do not rely on it until the script is fixed.

For local preview, serve the repo as static files from the root so ES module imports work in the browser. A simple static file server is enough.

## Project Structure
- `index.html` - homepage with hero, skills strip, featured projects, and contact CTA.
- `about.html` - profile/background page.
- `projects.html` - project gallery page.
- `project.html` - individual project detail page driven by query params and `data/projectData.js`.
- `map.html` - interactive Montreal map page.
- `trainercard.html` / `trainer-card.css` - small standalone legacy page.
- `js/index.js` - shared navbar toggle, theme switcher, footer year, and dynamic homepage project rendering.
- `js/projects.js` - project gallery and ongoing-project rendering.
- `js/project-detail.js` - individual project detail rendering.
- `js/map.js` - map rendering, node interaction, dialogue panel, deep links, and plain fallback list.
- `js/about.js` - about-page behavior.
- `data/projectData.js` - shipped project data.
- `data/ongoingProjects.js` - ongoing project data.
- `data/locations.ts` - source of truth for map locations/routes.
- `data/locations.js` - generated browser module loaded by `js/map.js`.

## Portfolio Behavior
The shared navigation appears in every main page. If you add a page or change a nav item, update each HTML file that includes the navbar unless a shared templating layer is introduced.

Theme state is stored in `localStorage` under `theme`; pages set `data-theme` early in the `<head>` to avoid a flash of the wrong theme. Preserve that pattern on new pages.

Most dynamic content is rendered after `DOMContentLoaded`. Guard DOM lookups when a script is shared across pages, because the target container may not exist on every page.

## Map Page
The map is a static, accessible SVG-based experience in `map.html` and `js/map.js`.

- The terrain SVG is inline in `map.html`.
- Routes and nodes are rendered by `js/map.js` from `data/locations.js`.
- Edit map content in `data/locations.ts`, then run `npm run build:map`.
- Keep `data/locations.js` committed/updated because the browser imports it directly.
- Node coordinates use the SVG viewBox `0 0 480 360`; keep markers on land unless intentionally placing a river-island project node.
- Nodes should remain clickable, tappable, and keyboard-focusable.
- Deep links use URL hashes such as `map.html#mcgill`.
- The plain list in `#location-list` is the accessibility/SEO/recruiter fallback; do not remove it.
- Do not use Nintendo or Pokemon assets, sprites, fonts, names, or music. The map should stay original retro-inspired pixel styling.

## Coding Conventions
- Use browser-native ES modules with relative imports.
- Prefer plain DOM APIs and existing local helpers over introducing frameworks.
- Keep JavaScript compatible with modern evergreen browsers.
- Preserve accessibility attributes on interactive controls (`aria-label`, focusability, keyboard activation, dialog semantics).
- Avoid `innerHTML` for user/content data unless markup is explicitly intended and controlled; current renderers generally create elements and assign `textContent`.
- Keep CSS organized by page/feature and reuse existing theme variables from `css/index.css` when possible.
- Keep new visual work consistent with the existing portfolio: dark/light theme support, responsive layouts, and restrained animation.
- The repo uses four-space indentation in HTML, CSS, JS, and TS. Follow the surrounding file style.

## Data Updates
When updating project or map content:

1. Edit the source data file (`data/projectData.js`, `data/ongoingProjects.js`, or `data/locations.ts`).
2. If `data/locations.ts` changed, run `npm run build:map`.
3. Verify the affected page in a browser or static server.
4. Check mobile widths for navbar, cards, and the map panel.

## Known Gaps
- There is no automated test suite yet.
- `npm start` is stale.
- HTML navbar/footer markup is duplicated across pages.
- `data/locations.ts` compiles into the same directory as its generated JavaScript; be careful not to edit only the generated `data/locations.js` when changing map content.
