/**
 * ============================================================
 *  ResponsiveOptimizer.jsx
 *  ─────────────────────────────────────────────────────────
 *  This file injects ALL global responsive + design fixes for
 *  Om Shikhare's portfolio.
 *
 *  HOW TO USE:
 *  1. Import this component in your App.jsx:
 *       import ResponsiveOptimizer from "./ResponsiveOptimizer";
 *  2. Place it ONCE inside your App return, before everything:
 *       export default function App() {
 *         return (
 *           <>
 *             <ResponsiveOptimizer />
 *             <Navbar ... />
 *             ...
 *           </>
 *         );
 *       }
 *  ─────────────────────────────────────────────────────────
 *  Covers:
 *  • Mobile  (≤480px)
 *  • Tablet  (481px – 768px)
 *  • Laptop  (769px – 1024px)
 *  • Desktop (1025px – 1440px)
 *  • Wide    (>1440px)
 *  • Touch / hover states
 *  • Typography fluid scaling
 *  • Image & media containment
 *  • Grid / flex overflow fixes
 *  • Scrollbar & body fixes
 * ============================================================
 */

import { useEffect } from "react";

const CSS = `

/* ═══════════════════════════════════════════════
   0.  BASE RESETS & GLOBAL FIXES
═══════════════════════════════════════════════ */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  min-width: 320px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, video, svg {
  max-width: 100%;
  height: auto;
  display: block;
}

button, a {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Container global */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 48px);
}

/* ═══════════════════════════════════════════════
   1.  NAVBAR — ALL SCREENS
═══════════════════════════════════════════════ */

/* Prevent logo overflow on small screens */
.nav-logo {
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Right side controls don't overflow */
.nav-right {
  flex-shrink: 0;
  min-width: 0;
}

/* Theme dropdown never goes off-screen */
.theme-dropdown {
  right: 0;
  left: auto;
  max-width: calc(100vw - 32px);
}

/* ── Tablet (481–900px) ── */
@media (max-width: 900px) {
  .nav-links-desktop { display: none !important; }
  .burger            { display: flex !important; }
  .mobile-menu       { display: flex !important; }
  .nav-cta           { display: none !important; }
}

/* ── Mobile (≤480px) ── */
@media (max-width: 480px) {
  .navbar         { padding: 12px 0; }
  .nav-logo       { font-size: 1.2rem; }
  .theme-toggle   { padding: 0 9px; height: 34px; }
  .theme-toggle-icon { font-size: 0.9rem; }

  /* Mobile menu links scale down */
  .mobile-link { font-size: 1.3rem; padding: 8px 16px; }
  .mobile-theme-btn { padding: 8px 12px; }
  .mobile-theme-btn span:first-child { font-size: 1.1rem; }
}

/* ── Very small (≤360px) ── */
@media (max-width: 360px) {
  .nav-logo { font-size: 1.05rem; }
  .mobile-link { font-size: 1.1rem; }
}

/* ═══════════════════════════════════════════════
   2.  HOME SECTION
═══════════════════════════════════════════════ */
.home {
  min-height: 100svh; /* safe viewport height for mobile browsers */
}

/* Stack layout on tablets and below */
@media (max-width: 1024px) {
  .home-inner {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
    text-align: center;
  }
  .home-left {
    align-items: center;
  }
  .home-badge {
    margin: 0 auto 22px;
  }
  .home-desc {
    margin-left: auto;
    margin-right: auto;
  }
  .home-btns {
    justify-content: center;
  }
  .home-stats {
    justify-content: center;
  }
  .home-right {
    order: -1;
    display: flex;
    justify-content: center;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .home { padding: 90px 0 50px; }
  .home-title { font-size: clamp(1.9rem, 7vw, 2.8rem); }
  .home-subtitle { font-size: clamp(0.9rem, 3vw, 1.2rem); }
  .home-desc { font-size: 0.9rem; }

  .orbit-system { width: 280px !important; height: 280px !important; }
  .orbit-center { width: 100px !important; height: 100px !important; }
  .orbit-ring-1 { width: 172px !important; height: 172px !important; }
  .orbit-ring-2 { width: 244px !important; height: 244px !important; }
  .orbit-ring-3 { width: 280px !important; height: 280px !important; }
  .avatar-initials { font-size: 1.7rem !important; }
  .chip-label { font-size: 0.58rem !important; }
  .orbit-chip { padding: 4px 7px !important; gap: 3px !important; }
}

/* Mobile */
@media (max-width: 480px) {
  .home { padding: 80px 0 40px; }
  .home-title { font-size: clamp(1.6rem, 8vw, 2.2rem); }
  .home-btns { flex-direction: column; gap: 10px; }
  .btn-primary, .btn-secondary { width: 100%; text-align: center; }
  .home-stats { gap: 12px; }
  .stat-num { font-size: 1.3rem; }
  .stat-label { font-size: 0.68rem; }

  .orbit-system { width: 240px !important; height: 240px !important; }
  .orbit-center { width: 84px !important; height: 84px !important; }
  .orbit-ring-1 { width: 148px !important; height: 148px !important; }
  .orbit-ring-2 { width: 210px !important; height: 210px !important; }
  .orbit-ring-3 { width: 240px !important; height: 240px !important; }
  .avatar-initials { font-size: 1.4rem !important; }
}

/* ═══════════════════════════════════════════════
   3.  ABOUT SECTION
═══════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .about-inner {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
  }
}

@media (max-width: 768px) {
  .about { padding: 72px 0; }
  .about-para { font-size: 0.9rem; }
}

@media (max-width: 600px) {
  .about { padding: 60px 0; }
  .about-info-grid { grid-template-columns: 1fr !important; gap: 8px; }
  .skills-card { padding: 14px 12px !important; }
  .skill-name { font-size: 0.78rem; }
  .comp-tags { gap: 6px; }
  .comp-tag { font-size: 0.7rem; padding: 4px 10px; }
}

@media (max-width: 400px) {
  .about-info-grid { grid-template-columns: 1fr !important; }
  .about-btn { width: 100%; }
}

/* ═══════════════════════════════════════════════
   4.  RESUME SECTION
═══════════════════════════════════════════════ */
@media (max-width: 900px) {
  .resume-cols {
    grid-template-columns: 1fr !important;
    gap: 28px !important;
  }
  .resume-section { padding: 72px 0; }
}

@media (max-width: 480px) {
  .resume-section { padding: 60px 0; }
  .timeline-content { padding: 12px 12px !important; }
  .tl-role { font-size: 0.88rem; }
  .tl-company { font-size: 0.76rem; }
  .tl-points li { font-size: 0.78rem; }
  .tl-top { flex-direction: column; align-items: flex-start; gap: 4px; }
  .lang-row { padding: 8px 12px; }
  .freelance-tags { gap: 6px; }
  .freelance-tag { font-size: 0.72rem; padding: 4px 10px; }
}

/* ═══════════════════════════════════════════════
   5.  SERVICES SECTION
═══════════════════════════════════════════════ */
@media (max-width: 1100px) {
  .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .tech-grid { grid-template-columns: repeat(4, 1fr) !important; }
}

@media (max-width: 900px) {
  .services { padding: 72px 0; }
  .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
}

@media (max-width: 600px) {
  .services { padding: 60px 0; }
  .services-grid { grid-template-columns: 1fr !important; }
  .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .service-card { padding: 18px 16px !important; }
  .services-cta {
    flex-direction: column !important;
    text-align: center !important;
    padding: 20px 16px !important;
  }
  .cta-btn { width: 100% !important; }
  .filter-tabs { gap: 8px; }
  .filter-btn { font-size: 0.78rem; padding: 7px 14px; }
}

@media (max-width: 400px) {
  .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .tech-card { padding: 10px 8px; }
  .tech-name { font-size: 0.66rem; }
  .tech-use  { font-size: 0.58rem; }
}

/* ═══════════════════════════════════════════════
   6.  CONTACT SECTION
═══════════════════════════════════════════════ */
@media (max-width: 900px) {
  .contact-cols {
    grid-template-columns: 1fr !important;
    gap: 28px !important;
  }
  .contact { padding: 72px 0; }
}

@media (max-width: 500px) {
  .contact { padding: 60px 0; }
  .form-row { grid-template-columns: 1fr !important; }
  .contact-form { padding: 18px 14px !important; gap: 12px !important; }
  .form-submit { font-size: 0.9rem; padding: 12px; }
  .info-card { padding: 11px 12px; }
  .info-card-value { font-size: 0.8rem; }
  .availability-badge { font-size: 0.78rem; padding: 10px 12px; }
}

/* ═══════════════════════════════════════════════
   7.  FOOTER SECTION
═══════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .footer-top { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
}

@media (max-width: 600px) {
  .footer-top { grid-template-columns: 1fr !important; gap: 20px !important; }
  .footer { padding: 44px 0 20px !important; }
  .footer-bottom { flex-direction: column !important; text-align: center !important; gap: 4px !important; }
  .footer-socials { gap: 8px; }
  .social-btn { font-size: 0.72rem; padding: 6px 11px; }
  .footer-link { font-size: 0.8rem; }
  .email-dropdown { min-width: 90vw !important; left: 50% !important; transform: translateX(-50%) !important; }
}

/* ═══════════════════════════════════════════════
   8.  SECTION TITLES — FLUID TYPOGRAPHY
═══════════════════════════════════════════════ */
.section-title {
  font-size: clamp(1.7rem, 4vw, 2.8rem) !important;
  line-height: 1.18 !important;
}

.section-tag {
  font-size: clamp(0.65rem, 1.5vw, 0.75rem);
}

/* ═══════════════════════════════════════════════
   9.  WIDE SCREENS (>1440px) — prevent over-stretch
═══════════════════════════════════════════════ */
@media (min-width: 1440px) {
  .container {
    max-width: 1280px;
  }
  .home-title {
    font-size: 4rem;
  }
  .section-title {
    font-size: 3rem !important;
  }
}

@media (min-width: 1800px) {
  .container { max-width: 1440px; }
}

/* ═══════════════════════════════════════════════
   10.  TOUCH DEVICE IMPROVEMENTS
═══════════════════════════════════════════════ */
@media (hover: none) {
  /* Remove hover transforms on touch to avoid sticky states */
  .service-card:hover,
  .skills-card:hover,
  .timeline-content:hover,
  .info-card:hover,
  .info-item:hover {
    transform: none !important;
    box-shadow: none !important;
  }

  .btn-primary:hover,
  .btn-secondary:hover,
  .about-btn:hover,
  .form-submit:hover,
  .cta-btn:hover,
  .nav-cta:hover {
    transform: none !important;
  }

  .social-btn:hover {
    transform: none !important;
  }
}

/* ═══════════════════════════════════════════════
   11.  SCROLLBAR STYLING (Desktop Only)
═══════════════════════════════════════════════ */
@media (min-width: 769px) {
  ::-webkit-scrollbar              { width: 6px; }
  ::-webkit-scrollbar-track        { background: transparent; }
  ::-webkit-scrollbar-thumb        { background: var(--border); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover  { background: var(--accent); }

  [data-theme='ai'] ::-webkit-scrollbar-thumb { background: rgba(0,255,65,0.25); }
  [data-theme='ai'] ::-webkit-scrollbar-thumb:hover { background: rgba(0,255,65,0.55); }
}

/* ═══════════════════════════════════════════════
   12.  SELECTION COLOR
═══════════════════════════════════════════════ */
::selection {
  background: rgba(0,229,255,0.22);
  color: var(--text);
}
[data-theme='ai'] ::selection {
  background: rgba(0,255,65,0.22);
}
[data-theme='light'] ::selection {
  background: rgba(0,119,204,0.18);
}

/* ═══════════════════════════════════════════════
   13.  FOCUS VISIBLE — ACCESSIBILITY
═══════════════════════════════════════════════ */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ═══════════════════════════════════════════════
   14.  PRINT STYLES (just in case)
═══════════════════════════════════════════════ */
@media print {
  .navbar, .footer, .home-bg, .orbit-system { display: none !important; }
  .home { padding: 20px 0 !important; min-height: auto !important; }
  body { background: #fff !important; color: #000 !important; }
}

`;

export default function ResponsiveOptimizer() {
  useEffect(() => {
    // Inject styles only once
    const id = "resp-optimizer-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = CSS;
    document.head.appendChild(style);

    return () => {
      // cleanup if needed (usually not for global styles)
    };
  }, []);

  return null; // renders nothing — pure style injector
}