// Source of truth for the /map page. Edit this file, then run `npm run build:map`
// to regenerate data/locations.js (the file the browser actually loads).

export type Category =
    | 'city'
    | 'job'
    | 'school'
    | 'life'
    | 'project'
    | 'hobby'
    | 'park'
    | 'neighbourhood'
    | 'landmark'
    | 'contact';

export interface Location {
    id: string;
    name: string;
    neighbourhood: string;
    category: Category;
    /** Position in the map SVG viewBox (0 0 480 360) — keep nodes on land. */
    coords: { x: number; y: number };
    /** Chronological order. Life nodes (1–5) also show this as a numbered pin. */
    order?: number;
    /** One or two lines shown at the top of the dialogue panel. */
    blurb: string;
    /** Longer content, one string per paragraph. */
    body?: string[];
    images?: string[];
    links?: { label: string; href: string }[];
}

/** Routes are disabled while rebuilding the map from accurate city positions. */
export const routes: [string, string][] = [
    // Previous routes are intentionally commented out while city placement is rebuilt.
];

export const locations: Location[] = [
    {
        id: 'sainte-anne-de-bellevue',
        name: 'Sainte-Anne-de-Bellevue',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 44, y: 206 },
        blurb: 'Western tip of the Island of Montreal.'
    },
    {
        id: 'pointe-claire',
        name: 'Pointe-Claire',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 92, y: 218 },
        blurb: 'West Island city along the south shore of the island.'
    },
    {
        id: 'dollard-des-ormeaux',
        name: 'Dollard-des-Ormeaux',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 112, y: 178 },
        blurb: 'West Island city north of Pointe-Claire.'
    },
    {
        id: 'roxboro',
        name: 'Roxboro',
        neighbourhood: 'Pierrefonds-Roxboro',
        category: 'city',
        coords: { x: 152, y: 134 },
        blurb: 'North-shore neighbourhood along the Riviere des Prairies.'
    },
    {
        id: 'lachine',
        name: 'Lachine',
        neighbourhood: 'Southwest Montreal',
        category: 'city',
        coords: { x: 168, y: 246 },
        blurb: 'Southwest borough along Lac Saint-Louis and the Lachine Canal.'
    },
    {
        id: 'ahuntsic',
        name: 'Ahuntsic',
        neighbourhood: 'North Montreal',
        category: 'city',
        coords: { x: 236, y: 126 },
        blurb: 'North-central neighbourhood along the Riviere des Prairies.'
    },
    {
        id: 'mile-end',
        name: 'Mile End',
        neighbourhood: 'Plateau-Mont-Royal',
        category: 'city',
        coords: { x: 300, y: 166 },
        blurb: 'Creative neighbourhood just northeast of Mount Royal.'
    },
    {
        id: 'little-italy',
        name: 'Little Italy',
        neighbourhood: 'Rosemont-La Petite-Patrie',
        category: 'city',
        coords: { x: 274, y: 158 },
        blurb: 'North-central neighbourhood around Jean-Talon Market and Saint-Laurent.'
    },
    {
        id: 'plateau-mont-royal',
        name: 'Plateau-Mont-Royal',
        neighbourhood: 'Central Montreal',
        category: 'city',
        coords: { x: 328, y: 184 },
        blurb: 'Dense central neighbourhood east of Mount Royal.'
    },
    {
        id: 'ville-marie',
        name: 'Ville-Marie',
        neighbourhood: 'Downtown Montreal',
        category: 'city',
        coords: { x: 314, y: 218 },
        blurb: 'Downtown core south of Mount Royal.'
    },
    {
        id: 'griffintown',
        name: 'Griffintown',
        neighbourhood: 'Southwest Montreal',
        category: 'city',
        coords: { x: 296, y: 238 },
        blurb: 'Southwest neighbourhood near downtown and the canal.'
    },
    {
        id: 'dairy-queen',
        name: 'Dairy Queen',
        neighbourhood: 'Near Dollard-des-Ormeaux',
        category: 'job',
        coords: { x: 118, y: 188 },
        blurb: 'Work location near DDO.'
    },
    {
        id: 'sushi-ya-matcha',
        name: 'Sushi Ya Matcha',
        neighbourhood: 'Near Dollard-des-Ormeaux',
        category: 'job',
        coords: { x: 104, y: 188 },
        blurb: 'Sushi chef work location near DDO.'
    },
    {
        id: 'camp-counselor',
        name: 'Camp Counselor',
        neighbourhood: 'Near Pointe-Claire',
        category: 'job',
        coords: { x: 84, y: 226 },
        blurb: 'Camp counselor work location near Pointe-Claire.'
    },
    {
        id: 'sansotei-ramen',
        name: 'Sansotei Ramen',
        neighbourhood: 'Near Ville-Marie',
        category: 'job',
        coords: { x: 326, y: 228 },
        blurb: 'Server work location near Ville-Marie.'
    },
    {
        id: 'dollarama',
        name: 'Dollarama',
        neighbourhood: 'Near Pointe-Claire',
        category: 'job',
        coords: { x: 100, y: 226 },
        blurb: 'Work location near Pointe-Claire.'
    },
    {
        id: 'primary-school',
        name: 'Primary School',
        neighbourhood: 'Near Roxboro',
        category: 'school',
        coords: { x: 160, y: 142 },
        blurb: 'School location near Roxboro.'
    },
    {
        id: 'high-school',
        name: 'High School',
        neighbourhood: 'Near Lachine',
        category: 'school',
        coords: { x: 176, y: 254 },
        blurb: 'School location near Lachine.'
    },
    {
        id: 'cegep',
        name: 'CEGEP',
        neighbourhood: 'Near Sainte-Anne-de-Bellevue',
        category: 'school',
        coords: { x: 52, y: 214 },
        blurb: 'School location near Sainte-Anne-de-Bellevue.'
    },
    {
        id: 'mcgill',
        name: 'McGill University',
        neighbourhood: 'Near Ville-Marie',
        category: 'school',
        coords: { x: 324, y: 210 },
        blurb: 'University location near Ville-Marie.'
    }
];

/*
Previous location and route data is intentionally inactive while the city map is
rebuilt from scratch. Restore from git history if you want to bring back the
biography, hobby, project, and contact nodes:

routes:
- cegep -> home
- home -> bouldering
- home -> west-island-parks
- home -> primary-school
- home -> high-school
- primary-school -> judo
- judo -> mount-royal
- high-school -> dragon-boat
- dragon-boat -> peer-mentorship
- peer-mentorship -> mcgill
- mount-royal -> plateau
- mount-royal -> mcgill
- mcgill -> work
- mcgill -> mars-rover
- mars-rover -> sticker-ecommerce
- sticker-ecommerce -> contact
- work -> contact
- mcgill -> projects-portal

locations:
- home
- primary-school
- high-school
- cegep
- mcgill
- west-island-parks
- mount-royal
- plateau
- judo
- bouldering
- dragon-boat
- work
- peer-mentorship
- mars-rover
- sticker-ecommerce
- projects-portal
- contact
*/
