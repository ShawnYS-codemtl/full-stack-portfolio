export const projects = [
    {
        "id": "sticker-ecommerce",
        "name": "Sticker E-Commerce Platform",
        "tagline": "Full-stack e-commerce platform built end-to-end for a real sticker business.",
        "highlights": [
            "Stripe checkout with webhook-driven order processing",
            "Role-based admin access via Supabase RLS and authentication",
            "Automated customer email notifications across the full order lifecycle"
        ],
        "desc": "Production-grade full-stack e-commerce platform: Next.js/TypeScript storefront with Supabase backend, Stripe checkout with webhook-driven order processing, role-based admin access via Supabase RLS, and automated customer email notifications via Resend.",
        "technologies": ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe', 'Resend', 'Figma', 'Vercel'],
        "github_repo": "https://github.com/ShawnYS-codemtl/momentong2.1",
        "direct_link": "https://momentong.vercel.app/",
        "img": "images/momentong.png",
        "featured": true,
        "details": {
            "problem": "The sticker business ran entirely on Instagram DMs and Google Forms — orders required manual coordination and in-person meetups, limiting growth to local customers only with no way to accept online payment or ship nationally.",
            "approach": "Built with Next.js App Router and TypeScript for clean server/client separation. Supabase handles PostgreSQL storage, authentication, file storage, and Row Level Security for role-based admin access. Stripe webhooks automate the full order lifecycle. Dynamic routing powers individual product pages. Deployed and scaled on Vercel.",
            "outcome": "The platform enabled online payments and national shipping across Canada, eliminated manual order coordination through automation, and removed the geographic ceiling on the business entirely."
        }
    },
    {
        "id": "peer-mentorship",
        "name": "Peer Mentorship Admin Platform",
        "tagline": "Algorithmic matching tool that pairs 200+ mentors and mentees in seconds.",
        "highlights": [
            "Min-cost max-flow algorithm with multi-factor scoring (0–100)",
            "React/TypeScript admin dashboard with live score previews and manual overrides",
            "Two-step CSV import pipeline with auto-detected column mapping"
        ],
        "desc": "Reduced mentor–mentee assignment time from hours to seconds for 200+ participants using a min-cost max-flow algorithm with multi-factor scoring. Full-stack app on Vercel/Render with Supabase PostgreSQL, a two-step CSV import pipeline, and a React/TypeScript admin dashboard with manual override workflows.",
        "technologies": ['Python', 'Flask', 'React', 'TypeScript', 'SQLAlchemy', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'REST APIs', 'Vercel', 'Render'],
        "github_repo": "https://github.com/ShawnYS-codemtl/nursing-mentorship-matcher",
        "direct_link": "https://nursing-mentorship-matcher.vercel.app/",
        "img": "images/mentorship.png",
        "featured": true,
        "details": {
            "problem": "McGill nursing administrators were manually pairing mentors and mentees from Google Form exports — a process that was time-consuming, inconsistent, and completely unscalable for 200+ participants per cohort.",
            "approach": "A four-stage CSV import pipeline handles column mapping, type conversion, validation, and persistence with fuzzy-matching for messy input. The matching engine uses a min-cost max-flow graph algorithm with a 0–100 scoring system: program alignment (35 pts), specialty alignment (35 pts), and identity/extracurricular factors (30 pts), with hard constraints for seniority and language. The React/TypeScript admin dashboard shows live score previews and supports manual overrides and match locking.",
            "outcome": "Assignment time dropped from hours to seconds. The app is in production on Vercel (frontend), Render (backend), and Supabase PostgreSQL. It supports CSV upload and validation, automated matching, manual pairing with live score feedback, spreadsheet export, and full data reset."
        }
    },
    {
        "id": "mars-rover",
        "name": "Mars Rover Simulator",
        "tagline": "Capstone simulator using real NASA terrain data and pathfinding algorithms.",
        "highlights": [
            "A*, BFS, and DFS pathfinding with configurable heuristics",
            "Rasterio integration for real NASA HRSC MOLA elevation data",
            "SQLite mission logs tracking distance, energy, and duration"
        ],
        "desc": "Capstone project (Agile team of 7): simulates Mars rover missions with real NASA HRSC MOLA terrain data, A*/BFS/DFS pathfinding with configurable heuristics, and SQLite-backed mission logs tracking distance, energy, and duration.",
        "technologies": ['Python', 'Pygame', 'Rasterio', 'SQLite', 'PyInstaller', 'Jira'],
        "github_repo": "https://github.com/ShawnYS-codemtl/mars-rover-simulator",
        "direct_link": null,
        "img": "images/mars-rover.png",
        "featured": true,
        "details": {
            "problem": "Our capstone team needed to build a realistic Mars rover mission planning simulator that used actual planetary terrain data — not procedurally generated maps — and could model real mission constraints like energy usage and pathfinding tradeoffs.",
            "approach": "7-member Agile team coordinated via Jira. Python and Pygame power the simulation engine. Rasterio parses real NASA HRSC MOLA elevation data into traversable terrain maps. Three pathfinding algorithms — A*, BFS, and DFS — are implemented with configurable heuristics so users can compare mission routes. SQLite persists rover configurations and mission logs (distance, energy, duration). PyInstaller packages the app for desktop distribution.",
            "outcome": "A functional desktop simulator with interactive terrain maps, path visualization, and persistent mission statistics. The project demonstrated real-world Agile collaboration, integration of genuine scientific datasets, and practical algorithm design across a full semester."
        }
    },
    {
        "id": "face-journal",
        "name": "Face Time-Lapse Journal",
        "tagline": "Private mobile app to journal your face over time and scrub through the change.",
        "highlights": [
            "Time scrubber morphs through dated selfies with face-landmark auto-alignment",
            "On-device encrypted storage behind a biometric app lock — nothing is uploaded",
            "Passphrase-encrypted export/import backup and optional daily capture reminders"
        ],
        "desc": "A private React Native/Expo app for journaling your own face over time: front-camera capture into an encrypted on-device sandbox, a scrubber that morphs through dated photos with face-landmark alignment, calendar and journaling views, biometric lock, and passphrase-encrypted backup — no account, no backend, nothing uploaded.",
        "technologies": ['React Native', 'Expo', 'TypeScript', 'VisionCamera', 'Face Detection', 'SQLite', 'Reanimated', 'libsodium', 'Expo Notifications'],
        "github_repo": "https://github.com/ShawnYS-codemtl/face-journal",
        "direct_link": null,
        "img": null,
        "featured": true,
        "details": {
            "problem": "People take periodic selfies to watch themselves change over months and years, but keeping them in the system camera roll clutters the main photo library and makes chronological review painful. Existing apps drift into skin-scoring or social feeds — there was no private, dedicated home built purely for seeing your own face change over time.",
            "approach": "React Native + Expo (TypeScript). The front camera saves each shot date-stamped into a private app sandbox (never the system photo library), tracked in SQLite, with a faint ghost overlay of the previous photo for consistent framing. The hero experience is a horizontal scrubber (Reanimated) that morphs through frames, with face-landmark auto-alignment so consecutive photos register into a smooth morph instead of a jittery slideshow; a calendar/grid jumps to any date and day-level notes attach to entries. Privacy is local-first: a biometric/passcode app lock on open, and a passphrase-encrypted (libsodium) export bundle for user-owned backup. Optional local reminders (a fixed time or a BeReal-style random daily time) skip days already captured.",
            "outcome": "A working, private-by-default journaling app for iOS and Android — no account, no server, nothing uploaded — where capturing today's photo is one or two taps and the scrubber makes subtle change over time genuinely visible."
        }
    },
    {
        "id": "smartly-goals",
        "name": "Smartly Goals",
        "tagline": "AI-powered SMART goal builder with real-time feedback and PDF export.",
        "highlights": [
            "Llama 3 via Hugging Face Inference API evaluates goals in real time",
            "Iterative prompt engineering for consistent, structured AI feedback",
            "PDF export via html2pdf.js with LocalStorage session persistence"
        ],
        "desc": "AI-powered SMART goal builder: integrates the Llama 3 model via Hugging Face's inference API to evaluate user-generated goals in real time, with iterative prompt refinement and PDF export via html2pdf.js.",
        "technologies": ['React', 'JavaScript', 'Node.js', 'Vercel Serverless Functions', 'HuggingFace Inference API', 'LocalStorage'],
        "github_repo": "https://github.com/ShawnYS-codemtl/smartly-goals",
        "direct_link": "https://smartly-goals-app.vercel.app/",
        "img": "images/goals-section.png",
        "featured": false,
        "details": {
            "problem": "Most people write vague, unmeasurable goals without realizing it. The SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound) is well-known but hard to apply without structured feedback.",
            "approach": "React frontend with Vercel Serverless Functions acting as a secure backend. The Hugging Face Inference API runs Meta LLaMA 3 to evaluate each submitted goal and return structured critique. Prompt structure was iteratively refined to improve feedback consistency and quality. html2pdf.js generates formatted PDF exports. LocalStorage preserves session state between visits.",
            "outcome": "A live web app where users get real-time AI critique on their goals and can download polished goal summaries as PDFs. The project deepened experience with serverless architecture, prompt engineering, and third-party API integration."
        }
    },
    {
        "id": "checkers-type-games",
        "name": "Checkers Type Games",
        "tagline": "Playable Checkers and Konane with a minimax AI opponent.",
        "highlights": [
            "Minimax AI with alpha-beta pruning evaluating up to depth 6",
            "Three difficulty levels scaling search depth and evaluation heuristics",
            "Local 1v1 and human vs AI modes with undo and reset"
        ],
        "desc": "Interactive web app with Checkers and Konane, featuring a minimax AI opponent with alpha-beta pruning that evaluates positions up to depth 6.",
        "technologies": ['TypeScript', 'React', 'Tailwind', 'Vite'],
        "github_repo": "https://github.com/ShawnYS-codemtl/checkers-type-games",
        "direct_link": "https://checkerstypegames.netlify.app/",
        "img": "images/checkers_games.png",
        "featured": false,
        "details": {
            "problem": "Wanted a clean, fully-typed implementation of Checkers and Konane supporting both local multiplayer and a genuinely challenging AI opponent — not just random moves.",
            "approach": "TypeScript + React + Vite + Tailwind. The AI uses Minimax with alpha-beta pruning across three difficulty levels that scale search depth and the evaluation heuristic. All game state is managed in React with full undo and reset support. TypeScript enforced correctness across the entire game logic layer.",
            "outcome": "Deployed web app with local 1v1, human vs AI at three difficulty levels, and customizable board sizes. The project demonstrated game tree search algorithms, complex React state management, and the practical benefits of TypeScript for stateful applications."
        }
    },
    {
        "id": "anime-tracker",
        "name": "Anime Tracker",
        "tagline": "SwiftUI iOS app to search, discover, and track anime shows.",
        "highlights": [
            "MVVM architecture with Swift async/await and Kingfisher image caching",
            "Jikan API integration with curated lists and infinite scroll genre filtering",
            "Deployable on real devices via AltStore without a paid developer account"
        ],
        "desc": "SwiftUI iOS app to search and track anime via the Jikan API, with persistent watchlists and detailed show pages — installable via AltStore.",
        "technologies": ['Swift', 'SwiftUI', 'Kingfisher', 'XCode', 'AltStore', 'Jikan API'],
        "github_repo": "https://github.com/ShawnYS-codemtl/anime-tracker",
        "direct_link": null,
        "img": "images/animetracker.png",
        "featured": false,
        "details": {
            "problem": "Anime fans lack a single iOS app that lets them search, browse curated lists, and maintain a personal watchlist in one place without a paid developer account to distribute it.",
            "approach": "SwiftUI for declarative, responsive UI. MVVM architecture keeps views and business logic cleanly separated. Swift async/await handles all API networking. Kingfisher caches images efficiently. The Jikan API (MyAnimeList's public API) provides all show data. Swift Codable with JSON file storage persists the local watchlist. Robust error handling manages Jikan's rate limits gracefully.",
            "outcome": "Deployed on a real iPhone via Xcode and the Apple Developer Program, distributed via AltStore. Features include live search, horizontally scrollable curated lists (trending, airing, upcoming, top-rated), genre filtering with infinite scroll, detailed show views, and a fully working local watchlist."
        }
    },
    {
        "id": "chef-claude",
        "name": "Chef Claude",
        "tagline": "Generate recipes from ingredients you already have, powered by Claude AI.",
        "highlights": [
            "Express proxy keeps the Anthropic API key server-side",
            "React state and form management for a smooth ingredient-to-recipe flow",
            "Deployed across GitHub Pages (frontend) and Render (backend)"
        ],
        "desc": "Full-stack recipe generator: a React frontend calls an Express proxy that forwards requests to Anthropic's Claude AI, keeping the API key off the client.",
        "technologies": ['React', 'JavaScript', 'Node.js', 'Express', 'CORS', 'Anthropic Claude AI'],
        "github_repo": "https://github.com/ShawnYS-codemtl/chef-claude",
        "direct_link": "https://shawnys-codemtl.github.io/chef-claude/",
        "img": "images/chef-claude.png",
        "featured": false,
        "details": {
            "problem": "Users want recipe ideas based on ingredients they already have, without manually browsing multiple recipe sites or needing to know what to cook from scratch.",
            "approach": "React frontend manages all user interactions and state. A Node.js/Express server acts as a secure proxy — it receives ingredient lists from the client and forwards requests to the Anthropic Claude API using server-side credentials, ensuring the API key never reaches the browser. The React app is deployed on GitHub Pages with a custom base path; the Express backend runs on Render.com.",
            "outcome": "A functional single-page app demonstrating secure API proxying, React state and form management, and cross-origin deployment. Solved non-trivial GitHub Pages subdirectory hosting challenges to get the full-stack deployment working cleanly."
        }
    },
    {
        "id": "productivity-dashboard",
        "name": "Productivity Dashboard",
        "tagline": "All-in-one productivity suite with no backend or account required.",
        "highlights": [
            "Pomodoro timer with SVG circular progress and audio alerts",
            "Drag-and-drop task reordering with inline editing and filtering",
            "Full LocalStorage persistence — works completely offline"
        ],
        "desc": "A dashboard featuring a to-do list, pomodoro timer, habit tracker, and calendar — all persisted via localStorage with zero backend dependency.",
        "technologies": ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'LocalStorage'],
        "github_repo": "https://github.com/ShawnYS-codemtl/productivity-dashboard",
        "direct_link": "https://shawnys-codemtl.github.io/productivity-dashboard/",
        "img": "images/productivity-dashboard.png",
        "featured": false,
        "details": {
            "problem": "No single lightweight tool combined task management, Pomodoro timing, habit tracking, and calendar scheduling in one place with offline persistence — most solutions required accounts, backends, or heavy frameworks.",
            "approach": "Pure HTML, CSS, and JavaScript with ES6 modules and DOM manipulation — no frameworks. Features include drag-and-drop task reordering, inline editing, a Pomodoro timer with SVG circular progress and audio alerts, habit streak calculations, and a dynamically rendered calendar grid with event scheduling. All data is persisted via LocalStorage. Architected as ES6 modules for maintainability and designed to be packaged as an Electron desktop app.",
            "outcome": "A fully self-contained productivity suite that runs as a web app or desktop application with no backend required. Demonstrated that advanced interactive patterns — drag-and-drop, real-time timers, complex state — are achievable in vanilla JS without any framework."
        }
    }
]
