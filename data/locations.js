// Source of truth for the /map page. Edit this file, then run `npm run build:map`
// to regenerate data/locations.js (the file the browser actually loads).
/**
 * City-to-city roads only. Ports are pre-chosen to face each neighbour and to be
 * distinct per city (no two roads share a port), so roads never overlap. Nudge a
 * port here to change which side/lane a road uses.
 */
export const routes = [
    { from: 'sainte-anne-de-bellevue', fromPort: 'right-bottom', to: 'pointe-claire', toPort: 'left-top' },
    { from: 'dollard-des-ormeaux', fromPort: 'bottom-right', to: 'pointe-claire', toPort: 'top-left' },
    { from: 'pierrefonds', fromPort: 'right-bottom', to: 'dollard-des-ormeaux', toPort: 'left-top' },
    { from: 'dollard-des-ormeaux', fromPort: 'top-right', to: 'roxboro', toPort: 'left-bottom' },
    { from: 'roxboro', fromPort: 'right-top', to: 'ahuntsic-cartierville', toPort: 'left-bottom' },
    { from: 'pointe-claire', fromPort: 'right-bottom', to: 'lachine', toPort: 'top-left' },
    { from: 'lachine', fromPort: 'right-top', to: 'downtown-montreal', toPort: 'bottom-left' },
    { from: 'downtown-montreal', fromPort: 'right-top', to: 'plateau-mont-royal', toPort: 'bottom-left' },
    // { from: 'plateau-mont-royal', fromPort: 'left-top', to: 'ahuntsic-cartierville', toPort: 'right-bottom' },
];
export const locations = [
    {
        id: 'sainte-anne-de-bellevue',
        name: 'Sainte-Anne-de-Bellevue',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 44, y: 220 },
        blurb: "You're here for one of three reasons — John Abbott, stuck at MacDonald Campus, or actual farming. Word is there's a nice boardwalk too, though the one time I checked it out I mostly remember paying too much for pizza."
    },
    {
        id: 'pointe-claire',
        name: 'Pointe-Claire',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 150, y: 230 },
        blurb: "Home base — same street my whole life, every inch of it mapped out via runs and bike rides at this point. Halloween's a shadow of what it used to be, and the neighbourhood basketball games a few doors down don't happen anymore either, mostly because everyone grew up and scattered. Somewhere between generations, kids stopped playing outside with their neighbours. Thank you, technology."
    },
    {
        id: 'dollard-des-ormeaux',
        name: 'Dollard-des-Ormeaux',
        neighbourhood: 'West Island',
        category: 'city',
        coords: { x: 130, y: 180 },
        blurb: "A serious upgrade from Pierrefonds — bigger house, bigger everything, and a park with an actual lake as the view. Basketball net out back hosted father-son showdowns with my brother that always got more competitive than they needed to. Summers ran on campfires of questionable legality, built inside a repurposed washing machine drum, smores mandatory. My second home."
    },
    {
        id: 'roxboro',
        name: 'Roxboro',
        neighbourhood: 'Pierrefonds-Roxboro',
        category: 'city',
        coords: { x: 152, y: 140 },
        blurb: "Local legend says there used to be a full-size Adonis here — now it's a hospital, which tells you a lot about how this neighborhood ranks its priorities. Samosas from up the street were a weekly ritual. This is also where I learned to drive — including my first real ice-swerve, mid-lesson, dead of winter. Didn't panic, kept it together, and I'm still a little proud of that one."
    },
    {
        id: 'pierrefonds',
        name: 'Pierrefonds',
        neighbourhood: 'Pierrefonds - Rue Des Arbres',
        category: 'city',
        coords: { x: 85, y: 168 },
        blurb: 'A street name I never learned to pronounce, on a street I could still find blindfolded. Home was the yellow bungalow with the pear tree out back, and a bunk bed shared with my brother — most nights capped off with an episode of The Adventures of Tom Sawyer, watched from behind a pillow whenever Joe showed up.'
    },
    {
        id: 'lachine',
        name: 'Lachine',
        neighbourhood: 'Southwest Montreal',
        category: 'city',
        coords: { x: 240, y: 255 },
        blurb: "Old neighbourhood, school-dense, with genuinely gorgeous parks along the water — Parc René-Lévesque is easily one of the nicest in Montreal. High school used to drag the entire student body there once a year for the final running test, which at the time felt like punishment. Appreciate the park a lot more now that nobody's timing me."
    },
    {
        id: 'ahuntsic-cartierville',
        name: 'Ahuntsic-Cartierville',
        neighbourhood: 'North Montreal',
        category: 'city',
        coords: { x: 236, y: 126 },
        blurb: "Admittedly a bit of a mystery to me — mostly just knew it as 'the annoying commute to judo.' REM's apparently fixed that, so no more excuses. Feels like one of the more French-speaking corners of the city. Also home to a bouldering gym I'd hit up occasionally for the Friday special."
    },
    {
        id: 'plateau-mont-royal',
        name: 'Plateau-Mont-Royal',
        neighbourhood: 'Central Montreal',
        category: 'city',
        coords: { x: 338, y: 176 },
        blurb: "Laid-back, artsy, genuinely fun to just wander — cafes, vintage shops, and niche little stores around every corner. This is where the good restaurants and bars actually live, which is really the main draw for me. Also scattered with artisanal ice cream spots, which is an extremely effective bonus."
    },
    {
        id: 'downtown-montreal',
        name: 'Downtown Montreal',
        neighbourhood: 'Ville-Marie',
        category: 'city',
        coords: { x: 320, y: 232 },
        blurb: "Everyone passes through here eventually, resident or visitor. Stopped needing a map for this stretch a while ago. Oddly stacked with Asian restaurants along the green line — no idea why, not complaining. Runs roughly from Concordia to Berri-UQAM, packed with university students, office workers, and shoppers doing their thing. Basically every other Canadian downtown, except with actual personality — at least it's not gray like Toronto."
    },
    {
        id: 'dairy-queen',
        name: 'Dairy Queen',
        neighbourhood: 'Crew Member',
        category: 'job',
        coords: { x: 158, y: 197 },
        blurb: "Prime Covid-era employment, complete with classified DQ secrets I'm contractually obligated to keep vague about. Summer rushes taught me to work under pressure; winter shifts alone taught me real responsibility. Botched orders came home as family snacks — zero-waste policy, unofficially. Good era, right up until everyone quit and the workforce became exclusively 15-year-olds."
    },
    {
        id: 'sushi-ya-matcha',
        name: 'Sushi Ya Matcha',
        neighbourhood: 'Sushi Chef',
        category: 'job',
        coords: { x: 111, y: 190 },
        blurb: "A friend's parents opened this place and needed hands, so I became a sushi chef for a few months — or 'roller', if we're being honest about what the job actually was. Small, cute spot, tucked into an indoor mall with no windows nor much needed sunlight. Pro tip from the trenches: mayo on the gloves keeps the rice from sticking. You're welcome."
    },
    {
        id: 'camp-counselor',
        name: 'Pointe-Claire Day Camp',
        neighbourhood: 'Grasshopper Position',
        category: 'job',
        coords: { x: 110, y: 247 },
        blurb: "One summer, mid-Covid, hopping between groups instead of managing one alone — genuinely the best arrangement going. Nobody expected me to be good with kids, least of all me. Turned out to be the laid-back, competitive type who got along great with the sassiest campers. Fond memories overall — deeply regrettable ponytail, on hair that had zero business being so long."
    },
    {
        id: 'sansotei-ramen',
        name: 'Sansotei Ramen',
        neighbourhood: 'Server',
        category: 'job',
        coords: { x: 302, y: 230 },
        blurb: "Two years part-time serving here, and somehow it turned into one of the best social circles I've got — coworkers became genuine friends, and even the ones who didn't still got the full download on my personal life mid-shift. Ready to leave for the tech career, but know I'll miss the company more than I'll admit. A little tired of ramen at this point, and even more tired of customer-pleasing — turns out I'm a people person, not a stranger pleaser. Possibly not the ideal mindset for a server job."
    },
    {
        id: 'dollarama',
        name: 'Dollarama',
        neighbourhood: 'Retail Associate',
        category: 'job',
        coords: { x: 133, y: 220 },
        blurb: "First real job, a quick bike or car ride away depending on the day. Lots of manual work — warehouse duty, trash detail, repeat. Turns out 'everything's a few dollars' doesn't mean anything's free — couldn't even take the garbage home. Plot twist: my manager was secretly a pastor, and breaks sometimes came with an unscheduled Jesus talk and a pamphlet. Quit the second school started and never looked back."
    },
    {
        id: 'primary-school',
        name: 'École Charles-Perrault',
        neighbourhood: 'Primary School',
        category: 'school',
        coords: { x: 140, y: 154 },
        blurb: "Private school, serious homework load, teachers who didn't go easy on us but clearly knew what they were doing — also, hands down, the best cafeteria food of my life. Stuck around every single day for the after-school program, and that's where the real crew was — snack-sharing, low-stakes, the good kind of daily ritual. Finished top 3 most years, somehow never quite cracked first."
    },
    {
        id: 'high-school',
        name: 'Collège Saint-Louis',
        neighbourhood: 'High School',
        category: 'school',
        coords: { x: 218, y: 252 },
        blurb: "One of the top public high schools at the time, locked in an eternal rivalry with Collège Saint-Anne down the road — rich snobs, allegedly. No doubt the peak of my awkward teenage years: multiple crushes, zero results, and creative writing assignments that turned into full oversharing sessions. Frenemies were lunch regulars and the actual highlight was staying late after school with the crowd that did the same — cards, homework, vibes. Also developed a completely unnecessary level of skill at foosball."
    },
    {
        id: 'cegep',
        name: 'John Abbott College',
        neighbourhood: 'Cegep',
        category: 'school',
        coords: { x: 54, y: 230 },
        blurb: "Followed a childhood friend into the program with zero clue what I actually wanted to do — landed in a tight cohort of close friends and a few certified weirdos. Science teachers were top-notch. English, especially the Shakespeare unit, was somehow the scariest class on the schedule. A class called Sex and Sexuality ended up teaching me more about life than anything else because what is life if not for our relationships."
    },
    {
        id: 'mcgill',
        name: 'McGill University',
        neighbourhood: 'University',
        category: 'school',
        coords: { x: 318, y: 210 },
        blurb: "Prestigious, gorgeous lawn, dead center of downtown. Spent countless hours on the second floor of Redpath Library, where actual studying happened maybe 30% of the time. The degree turned out somewhat obsolete the moment AI showed up, but would do the whole thing again just for the people. Joined HKSN, which somehow turned into a genuine love for Hong Kong and a network of connections both inside and outside the club. Biggest regret: never went for an internship, convinced I had nothing to show yet. Real advice — go for it, sooner than feels ready."
    },
    {
        id: 'judo',
        name: 'Judo',
        neighbourhood: 'Club Hakudokan',
        category: 'hobby',
        coords: { x: 225, y: 140 },
        blurb: "Started young, showed up every week for about 15 years straight, slowly climbing to brown belt until Covid ended the streak. Loved sparring against strong opponents, hated the pressure of actual competitions. For some reason, always weirdly bad at chokes — small hands, malfunctioning brain, unclear which. Want back in, but showing up again with a brown belt after all this time feels a little like wearing a costume that doesn't fit anymore."
    },
    {
        id: 'dragon-boat',
        name: 'Dragon Boat',
        neighbourhood: 'McGill DBZ',
        category: 'hobby',
        coords: { x: 312, y: 273 },
        blurb: "Two summers with the team, love-hate relationship with the sport the whole time. Brutal, one-sided, exhausting, competition days were pure stress — but winning medals with your crew through actual teamwork hits different. Never a hardcore paddler, never made the A boat, which in hindsight might've been for the best. Biggest flex remains topping the fitness test leaderboard for pushups."
    },
    {
        id: 'bouldering',
        name: 'Bouldering',
        neighbourhood: 'Beta Bloc',
        category: 'hobby',
        coords: { x: 163, y: 220 },
        blurb: "Leaning hard into the software-engineer stereotype, but it's genuinely fun — real mind-body connection, and yes, the forearms and shoulders show up eventually. Goal is to send a V5 someday, except my gym doesn't even grade on that scale, which is its own special kind of frustrating. Blistered, torn-up hands: not for show, just the tax you pay."
    },
    {
        id: 'run-club',
        name: 'Run Club',
        neighbourhood: 'Café Cosé',
        category: 'hobby',
        coords: { x: 348, y: 274 },
        blurb: "Tried one out on a whim, bored one summer and swept up in the hype. Recruited friends to join — they bailed, went anyway, character development. Learned the hard way that run clubs aren't really about the running, they're a whole social scene. Would've been useful info before showing up in AirPods for the entire run, blasting music while nobody else even had headphones in. Trying a different approach next time. Solo runs are still fun!"
    },
    {
        id: 'thrifting',
        name: 'Thrifting',
        neighbourhood: 'Renaissance Fripe Galerie des Sources',
        category: 'hobby',
        coords: { x: 166, y: 207 },
        blurb: "Wardrobe's basically all secondhand these days, almost entirely from one local spot I've fully colonized. Sessions run long — ten-plus try-ons per visit, easy. Go alone on principle, since friends have zero patience and always want to bail before I'm done. Budget discipline is a work in progress; good quality at a low price is nearly impossible to walk away from. Points card acquired — basically adulting."
    },
    {
        id: 'biking',
        name: 'Biking',
        neighbourhood: 'Near the water',
        category: 'hobby',
        coords: { x: 150, y: 255 },
        blurb: "Cardio that doesn't feel like a workout — the whole point is wandering far enough to stop thinking about anything and just enjoy the breeze. Best route follows the bike path along the water, stringing together different city districts with genuinely gorgeous scenery the whole way. Still owe myself more house-to-end-of-the-canal-and-back rides. Hands down best activity on a good summer day."
    },
        {
        id: 'pickleball',
        name: 'Pickleball',
        neighbourhood: 'Parks in Kirkland',
        category: 'hobby',
        coords: { x: 68, y: 200 },
        blurb: "Genuinely obsessed. Don't even own a racket — started by borrowing equipment from a friend and her family, and never looked back. Kirkland has actual outdoor courts, which still feels like a small miracle. The skill curve is the best part: easy to pick up, easy to improve, so pretty much anyone can play at a decent level fast. Doubles over singles, no debate. Genuinely don't understand people who choose tennis over pickleball if they want to have fun."
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
