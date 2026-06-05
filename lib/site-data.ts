export const business = {
  name: "J's Pest Solutions",
  phone: '(719) 400-8442',
  phoneHref: 'tel:+17194008442',
  smsHref: 'sms:+17194008442',
  email: 'jeromepestsolutions@gmail.com',
  emailHref: 'mailto:jeromepestsolutions@gmail.com',
  hours: '7:00 AM – 7:00 PM, Monday – Saturday',
  tagline:
    'Family-owned pest control serving Arvada, Denver, and surrounding communities.',
}

export const trustBadges = [
  'Family-owned',
  '20+ years experience',
  'Licensed & insured',
  'Residential & commercial',
  'Local Colorado service',
]

export type Service = {
  slug: string
  title: string
  short: string
  icon: string
  signs: string[]
  approach: string[]
  expect: string[]
  prep: string[]
  pricingFactors: string[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'general-pest-control',
    title: 'General Pest Control',
    short:
      'Ongoing protection against the common pests that show up around Colorado homes and businesses throughout the year.',
    icon: 'shield',
    signs: [
      'Spotting different pests in different seasons',
      'Activity around entry points, windows, and the foundation',
      'Wanting prevention rather than reacting to one problem at a time',
    ],
    approach: [
      'We start with an inspection to understand your property and the pressure around it.',
      'We focus on entry points, the perimeter, and the spots pests actually use.',
      'We use practical, environmentally conscious treatments matched to the situation.',
    ],
    expect: [
      'A walkthrough and clear explanation of what we found',
      'Treatment focused on prevention, not just knockdown',
      'Guidance on simple steps that help between visits',
    ],
    prep: [
      'Clear access to the exterior perimeter and garage',
      'Let us know about pets, kids, or sensitive areas',
      'Note any spots where you have seen the most activity',
    ],
    pricingFactors: [
      'Property size and layout',
      'Current activity level',
      'One-time visit vs. recurring protection',
    ],
    faqs: [
      {
        q: 'Is general pest control safe around kids and pets?',
        a: 'We choose products and placement with families in mind and will always talk through any precautions before treatment.',
      },
      {
        q: 'How often should I have service?',
        a: 'Many Colorado homes do well with recurring seasonal visits, but we will recommend a schedule that fits your situation honestly.',
      },
    ],
  },
  {
    slug: 'rodent-control',
    title: 'Rodent Control',
    short:
      'Mice and rats look for warmth and food, especially as Colorado temperatures drop. We help find how they are getting in.',
    icon: 'mouse',
    signs: [
      'Droppings in cabinets, the garage, or along walls',
      'Scratching or scurrying sounds in walls or ceilings',
      'Gnaw marks on packaging, wires, or wood',
    ],
    approach: [
      'We inspect for entry points and the conditions drawing rodents in.',
      'We focus on exclusion so the problem does not simply return.',
      'We place control measures responsibly and check back as needed.',
    ],
    expect: [
      'A clear picture of where rodents are getting in',
      'Recommendations to seal and exclude vulnerable areas',
      'Follow-up guidance for ongoing peace of mind',
    ],
    prep: [
      'Note where you have seen droppings or heard activity',
      'Clear access to the garage, basement, and storage areas',
      'Hold off on cleaning droppings until we can take a look',
    ],
    pricingFactors: [
      'Severity and how established the activity is',
      'Number and difficulty of entry points',
      'Whether exclusion work is included',
    ],
    faqs: [
      {
        q: 'Why do mice get into Colorado homes in the fall?',
        a: 'As it gets colder, rodents look for warm shelter and food. Small gaps around the foundation, garage, and utility lines are common ways in.',
      },
      {
        q: 'Do you seal up entry points?',
        a: 'Exclusion is a big part of lasting rodent control. We will point out vulnerable areas and talk through the right approach.',
      },
    ],
  },
  {
    slug: 'ants-spiders-roaches',
    title: 'Ants, Spiders & Roaches',
    short:
      'The everyday invaders. We target where they live and travel instead of just spraying where you see them.',
    icon: 'bug',
    signs: [
      'Trails of ants in the kitchen or along baseboards',
      'Webs in corners, basements, and around windows',
      'Roaches near warm, moist areas like kitchens and bathrooms',
    ],
    approach: [
      'We identify the species so the treatment actually fits.',
      'We target nesting and harborage areas, not just visible bugs.',
      'We treat entry points and the perimeter to reduce new activity.',
    ],
    expect: [
      'Identification of what you are actually dealing with',
      'Targeted interior and exterior treatment',
      'Tips to reduce moisture and food sources',
    ],
    prep: [
      'Wipe down counters and store food before treatment',
      'Clear under sinks and around baseboards if possible',
      'Vacuum visible webs so we can treat fresh activity',
    ],
    pricingFactors: [
      'The specific pest and severity',
      'Interior, exterior, or both',
      'One-time vs. recurring protection',
    ],
    faqs: [
      {
        q: 'Why do ants keep coming back?',
        a: 'Visible ants are usually a small part of a larger colony. We focus on the colony and entry points so the activity does not just bounce back.',
      },
      {
        q: 'Are the spiders in my home dangerous?',
        a: 'Most are harmless, but we will help you identify what you are seeing and treat the conditions that attract them.',
      },
    ],
  },
  {
    slug: 'wasps-stinging-insects',
    title: 'Wasps & Stinging Insects',
    short:
      'Wasps, hornets, and yellow jackets near doorways and rooflines are worth handling carefully. We help you stay safe.',
    icon: 'triangle-alert',
    signs: [
      'Nests under eaves, rooflines, or in the ground',
      'Increased activity near doors, decks, or play areas',
      'Stinging insects coming and going from a single spot',
    ],
    approach: [
      'We locate the nest and identify the type of stinging insect.',
      'We treat and remove nests carefully with safety in mind.',
      'We talk through preventing nests in common return spots.',
    ],
    expect: [
      'Careful, safety-focused nest treatment',
      'Guidance on keeping the area clear afterward',
      'Advice on spots that tend to attract repeat nesting',
    ],
    prep: [
      'Keep people and pets away from the active area',
      'Note the location and height of any nests you have spotted',
      'Avoid swatting or disturbing the nest before service',
    ],
    pricingFactors: [
      'Nest location and accessibility',
      'Type of stinging insect',
      'Number of nests',
    ],
    faqs: [
      {
        q: 'What should I do when I see wasps near the roofline?',
        a: 'Keep your distance and avoid disturbing them. Give us a call and we will handle it safely rather than risking stings.',
      },
      {
        q: 'Can you remove nests in the ground?',
        a: 'Yes. Ground-nesting yellow jackets are common in Colorado and we treat them with extra care.',
      },
    ],
  },
  {
    slug: 'termite-bed-bug-inspections',
    title: 'Termite & Bed Bug Inspections',
    short:
      'Some pests need a careful, honest inspection before any treatment. We look closely and tell you straight.',
    icon: 'search',
    signs: [
      'Unexplained bites or small stains on bedding (bed bugs)',
      'Mud tubes, hollow wood, or discarded wings (termites)',
      'Concerns before buying, selling, or after a recent issue',
    ],
    approach: [
      'We perform a careful inspection before recommending anything.',
      'We explain what we find honestly, including when treatment is not needed.',
      'If treatment is warranted, we outline a clear, realistic plan.',
    ],
    expect: [
      'A thorough, no-pressure inspection',
      'Straight answers about what we find',
      'A clear plan only if treatment is actually needed',
    ],
    prep: [
      'Note where you have seen signs or had concerns',
      'Provide access to bedrooms, basements, and crawl spaces',
      'Avoid moving items that might disturb evidence',
    ],
    pricingFactors: [
      'Scope of the inspection',
      'Property size and access',
      'Whether treatment follows the inspection',
    ],
    faqs: [
      {
        q: 'Do I definitely have termites or bed bugs?',
        a: 'Not necessarily. A lot of concerns turn out to be something else. That is exactly why we start with a careful inspection.',
      },
      {
        q: 'Will you push treatment I do not need?',
        a: 'No. If you do not need treatment, we will tell you. Honest guidance is the whole point.',
      },
    ],
  },
]

export const recurringPlan = {
  title: 'Recurring Protection Plans',
  short:
    'Seasonal visits that keep pressure low year-round, so you deal with prevention instead of surprises.',
  icon: 'calendar-check',
}

export type ServiceArea = {
  slug?: string
  name: string
  blurb: string
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'arvada',
    name: 'Arvada',
    blurb:
      'Local pest control for Arvada homes and businesses, from older established neighborhoods to newer developments.',
  },
  {
    slug: 'denver',
    name: 'Denver',
    blurb:
      'Residential and commercial pest service across Denver neighborhoods and the surrounding metro.',
  },
  { name: 'Wheat Ridge', blurb: 'Service for Wheat Ridge homes and businesses.' },
  { name: 'Westminster', blurb: 'Pest control throughout the Westminster area.' },
  { name: 'Lakewood', blurb: 'Residential and commercial service in Lakewood.' },
  { name: 'Thornton', blurb: 'Coverage for Thornton and nearby communities.' },
  { name: 'Golden', blurb: 'Local service for Golden and the foothills edge.' },
  {
    name: 'Surrounding Denver metro',
    blurb: 'Reach out and we will let you know if we cover your area.',
  },
]

export type Review = {
  initials: string
  location: string
  text: string
}

export type AreaDetail = {
  slug: string
  name: string
  intro: string
  neighborhoods: string[]
  commonPests: { name: string; note: string }[]
  localNotes: string[]
}

export const areaDetails: AreaDetail[] = [
  {
    slug: 'arvada',
    name: 'Arvada',
    intro:
      'We are based right here and Arvada is home turf. From the older established neighborhoods near Olde Town to newer developments out west, we know the pest pressure that comes with this area and the seasons.',
    neighborhoods: [
      'Olde Town Arvada',
      'Arvada West',
      'Lake Arbor',
      'Candelas',
      'Leyden Rock',
      'Ralston Valley',
    ],
    commonPests: [
      {
        name: 'Mice & voles',
        note: 'Common in fall as temperatures drop and rodents look for warmth near foundations and garages.',
      },
      {
        name: 'Ants',
        note: 'Field and pavement ants are frequent around patios, driveways, and kitchen entry points.',
      },
      {
        name: 'Wasps & yellow jackets',
        note: 'Nesting under eaves and in the ground near decks and play areas through summer.',
      },
      {
        name: 'Spiders',
        note: 'Basements, garages, and window wells see steady spider activity year-round.',
      },
    ],
    localNotes: [
      'Homes backing to open space and greenbelts tend to see more rodent and insect pressure from the field edge.',
      'Older neighborhoods often have more entry points worth sealing during rodent season.',
      'We group Arvada appointments together to keep service quick and responsive for our neighbors.',
    ],
  },
  {
    slug: 'denver',
    name: 'Denver',
    intro:
      'We provide residential and commercial pest control across Denver neighborhoods and the surrounding metro. Dense, mixed housing and varied building ages mean pest issues here look a little different block to block.',
    neighborhoods: [
      'Highlands',
      'Berkeley',
      'Sloan\u2019s Lake',
      'Washington Park',
      'Stapleton / Central Park',
      'Sunnyside',
    ],
    commonPests: [
      {
        name: 'Roaches',
        note: 'More common in multi-unit and older buildings where warmth and moisture collect.',
      },
      {
        name: 'Rodents',
        note: 'Mice and rats find their way in through shared walls, alleys, and utility lines.',
      },
      {
        name: 'Ants',
        note: 'Persistent kitchen and exterior trails, especially in warmer months.',
      },
      {
        name: 'Spiders',
        note: 'Common in basements, garages, and around exterior lighting.',
      },
    ],
    localNotes: [
      'Shared walls in townhomes and condos can let pests move between units, so exterior and entry-point work matters.',
      'Commercial spaces often need flexible scheduling, which we are happy to work around.',
      'Older Denver homes can have more gaps and access points to address during rodent season.',
    ],
  },
]

export const reviews: Review[] = [
  {
    initials: 'M.R.',
    location: 'Arvada, CO',
    text: 'Jerome took the time to actually explain what was going on instead of just selling me a plan. Honest and easy to work with.',
  },
  {
    initials: 'D.K.',
    location: 'Denver, CO',
    text: 'Called about wasps near our back door and they handled it carefully and quickly. Felt like a real neighbor, not a call center.',
  },
  {
    initials: 'S.L.',
    location: 'Wheat Ridge, CO',
    text: 'Elizabeth helped get everything scheduled around our week and made sure the details were right. Great communication.',
  },
  {
    initials: 'T.B.',
    location: 'Westminster, CO',
    text: 'We had mice in the fall and they focused on where they were getting in, not just setting traps. Problem actually stayed solved.',
  },
  {
    initials: 'A.G.',
    location: 'Lakewood, CO',
    text: 'Fair pricing and no pressure. They told me one area did not even need treatment yet. That kind of honesty earns repeat business.',
  },
  {
    initials: 'J.P.',
    location: 'Golden, CO',
    text: 'Local, responsive, and respectful of our home. Exactly what we wanted after dealing with a big national company.',
  },
]

export type PestLibraryEntry = {
  name: string
  signs: string
  why: string
  whenToCall: string
  serviceSlug: string
}

export const pestLibrary: PestLibraryEntry[] = [
  {
    name: 'Ants',
    signs: 'Trails along baseboards, counters, or near entry points.',
    why: 'Looking for food and moisture, often nesting outdoors and foraging inside.',
    whenToCall: 'When trails keep returning or you find multiple entry points.',
    serviceSlug: 'ants-spiders-roaches',
  },
  {
    name: 'Spiders',
    signs: 'Webs in corners, basements, garages, and around windows.',
    why: 'Following other insects indoors and seeking quiet, sheltered spots.',
    whenToCall: 'When webs return quickly or you are seeing them regularly.',
    serviceSlug: 'ants-spiders-roaches',
  },
  {
    name: 'Rodents',
    signs: 'Droppings, gnaw marks, and scratching sounds in walls.',
    why: 'Seeking warmth and food, especially as temperatures drop.',
    whenToCall: 'At the first signs, before activity becomes established.',
    serviceSlug: 'rodent-control',
  },
  {
    name: 'Wasps',
    signs: 'Nests under eaves and rooflines or activity near doorways.',
    why: 'Building nests in protected spots near food and shelter.',
    whenToCall: 'As soon as you spot a nest near high-traffic areas.',
    serviceSlug: 'wasps-stinging-insects',
  },
  {
    name: 'Roaches',
    signs: 'Activity near warm, moist areas like kitchens and bathrooms.',
    why: 'Drawn to food, water, and clutter where they can hide.',
    whenToCall: 'At the first sighting, since activity can grow quickly.',
    serviceSlug: 'ants-spiders-roaches',
  },
  {
    name: 'Termites',
    signs: 'Mud tubes, hollow-sounding wood, or discarded wings.',
    why: 'Feeding on wood and moisture, often unnoticed for a while.',
    whenToCall: 'If you see signs or want a pre-purchase inspection.',
    serviceSlug: 'termite-bed-bug-inspections',
  },
  {
    name: 'Bed Bugs',
    signs: 'Small bites, tiny stains on bedding, or activity near seams.',
    why: 'Hitchhiking in on luggage, furniture, or visitors.',
    whenToCall: 'As soon as you suspect them, before they spread.',
    serviceSlug: 'termite-bed-bug-inspections',
  },
  {
    name: 'Mosquitoes',
    signs: 'Increased biting around yards, patios, and standing water.',
    why: 'Breeding in standing water and active in warmer months.',
    whenToCall: 'When outdoor activity makes your yard hard to enjoy.',
    serviceSlug: 'general-pest-control',
  },
]

export const fieldNotes = [
  {
    title: 'Why mice get into Colorado homes in colder months',
    blurb:
      'A look at the small gaps and warm spots rodents use once the temperature drops, and what to watch for.',
  },
  {
    title: 'What to do when you see wasps near the roofline',
    blurb:
      'How to stay safe and why it is worth handling stinging insects carefully instead of going after a nest yourself.',
  },
  {
    title: 'How recurring treatments help prevent seasonal pest pressure',
    blurb:
      'Why steady, seasonal visits often beat reacting to one problem at a time around Colorado homes.',
  },
]

export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/pricing-estimator', label: 'Pricing Estimator' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]
