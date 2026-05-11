# 🎬 Alex's Social Media Portfolio

A high-fidelity, cinematic portfolio designed for social media content creators and attention engineers. This project showcases a premium archive of reels, creative processes, and interactive experiences with a focus on visual excellence and emotional impact.

---

## ✨ Features

### 🎞️ Cinematic Reel Archive
*   **Dynamic Reel Posters:** High-quality visual representations of every project.
*   **Seamless Transitions:** Smooth modal openings and video playbacks using Framer Motion.
*   **Psychological Breakdowns:** Every reel includes a deep dive into **Hook Strategy**, **Retention Tactics**, and **Emotional Pacing**.
*   **Data-Driven Metrics:** Real-world performance data including **Retention %**, **Replay Factor**, and **CTR Increases**.

### 🎭 Premium UI/UX
*   **Cinematic Transitions:** Sophisticated page transitions and element animations powered by **GSAP**.
*   **Ultra-Smooth Scrolling:** Integrated **Lenis** for a refined, natural scroll feel.
*   **Bento-style Layouts:** Clean, modern categorization of creative services.

### 🛠️ Technical Excellence
*   **Next.js 15+ (React 19):** Leveraging the latest React features for performance and stability.
*   **Tailwind CSS 4:** Modern utility-first styling with a focus on design tokens.
*   **Responsive Architecture:** Meticulously crafted for seamless experiences across desktop, tablet, and mobile.

---

## 🚀 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS 4, CSS Modules |
| **Animations** | GSAP, Framer Motion |
| **Scroll Engine** | Lenis Smooth Scroll |
| **Icons** | Lucide React |

---

## 🏗️ Technical Architecture: The Animation Hybrid

Unlike standard portfolios, this project uses a dual-engine approach for maximum performance:

*   **GSAP:** Handles high-precision, scroll-triggered timelines and complex sequenced animations where performance is critical.
*   **Framer Motion:** Used for React state-based transitions, layout animations (Shared Layout), and UI micro-interactions.
*   **Lenis:** Provides the smooth-scroll foundation that allows GSAP and Framer to sync perfectly without "jank".

---

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
*   **Node.js** (v20 or higher recommended)
*   **npm** or **yarn** / **pnpm**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AndreiNeptune/site-alex-social-media.git
    cd site-alex-social-media
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    npm install --legacy-peer-deps
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
├── app/               # Next.js App Router routes and layouts
├── components/        # Reusable UI components
│   ├── reels/         # Reel-specific logic (Cards, Modals)
│   ├── sections/      # Large page sections (Hero, Archive, Footer)
│   └── ui/            # Base UI primitives
├── data/              # Static content and reel metadata
├── hooks/             # Custom React hooks (Sound, Scroll, etc.)
├── lib/               # Utility functions and shared logic
└── public/            # Static assets (Images, Videos, Icons)
```

---

## 🎨 Design Philosophy

This project is built on the principle of **"Attention Engineering"**. Every transition, sound effect, and visual element is designed to keep the user engaged while maintaining a premium, high-end aesthetic.

*   **Dark Mode First:** A sleek, black-themed interface to make content pop.
*   **Micro-interactions:** Subtle feedback on every click and hover.
*   **Performance:** Optimized for fast LCP (Largest Contentful Paint) despite heavy media usage.

## 🤖 AI-Assisted Development

Acest proiect folosește un flux de lucru hibrid om-AI. Regulile de context pentru agenții de codare pot fi găsite în [AGENTS.md](file:///c:/Users/Andrei/Desktop/sites/site%20smm%20alex/AGENTS.md).

---

## 📄 License

This project is private and intended for portfolio demonstration purposes.

---

*Built with ❤️ by [Andrei](https://github.com/AndreiNeptune)*
