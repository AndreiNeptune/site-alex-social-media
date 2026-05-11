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
    title: "The Silent Reveal",
    category: "professional",
    subCategory: "Luxury Cinematic",
    videoSrc: "https://videos.pexels.com/video-files/5913222/5913222-uhd_1440_2560_24fps.mp4",
    posterSrc: "https://images.pexels.com/photos/5913222/pexels-photo-5913222.jpeg?auto=compress&cs=tinysrgb&w=800",
    client: "Atelier V",
    niche: "High Fashion",
    
    views: "1.2M",
    watchTime: "14.2s",
    retentionPercent: "68%",
    replayFactor: "1.4x",
    shares: "12K",
    saves: "45K",
    ctrIncrease: "+22%",

    objective: "Establish brand prestige without relying on spoken narrative or trend audio.",
    hookStrategy: "Absolute silence for the first 1.5 seconds coupled with extreme slow-motion to break the scrolling cadence.",
    retentionTactic: "Gradual introduction of low-frequency ambient sound, building tension toward a single visual reveal.",
    audienceType: "High-net-worth individuals, fashion connoisseurs.",
    attentionPattern: "Slow build. Rewards patience. Forces the viewer into a meditative state.",
    ctaLogic: "No direct CTA. Relies purely on visual desire and brand association.",
    emotionalPacing: "Luxurious, deliberate, and timeless."
  },
  {
    id: "reel-02",
    title: "Chaos Theory",
    category: "gen-z",
    subCategory: "Meme Energy",
    videoSrc: "https://videos.pexels.com/video-files/5829910/5829910-uhd_1440_2560_24fps.mp4",
    posterSrc: "https://images.pexels.com/photos/5829910/pexels-photo-5829910.jpeg?auto=compress&cs=tinysrgb&w=800",
    client: "Creator X",
    niche: "Lifestyle Tech",
    
    views: "4.8M",
    watchTime: "7.8s",
    retentionPercent: "82%",
    replayFactor: "2.1x",
    shares: "115K",
    saves: "89K",
    ctrIncrease: "+45%",

    objective: "Maximize algorithm distribution through ultra-high replay value and visual unpredictability.",
    hookStrategy: "Visual stutter and a controversial statement delivered natively in-camera within 0.8 seconds.",
    retentionTactic: "Aggressive kinetic typography mapped to rapid, off-beat audio cuts.",
    audienceType: "Hyper-scrolling Gen Z, tech enthusiasts.",
    attentionPattern: "Spike and hold. Continuous dopamine hits every 1.5 seconds.",
    ctaLogic: "Hidden CTA flashed for 3 frames, encouraging replays to read it.",
    emotionalPacing: "Chaotic, fast, internet-native."
  },
  {
    id: "reel-03",
    title: "The Architectural Flow",
    category: "professional",
    subCategory: "Real Estate",
    videoSrc: "https://videos.pexels.com/video-files/3205315/3205315-uhd_2560_1440_25fps.mp4",
    posterSrc: "https://images.pexels.com/photos/3205315/pexels-photo-3205315.jpeg?auto=compress&cs=tinysrgb&w=800",
    client: "Aura Developments",
    niche: "Luxury Real Estate",
    
    views: "850K",
    watchTime: "18.5s",
    retentionPercent: "55%",
    replayFactor: "1.2x",
    shares: "8.5K",
    saves: "32K",
    ctrIncrease: "+18%",

    objective: "Showcase property flow and spatial awareness organically.",
    hookStrategy: "Seamless transition from macro detail (door handle) to wide establishing shot.",
    retentionTactic: "Continuous singular camera movement. No visible cuts.",
    audienceType: "Investors, high-end buyers.",
    attentionPattern: "Hypnotic. The single-take illusion prevents natural exit points.",
    ctaLogic: "Soft text fade-in at the absolute peak of the visual journey.",
    emotionalPacing: "Smooth, expansive, and calming."
  },
  {
    id: "reel-04",
    title: "Urban Hype Loop",
    category: "gen-z",
    subCategory: "Street Energy",
    videoSrc: "https://videos.pexels.com/video-files/5192077/5192077-uhd_1440_2732_25fps.mp4",
    posterSrc: "https://images.pexels.com/photos/5192077/pexels-photo-5192077.jpeg?auto=compress&cs=tinysrgb&w=800",
    client: "Drop Culture",
    niche: "Streetwear",
    
    views: "3.2M",
    watchTime: "11.1s",
    retentionPercent: "71%",
    replayFactor: "1.8x",
    shares: "45K",
    saves: "110K",
    ctrIncrease: "+60%",

    objective: "Manufacture artificial scarcity and high-energy FOMO for a product drop.",
    hookStrategy: "Harsh audio distortion combined with extreme handheld camera shake.",
    retentionTactic: "Sound sync flash cuts that match the heavy 808 bassline.",
    audienceType: "Streetwear community, hypebeasts.",
    attentionPattern: "Aggressive rhythm. Forces physical head-nodding response.",
    ctaLogic: "Direct 'Link in Bio' command shouted right before the loop restarts.",
    emotionalPacing: "Raw, urgent, and visceral."
  },
  {
    id: "reel-05",
    title: "Founder's Monologue",
    category: "professional",
    subCategory: "Founder Branding",
    videoSrc: "https://videos.pexels.com/video-files/6758509/6758509-uhd_1440_2560_24fps.mp4",
    posterSrc: "https://images.pexels.com/photos/6758509/pexels-photo-6758509.jpeg?auto=compress&cs=tinysrgb&w=800",
    client: "Venture C",
    niche: "B2B SaaS",
    
    views: "520K",
    watchTime: "22.0s",
    retentionPercent: "45%",
    replayFactor: "1.1x",
    shares: "5K",
    saves: "18K",
    ctrIncrease: "+35%",

    objective: "Build deep parasocial trust through vulnerability and direct eye contact.",
    hookStrategy: "A deep sigh and a pregnant pause before the first word is spoken.",
    retentionTactic: "Tight framing. Subtitles are designed as minimal, elegant footnotes rather than blocky text.",
    audienceType: "Entrepreneurs, investors, operators.",
    attentionPattern: "Intimate and conversational. Relies entirely on the strength of the narrative.",
    ctaLogic: "Subtle request for a DM to continue the conversation privately.",
    emotionalPacing: "Grounded, authentic, authoritative."
  },
  {
    id: "reel-06",
    title: "Product ASMR",
    category: "gen-z",
    subCategory: "Viral Product Content",
    videoSrc: "https://videos.pexels.com/video-files/8539268/8539268-uhd_1440_2560_25fps.mp4",
    posterSrc: "https://images.pexels.com/photos/8539268/pexels-photo-8539268.jpeg?auto=compress&cs=tinysrgb&w=800",
    client: "Tech Aesthetic",
    niche: "Consumer Electronics",
    
    views: "7.1M",
    watchTime: "9.5s",
    retentionPercent: "88%",
    replayFactor: "2.5x",
    shares: "220K",
    saves: "400K",
    ctrIncrease: "+12%",

    objective: "Showcase build quality through hyper-detailed sensory inputs.",
    hookStrategy: "Extreme macro shot of a satisfying mechanical click, paired with boosted Foley audio.",
    retentionTactic: "No music. Only hyper-realistic, exaggerated product sounds (ASMR).",
    audienceType: "Tech enthusiasts, aesthetically driven consumers.",
    attentionPattern: "Sensory lock. The viewer watches multiple times to experience the sound again.",
    ctaLogic: "Product name quietly resting at the bottom of the frame.",
    emotionalPacing: "Satisfying, precise, engineered."
  }
];
