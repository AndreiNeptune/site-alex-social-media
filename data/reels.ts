export type ReelCategory = "gen-z" | "professional";

export interface Reel {
  id: string;
  title: string;
  category: ReelCategory;
  subCategory: string;
  videoSrc: string;
  posterSrc: string;
  client: string;
  niche: string;
  
  // Advanced Metrics
  views: string;
  watchTime: string;
  retentionPercent: string;
  replayFactor: string;
  shares: string;
  saves: string;
  ctrIncrease: string;
  
  // Psychological Breakdown
  objective: string;
  hookStrategy: string;
  retentionTactic: string;
  audienceType: string;
  attentionPattern: string;
  ctaLogic: string;
  emotionalPacing: string;
}

export const mockReels: Reel[] = [
  {
    id: "reel-01",
    title: "Local Business Transformation",
    category: "professional",
    subCategory: "Lead Generation",
    videoSrc: "https://videos.pexels.com/video-files/35628486/15098818_1920_1080_30fps.mp4",
    posterSrc: "https://images.pexels.com/videos/35628486/pexels-photo-35628486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "Retail Partner",
    niche: "Local Business",
    views: "1.2M",
    watchTime: "18.2s",
    retentionPercent: "54%",
    replayFactor: "1.2x",
    shares: "12K",
    saves: "45K",
    ctrIncrease: "+80%",
    objective: "Drive physical foot traffic and store visits through hyper-local pattern interrupts.",
    hookStrategy: "Local landmark visual combined with a bold offer in the first 0.5s.",
    retentionTactic: "High-tempo kinetic typography and fast cuts between product and community shots.",
    audienceType: "Local residents, community-driven consumers.",
    attentionPattern: "High initial spike. Sustained through local relevance.",
    ctaLogic: "Direct 'Visit Us' command with address overlay.",
    emotionalPacing: "Energetic, familiar, and urgent."
  },
  {
    id: "reel-02",
    title: "SaaS Growth Loop",
    category: "professional",
    subCategory: "B2B Strategy",
    videoSrc: "https://videos.pexels.com/video-files/29882131/12828950_1920_1080_25fps.mp4",
    posterSrc: "https://images.pexels.com/videos/29882131/free-video-29882131.jpg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
    client: "TechFlow SaaS",
    niche: "Software & Tech",
    views: "850K",
    watchTime: "24.5s",
    retentionPercent: "62%",
    replayFactor: "1.5x",
    shares: "4.5K",
    saves: "12K",
    ctrIncrease: "+150%",
    objective: "Increase qualified lead volume and reduce cost-per-acquisition.",
    hookStrategy: "Pain-point-first storytelling. Addressing the main B2B challenge instantly.",
    retentionTactic: "Educational series disguised as high-end cinematic editorial content.",
    audienceType: "Operators, founders, and decision-makers.",
    attentionPattern: "Steady build. Deep engagement through high value delivery.",
    ctaLogic: "Soft invitation to a free strategy audit.",
    emotionalPacing: "Authoritative, insightful, and cinematic."
  },
  {
    id: "reel-03",
    title: "E-Commerce Revenue Spike",
    category: "gen-z",
    subCategory: "DTC Sales",
    videoSrc: "https://videos.pexels.com/video-files/33830845/14358616_2560_1440_30fps.mp4",
    posterSrc: "https://images.pexels.com/videos/33830845/free-video-33830845.jpg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
    client: "Aura DTC",
    niche: "Consumer Goods",
    views: "2.4M",
    watchTime: "9.8s",
    retentionPercent: "48%",
    replayFactor: "2.4x",
    shares: "25K",
    saves: "110K",
    ctrIncrease: "+3x",
    objective: "Drive immediate revenue through sensory-driven product appeal.",
    hookStrategy: "High-fidelity macro shots and Foley sound design to trigger dopamine.",
    retentionTactic: "UGC-style authenticity matched with high-fashion color grading.",
    audienceType: "Aesthetic-driven Gen Z consumers.",
    attentionPattern: "Sensory lock. Repeated viewing for visual satisfaction.",
    ctaLogic: "Swipe-up for exclusive collection access.",
    emotionalPacing: "Satisfying, rhythmic, and luxury-paced."
  },
  {
    id: "reel-04",
    title: "Startup Brand Expansion",
    category: "gen-z",
    subCategory: "Awareness Engine",
    videoSrc: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
    posterSrc: "https://images.pexels.com/videos/3129957/free-video-3129957.jpg",
    client: "NextGen Fintech",
    niche: "Fintech Startup",
    views: "1.8M",
    watchTime: "12.4s",
    retentionPercent: "58%",
    replayFactor: "1.8x",
    shares: "18K",
    saves: "65K",
    ctrIncrease: "+200%",
    objective: "Increase brand mentions and dominate social conversation within a niche.",
    hookStrategy: "Controversial industry take delivered with minimalist, bold visuals.",
    retentionTactic: "Series-based attention loops designed for high replayability and debate.",
    audienceType: "Early adopters, tech enthusiasts.",
    attentionPattern: "Spike-and-loop. Encourages comment section interaction.",
    ctaLogic: "Question-based CTA to drive engagement and distribution.",
    emotionalPacing: "Bold, provocative, and fast."
  },
  {
    id: "reel-05",
    title: "Organic Ecosystem Authority",
    category: "professional",
    subCategory: "Personal Branding",
    videoSrc: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    posterSrc: "https://images.pexels.com/videos/3129671/free-video-3129671.jpg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
    client: "Elite Executive",
    niche: "Executive Coaching",
    views: "5.2M",
    watchTime: "22.0s",
    retentionPercent: "65%",
    replayFactor: "1.4x",
    shares: "150K",
    saves: "400K",
    ctrIncrease: "+45%",
    objective: "Position client as a top 1% authority in their global niche.",
    hookStrategy: "Intimate, high-fidelity behind-the-scenes monologue.",
    retentionTactic: "Documentary-style vertical storytelling with elegant typography.",
    audienceType: "High-performance individuals, CEOs.",
    attentionPattern: "Immersive. Relies on narrative strength and parasocial trust.",
    ctaLogic: "Subtle invitation to join a high-level masterclass.",
    emotionalPacing: "Grounded, authentic, and high-stakes."
  },
  {
    id: "reel-06",
    title: "The Cinematic Masterpiece",
    category: "professional",
    subCategory: "Brand Identity",
    videoSrc: "https://videos.pexels.com/video-files/28561007/12421215_2560_1440_30fps.mp4",
    posterSrc: "https://images.pexels.com/videos/28561007/3d-4k-abstract-backdrop-28561007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "Luxury Collective",
    niche: "Hospitality & Travel",
    views: "3.1M",
    watchTime: "16.8s",
    retentionPercent: "72%",
    replayFactor: "2.5x",
    shares: "85K",
    saves: "300K",
    ctrIncrease: "Elite",
    objective: "Establish extreme luxury positioning through visual and sound excellence.",
    hookStrategy: "Complete silence and slow zoom on a single, high-fidelity texture.",
    retentionTactic: "Atmospheric build-up. No fast cuts. Rewards focus and attention.",
    audienceType: "Ultra-high-net-worth individuals.",
    attentionPattern: "Hypnotic. The pace demands the viewer slows down to match the brand.",
    ctaLogic: "Minimal logo reveal at the end. Exclusivity-driven.",
    emotionalPacing: "Timeless, expansive, and elite."
  }
];
