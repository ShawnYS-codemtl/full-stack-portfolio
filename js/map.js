// Interactive Montreal map: renders orange routes + location nodes from
// data/locations.js onto the SVG, drives the dialogue-box panel, supports
// deep-linking (#id), and renders the plain list fallback.
import "./index.js"; // shared navbar toggle, theme switch, footer year
import { locations, routes } from "../data/locations.js";

const SVG_NS = "http://www.w3.org/2000/svg";

// main = marker face, dark = bevel shadow, light = top highlight.
// Colour encodes the category, so the map scales as nodes are added.
const CATEGORY_COLORS = {
    city:          { main: "#f25a4a", dark: "#b23425", light: "#ff9584" },
    job:           { main: "#34b36b", dark: "#1f7a47", light: "#74d99f" },
    school:        { main: "#f8d030", dark: "#b38a10", light: "#ffe98a" },
    life:          { main: "#f25a4a", dark: "#b23425", light: "#ff9584" },
    park:          { main: "#34b36b", dark: "#1f7a47", light: "#74d99f" },
    hobby:         { main: "#ef9f27", dark: "#a86d10", light: "#ffca7a" },
    neighbourhood: { main: "#e0734a", dark: "#a84c2b", light: "#f7a785" },
    landmark:      { main: "#b5793c", dark: "#7d4f22", light: "#e0ad6e" },
    contact:       { main: "#9b59c6", dark: "#6b3a91", light: "#c99be8" },
    project:       { main: "#7a6650", dark: "#4a3527", light: "#b9a689" },
};

const nodeById = new Map();
const locById = new Map(locations.map((l) => [l.id, l]));
let openedFromNode = null;

document.addEventListener("DOMContentLoaded", () => {
    const routesLayer = document.getElementById("map-routes");
    const nodesLayer = document.getElementById("map-nodes");
    const banner = document.getElementById("map-banner");
    const panel = document.getElementById("location-panel");
    const listContainer = document.getElementById("location-list-items");
    const svg = document.getElementById("region-map");

    drawRoutes(routesLayer);
    locations.forEach((loc) => {
        const node = buildNode(loc, banner, panel);
        nodeById.set(loc.id, node);
        nodesLayer.appendChild(node);
    });
    renderList(listContainer);

    document.getElementById("panel-close").addEventListener("click", () => closePanel(panel));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !panel.hidden) closePanel(panel);
    });

    // Click on open water (not a node) closes the panel
    svg.addEventListener("click", (e) => {
        if (!e.target.closest(".map-node") && !panel.hidden) closePanel(panel);
    });

    // Keep keyboard focus inside the dialogue box while it is open
    panel.addEventListener("keydown", (e) => {
        if (e.key !== "Tab") return;
        const focusables = panel.querySelectorAll("button, a[href]");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

    // Deep-linking: open the panel named in the URL hash, and respond to
    // shared links / back-forward navigation.
    if (locById.has(location.hash.slice(1))) openById(location.hash.slice(1), panel);
    window.addEventListener("hashchange", () => {
        const id = location.hash.slice(1);
        if (locById.has(id)) openById(id, panel);
    });
});

function svgEl(tag, attrs = {}) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    return el;
}

// Rounded-square town marker with a cream border + bevel, centred at (10,10).
function buildMarker(inner, color) {
    inner.appendChild(svgEl("rect", { x: 1, y: 1, width: 18, height: 18, rx: 6, fill: "#fbf3df" }));
    inner.appendChild(svgEl("rect", { x: 3.5, y: 4, width: 14, height: 14, rx: 4, fill: color.dark }));
    inner.appendChild(svgEl("rect", { x: 3, y: 3, width: 14, height: 14, rx: 4, fill: color.main, stroke: "rgba(40, 20, 10, 0.35)", "stroke-width": 1 }));
    inner.appendChild(svgEl("rect", { x: 5, y: 4.5, width: 6, height: 2.5, rx: 1.5, fill: color.light, opacity: 0.85 }));
}

// Small square school marker, centred at (10,10), matching job marker scale.
function buildSchoolMarker(inner, color) {
    inner.appendChild(svgEl("rect", { x: 6.625, y: 6.625, width: 6.75, height: 6.75, rx: 1, fill: "#fbf3df" }));
    inner.appendChild(svgEl("rect", { x: 7.625, y: 8, width: 4.75, height: 4.75, rx: 0.625, fill: color.dark }));
    inner.appendChild(svgEl("rect", { x: 7.625, y: 7.625, width: 4.75, height: 4.75, rx: 0.625, fill: color.main, stroke: "rgba(70, 50, 5, 0.45)", "stroke-width": 0.625 }));
    inner.appendChild(svgEl("rect", { x: 8.375, y: 8.25, width: 1.875, height: 0.875, rx: 0.375, fill: color.light, opacity: 0.9 }));
}

// Small circular work marker, centred at (10,10), using the same focus target.
function buildJobMarker(inner, color) {
    inner.appendChild(svgEl("circle", { cx: 10, cy: 10, r: 3.375, fill: "#fbf3df" }));
    inner.appendChild(svgEl("circle", { cx: 10.25, cy: 10.375, r: 2.375, fill: color.dark }));
    inner.appendChild(svgEl("circle", { cx: 10, cy: 10, r: 2.375, fill: color.main, stroke: "rgba(20, 50, 25, 0.4)", "stroke-width": 0.625 }));
    inner.appendChild(svgEl("circle", { cx: 9.125, cy: 9.125, r: 0.75, fill: color.light, opacity: 0.85 }));
}

// A dark cave-mouth marker for projects (stone face + arched entrance).
function buildCave(inner) {
    inner.appendChild(svgEl("rect", { x: 1, y: 1, width: 18, height: 18, rx: 6, fill: "#fbf3df" }));
    inner.appendChild(svgEl("rect", { x: 3, y: 3, width: 14, height: 14, rx: 4, fill: "#9a8c7a", stroke: "rgba(40, 20, 10, 0.35)", "stroke-width": 1 }));
    inner.appendChild(svgEl("rect", { x: 4.5, y: 4, width: 6, height: 2.2, rx: 1.1, fill: "#c3b6a2", opacity: 0.8 }));
    inner.appendChild(svgEl("path", { d: "M6.5 16 L6.5 11 Q6.5 6.5 10 6.5 Q13.5 6.5 13.5 11 L13.5 16 Z", fill: "#2b2018" }));
}

// A stepped orthogonal road between two nodes, like an overworld route.
function drawRoutes(layer) {
    routes.forEach(([fromId, toId]) => {
        const a = locById.get(fromId);
        const b = locById.get(toId);
        if (!a || !b) return;
        const midX = (a.coords.x + b.coords.x) / 2;
        const d = `M ${a.coords.x} ${a.coords.y} H ${midX} V ${b.coords.y} H ${b.coords.x}`;
        layer.appendChild(svgEl("path", { class: "route-casing", d }));
        layer.appendChild(svgEl("path", { class: "route-fill", d }));
        layer.appendChild(svgEl("path", { class: "route-dash", d }));
    });
}

// Uniform rounded-square marker (cream border + bevel), except projects, which
// render as a dark cave-mouth. Life nodes carry their journey number 1–5.
function buildNode(loc, banner, panel) {
    const color = CATEGORY_COLORS[loc.category] || CATEGORY_COLORS.project;
    const g = svgEl("g", {
        class: "map-node",
        transform: `translate(${loc.coords.x - 10}, ${loc.coords.y - 10})`,
        tabindex: "0",
        role: "button",
        "aria-label": `${loc.name} — ${loc.neighbourhood}. Press Enter to read about it.`,
    });
    g.dataset.id = loc.id;

    g.appendChild(svgEl("rect", { class: "node-ring", x: -1.5, y: -1.5, width: 23, height: 23, rx: 7 }));

    const inner = svgEl("g", { class: "node-inner" });
    if (loc.category === "project") {
        buildCave(inner);
    } else if (loc.category === "school") {
        buildSchoolMarker(inner, color);
    } else if (loc.category === "job") {
        buildJobMarker(inner, color);
    } else {
        buildMarker(inner, color);
        if (loc.category === "life" && loc.order != null) {
            const num = svgEl("text", {
                class: "node-number",
                x: 10,
                y: 10.6,
                "text-anchor": "middle",
                "dominant-baseline": "central",
                "font-size": 10,
            });
            num.textContent = String(loc.order);
            inner.appendChild(num);
        }
    }
    g.appendChild(inner);

    if (loc.id === "home") {
        const cue = svgEl("text", {
            class: "start-cue",
            x: 10,
            y: -8,
            "text-anchor": "middle",
            "font-size": 9,
            "aria-hidden": "true",
        });
        cue.textContent = "START ▼";
        g.appendChild(cue);
    }

    g.addEventListener("click", () => openPanel(loc, g, panel));
    g.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPanel(loc, g, panel);
        }
    });
    g.addEventListener("mouseenter", () => (banner.textContent = loc.name.toUpperCase()));
    g.addEventListener("mouseleave", () => (banner.textContent = ""));
    g.addEventListener("focus", () => (banner.textContent = loc.name.toUpperCase()));
    g.addEventListener("blur", () => (banner.textContent = ""));

    return g;
}

// Open a location by id (used by deep-links); focuses its node first.
function openById(id, panel) {
    const loc = locById.get(id);
    const node = nodeById.get(id);
    if (!loc || !node) return;
    openPanel(loc, node, panel);
}

function openPanel(loc, node, panel) {
    openedFromNode = node;
    panel.dataset.category = loc.category;
    panel.querySelector("#panel-title").textContent = loc.name;

    const meta = panel.querySelector("#panel-meta");
    meta.innerHTML = "";
    const chip = document.createElement("span");
    chip.className = "panel-chip";
    chip.textContent = loc.category;
    meta.appendChild(chip);
    meta.appendChild(document.createTextNode(loc.neighbourhood));

    const body = panel.querySelector("#panel-body");
    body.innerHTML = "";

    const blurb = document.createElement("p");
    blurb.className = "panel-blurb";
    blurb.textContent = loc.blurb;
    body.appendChild(blurb);

    (loc.images || []).forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Screenshot of ${loc.name}`;
        img.loading = "lazy";
        body.appendChild(img);
    });

    (loc.body || []).forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        body.appendChild(p);
    });

    if (loc.links && loc.links.length) {
        const links = document.createElement("div");
        links.className = "panel-links";
        loc.links.forEach(({ label, href }) => {
            const a = document.createElement("a");
            a.href = href;
            a.textContent = `▸ ${label}`;
            if (href.startsWith("http") || href.startsWith("mailto:")) {
                a.rel = "noopener";
                if (href.startsWith("http")) a.target = "_blank";
            }
            links.appendChild(a);
        });
        body.appendChild(links);
    }

    panel.hidden = false;
    panel.scrollTop = 0;
    // Make the panel shareable without adding a history entry per click.
    history.replaceState(null, "", `#${loc.id}`);
    panel.querySelector("#panel-close").focus();
}

function closePanel(panel) {
    panel.hidden = true;
    history.replaceState(null, "", location.pathname + location.search);
    if (openedFromNode) {
        openedFromNode.focus();
        openedFromNode = null;
    }
}

function renderList(container) {
    const sorted = [...locations].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
    sorted.forEach((loc) => {
        const card = document.createElement("article");
        card.className = "location-card";
        card.id = `card-${loc.id}`;

        const h3 = document.createElement("h3");
        h3.textContent = loc.name;
        card.appendChild(h3);

        const meta = document.createElement("p");
        meta.className = "card-meta";
        meta.textContent = `${loc.neighbourhood} · ${loc.category}`;
        card.appendChild(meta);

        const blurb = document.createElement("p");
        blurb.textContent = loc.blurb;
        card.appendChild(blurb);

        (loc.body || []).forEach((text) => {
            const p = document.createElement("p");
            p.textContent = text;
            card.appendChild(p);
        });

        if (loc.links && loc.links.length) {
            const links = document.createElement("div");
            links.className = "card-links";
            loc.links.forEach(({ label, href }) => {
                const a = document.createElement("a");
                a.href = href;
                a.textContent = `${label} →`;
                if (href.startsWith("http") || href.startsWith("mailto:")) {
                    a.rel = "noopener";
                    if (href.startsWith("http")) a.target = "_blank";
                }
                links.appendChild(a);
            });
            card.appendChild(links);
        }

        container.appendChild(card);
    });
}
