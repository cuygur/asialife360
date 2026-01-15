export const heroContent = {
  title: "Design Your Ideal Life.",
  accentTitle: "We Handle the Move.",
  description:
    "The premier relocation agency for professionals and retirees moving to the UAE and Southeast Asia. Experience the power of geographic arbitrage—safely, legally, and seamlessly.",
  buttons: {
    primary: "Book Your Discovery Call",
    secondary: "Explore Destinations",
  },
};

export const trustBarContent = {
  label: "Trusted by 500+ professionals globally",
  stats: [
    { label: "Successful Relocations", value: "500+" },
    { label: "Countries Covered", value: "8" },
    { label: "Tax Savings", value: "30%+" },
  ],
};

export const valuePropsContent = {
  title: "Why Just Survive When You Can Thrive?",
  description:
    "The world has changed. You no longer need to be tethered to a high-cost, high-stress environment to be successful. We specialize in **Geographic Arbitrage**.",
  realities: {
    old: {
      title: "The Old Reality",
      items: [
        "High Cost of Living",
        "High Taxes (30-50%)",
        "Stress & Burnout",
        "Cold Weather & Grey Skies",
      ],
    },
    new: {
      title: "The AsiaLife360 Reality",
      items: [
        "Luxury for Less",
        "0% to Low Tax",
        "Wellness & Balance",
        "Year-round Sun",
      ],
    },
  },
};

export const segmentationContent = {
  title: "Tailored to Your Stage of Life",
  tabs: [
    {
      id: "remote",
      label: "Remote Professional",
      title: "For the Digital Nomad & Entrepreneur",
      description:
        "Fast Wi-Fi, tax efficiency, and a thriving network. We set up your tax residency, find coworking-friendly penthouses, and plug you into the local business ecosystem immediately.",
      topPicks: ["UAE (Tax Free)", "Thailand (Community)"],
      buttonLabel: "Start Your Business Move",
    },
    {
      id: "retiree",
      label: "The Golden Years",
      title: "Retire in Luxury & Peace",
      description:
        "World-class healthcare, safety, and purchasing power. We navigate retirement visas, ensure proximity to international hospitals, and find quiet, fully-serviced communities.",
      topPicks: ["Thailand (Healthcare)", "Philippines (Value)"],
      buttonLabel: "Plan Your Retirement",
    },
  ],
};

export interface DestinationMetrics {
  healthcare: string;
  connectivity: string;
  safety: string;
  tax: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  tags: string[];
  heroImage: string;
  stat: string;
  metrics: DestinationMetrics;
  detailedStats: {
    avgCostSingle: string;
    avgCostFamily: string;
    weather: string;
    safetyIndex: string;
    internetSpeed: string;
  };
  highlights: string[];
  lifestyle: string;
  costOfLiving: string;
}

export const destinationsContent: Destination[] = [
  {
    id: "uae",
    name: "Dubai, UAE",
    description:
      "Why tolerate a system that penalizes your success? Dubai is the ultimate meritocracy. Zero tax on your hard-earned wealth, 100% ownership of your future, and a lifestyle that redefines 'standard'.",
    tags: ["0% Tax", "Business Hub", "Elite Safety"],
    heroImage: "hero-dubai.png",
    stat: "Keep 100% of Earnings",
    metrics: {
      healthcare: "World-Leading (JCI)",
      connectivity: "Global Hub (1.2 Gbps)",
      safety: "9.9/10",
      tax: "0%",
    },
    detailedStats: {
      avgCostSingle: "$3,500/mo",
      avgCostFamily: "$6,000/mo",
      weather: "Sun Guaranteed",
      safetyIndex: "Unmatched",
      internetSpeed: "1.2 Gbps",
    },
    highlights: [
      "Zero income, capital gains, or corporate tax (zones)",
      "Safest city in the world for families and assets",
      "Golden Visa: 10-year residency for investors",
      "Unrivaled luxury and service infrastructure",
    ],
    lifestyle:
      "This isn't just a place to live; it's a place to ascend. Surround yourself with high-net-worth individuals, seamless digital infrastructure, and safety that is statistically impossible in the West.",
    costOfLiving: "High, but totally irrelevant when you pay zero tax.",
  },
  {
    id: "indonesia",
    name: "Bali, Indonesia",
    description:
      "The 9-to-5 isn't just a job; it's a cage. Bali is the key. Trade the grey skyline for green rice terraces, and stress for serenity. Join a community of creators who have already hacked the system.",
    tags: ["Wellness", "Creator Hub", "Nature"],
    heroImage: "hero-bali.png",
    stat: "#1 Digital Nomad Hub",
    metrics: {
      healthcare: "International Clinics",
      connectivity: "Nomad Standard (100 Mbps)",
      safety: "8.5/10",
      tax: "Territorial (Low)",
    },
    detailedStats: {
      avgCostSingle: "$1,500/mo",
      avgCostFamily: "$2,800/mo",
      weather: "Tropical Warmth",
      safetyIndex: "Very High",
      internetSpeed: "100 Mbps+",
    },
    highlights: [
      "Live like royalty for a fraction of Western costs",
      "World's most concentrated creative entrepreneur community",
      "Healing lifestyle with daily yoga, organic food, and nature",
      "5-Year Nomad Visa options available now",
    ],
    lifestyle:
      "Mornings start with mindfulness, not commutes. Evenings end with sunsets, not spreadsheets. It's the perfect ecosystem for deep work and deep rest.",
    costOfLiving: "Extremely Low. Your currency buys you a villa, not a box.",
  },
  {
    id: "thailand",
    name: "Bangkok, Thailand",
    description:
      "Stop overpaying for a mediocre life. Bangkok offers first-world luxury at third-world prices. Master the art of geo-arbitrage where your currency buys you a penthouse view, not a basement studio.",
    tags: ["Foodie Heaven", "Medical Hub", "Value"],
    heroImage: "hero-bangkok.png",
    stat: "Best Value Luxury",
    metrics: {
      healthcare: "JCI Accredited (Superior)",
      connectivity: "5G Supercity (1 Gbps)",
      safety: "8.2/10",
      tax: "17% (Capped)",
    },
    detailedStats: {
      avgCostSingle: "$1,800/mo",
      avgCostFamily: "$3,200/mo",
      weather: "Tropical Urban",
      safetyIndex: "High",
      internetSpeed: "1 Gbps",
    },
    highlights: [
      "World's best street food meets Michelin star dining",
      "Medical tourism capital: US quality at 20% of the cost",
      "LTR Visa: 10 years of hassle-free residency",
      "Incredible condo amenities (Pools, Gyms, Coworking) included",
    ],
    lifestyle:
      "A city that pulses with energy. From street food that beats Michelin stars to hospitals that rival the Mayo Clinic for a fraction of the cost. It's efficiency meets chaos in the best way possible.",
    costOfLiving: "Unbeatable. High-end luxury for middle-class budgets.",
  },
  {
    id: "philippines",
    name: "The Philippines",
    description:
      "Tired of feeling like a stranger? In the Philippines, you're not just a resident; you're family. English is universal, smiles are genuine, and the cost of entry for a luxury life is shockingly low.",
    tags: ["English Spoken", "Tropical", "Hospitality"],
    heroImage: "hero-philippines.png",
    stat: "Easiest Transition",
    metrics: {
      healthcare: "Premium (Manila/BGC)",
      connectivity: "Improving (Starlink Avail.)",
      safety: "7.8/10",
      tax: "Territorial",
    },
    detailedStats: {
      avgCostSingle: "$1,200/mo",
      avgCostFamily: "$2,200/mo",
      weather: "Tropical Maritime",
      safetyIndex: "Good",
      internetSpeed: "50-100 Mbps",
    },
    highlights: [
      "Zero language barrier: English is the official language",
      "SRRV Visa: One of the world's most accessible retirement options",
      "7,641 islands offering endless exploration",
      "Warmest, most welcoming culture in Asia",
    ],
    lifestyle:
      "Island life without the isolation. Navigate business and pleasure in English, explore 7,000+ islands, and enjoy a culture that prioritizes connection over transaction.",
    costOfLiving: "Absurdly Low. Maximize your pension or remote salary.",
  },
];

export const whyUsContent = {
  title: "The AsiaLife360 Difference",
  description: "Why risk your future? We guarantee your seamless transition.",
  comparison: [
    {
      feature: "Visas",
      diy: "Confusing gov sites, rejection risk",
      us: "Fast-tracked, attorney-verified. 100% Success.",
    },
    {
      feature: "Housing",
      diy: "Airbnb markups, potential scams",
      us: "Verified local landlords, video tours.",
    },
    {
      feature: "Community",
      diy: "Lonely start, limited network",
      us: "Instant access to private expat circles.",
    },
    {
      feature: "Peace of Mind",
      diy: "Hoping for the best",
      us: "Guaranteed.",
    },
  ],
};

export const ctaContent = {
  title: "Stop Dreaming. Start Living.",
  description:
    "The life you want is waiting. The only thing standing between you and your upgrade is the logistics. Let us handle those.",
  buttonLabel: "Book Your Free Strategy Call",
  subText: "Get a custom relocation roadmap in 30 minutes.",
  linkText: "Or Download 2026 Relocation Guide",
};
