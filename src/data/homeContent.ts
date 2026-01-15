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
  highlights: string[];
  lifestyle: string;
  costOfLiving: string;
}

export const destinationsContent: Destination[] = [
  {
    id: "uae",
    name: "Dubai, UAE",
    description: "The global hub for tax-free growth and luxury living.",
    tags: ["0% Tax", "Business Hub", "Luxury"],
    heroImage: "hero-dubai.png",
    stat: "0% Income Tax",
    metrics: {
      healthcare: "World-Class (Private)",
      connectivity: "Global Hub (1.2 Gbps)",
      safety: "9.8/10",
      tax: "0%",
    },
    highlights: [
      "No income or capital gains tax",
      "World-class infrastructure and safety",
      "Golden Visa residency for 10 years",
      "Global travel hub with 2 major airports",
    ],
    lifestyle:
      "Fast-paced, high-tech, and incredibly diverse. Dubai offers everything from desert adventures to world-leading dining and entertainment.",
    costOfLiving: "High, but offset by zero taxes and high earning potential.",
  },
  {
    id: "indonesia",
    name: "Bali, Indonesia",
    description: "Tropical paradise meets a thriving nomad community.",
    tags: ["Wellness", "Community", "Nature"],
    heroImage: "hero-bali.png",
    stat: "Top Nomad Spot",
    metrics: {
      healthcare: "International Clinics",
      connectivity: "Nomad Standard (100 Mbps)",
      safety: "8.5/10",
      tax: "Low/Variable",
    },
    highlights: [
      "Lower cost of high-end living",
      "Vibrant creative and startup culture",
      "Breathtaking landscapes and surf",
      "Rich spiritual and cultural heritage",
    ],
    lifestyle:
      "Balanced, nature-focused, and deeply social. Ideal for creators, spiritual seekers, and remote entrepreneurs looking for community.",
    costOfLiving:
      "Very affordable for Western standards, especially for housing and services.",
  },
  {
    id: "thailand",
    name: "Bangkok, Thailand",
    description: "High-octane city life with world-class amenities.",
    tags: ["Food", "Healthcare", "Value"],
    heroImage: "hero-bangkok.png",
    stat: "Best Value Luxury",
    metrics: {
      healthcare: "JCI Accredited (Superior)",
      connectivity: "5G Supercity (1 Gbps)",
      safety: "8.2/10",
      tax: "Low (LTR Visa)",
    },
    highlights: [
      "JCI-accredited world-class healthcare",
      "Food paradise from street to Michelin",
      "Ultra-modern condos at incredible value",
      "New LTR visa for long-term residency",
    ],
    lifestyle:
      "Energetic, convenient, and hospitality-first. Bangkok is a city that never sleeps, offering a perfect blend of tradition and modernity.",
    costOfLiving:
      "Moderate. Exceptional value for high-end real estate and medical care.",
  },
  {
    id: "philippines",
    name: "The Philippines",
    description: "Warm culture and English-speaking convenience.",
    tags: ["English", "Beaches", "Hospitality"],
    heroImage: "hero-philippines.png",
    stat: "Most Accessible",
    metrics: {
      healthcare: "Premium (Manila/BGC)",
      connectivity: "Improving (Starlink Avail.)",
      safety: "7.8/10",
      tax: "Moderate",
    },
    highlights: [
      "Widespread English proficiency",
      "Over 7,000 stunning islands to explore",
      "Extremely friendly and welcoming locals",
      "Developing business districts in BGC",
    ],
    lifestyle:
      "Relaxed, ocean-centric, and family-oriented. Great for those who want a westernized communication experience in a tropical setting.",
    costOfLiving:
      "Low. One of the best places in Asia for high purchasing power.",
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
