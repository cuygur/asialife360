export interface SuccessStory {
  title: string;
  profile: string;
  intervention: string;
  outcome: string;
  tags: string[];
  metrics: string;
  type: "Tax" | "Lifestyle" | "Speed" | "Security" | "Family";
}

export const successStories: SuccessStory[] = [
  {
    type: "Tax",
    title:
      "From 52% Marginal Tax to 0%: How a SaaS Founder Reclaimed His Growth Capital",
    profile:
      "Julian was a textbook case of a founder being punished for his success. Based in Berlin, every Euro of growth in his SaaS company was met with a 52% marginal tax rate and a mountain of bureaucratic 'compliance' that stole energy from product development. With a team of 15 remote developers scattered across the globe, Julian realized he was paying a premium for a 'hub' that offered him no strategic benefit beyond high rent and grey skies.",
    intervention:
      "We utilized our proprietary Selection Matrix to audit Julian's specific corporate structure. While he initially considered Portugal, our data showed the UAE offered superior long-term stability and 0% tax for his specific revenue model. We deployed the Relocation Engine to manage the entire 'Business-in-a-Box' transition. This wasn't just about the visa; we handled the corporate banking setup—notoriously difficult for remote entities—and ensured he met all 'economic substance' requirements to remain bulletproof against future audits.",
    outcome:
      "Julian’s residency was secured in 22 days. **The Result: By moving his tax domicile to Dubai, Julian reclaimed $240,000 in personal income annually. More importantly, the corporate tax savings allowed him to double his engineering team without raising additional capital, leading to a 40% MRR increase within his first eight months in the desert.**",
    tags: ["0% Corporate Tax", "SaaS Scaling", "Golden Visa"],
    metrics: "$240k saved/year",
  },
  {
    type: "Lifestyle",
    title:
      "Beyond the Hype: Securing a High-Alpha Lifestyle in Bali Without Legal Friction",
    profile:
      "Marco had built a significant portfolio in the DeFi space, but the lifestyle in London was lagging behind his net worth. He craved the wellness-centric, high-vibe community of Bali but was paralyzed by 'horror stories' of shifting Indonesian visa policies, crypto-unfriendly banks, and the opaque nature of regional property laws. He needed more than a plane ticket; he needed a legal fortress to protect the assets he’d spent years accumulating.",
    intervention:
      "We initiated the Relocation Roadmap, a comprehensive 12-week plan that moved Marco from a standard tourist mindset to an Institutional Investor status. Our team bypassed the 'agent-middlemen' and worked directly with our inner circle of local attorneys to secure a 10-year Investor KITAS. We then solved the housing gap by identifying a 'pre-market' luxury villa in Uluwatu, structuring the leasehold through a legally sound PTPMA to ensure his capital was protected under Indonesian foreign investment laws.",
    outcome:
      "Marco relocated in 45 days with a fully compliant tax package. **The Result: His monthly burn dropped by 70% while his lifestyle quality increased 10x. He now spends his mornings surfing and his afternoons trading from a private managed estate, fully plugged into an elite, invite-only network of tech founders and investors.**",
    tags: ["Investor KITAS", "Crypto-Friendly", "Luxury Real Estate"],
    metrics: "70% burn reduction",
  },
  {
    type: "Security",
    title:
      "The Ultimate Upgrade: Safe Streets and Elite Education in the Heart of Southeast Asia",
    profile:
      "For the Henderson family, relocation wasn't about tax—it was about peace. Living in an increasingly unstable region of South Africa, their daily reality involved high-security gates, constant vigilance, and a growing concern over the long-term quality of their children's education. They felt trapped between their love for their home and their duty to provide a safe, world-class future for their two young daughters.",
    intervention:
      "Through our Selection Matrix, we filtered for the highest metrics in safety and JCI-accredited healthcare, identifying Bangkok’s Riverside and Singapore as the top contenders. We utilized the Relocation Engine to handle the 'Deep Concierge' details: securing highly-competitive admissions to a top-tier International IB school and managing the complex Family Dependent Visa process that usually takes months of back-and-forth. We even handled the pet relocation for their two golden retrievers, ensuring the whole family arrived together.",
    outcome:
      "The family moved into a high-floor luxury condo in Bangkok within 4 weeks. **The Result: The children are now thriving in a school ranked in the top 1% globally. For the first time in years, the parents enjoy evening walks through the city and 3 AM airport runs with 'absolute certainty' in their physical security and a renewed sense of freedom.**",
    tags: ["Elite Schooling", "Family Concierge", "Safe Haven"],
    metrics: "100% Security Certainty",
  },
  {
    type: "Speed",
    title:
      "Scaling to Freedom: 10x Lifestyle Upgrade for the Price of a Studio Apartment",
    profile:
      "Leo, a high-earning freelance consultant from San Francisco, was the victim of 'the grind.' He was paying $4,500/month for a cramped studio and spending another $3,000 on basic necessities. Despite a $250k income, he lived a remarkably 'middle class' life, exhausted by the commute and the lack of domestic support. He was making 'tech money' but living with 'student-level' friction.",
    intervention:
      "We drafted a custom Relocation Roadmap for Da Nang, Vietnam—the hidden gem of modern Asia. We managed the meticulous business visa requirements and leveraged our local 'Ground Intelligence' to secure a 2,500 sq. ft. beachfront penthouse that was never listed on public sites. We didn't just find him a house; we plugged him into a private high-speed fiber network and introduced him to a vetted domestic team, including a private chef and a personal assistant.",
    outcome:
      "Leo’s overhead dropped from $8,000 to $1,850 per month. **The Result: By delegating all domestic chores to his new team, Leo reclaimed 25 hours a week of 'deep work' time. He used that time to pivot from freelance work to a high-ticket agency model, effectively doubling his net revenue within 12 months while living in a paradise most only dream of.**",
    tags: ["Geographic Arbitrage", "Domestic Staff", "1 Gbps Fiber"],
    metrics: "25hrs/week reclaimed",
  },
  {
    type: "Family",
    title:
      "The Multi-Million Dollar Maneuver: Optimizing a Corporate Exit 12 Months in Advance",
    profile:
      "David was the CEO of a Fintech startup with a definitive liquidity event on the horizon. With a verified acquisition offer on the table, David realized that staying in his current high-tax European jurisdiction would result in a massive Capital Gains Tax (CGT) hit—essentially giving away 35% of his life's work to a government that provided no support during his 'lean years.' He needed a strategic exit from the tax net before the corporate exit finalized.",
    intervention:
      "This required Institutional-grade Legal Competence. We used our Relocation Engine to establish his residency in a tax-neutral jurisdiction 12 months prior to the sale. We managed the rigorous 'Center of Vital Interests' documentation, ensuring that his move was legally defensible and that he met the 183-day physical presence requirements long before the deal closed. We coordinated with his M&A attorneys to ensure his new tax domicile was recognized by the acquiring entity.",
    outcome:
      "David transitioned his tax domicile 10 months before the sale closed. **The Result: By legally repositioning his residency, David preserved over $5.2M in wealth that would have otherwise been lost to CGT. We then transitioned his file to our Family Office partners, ensuring that his 'new life' was supported by a robust wealth preservation structure from Day 1.**",
    tags: ["Exit Strategy", "Tax Residency", "Wealth Preservation"],
    metrics: "$5.2M Tax Preserved",
  },
];
