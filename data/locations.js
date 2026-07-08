// Source of truth for the /map page. Edit this file, then run `npm run build:map`
// to regenerate data/locations.js (the file the browser actually loads).
/** Routes are disabled while rebuilding the map from accurate city positions. */
export const routes = [
// Previous routes are intentionally commented out while city placement is rebuilt.
];
export const locations = [
    {
        id: 'sainte-anne-de-bellevue',
        name: 'Sainte-Anne-de-Bellevue',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 44, y: 220 },
        blurb: 'Western tip of the Island of Montreal.'
    },
    {
        id: 'pointe-claire',
        name: 'Pointe-Claire',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 150, y: 230 },
        blurb: 'West Island city along the south shore of the island.'
    },
    {
        id: 'dollard-des-ormeaux',
        name: 'Dollard-des-Ormeaux',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 130, y: 180 },
        blurb: 'West Island city north of Pointe-Claire.'
    },
    {
        id: 'roxboro',
        name: 'Roxboro',
        neighbourhood: 'Pierrefonds-Roxboro',
        category: 'city',
        coords: { x: 152, y: 140 },
        blurb: 'North-shore neighbourhood along the Riviere des Prairies.'
    },
    {
        id: 'pierrefonds',
        name: 'Pierrefonds',
        neighbourhood: 'Pierrefonds',
        category: 'city',
        coords: { x: 85, y: 168 },
        blurb: 'North-shore neighbourhood along the Riviere des Prairies.'
    },
    {
        id: 'lachine',
        name: 'Lachine',
        neighbourhood: 'Southwest Montreal',
        category: 'city',
        coords: { x: 240, y: 255 },
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
        id: 'plateau-mont-royal',
        name: 'Plateau-Mont-Royal',
        neighbourhood: 'Central Montreal',
        category: 'city',
        coords: { x: 338, y: 176 },
        blurb: 'Dense central neighbourhood east of Mount Royal.'
    },
    {
        id: 'ville-marie',
        name: 'Ville-Marie',
        neighbourhood: 'Downtown Montreal',
        category: 'city',
        coords: { x: 320, y: 232 },
        blurb: 'Downtown core south of Mount Royal.'
    },
    {
        id: 'dairy-queen',
        name: 'Dairy Queen',
        neighbourhood: 'Near Dollard-des-Ormeaux',
        category: 'job',
        coords: { x: 155, y: 200 },
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
        coords: { x: 110, y: 247 },
        blurb: 'Camp counselor work location near Pointe-Claire.'
    },
    {
        id: 'sansotei-ramen',
        name: 'Sansotei Ramen',
        neighbourhood: 'Near Ville-Marie',
        category: 'job',
        coords: { x: 302, y: 230 },
        blurb: 'Server work location near Ville-Marie.'
    },
    {
        id: 'dollarama',
        name: 'Dollarama',
        neighbourhood: 'Near Pointe-Claire',
        category: 'job',
        coords: { x: 137, y: 228 },
        blurb: 'Work location near Pointe-Claire.'
    },
    {
        id: 'primary-school',
        name: 'Primary School',
        neighbourhood: 'Near Roxboro',
        category: 'school',
        coords: { x: 140, y: 154 },
        blurb: 'School location near Roxboro.'
    },
    {
        id: 'high-school',
        name: 'High School',
        neighbourhood: 'Near Lachine',
        category: 'school',
        coords: { x: 218, y: 252 },
        blurb: 'School location near Lachine.'
    },
    {
        id: 'cegep',
        name: 'CEGEP',
        neighbourhood: 'Near Sainte-Anne-de-Bellevue',
        category: 'school',
        coords: { x: 54, y: 230 },
        blurb: 'School location near Sainte-Anne-de-Bellevue.'
    },
    {
        id: 'mcgill',
        name: 'McGill University',
        neighbourhood: 'Near Ville-Marie',
        category: 'school',
        coords: { x: 318, y: 210 },
        blurb: 'University location near Ville-Marie.'
    },
    {
        id: 'judo',
        name: 'Judo',
        neighbourhood: 'Near Ahuntsic',
        category: 'hobby',
        coords: { x: 225, y: 140 },
        blurb: 'Judo dojo near Ahuntsic.'
    },
    {
        id: 'dragon-boat',
        name: 'Dragon Boat',
        neighbourhood: 'Lachine Canal',
        category: 'hobby',
        coords: { x: 312, y: 273 },
        blurb: 'Dragon boat paddling on the Lachine Canal.'
    },
    {
        id: 'bouldering',
        name: 'Bouldering',
        neighbourhood: 'Near Pointe-Claire',
        category: 'hobby',
        coords: { x: 163, y: 220 },
        blurb: 'Bouldering gym near Pointe-Claire.'
    },
    {
        id: 'run-club',
        name: 'Run Club',
        neighbourhood: 'Near LaSalle',
        category: 'hobby',
        coords: { x: 348, y: 274 },
        blurb: 'Run club route near LaSalle.'
    }, 
    {
        id: 'thrifting',
        name: 'Thrifting',
        neighbourhood: 'Near DDO',
        category: 'hobby',
        coords: { x: 166, y: 207 },
        blurb: 'Thrifting location near DDO.'
    }, 
    {
        id: 'biking',
        name: 'Biking',
        neighbourhood: 'Near Pointe-Claire',
        category: 'hobby',
        coords: { x: 150, y: 255 },
        blurb: 'Biking route near the water.'
    }, 
    

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
