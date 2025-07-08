
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  colors: string[];
  sizes: string[];
  description: string;
  highlights: string[];
  collection: string;
  isNew?: boolean;
  colorway: string;
}

export const products: Product[] = [
  // Urban Edge Collection
  {
    id: '1',
    name: 'VELTRO APEX',
    price: 195,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
    category: 'Performance',
    rating: 4.9,
    colors: ['Black', 'White', 'Navy'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Revolutionary performance footwear engineered for speed and comfort.',
    highlights: ['Carbon fiber sole', 'Breathable mesh upper', 'Advanced cushioning system'],
    collection: 'Urban Edge',
    isNew: true,
    colorway: 'Shadow Black'
  },
  {
    id: '2',
    name: 'VELTRO FLUX',
    price: 215,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
    category: 'Luxury',
    rating: 4.8,
    colors: ['Black', 'Bronze', 'Silver'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Luxury meets innovation in this premium athletic silhouette.',
    highlights: ['Premium leather construction', 'Titanium accents', 'Ultra-responsive foam'],
    collection: 'Urban Edge',
    colorway: 'Bronze Luxe'
  },
  {
    id: '3',
    name: 'VELTRO STORM',
    price: 165,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop',
    category: 'Training',
    rating: 4.7,
    colors: ['Gray', 'Blue', 'Black'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Built for intensity with uncompromising durability.',
    highlights: ['All-weather grip', 'Reinforced heel support', 'Moisture-wicking interior'],
    collection: 'Urban Edge',
    colorway: 'Storm Gray'
  },
  {
    id: '4',
    name: 'VELTRO RISE',
    price: 275,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    category: 'Elite',
    rating: 5.0,
    colors: ['White', 'Gold', 'Black'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The pinnacle of athletic luxury and performance engineering.',
    highlights: ['24k gold details', 'Handcrafted construction', 'Limited edition design'],
    collection: 'Urban Edge',
    isNew: true,
    colorway: 'Golden Hour'
  },
  
  // Performance Prime Collection
  {
    id: '5',
    name: 'VELTRO VELOCITY',
    price: 185,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=600&fit=crop',
    category: 'Running',
    rating: 4.8,
    colors: ['Red', 'Black', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Engineered for speed with aerodynamic design principles.',
    highlights: ['Wind-tunnel tested', 'Energy return technology', 'Lightweight construction'],
    collection: 'Performance Prime',
    isNew: true,
    colorway: 'Solar Rust'
  },
  {
    id: '6',
    name: 'VELTRO QUANTUM',
    price: 225,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop',
    category: 'Tech',
    rating: 4.9,
    colors: ['Black', 'Silver', 'Blue'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Next-generation athletic footwear with smart technology integration.',
    highlights: ['Smart sensors', 'Adaptive cushioning', 'Performance tracking'],
    collection: 'Performance Prime',
    colorway: 'Quantum Blue'
  },
  {
    id: '7',
    name: 'VELTRO PULSE',
    price: 155,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    category: 'Training',
    rating: 4.6,
    colors: ['Orange', 'Black', 'Gray'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'High-intensity training shoe with maximum energy return.',
    highlights: ['Explosive cushioning', 'Multi-directional grip', 'Breathable mesh'],
    collection: 'Performance Prime',
    colorway: 'Energy Orange'
  },
  {
    id: '8',
    name: 'VELTRO THRUST',
    price: 205,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&h=600&fit=crop',
    category: 'Performance',
    rating: 4.7,
    colors: ['White', 'Black', 'Green'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Propulsion-focused design for competitive athletes.',
    highlights: ['Propulsion plate', 'Race-day construction', 'Elite performance'],
    collection: 'Performance Prime',
    isNew: true,
    colorway: 'Pure White'
  },

  // Minimal Luxe Collection
  {
    id: '9',
    name: 'VELTRO ESSENCE',
    price: 240,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=600&fit=crop',
    category: 'Lifestyle',
    rating: 4.8,
    colors: ['Cream', 'Beige', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Minimalist luxury with premium materials and clean lines.',
    highlights: ['Italian leather', 'Handcrafted details', 'Timeless design'],
    collection: 'Minimal Luxe',
    colorway: 'Cloud Cream'
  },
  {
    id: '10',
    name: 'VELTRO PURE',
    price: 195,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&h=600&fit=crop',
    category: 'Casual',
    rating: 4.6,
    colors: ['White', 'Gray', 'Beige'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Clean aesthetic meets modern comfort technology.',
    highlights: ['Minimalist design', 'All-day comfort', 'Versatile styling'],
    collection: 'Minimal Luxe',
    colorway: 'Pure White'
  },
  {
    id: '11',
    name: 'VELTRO ZEN',
    price: 175,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop',
    category: 'Wellness',
    rating: 4.7,
    colors: ['Sage', 'White', 'Gray'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Mindful design for the conscious consumer.',
    highlights: ['Sustainable materials', 'Meditative comfort', 'Wellness-focused'],
    collection: 'Minimal Luxe',
    isNew: true,
    colorway: 'Sage Zen'
  },
  {
    id: '12',
    name: 'VELTRO CALM',
    price: 155,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=600&fit=crop',
    category: 'Comfort',
    rating: 4.5,
    colors: ['Sand', 'White', 'Light Gray'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Serene comfort for everyday luxury.',
    highlights: ['Cloud-like cushioning', 'Stress-free design', 'Natural materials'],
    collection: 'Minimal Luxe',
    colorway: 'Desert Sand'
  },

  // Monochrome Series
  {
    id: '13',
    name: 'VELTRO NOIR',
    price: 210,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=600&fit=crop&sat=-100',
    category: 'Statement',
    rating: 4.9,
    colors: ['Black'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Bold monochrome statement with architectural lines.',
    highlights: ['All-black construction', 'Architectural silhouette', 'Statement piece'],
    collection: 'Monochrome Series',
    isNew: true,
    colorway: 'Midnight Black'
  },
  {
    id: '14',
    name: 'VELTRO BLANC',
    price: 210,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=600&fit=crop&sat=-100&brightness=120',
    category: 'Statement',
    rating: 4.8,
    colors: ['White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Pure white sophistication with modern edge.',
    highlights: ['All-white design', 'Premium materials', 'Clean aesthetic'],
    collection: 'Monochrome Series',
    colorway: 'Pure White'
  },
  {
    id: '15',
    name: 'VELTRO SHADOW',
    price: 185,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop&sat=-100',
    category: 'Urban',
    rating: 4.7,
    colors: ['Charcoal', 'Black'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Urban sophistication in shadowed tones.',
    highlights: ['Tonal design', 'Urban aesthetic', 'Stealth luxury'],
    collection: 'Monochrome Series',
    colorway: 'Shadow Charcoal'
  },
  {
    id: '16',
    name: 'VELTRO GHOST',
    price: 165,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=600&fit=crop&sat=-100&brightness=110',
    category: 'Minimal',
    rating: 4.6,
    colors: ['Light Gray', 'White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Ethereal design with ghostly elegance.',
    highlights: ['Phantom colorway', 'Subtle luxury', 'Understated elegance'],
    collection: 'Monochrome Series',
    colorway: 'Ghost Gray'
  },

  // EarthTread Collection
  {
    id: '17',
    name: 'VELTRO TERRA',
    price: 195,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&h=600&fit=crop',
    category: 'Sustainable',
    rating: 4.8,
    colors: ['Earth Brown', 'Olive', 'Sand'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Sustainable luxury with earth-conscious materials.',
    highlights: ['Recycled materials', 'Carbon-neutral production', 'Earth-inspired design'],
    collection: 'EarthTread',
    isNew: true,
    colorway: 'Terra Brown'
  },
  {
    id: '18',
    name: 'VELTRO FOREST',
    price: 175,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop&hue=120',
    category: 'Eco',
    rating: 4.7,
    colors: ['Forest Green', 'Brown', 'Khaki'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Nature-inspired design with eco-friendly construction.',
    highlights: ['Organic materials', 'Forest conservation support', 'Natural comfort'],
    collection: 'EarthTread',
    colorway: 'Forest Green'
  },
  {
    id: '19',
    name: 'VELTRO OCEAN',
    price: 185,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&hue=200',
    category: 'Marine',
    rating: 4.6,
    colors: ['Ocean Blue', 'Teal', 'Navy'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Ocean-inspired colorways with recycled marine plastic.',
    highlights: ['Ocean plastic recycled', 'Marine conservation', 'Tidal technology'],
    collection: 'EarthTread',
    colorway: 'Ocean Blue'
  },
  {
    id: '20',
    name: 'VELTRO STONE',
    price: 165,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=600&fit=crop&hue=30',
    category: 'Natural',
    rating: 4.5,
    colors: ['Stone Gray', 'Sandstone', 'Slate'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Mineral-inspired design with natural durability.',
    highlights: ['Stone-textured materials', 'Natural durability', 'Grounded comfort'],
    collection: 'EarthTread',
    colorway: 'Stone Gray'
  }
];

export const collections = [
  {
    id: 'urban-edge',
    name: 'Urban Edge',
    description: 'Streetwear-forward silhouettes with bold soles',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=800&fit=crop',
    tagline: 'Bold. Street. Future.'
  },
  {
    id: 'performance-prime',
    name: 'Performance Prime',
    description: 'Running-inspired, tech knit uppers',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1200&h=800&fit=crop',
    tagline: 'Speed. Innovation. Excellence.'
  },
  {
    id: 'minimal-luxe',
    name: 'Minimal Luxe',
    description: 'Clean all-white and neutral designs',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1200&h=800&fit=crop',
    tagline: 'Pure. Elegant. Timeless.'
  },
  {
    id: 'monochrome-series',
    name: 'Monochrome Series',
    description: 'Clean all-black and all-white designs',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1200&h=800&fit=crop&sat=-100',
    tagline: 'Bold. Stark. Statement.'
  },
  {
    id: 'earthtread',
    name: 'EarthTread',
    description: 'Sustainable materials & earthy tones',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=1200&h=800&fit=crop',
    tagline: 'Conscious. Natural. Future.'
  }
];
