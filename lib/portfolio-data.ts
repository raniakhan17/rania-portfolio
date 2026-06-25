export type Project = {
  title: string;
  category: string;
  description: string;
  process: string;
  variant: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export const patents: Project[] = [
  {
    title: 'AIMS',
  links: [
    { label: 'View patent', href: 'https://patents.google.com/patent/US20220028234A1/en?q=(rania+khan)&oq=rania+khan' }
  ],
  tags: ['Patent Published', 'AI', 'Computer Vision'],
    image: '/images/projects/aims.png',
    category: 'Patent Published',
    variant: 'patent-one',
  description: 'An active security system that protects public spaces from armed intruders and firearms.',
  process: 'An active security system that protects public spaces from armed intruders and firearms.',
  },
  {
    title: 'SHIP',
  links: [
    { label: 'View project', href: 'https://drive.google.com/file/d/1C-M0lk4FVylIYBEctA-6ESZwekN8hmro/view?usp=sharing' }
  ],
  tags: ['AI', 'Sports', 'Head Collision'],
    image: '/images/projects/ship.png',
    category: 'Patent Filed',
    variant: 'patent-two',
  description: 'Head collision severity detection and risk prediction system.',
  process: 'Head collision severity detection and risk prediction system.',
  },
  {
    title: 'Touchless Sanitation',
  links: [],
  tags: [],
    image: '/images/projects/touchless-sanitation.png',
    category: 'Patent Filed',
    variant: 'patent-three',
  description: 'Compact rapid disinfection device.',
  process: 'Compact rapid disinfection device.',
  },
];

export const builds: Project[] = [
  {
    title: 'Echo',
  links: [
    { label: 'View deck', href: 'https://drive.google.com/file/d/1zdS1QHoX4W8jVacJ3-A6gpdyKE8bv4av/view?usp=sharing' },
    { label: 'View demo', href: 'https://www.youtube.com/watch?v=2yUzdfJs4fU' }
  ],
  tags: ['Wearable', 'AI', 'Accessibility'],
    image: '/images/projects/echo.png',
    category: 'Accessibility AI',
    variant: 'build-echo',
  description: 'Wearable EMG-based sign language recognition system translating muscle signals into real-time speech.',
  process: 'A wearable EMG-based sign language recognition system translating muscle signals into real-time speech, expanding communication access for the Deaf and hard-of-hearing communities. Received a $1K grant from USC MAIA.',
  },
  {
    title: 'Aeris',
  links: [
    { label: 'View project', href: 'https://aeris-web-seven.vercel.app/' },
    { label: 'View deck', href: 'https://docs.google.com/presentation/d/1NlNEKSAUaA9175SBm6sdMOWMa5FhjjInudskDqFa0KQ/edit?usp=sharing' }
  ],
  tags: ['HealthTech', 'AI', 'Parkinson’s'],
    image: '/images/projects/aeris.png',
    category: 'Health AI',
    variant: 'build-aeris',
  description: 'A low-cost e-nose for early Parkinson’s screening that analyzes sebum-derived VOC patterns using ML.',
  process: 'A low-cost e-nose for early Parkinson’s screening that analyzes sebum-derived VOC patterns using ML to identify Parkinson’s-like chemical signatures. Selected for the IYA Venture Showcase.',
  },
  {
    title: 'Promptly',
  links: [
    { label: 'View video demo', href: 'https://drive.google.com/file/d/132DfB7zeUgF56ENpbQQ1iE52m40cQJsM/view?usp=sharing' },
    { label: 'View deck', href: 'https://www.figma.com/proto/iJ87F4XXYLbbNgmHeXtWXj/PROMPTLY?node-id=85-206&t=kRJXZAJUY0R0zuoc-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A189' }
  ],
  tags: ['AI', 'Sustainability', 'Optimization'],
    image: '/images/projects/promptly.png',
    category: 'AI Tooling',
    variant: 'build-promptly',
  description: 'A coding extension optimizing AI prompts for energy efficiency and token reduction.',
  process: 'A coding extension optimizing AI prompts for energy efficiency and token reduction. Won 1st place at AI4Good Hackathon.',
  },
  {
    title: 'Claude9',
  links: [
    { label: 'View deck', href: 'https://www.figma.com/proto/nKxWurMXCINdBnZ4GyuGoo/Claude9-MBSA?node-id=4-33&t=pUruC5guPm9tFwko-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A33&show-proto-sidebar=1' }
  ],
  tags: ['GTM', 'AI', 'Consulting'],
    image: '/images/projects/claude9.png',
    category: 'AI Product',
    variant: 'build-claude',
  description: 'Enterprise launch layer for moving AI prototypes into deployed, market-ready products.',
  process: 'Developed an enterprise launch layer to move from AI prototypes to deployed, market-ready products through hosting, GTM intelligence, analytics, and optimization. Won funding at the MBSA Case Competition.',
  },
  {
    title: 'Drone Defense',
  links: [
    { label: 'View pitch video', href: 'https://drive.google.com/file/d/1bP9gaoH_wK747qdn1ubVSKve--MGeazW/view?usp=sharing' },
    { label: 'View business plan', href: 'https://drive.google.com/file/d/1Vgibj5vMpDMpooDWZM8FMRhCaSCc0kH0/view?usp=sharing' },
    { label: 'View Conrad', href: 'https://conrad.spacecenter.org' }
  ],
  tags: [],
    image: '/images/projects/drone-defense.png',
    category: 'Security Tech',
    variant: 'build-drone',
  description: 'Public safety system for real-time monitoring, threat detection, and rapid response.',
  process: 'Enhancing public safety to detect firearms and prevent mass shootings through real-time monitoring, threat detection, and rapid response. Recognized as a Conrad Innovator.',
  },
  {
    title: 'XR Fitness Trainer',
  links: [
    { label: 'View pitch deck', href: 'https://www.figma.com/deck/riKh2g3rAAIwn4ENVLJop5/XR-Fitness-Coach?node-id=1-1018&t=YTufU6jaelex3imj-1' }
  ],
  tags: ['XR/AR', 'Fitness', 'AI'],
    image: '/images/projects/xr-fitness-trainer.png',
    category: 'Spatial Computing',
    variant: 'build-xr',
  description: 'AI-driven fitness coach for augmented reality training sessions and real-time feedback.',
  process: 'AI-driven fitness coach that guides users through augmented reality training sessions and provides real-time feedback.',
  },
  {
    title: '17 Degrees',
  links: [],
  tags: ['E-Commerce'],
    image: '/images/projects/seventeen-degrees.png',
    category: 'Venture',
    variant: 'build-17',
  description: 'Built and scaled a global e-commerce business with thousands of sales.',
  process: 'Built and scaled a global e-commerce business with thousands of sales, managing the full lifecycle from product development to operations, fulfillment, and growth.',
  },
  {
    title: 'Restart',
  links: [
    { label: 'View project', href: 'https://drive.google.com/file/d/1Ygz-uEg3eVwnxrAilcz68saCogqGfXnC/view?usp=sharing' },
    { label: 'Frisco Style feature', href: 'https://friscostyle.com/access-granted/' }
  ],
  tags: ['Non-Profit', 'Education'],
    image: '/images/projects/restart.png',
    category: 'Nonprofit',
    variant: 'build-restart',
  description: 'Refurbishing and donating laptops to underserved students to expand access to technology.',
  process: 'Bridging the digital divide by refurbishing and donating laptops to underserved students. Secured thousands in non-equity grant funding to expand access to technology and education. Featured in Frisco Style and Lifestyle Frisco.',
  },
  {
    title: 'Sustainable Innovative House',
  links: [
    { label: 'View project', href: 'https://drive.google.com/file/d/1S-w4tVDFJnpv1bJy-VwqAPfH178154Wc/view?usp=sharing' }
  ],
  tags: ['Sustainable', 'SDG', 'Engineering'],
    image: '/images/projects/sustainable-innovative-house.png',
    category: 'Social Impact',
    variant: 'build-house',
  description: 'Innovative sustainable house for refugees and unhoused individuals.',
  process: 'Innovative sustainable house for refugees and unhoused individuals. The model is designed in a compact and modular way, adaptable to various environments and climates. The interior layout is optimized for functionality and comfort, with a flexible modular design that can be tailored to different family sizes and needs. The duplex model includes a community garden and shared space that promotes social interaction and community building, creating affordable, accessible, and sustainable housing.',
  },
  {
    title: 'Rewind',
  links: [
    { label: 'View project', href: 'https://drive.google.com/file/d/1ApsRx0uram8_-69UeTRWuK-xYw1lC5m8/view?usp=sharing' }
  ],
  tags: [],
    image: '/images/projects/rewind.png',
    category: 'Spatial Computing',
    variant: 'build-rewind',
  description: 'A community-driven film and TV discovery platform.',
  process: 'A community-driven film and TV discovery platform. Won 1st place.',
  },
  {
    title: 'Halo',
  links: [
    { label: 'View project', href: 'https://canva.link/2rtk4st7owizch5' }
  ],
  tags: ['AI', 'HealthTech'],
    image: '/images/projects/halo.png',
    category: 'Wearable Health',
    variant: 'build-halo',
  description: 'AI-powered ear cuff that regulates cognitive function through haptics and adaptive audio.',
  process: 'AI-powered ear cuff actively regulating cognitive function across chronic illnesses and neurodegenerative conditions, intervening in real time through haptic vibration and adaptive audio.',
  },
  {
    title: 'Nike',
  links: [
    { label: 'View deck', href: 'https://canva.link/j6afvqtvg23pvhv' }
  ],
  tags: ['Consulting', 'Innovation'],
    image: '/images/projects/nike.png',
    category: 'Consulting',
    variant: 'consult-nike',
    description: 'Innovation consulting project exploring product strategy, consumer behavior, and future-facing brand experiences.',
    process: 'Consulting exploration around product futures, consumer behavior, brand strategy, and innovation opportunities.',
  },
  {
    title: 'Snap',
  links: [
    { label: 'View prototype', href: 'https://www.figma.com/proto/OQVPw5P0WjdX2w3A56DsgM/IF-Prompt-2a---Snapchat-Spectacles?node-id=79-16&t=b6N9ODhja086U29B-1' }
  ],
  tags: ['Consulting', 'AR'],
    image: '/images/projects/snap.png',
    category: 'Consulting',
    variant: 'consult-snap',
    description: 'Concept development and strategy work around spatial, social, and camera-first product experiences.',
    process: 'Consulting exploration around spatial, social, and camera-first product experiences.',
  },
  {
    title: 'Crocs',
  links: [
    { label: 'View deck', href: 'https://canva.link/qy6nstf0twihctq' }
  ],
  tags: ['Consulting', 'Product Strategy'],
    image: '/images/projects/crocs.png',
    category: 'Consulting',
    variant: 'consult-crocs',
    description: 'Product and brand strategy exploration focused on community, customization, and playful consumer engagement.',
    process: 'Consulting exploration around playful product strategy, customization, community, and consumer engagement.',
  },
  {
    title: 'RKS Design',
  links: [
    { label: 'View deck', href: 'https://canva.link/ny1yzcyogu9r4lp' }
  ],
  tags: ['Product Design', 'Biomimicry'],
    image: '/images/projects/rks-design.png',
    category: 'Consulting',
    variant: 'consult-rks',
    description: 'Human-centered design consulting work across research, concept framing, and product storytelling.',
    process: 'Consulting work across research, framing, product storytelling, and human-centered design.',
  },
  {
    title: 'Veena Studios',
  links: [
    { label: 'View deck', href: 'https://canva.link/mxj1epvkv0f2kfs' }
  ],
  tags: ['Growth', 'Product Strategy'],
    image: '/images/projects/veena-studios.png',
    category: 'Consulting',
    variant: 'consult-veena',
    description: 'Creative strategy project spanning brand positioning, visual direction, and audience experience.',
    process: 'Creative strategy work around brand positioning, visual direction, and audience experience.',
  },
  {
    title: 'Fleurs et Sel',
    image: '/images/projects/fleurs-et-sel.png',
    category: 'Consulting',
    description: 'Brand and growth strategy consulting project.',
    process: 'Brand and growth strategy consulting project.',
    variant: 'consult-fleurs',
    tags: ['Consulting', 'Brand Strategy', 'Growth'],
    links: [],
  },
];

export const designWork = [
  {
    tag: '@Iovine and Young Academy',
    title: 'Cohort 12 Mural',
    description:
      'Selected to be Art Director and Project Manager for the 12th cohort mural. Each year, the cohort creates a mural that reflects its shared identity.',
    thumb: 'mural',
    links: ['Website', 'AR Component'],
  },
  {
    tag: '@ACE',
    title: 'Architecture, Construction, Engineering Mentor Program',
    description:
      'Designed a mock Formula race track in Madrid, Spain while applying engineering, architecture, and technology principles.',
    thumb: 'ace',
    links: ['Pitch Video'],
  },
  {
    tag: '@PLTW',
    title: 'Project Lead The Way',
    description:
      'Engineering design portfolio from Intro to Engineering Design and Principles of Engineering courses.',
    thumb: 'pltw',
    links: ['Website'],
  },
  {
    tag: '@Art',
    title: 'Ceramics, Photography, Stickers',
    description:
      'A creative practice spanning ceramic art, concert photography, visual systems, and an e-commerce business with thousands of sales globally.',
    thumb: 'art',
    links: ['https://drive.google.com/file/d/1NZL-P2g9QDB4f5SO7a16Rdfwt4_Xnyo_/view?usp=sharing'],
  },
];

export const experiences = [
  {
    logo: 'BMA',
    title: 'Growth & GTM Engineer',
    company: 'Blue Modern Advisory',
    description: 'Building AI-powered growth systems, GTM workflows, and client-facing product strategy.',
    current: true,
  },
  {
    logo: 'A',
    title: 'Head of Growth',
    company: 'Alűna Retreat Planning',
    url: 'https://www.alüna.com/',
    description: 'Leading growth, content, and digital strategy for retreat and wellness-focused experiences.',
    current: true,
  },
  {
    logo: 'LV',
    title: 'Business Development Consultant and Researcher',
    company: 'LivaNova',
    url: 'https://www.livanova.com/en-us/about-us',
    description: 'Supporting research, business development, and medtech strategy across patient-centered innovation.',
  },
  {
    logo: 'HQ',
    title: 'Business Operations and Development Lead',
    company: 'HaptiQ',
    url: 'https://www.haptiq.com/',
    description: 'Working across operations, validation, and development for assistive technology and product launch.',
  },
  {
    logo: 'DS',
    title: 'Lead Mentor & Inventor',
    company: 'discoverSTEM',
    url: 'https://discoverstem.info/',
    description: 'Mentoring students through innovation, research, entrepreneurship, and patentable project development.',
  },
];

export const communities = [
  'USC Iovine and Young Academy Cohort 12',
  'Marshall AI Association',
  'IYA Podcast + Rare Podcast',
  'Trojan Street Aid',
  'Bloom',
];

export const honors = [
  ['Conrad Innovator', 'Global innovation recognition for Drone Defense.'],
  ['Gold Presidential Volunteer Service Award', '250+ service hours teaching invention and innovation.'],
  ['Featured Entrepreneur', 'Restart featured in Frisco Style and Lifestyle Frisco.'],
  ['Top Young Innovator', 'Recognized at the Texas State Capitol for Innovation Day 2025.'],
];
