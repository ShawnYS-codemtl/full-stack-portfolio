# CLAUDE.md — Interactive Montreal Map (portfolio page)

## Overview
A new page inside my existing portfolio website: an interactive, Pokémon-Platinum-inspired map of the Island of Montreal. Visitors roam the map and click locations to learn about me — my life journey (home, schools, university), projects, hobbies, and how to get in touch. It's an optional, playful "front door" to my background; the rest of the portfolio stays as-is. The goal is memorability for the people who wander in (mostly recruiters), without making anyone solve a maze to reach the substance.

**Audience:** primarily recruiters / hiring managers (security & full-stack roles), plus curious peers. Implication: it must load fast, be accessible, be crawlable/linkable, and always offer a plain way to reach the content.

## Assumptions to confirm
- **Existing stack (assumed):** Next.js (App Router) + React + TypeScript + Tailwind CSS, deployed on Vercel. If the real stack differs (Astro, Vite + React, plain React, etc.), keep the same architecture and swap only the framework specifics. **← confirm before building.**
- Added into the existing repo as one route; it reuses the site's shared layout, nav, and design tokens.

## In scope (v1)
The interactive map page and everything needed to explore it by clicking — on desktop and mobile, accessibly.

### Explicitly out of scope (do not build)
- ❌ **Walkable avatar / keyboard "overworld" movement** in v1 — deferred to Later. Validate the click interaction first; a movement engine is a big investment.
- ❌ **Backend, database, accounts, or auth** — all content is static, public info about me.
- ❌ **CMS / admin UI** to edit locations — I'll edit the typed data file directly.
- ❌ **Any Nintendo / Pokémon assets** — no ripped sprites, tilesets, names, fonts, or music. Original pixel-art styling only (IP safety on a public professional site).
- ❌ **Sound / music** in v1 — autoplay is hostile; if added later it's an opt-in toggle.
- ❌ **Comments, guestbook, multiplayer, visitor accounts.**
- ❌ **Touching the rest of the portfolio** — this is one self-contained page.
- ❌ **A procedural tilemap / collision engine** — overkill for a click-to-explore map.

## Features by phase
### MVP
- [MVP] New route (e.g. `/map`) in the existing app, using the shared layout/nav.
- [MVP] A stylized map of the Island of Montreal renders as inline SVG: terrain, water, branching routes, and location nodes at their real relative positions.
- [MVP] Nodes are clickable, tappable, and keyboard-focusable; activating one opens an info panel with that location's content (title, neighbourhood, blurb, optional images/links).
- [MVP] All location data comes from one typed data file (`data/locations.ts`) — adding/moving a location = editing that file.
- [MVP] Responsive: usable on phones (fit-to-screen or pan/zoom) and desktop.
- [MVP] Always-visible **"list view / skip to résumé"** fallback — the recruiter escape hatch, and it doubles as accessibility + SEO (content lives in the DOM).
- [MVP] Pokémon-overworld styling: pixel font, a dialogue-box-style info panel, node/route styling, and a "start here" cue on the Home node.

### Fast-follow
- [Fast-follow] Hover and entrance animations; a small decorative animated sprite; a subtle highlighted "recommended path" showing the chronological order.
- [Fast-follow] Replace flat SVG shapes with original pixel-art tiles/sprites for a richer look.
- [Fast-follow] Deep-linkable locations (e.g. `/map#mcgill` opens that panel) for sharing.
- [Fast-follow] A small "badge earned" flourish when a location is first opened.

### Later
- [Later] **Walkable avatar** with keyboard / touch movement across the map — the full game feel (see Tech stack → Later).
- [Later] Opt-in chiptune toggle.
- [Later] Lightweight analytics on which locations get opened.
- [Later] Fill the deliberately-empty east end of the island with new locations over time.

## Architecture sketch
- **One page** in the existing app: `app/map/page.tsx` (statically generated), wrapped in the site's layout.
- **Components:**
  - `RegionMap` — renders the SVG scene (terrain, routes, all nodes); owns pan/zoom + selection state.
  - `MapNode` — a single node: `<g>` / shape with `onClick`, `tabIndex`, `role="button"`, `aria-label`; visual varies by category.
  - `LocationPanel` — the info drawer / modal (dialogue-box styled); a focus-trapped dialog, closable by Esc / click-away.
  - `LocationList` — the plain fallback list of all locations (also the "skip" target).
  - `MapControls` (optional) — zoom / reset, toggle the recommended path.
- **Data:** `data/locations.ts` exports a typed array. Suggested shape:
  ```ts
  type Category = 'life' | 'project' | 'hobby' | 'park' | 'landmark' | 'contact';

  interface Location {
    id: string;            // 'mcgill'
    name: string;          // 'McGill University'
    neighbourhood: string; // 'Downtown'
    category: Category;     // drives marker colour / shape
    coords: { x: number; y: number }; // position in the SVG viewBox — place carefully over land
    order?: number;        // for the chronological "recommended path"
    blurb: string;         // one or two lines shown in the panel
    body?: string;         // longer content (markdown or JSX)
    images?: string[];
    links?: { label: string; href: string }[];
    routeName?: string;    // e.g. a hobby-as-road ("Runner's Way")
  }
  ```
  Routes between nodes can be a second small typed list (fromId → toId, optional name) or hand-drawn SVG paths — start with hand-drawn paths for control.
- **State:** selected location id in React state; optionally mirror it in the URL hash for deep-linking. No global store needed.
- **Rendering & interaction:** inline SVG in React. Pan/zoom = a CSS `transform` on the map `<g>` driven by state (or a small pan/zoom lib). Keep everything in the DOM — no canvas-only rendering — so it stays accessible and crawlable.
- **No server data.** Static generation; content ships in the bundle → fast + good SEO.
- **Assets:** pixel font via `next/font`; any pixel-art images in `/public`. Place node coordinates precisely on land (an earlier sketch had markers over water — position each node against the drawn terrain).

## Tech stack
> Verify every package's current version and maintenance status against its docs / npm at setup — some of these move fast.

### MVP dependencies
| Piece | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) + React + TypeScript | assumed — match the existing site |
| Styling | Tailwind CSS | assumed — or the site's existing approach |
| Map | Inline SVG (no library) | full control; nodes are DOM elements → clickable + accessible |
| Pan/zoom (optional) | CSS transforms, or a maintained SVG pan-zoom lib | only if the map needs panning on small screens — verify currency |
| Animation (optional) | Motion (the library formerly published as `framer-motion`) | hover / panel transitions — **verify the current package name at install** |
| Pixel font | Google "Press Start 2P" via `next/font` | the recognizable Pokémon-dialogue vibe, free |
| Content | Typed `locations.ts` (no backend) | — |

### Later dependencies (only if building the walkable version)
| Piece | Choice | Notes |
|---|---|---|
| Game rendering | PixiJS + its React binding, **or** Phaser | controllable avatar + smooth pan; heavier — **verify current Pixi / binding versions**, they've had breaking releases |
| Pixel art | Original tilesets / sprites (e.g. made in Aseprite) | no Nintendo assets |
| Sound (opt-in) | Howler.js or the Web Audio API | muted by default |

## Key decisions (with rationale)
- **One page in the existing site, not a separate app** — reuse layout / deploy; keep it an optional detour, not the homepage.
- **Free-roam click-to-explore, not linear unlock** — recruiters can jump straight to projects or contact; the map is a front door, not a gate.
- **MVP = SVG / DOM map (click nodes → panel), not a game engine** — ships fast, stays accessible and crawlable, and validates whether the click interaction is even fun before investing in avatar movement.
- **Geographically faithful node placement + branching routes** — the charm is that it's really Montreal; positions live in data so they're easy to nudge.
- **Original pixel-art styling only** — IP safety on a public professional site.
- **Static content, no backend / DB / auth** — it's read-only info about me.
- **A list / "skip" view is always available** — recruiter escape hatch, plus accessibility and SEO for free.

## Phase 0 — thinnest slice to validate first
**Riskiest assumption:** *is clicking nodes on a Montreal map an engaging, good-looking way to read about me — worth building out?* Not "can I render a map."

**Build only this, then stop and look:**
1. The `/map` route with the Montreal terrain as inline SVG.
2. **Three** real nodes at roughly their described positions: Home (West Island), McGill (downtown), and one project (river island) — driven by `locations.ts`.
3. The Pokémon-style shell: pixel font + a dialogue-box `LocationPanel`.
4. Click / tap / keyboard-focus a node → panel opens with that location's real content.
5. The plain `LocationList` fallback.

Preview on desktop **and** a phone. If the interaction feels good and looks right, proceed to add the remaining nodes, the branching routes, the styling polish, and (only if wanted) the walkable version. If it feels flat, that's cheap to learn now — pivot before building fifteen nodes.
