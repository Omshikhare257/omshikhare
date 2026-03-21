import { useState, useEffect, useRef } from "react";
import "./navbar.css";

const links = [
  { id: "home",     label: "Home"     },
  { id: "about",    label: "About"    },
  { id: "resume",   label: "Resume"   },
  { id: "services", label: "Services" },
  { id: "contact",  label: "Contact"  },
];

const THEMES = [
  { key: "dark",  label: "Dark",  icon: "🌙" },
  { key: "light", label: "Light", icon: "☀️" },
  { key: "ai",    label: "AI",    icon: "🤖" },
];

export default function Navbar({ activeSection, theme, setTheme }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const themeRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleThemeChange = (key) => {
    setTheme(key);
    setThemeOpen(false);
    document.documentElement.setAttribute("data-theme", key);
    document.body.setAttribute("data-theme", key);
  };

  const currentTheme = THEMES.find((t) => t.key === theme);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner container">

          {/* Logo */}
          <button className="nav-logo" onClick={() => scrollTo("home")}>
            <span className="logo-bracket">&lt;</span>
            Om
            <span className="logo-bracket">/&gt;</span>
          </button>

          {/* Desktop Links */}
          <ul className="nav-links-desktop">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  className={`nav-link ${activeSection === l.id ? "active" : ""}`}
                  onClick={() => scrollTo(l.id)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="nav-right">

            {/* Theme Selector */}
            <div className="theme-selector" ref={themeRef}>
              <button
                className="theme-toggle"
                onClick={() => setThemeOpen((o) => !o)}
                aria-label="Select theme"
              >
                <span className="theme-toggle-icon">{currentTheme.icon}</span>
                <svg
                  className={`theme-chevron ${themeOpen ? "open" : ""}`}
                  width="10" height="10" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {themeOpen && (
                <div className="theme-dropdown">
                  <p className="theme-dropdown-label">Choose Theme</p>
                  {THEMES.map((t) => (
                    <button
                      key={t.key}
                      className={`theme-option ${theme === t.key ? "active" : ""}`}
                      onClick={() => handleThemeChange(t.key)}
                    >
                      <span className="theme-option-icon">{t.icon}</span>
                      <span className="theme-option-label">{t.label}</span>
                      {theme === t.key && (
                        <span className="theme-option-check">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="nav-cta" onClick={() => scrollTo("contact")}>
              Let's build future
            </button>

            <button
              className={`burger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          {links.map((l, i) => (
            <button
              key={l.id}
              className={`mobile-link ${activeSection === l.id ? "active" : ""}`}
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}

          <div className="mobile-theme-row">
            {THEMES.map((t) => (
              <button
                key={t.key}
                className={`mobile-theme-btn ${theme === t.key ? "active" : ""}`}
                onClick={() => { handleThemeChange(t.key); setMenuOpen(false); }}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          <button className="mobile-cta" onClick={() => scrollTo("contact")}>
            Let's build future
          </button>
        </div>
      </div>
    </>
  );
}