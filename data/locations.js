// Source of truth for the /map page. Edit this file, then run `npm run build:map`
// to regenerate data/locations.js (the file the browser actually loads).
/** Orange overworld routes drawn between nodes (rendered under the markers). */
export const routes = [
    ['cegep', 'home'],
    ['home', 'bouldering'],
    ['home', 'west-island-parks'],
    ['home', 'primary-school'],
    ['home', 'high-school'],
    ['primary-school', 'judo'],
    ['judo', 'mount-royal'],
    ['high-school', 'dragon-boat'],
    ['dragon-boat', 'peer-mentorship'],
    ['peer-mentorship', 'mcgill'],
    ['mount-royal', 'plateau'],
    ['mount-royal', 'mcgill'],
    ['mcgill', 'work'],
    ['mcgill', 'mars-rover'],
    ['mars-rover', 'sticker-ecommerce'],
    ['sticker-ecommerce', 'contact'],
    ['work', 'contact'],
    ['mcgill', 'projects-portal'],
];
export const locations = [
    // ---- Life journey (numbered red pins, 1–5) ----
    {
        id: 'home',
        name: 'Home',
        neighbourhood: 'West Island',
        category: 'life',
        coords: { x: 92, y: 208 },
        order: 1,
        blurb: 'Where the journey starts — born and raised on the West Island of Montreal.',
        body: [
            'I grew up here on the west end of the island, fully bilingual in English and French. My parents moved to Montreal from the tropical island of Mauritius, which gave me a love for diversity and adventure.',
            'I build projects my friends and I would actually want to use. This map is a tour of my Montreal — start here and wander east.'
        ]
    },
    {
        id: 'primary-school',
        name: 'Primary School',
        neighbourhood: 'Roxboro',
        category: 'life',
        coords: { x: 152, y: 132 },
        order: 2,
        blurb: 'The early years — grade school in the Roxboro neighbourhood.',
        body: [
            'Roxboro sits on the north shore of the island, along the Rivière des Prairies. This is where my school days started.'
        ]
    },
    {
        id: 'high-school',
        name: 'High School',
        neighbourhood: 'Lachine',
        category: 'life',
        coords: { x: 168, y: 246 },
        order: 3,
        blurb: 'The high-school years, down on the south-west shore in Lachine.',
        body: [
            'Lachine hugs the shore of Lac Saint-Louis in the island\'s south-west. This stretch marks my high-school years.'
        ]
    },
    {
        id: 'cegep',
        name: 'CEGEP',
        neighbourhood: 'Ste-Anne-de-Bellevue',
        category: 'life',
        coords: { x: 42, y: 206 },
        order: 4,
        blurb: 'Pre-university CEGEP at the western tip of the island.',
        body: [
            'Sainte-Anne-de-Bellevue sits right at the western tip, where the Ottawa and St. Lawrence rivers meet. My CEGEP years — the last stop before McGill.'
        ]
    },
    {
        id: 'mcgill',
        name: 'McGill University',
        neighbourhood: 'Downtown',
        category: 'life',
        coords: { x: 286, y: 188 },
        order: 5,
        blurb: 'B.Eng. Software Engineering — 3.71 GPA, at the foot of Mount Royal.',
        body: [
            'I studied Software Engineering at McGill (2021–2025), graduating with a 3.71 GPA. Coursework spanned algorithms, databases, operating systems, concurrency, and the full software-delivery lifecycle.',
            'Outside class: McGame Jam (48-hour hackathon) and competitive programming with NP Compete.'
        ],
        links: [
            { label: 'More about me', href: 'about.html' }
        ]
    },
    // ---- Parks & nature (green) ----
    {
        id: 'west-island-parks',
        name: 'Lakeshore Parks',
        neighbourhood: 'West Island',
        category: 'park',
        coords: { x: 74, y: 238 },
        order: 6,
        blurb: 'The lakeshore parks near home — my go-to for running, biking and skating.',
        body: [
            'When the sun\'s out, this is where I am: running, biking, or skateboarding along the West Island lakeshore.',
            'Volleyball and pickleball happen out here too — the parks near home are the backdrop for most of my outdoor time.'
        ]
    },
    {
        id: 'mount-royal',
        name: 'Mount Royal',
        neighbourhood: 'The Mountain',
        category: 'park',
        coords: { x: 256, y: 140 },
        order: 7,
        blurb: 'The green heart of the island — and my reset button.',
        body: [
            'The best seat in the city. When I\'m not coding you\'ll find me running or biking the trails here.',
            'It\'s where I go to reset after a long build.'
        ]
    },
    // ---- Neighbourhood (coral) ----
    {
        id: 'plateau',
        name: 'The Plateau',
        neighbourhood: 'Downtown',
        category: 'neighbourhood',
        coords: { x: 322, y: 126 },
        order: 8,
        blurb: 'Where I go to try new restaurants and soak up the city.',
        body: [
            'The Plateau and downtown are my spot for trying a new restaurant, grabbing a book, or just enjoying Montreal\'s energy between projects.'
        ]
    },
    // ---- Hobbies with a fixed home (amber) ----
    {
        id: 'judo',
        name: 'Judo Dojo',
        neighbourhood: 'Ahuntsic',
        category: 'hobby',
        coords: { x: 206, y: 120 },
        order: 9,
        blurb: 'Brown belt in Judo — 15+ years of training.',
        body: [
            'Judo taught me discipline, perseverance, and how to stay calm under pressure — the same things that show up when I\'m debugging at 2am.',
            'Fifteen-plus years of continuous training got me to brown belt, and the mindset carries into everything else I do.'
        ]
    },
    {
        id: 'bouldering',
        name: 'Bouldering & Gym',
        neighbourhood: 'West Island',
        category: 'hobby',
        coords: { x: 116, y: 190 },
        order: 10,
        blurb: 'Problem-solving with your whole body — my current obsession.',
        body: [
            'Climbing is what I\'m hooked on right now. Sending a V5 is one of my 2026 goals.',
            'The gym keeps me in shape for it — strength work between sessions on the wall.'
        ]
    },
    {
        id: 'dragon-boat',
        name: 'Dragon Boat',
        neighbourhood: 'Lachine Canal',
        category: 'hobby',
        coords: { x: 214, y: 250 },
        order: 11,
        blurb: 'Two seasons paddling with McGill\'s dragon boat team.',
        body: [
            'I trained and raced two seasons on McGill\'s dragon boat team along the Lachine Canal — on-water synchronization, conditioning, and a great crew.'
        ]
    },
    // ---- Landmark (bronze) ----
    {
        id: 'work',
        name: 'Off the Keyboard',
        neighbourhood: 'Work & leadership',
        category: 'landmark',
        coords: { x: 346, y: 206 },
        order: 12,
        blurb: 'The jobs and roles that taught me to perform under pressure and lead a team.',
        body: [
            'Serving at Sansotei Ramen and prepping at a sushi kitchen drilled speed, precision, and grace under fire. As an AI Language Contributor at Cheil Canada I reviewed 200+ French AI outputs for accuracy.',
            'On the leadership side: Webmaster for the McGill Nursing Undergrad Society, VP Internal for the Hong Kong Student Network, and a summer leading groups of 20+ kids at Pointe-Claire Day Camps.'
        ],
        links: [
            { label: 'Full work history', href: 'about.html' }
        ]
    },
    // ---- Projects (dark cave-mouths) ----
    {
        id: 'peer-mentorship',
        name: 'Peer Mentorship Platform',
        neighbourhood: 'McGill Nursing',
        category: 'project',
        coords: { x: 242, y: 214 },
        order: 13,
        blurb: 'Algorithmic matching tool that pairs 200+ mentors and mentees in seconds.',
        body: [
            'Reduced mentor–mentee assignment from hours to seconds using a min-cost max-flow algorithm with multi-factor scoring (0–100).',
            'Full-stack: Python/Flask backend, React/TypeScript admin dashboard with live score previews and manual overrides, a two-step CSV import pipeline, and Supabase PostgreSQL. Deployed on Vercel + Render.'
        ],
        images: ['images/mentorship.png'],
        links: [
            { label: 'Live site', href: 'https://nursing-mentorship-matcher.vercel.app/' },
            { label: 'GitHub', href: 'https://github.com/ShawnYS-codemtl/nursing-mentorship-matcher' }
        ]
    },
    {
        id: 'mars-rover',
        name: 'Mars Rover Simulator',
        neighbourhood: 'Capstone',
        category: 'project',
        coords: { x: 366, y: 122 },
        order: 14,
        blurb: 'Capstone simulator using real NASA terrain data and pathfinding algorithms.',
        body: [
            'Built with an Agile team of 7 (coordinated in Jira): simulates Mars rover missions over real NASA HRSC MOLA elevation data parsed with Rasterio.',
            'Implements A*, BFS, and DFS pathfinding with configurable heuristics, and logs distance, energy, and duration to SQLite. Packaged for desktop with PyInstaller.'
        ],
        images: ['images/mars-rover.png'],
        links: [
            { label: 'GitHub', href: 'https://github.com/ShawnYS-codemtl/mars-rover-simulator' }
        ]
    },
    {
        id: 'sticker-ecommerce',
        name: 'Sticker E-Commerce Platform',
        neighbourhood: 'Production app',
        category: 'project',
        coords: { x: 408, y: 172 },
        order: 15,
        blurb: 'Full-stack e-commerce platform built end-to-end for a real sticker business.',
        body: [
            'Next.js + TypeScript storefront with a Supabase backend: Stripe checkout with webhook-driven order processing, role-based admin access via Supabase RLS, and automated customer emails across the full order lifecycle.',
            'It took the business from Instagram DMs and in-person meetups to online payments and national shipping across Canada.'
        ],
        images: ['images/momentong.png'],
        links: [
            { label: 'Live site', href: 'https://momentong.vercel.app/' },
            { label: 'GitHub', href: 'https://github.com/ShawnYS-codemtl/momentong2.1' }
        ]
    },
    {
        id: 'projects-portal',
        name: 'Project Gallery',
        neighbourhood: 'The whole collection',
        category: 'project',
        coords: { x: 300, y: 316 },
        order: 16,
        blurb: 'The map pins my favourites — this cave opens the whole gallery.',
        body: [
            'Beyond what\'s pinned on the island: Smartly Goals (AI SMART-goal builder), Checkers Type Games (minimax AI), Anime Tracker (SwiftUI iOS), Chef Claude (recipe generator), and a vanilla-JS Productivity Dashboard.',
            'Two more are in progress: a Spotify music-taste dashboard and Mutual, a dating app for mutuals.'
        ],
        links: [
            { label: 'Browse all projects', href: 'projects.html' }
        ]
    },
    // ---- Contact (purple — the eastern endpoint) ----
    {
        id: 'contact',
        name: 'Say Hello',
        neighbourhood: 'Get in touch',
        category: 'contact',
        coords: { x: 446, y: 166 },
        order: 17,
        blurb: 'You reached the east end. I\'m actively looking for full-stack roles — let\'s talk.',
        body: [
            'The fastest way to reach me is email, but I\'m on LinkedIn and GitHub too. I\'d love to hear about what you\'re building.'
        ],
        links: [
            { label: 'Email me', href: 'mailto:shawnyatsin@gmail.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/shawnyatsin' },
            { label: 'GitHub', href: 'https://github.com/ShawnYS-codemtl' }
        ]
    }
];
