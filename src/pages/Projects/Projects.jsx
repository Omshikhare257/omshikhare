import { useState } from "react";
import "./Projects.css";

/* ─────────────────────────────────────────────────
   BRAND LOGOS — [small icon] + [Name / tagline]
───────────────────────────────────────────────── */

/* ── OPRAMIX ── */
const OpramixLogo = () => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg"
    className="brand-svg" aria-label="Opramix Logo">
    <defs>
      <linearGradient id="opmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#1a3aad" />
        <stop offset="35%"  stopColor="#0a7fd4" />
        <stop offset="65%"  stopColor="#00c8e0" />
        <stop offset="100%" stopColor="#5b2d9e" />
      </linearGradient>
    </defs>
    <circle cx="10" cy="16" r="7.5" fill="none"
      stroke="url(#opmGrad)" strokeWidth="3.2" />
    <text x="20" y="24" fontFamily="'Arial Black', Arial, sans-serif"
      fontSize="17" fontWeight="900" fill="url(#opmGrad)">P</text>
    <text x="31" y="24" fontFamily="'Arial Black', Arial, sans-serif"
      fontSize="17" fontWeight="900" fill="url(#opmGrad)">M</text>
    <line x1="50" y1="5" x2="50" y2="31"
      stroke="url(#opmGrad)" strokeWidth="1" opacity="0.35" />
    <text x="57" y="19" fontFamily="'Syne', sans-serif"
      fontSize="13" fontWeight="800" fill="currentColor">Opramix</text>
    <text x="57" y="30" fontFamily="'DM Sans', sans-serif"
      fontSize="6" fontWeight="500" fill="currentColor" opacity="0.6"
      letterSpacing="1.5">IT SOLUTIONS</text>
  </svg>
);

/* ── FITZONE ── */
const FitZoneLogo = () => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg"
    className="brand-svg" aria-label="FitZone Logo">
    <defs>
      <linearGradient id="fitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#ffaa44" />
        <stop offset="100%" stopColor="#ff6a00" />
      </linearGradient>
    </defs>
    <rect x="1"  y="10" width="5"  height="20" rx="2" fill="url(#fitGrad)" />
    <rect x="6"  y="13" width="4"  height="14" rx="1.5" fill="url(#fitGrad)" />
    <rect x="10" y="17" width="16" height="6"  rx="2" fill="url(#fitGrad)" />
    <rect x="26" y="13" width="4"  height="14" rx="1.5" fill="url(#fitGrad)" />
    <rect x="30" y="10" width="5"  height="20" rx="2" fill="url(#fitGrad)" />
    <line x1="41" y1="6" x2="41" y2="38"
      stroke="url(#fitGrad)" strokeWidth="1" opacity="0.35" />
    <text x="48" y="21" fontFamily="'Syne', sans-serif"
      fontSize="13" fontWeight="800" fill="currentColor"
      letterSpacing="0.3">FitZone</text>
    <text x="48" y="32" fontFamily="'DM Sans', sans-serif"
      fontSize="5.8" fontWeight="500" fill="currentColor" opacity="0.6"
      letterSpacing="1.6">GYM &amp; FITNESS</text>
  </svg>
);

/* ── FRINAM ── */
const FrinamLogo = () => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg"
    className="brand-svg" aria-label="Frinam Logo">
    <path
      d="M18,3 C14.5,3 11,6.5 11,10.5 C11,14.5 14,17 18,18 C22,17 25,14.5 25,10.5 C25,6.5 21.5,3 18,3 Z"
      fill="#f5e6c8" />
    <path
      d="M7,36 L7,30 C7,23 11,20 18,20 C25,20 29,23 29,30 L29,36 L7,36 Z"
      fill="none" stroke="#f5e6c8" strokeWidth="2.8" strokeLinejoin="round" />
    <line x1="36" y1="4" x2="36" y2="40"
      stroke="#f5e6c8" strokeWidth="1" opacity="0.25" />
    <text x="43" y="21" fontFamily="'Syne', sans-serif"
      fontSize="13" fontWeight="800" fill="currentColor"
      letterSpacing="0.5">Frinam</text>
    <text x="43" y="32" fontFamily="'DM Sans', sans-serif"
      fontSize="5.5" fontWeight="500" fill="currentColor" opacity="0.6"
      letterSpacing="1.4">RESTAURANT &amp; HOTEL</text>
  </svg>
);

/* ── POWERFIT GYM ── golden yellow dumbbell + wordmark ── */
const PowerFitLogo = () => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg"
    className="brand-svg" aria-label="PowerFit Gym Logo">
    <defs>
      <linearGradient id="pfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFB400" />
      </linearGradient>
    </defs>
    {/* Dumbbell */}
    <rect x="1"  y="10" width="5"  height="20" rx="2" fill="url(#pfGrad)" />
    <rect x="6"  y="13" width="4"  height="14" rx="1.5" fill="url(#pfGrad)" />
    <rect x="10" y="17" width="16" height="6"  rx="2" fill="url(#pfGrad)" />
    <rect x="26" y="13" width="4"  height="14" rx="1.5" fill="url(#pfGrad)" />
    <rect x="30" y="10" width="5"  height="20" rx="2" fill="url(#pfGrad)" />
    <line x1="41" y1="6" x2="41" y2="38"
      stroke="url(#pfGrad)" strokeWidth="1" opacity="0.35" />
    <text x="48" y="20" fontFamily="'Syne', sans-serif"
      fontSize="12" fontWeight="800" fill="currentColor"
      letterSpacing="0.2">PowerFit</text>
    <text x="48" y="32" fontFamily="'DM Sans', sans-serif"
      fontSize="5.8" fontWeight="500" fill="currentColor" opacity="0.6"
      letterSpacing="1.5">GYM &amp; FITNESS</text>
  </svg>
);

/* ── VISIONMATCH — eye/lens icon + wordmark ── */
const VisionMatchLogo = () => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg"
    className="brand-svg" aria-label="VisionMatch Logo">
    <defs>
      <linearGradient id="vmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6C63FF" />
      </linearGradient>
    </defs>
    {/* Eye outline */}
    <path d="M2,20 C6,12 12,8 20,8 C28,8 34,12 38,20 C34,28 28,32 20,32 C12,32 6,28 2,20 Z"
      fill="none" stroke="url(#vmGrad)" strokeWidth="2" />
    {/* Iris */}
    <circle cx="20" cy="20" r="6" fill="url(#vmGrad)" opacity="0.2" />
    <circle cx="20" cy="20" r="6" fill="none" stroke="url(#vmGrad)" strokeWidth="1.8" />
    {/* Pupil */}
    <circle cx="20" cy="20" r="2.5" fill="url(#vmGrad)" />
    {/* Divider */}
    <line x1="43" y1="6" x2="43" y2="34"
      stroke="url(#vmGrad)" strokeWidth="1" opacity="0.3" />
    {/* Wordmark */}
    <text x="50" y="18" fontFamily="'Syne', sans-serif"
      fontSize="11" fontWeight="800" fill="currentColor"
      letterSpacing="0.2">VisionMatch</text>
    <text x="50" y="30" fontFamily="'DM Sans', sans-serif"
      fontSize="5.5" fontWeight="500" fill="currentColor" opacity="0.6"
      letterSpacing="1.2">IMAGE SIMILARITY AI</text>
  </svg>
);

/* ── AI/ML logos base ── */
const AILogoBase = ({ icon, name, tagline, gradId, c1, c2 }) => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
    <defs>
      <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor={c1} />
        <stop offset="100%" stopColor={c2} />
      </linearGradient>
    </defs>
    <circle cx="18" cy="18" r="16" fill={`url(#${gradId})`} opacity="0.13" />
    <circle cx="18" cy="18" r="16" fill="none"
      stroke={`url(#${gradId})`} strokeWidth="1.5" />
    <text x="18" y="23" textAnchor="middle"
      fontFamily="'Syne', sans-serif" fontSize="13"
      fontWeight="900" fill={`url(#${gradId})`}>{icon}</text>
    <line x1="38" y1="5" x2="38" y2="33"
      stroke={c1} strokeWidth="1" opacity="0.3" />
    <text x="45" y="18" fontFamily="'Syne', sans-serif"
      fontSize="10.5" fontWeight="800" fill="currentColor">{name}</text>
    <text x="45" y="30" fontFamily="'DM Sans', sans-serif"
      fontSize="5.2" fontWeight="500" fill="currentColor"
      opacity="0.6" letterSpacing="1.1">{tagline}</text>
  </svg>
);

const DocClassifyLogo   = () => <AILogoBase icon="≡" name="Doc. Intelligence" tagline="NLP · EXTRACTION · REPORT"  gradId="dcGrad"  c1="#a855f7" c2="#ec4899" />;
const CustomerSegLogo   = () => <AILogoBase icon="⬡" name="Customer Seg."     tagline="ML · CLUSTERING"           gradId="csGrad"  c1="#00e5ff" c2="#7b2fff" />;
const TicTacToeLogo     = () => <AILogoBase icon="✕" name="Tic-Tac-Toe AI"    tagline="AI · GAME AGENT"           gradId="ttGrad"  c1="#00ff88" c2="#00b4d8" />;
const PropertyPriceLogo = () => <AILogoBase icon="⌂" name="Property Price"    tagline="ML · REGRESSION"           gradId="ppGrad"  c1="#ff6a00" c2="#ffaa44" />;

/* ─────────────────────────────────────────────────
   PROJECT DATA — 9 projects total
   Order: 1=Opramix, 2=PowerFit, 3=Frinam, 4=FitZone, then AI projects
───────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    LogoComponent: OpramixLogo,
    title: "Opramix",
    subtitle: "IT Solutions Company",
    category: "Web",
    cat: "web",
    accentColor: "#0a7fd4",
    desc: "A modern professional company website for Opramix — an IT solutions firm. Sleek dark UI, smooth animations, service showcases, team sections, and a fully responsive layout built for premium client presentation.",
    tags: ["React.js", "CSS3", "UI/UX", "Responsive"],
    live: "https://opramix.com",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "6+",    label: "Pages"  },
      { value: "React", label: "Stack"  },
      { value: "Live",  label: "Status" },
    ],
    featured: true,
  },
  {
    id: 2,
    LogoComponent: PowerFitLogo,
    title: "PowerFit Gym",
    subtitle: "Gym & Fitness Website",
    category: "Web",
    cat: "web",
    accentColor: "#FFB400",
    desc: "A bold, high-energy gym website for PowerFit — featuring strength training programs, personal training sessions, membership plans, transformation stories, and a motivational design built to convert visitors into members.",
    tags: ["React.js", "CSS3", "JavaScript", "Responsive"],
    live: "https://gym-roan-iota.vercel.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "React", label: "Stack"  },
      { value: "Gold",  label: "Theme"  },
      { value: "Live",  label: "Status" },
    ],
    featured: false,
  },
  {
    id: 3,
    LogoComponent: FrinamLogo,
    title: "Frinam",
    subtitle: "Restaurant & Hotel",
    category: "Web",
    cat: "web",
    accentColor: "#f5e6c8",
    desc: "Elegant restaurant & hotel website for Frinam. Full menu showcase, table reservation system, hotel room listings, photo gallery, contact & location info — with a warm visual design that brings the dining experience online.",
    tags: ["React.js", "CSS3", "JavaScript", "Responsive"],
    live: "https://food-hotel-website-murex.vercel.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "8+",   label: "Sections" },
      { value: "React",label: "Stack"    },
      { value: "Live", label: "Status"   },
    ],
    featured: false,
  },
  {
    id: 4,
    LogoComponent: FitZoneLogo,
    title: "FitZone Gym",
    subtitle: "Fitness & Wellness",
    category: "Web",
    cat: "web",
    accentColor: "#ff6a00",
    desc: "High-energy gym website for FitZone. Features class schedules (HIIT, Yoga, CrossFit), 3-tier membership plans, trainer profiles, facility galleries, success stories, and a full booking flow.",
    tags: ["Astro.js", "CSS3", "JavaScript", "Responsive"],
    live: "https://gym-fitness-website-master.vercel.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "6",     label: "Classes" },
      { value: "Astro", label: "Stack"   },
      { value: "Live",  label: "Status"  },
    ],
    featured: false,
  },
  {
    id: 5,
    LogoComponent: DocClassifyLogo,
    title: "Document Intelligence System",
    subtitle: "NLP · Extraction · Analysis · Report",
    category: "AI/ML",
    cat: "ai",
    accentColor: "#a855f7",
    desc: "An advanced document intelligence platform for classification, deep text extraction, and automated analysis. Purpose-built for customs officers, legal analysts, and compliance teams — upload any document, the AI classifies it, extracts critical data, and generates a downloadable structured report instantly.",
    tags: ["React.js", "NLP", "Python", "Text Extraction", "Report Generation", "Classification"],
    live: "https://document-classification-and-text-ex-umber.vercel.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "NLP",    label: "Type"   },
      { value: "Report", label: "Output" },
      { value: "Live",   label: "Status" },
    ],
    featured: false,
  },
  {
    id: 6,
    LogoComponent: VisionMatchLogo,
    title: "VisionMatch",
    subtitle: "Image Similarity AI Finder",
    category: "AI/ML",
    cat: "ai",
    accentColor: "#6C63FF",
    desc: "An AI-powered image similarity finder built with Computer Vision. Upload any image and VisionMatch uses deep learning feature extraction to find visually similar images — powered by convolutional neural networks and cosine similarity scoring.",
    tags: ["Python", "React.js", "Computer Vision", "CNN", "OpenCV", "Cosine Similarity"],
    live: "https://image-similarity-finder.vercel.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "CV",    label: "Type"   },
      { value: "CNN",   label: "Model"  },
      { value: "Live",  label: "Status" },
    ],
    featured: false,
  },
  {
    id: 7,
    LogoComponent: CustomerSegLogo,
    title: "Customer Segmentation",
    subtitle: "ML · Unsupervised Learning",
    category: "AI/ML",
    cat: "ai",
    accentColor: "#00e5ff",
    desc: "An ML-powered customer segmentation app built with Streamlit. Uses clustering algorithms (K-Means) to group customers by behaviour and purchasing patterns — with interactive charts and visual cluster analysis.",
    tags: ["Python", "Streamlit", "Scikit-learn", "K-Means", "Pandas"],
    live: "https://customer-segmentation-wztbyzzjgxyhzzoesc2vz6.streamlit.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "ML",     label: "Type"   },
      { value: "Python", label: "Stack"  },
      { value: "Live",   label: "Status" },
    ],
    featured: false,
  },
  {
    id: 8,
    LogoComponent: TicTacToeLogo,
    title: "Tic-Tac-Toe AI Agent",
    subtitle: "AI · Game-Based Agent",
    category: "AI/ML",
    cat: "ai",
    accentColor: "#00ff88",
    desc: "A game-based AI agent that plays Tic-Tac-Toe using the Minimax algorithm with Alpha-Beta pruning. The AI never loses — built with Streamlit for an interactive browser-based playing experience.",
    tags: ["Python", "Streamlit", "Minimax", "Alpha-Beta", "AI"],
    live: "https://game-based-ai-agent-robot-playing-tic-tac-toe-bpfqyqtdf9yxrs93.streamlit.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "AI",   label: "Type"   },
      { value: "∞",    label: "Moves"  },
      { value: "Live", label: "Status" },
    ],
    featured: false,
  },
  {
    id: 9,
    LogoComponent: PropertyPriceLogo,
    title: "Property Price Analysis",
    subtitle: "ML · Regression Model",
    category: "AI/ML",
    cat: "ai",
    accentColor: "#ff6a00",
    desc: "A property price prediction and analysis app powered by ML regression models. Users input property features and get an estimated market price — with data visualisations showing price trends and feature importance.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Regression", "Matplotlib"],
    live: "https://property-price-analysis-zzbdexrtu3pclk3ku42zxx.streamlit.app/",
    github: "https://github.com/Omshikhare257",
    stats: [
      { value: "ML",     label: "Type"   },
      { value: "Python", label: "Stack"  },
      { value: "Live",   label: "Status" },
    ],
    featured: false,
  },
];

const FILTERS = ["All", "Web", "AI/ML"];

/* ─────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────── */
export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [filter,  setFilter]  = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="projects">
      <div className="container">

        {/* ── Header ── */}
        <div className="projects-header">
          <span className="section-tag">My Projects</span>
          <h2 className="section-title">
            Things I've<br />Built &amp; Shipped
          </h2>
          <p className="projects-sub">
            Real-world websites, ML models, and AI applications —
            designed, developed, and deployed from scratch.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="proj-filter-tabs">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`proj-filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "All"   ? "🔥 All"     :
               f === "Web"   ? "🌐 Web"     :
               f === "AI/ML" ? "🤖 AI / ML" : f}
            </button>
          ))}
        </div>

        {/* ── Cards Grid ── */}
        <div className="projects-grid">
          {filtered.map(({
            id, LogoComponent, title, subtitle, category, cat,
            accentColor, desc, tags, live, github, stats, featured
          }) => (
            <div
              key={id}
              className={`project-card cat-${cat}${featured ? " featured" : ""}${hovered === id ? " hovered" : ""}`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{ "--proj-accent": accentColor }}
            >
              <div className="proj-accent-bar" />

              <div className="proj-inner">

                {featured && (
                  <div className="proj-featured-label">⭐ Featured Project</div>
                )}

                <div className="proj-logo-area">
                  <div className="proj-logo-box">
                    <LogoComponent />
                  </div>
                  <span className="proj-cat-pill">{category}</span>
                </div>

                <p className="proj-subtitle">{subtitle}</p>
                <p className="proj-desc">{desc}</p>

                <div className="proj-stats-row">
                  {stats.map((s) => (
                    <div className="proj-stat" key={s.label}>
                      <span className="proj-stat-val">{s.value}</span>
                      <span className="proj-stat-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="proj-tags">
                  {tags.map((t) => (
                    <span className="proj-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="proj-actions">
                  <a href={live} target="_blank" rel="noopener noreferrer"
                    className="proj-btn proj-btn--live">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Site
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer"
                    className="proj-btn proj-btn--github" title="View on GitHub">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18
                        6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                        1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                        0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0
                        .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115
                        2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202
                        2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339
                        4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012
                        2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022
                        12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                </div>

              </div>

              <div className="proj-glow" />
            </div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="projects-cta">
          <div className="cta-text">
            <h3>Want to collaborate?</h3>
            <p>Whether it's a website, AI chatbot, or ML solution — let's build it together.</p>
          </div>
          <div className="cta-btns">
            <a href="https://github.com/Omshikhare257" target="_blank"
              rel="noopener noreferrer"
              className="proj-cta-btn proj-cta-btn--ghost">
              View GitHub →
            </a>
            <button className="proj-cta-btn proj-cta-btn--solid"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }>
              Hire Me →
            </button>
          </div>
        </div>

        {/* ── Internship note — subtle bottom-right corner ── */}
        <p className="internship-note">
          * Some projects were developed during a professional internship and cannot be publicly shared due to confidentiality agreements.
        </p>

      </div>
    </div>
  );
}
