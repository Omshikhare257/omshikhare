import { useState, useEffect, useRef } from "react";
import "./homepage.css";

const orbit1 = [
  { icon: "🐍", label: "Python" },
  { icon: "⚛️", label: "React.js" },
  { icon: "🤖", label: "AI / ML" },
];

const orbit2 = [
  { icon: "💻", label: "JavaScript" },
  { icon: "🧠", label: "TensorFlow" },
  { icon: "🗄️", label: "MySQL" },
  { icon: "🌐", label: "Node.js" },
];

const orbit3 = [
  { icon: "🔥", label: "Next.js" },
  { icon: "📊", label: "Pandas" },
  { icon: "🔍", label: "OpenCV" },
];

const TITLES = [
  "AI & ML Developer",
  "Full Stack Developer",
  "Python Developer",
  "ML Engineer",
  "Web Developer",
];

function useOrbitSize() {
  const [size, setSize] = useState(420);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w <= 320)       setSize(220);
      else if (w <= 360)  setSize(240);
      else if (w <= 400)  setSize(260);
      else if (w <= 480)  setSize(290);
      else if (w <= 600)  setSize(320);
      else if (w <= 768)  setSize(360);
      else if (w <= 1024) setSize(340);
      else                setSize(420);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return size;
}

function OrbitChip({ chip, index, total, radius, duration, direction }) {
  const delay = `-${((index / total) * duration).toFixed(3)}s`;
  return (
    <div style={{
      position: "absolute", top: "50%", left: "50%",
      width: 0, height: 0,
      animation: `${direction === "cw" ? "orbitCW" : "orbitCCW"} ${duration}s linear infinite`,
      animationDelay: delay, willChange: "transform",
    }}>
      <div style={{
        position: "absolute", left: `${radius}px`, top: 0,
        transform: "translate(0, -50%)",
        animation: `${direction === "cw" ? "counterCW" : "counterCCW"} ${duration}s linear infinite`,
        animationDelay: delay, willChange: "transform",
      }} className="orbit-chip">
        <span className="chip-icon">{chip.icon}</span>
        <span className="chip-label">{chip.label}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   BINARY FLIP BACKGROUND
   — Fixed grid of 0s and 1s
   — Random cells flip every frame
   — No glow, no fade, no movement
   — Just pure bit flipping everywhere
═══════════════════════════════════════ */
function BinaryFlip() {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const gridRef   = useRef([]);   // 0 or 1 for every cell

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const SZ   = 14;   // cell size in px (font size)
    const FONT = `${SZ}px 'Share Tech Mono', monospace`;
    // How many cells flip per frame — controls speed of chaos
    // Higher = more bits flipping per tick

    let cols = 0, rows = 0;

    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width  / SZ);
      rows = Math.floor(canvas.height / SZ);
      // Fill grid with random 0s and 1s
      gridRef.current = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          gridRef.current.push(Math.random() > 0.5 ? 1 : 0);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = FONT;
      // Fixed dim green — no brightness variation
      ctx.fillStyle = "rgba(0, 200, 60, 0.18)";

      const grid = gridRef.current;
      const total = cols * rows;

      // Flip ~3% of cells randomly each frame
      const flipCount = Math.floor(total * 0.03);
      for (let f = 0; f < flipCount; f++) {
        const idx = Math.floor(Math.random() * total);
        grid[idx] = grid[idx] === 1 ? 0 : 1;
      }

      // Draw every cell
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const val = grid[r * cols + c];
          ctx.fillText(val === 1 ? "1" : "0", c * SZ, r * SZ + SZ);
        }
      }
    };

    init();
    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    let lastTime = 0;
    const FPS  = 15;   // flip speed — raise for faster chaos
    const step = 1000 / FPS;

    const loop = (ts) => {
      animRef.current = requestAnimationFrame(loop);
      if (ts - lastTime < step) return;
      lastTime = ts;
      draw();
    };
    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="binary-rain-canvas"
      aria-hidden="true"
    />
  );
}

/* ─────────────── MAIN ─────────────── */
export default function Home() {
  const [charCount, setCharCount] = useState(0);
  const [titleIdx,  setTitleIdx]  = useState(0);
  const [deleting,  setDeleting]  = useState(false);
  const orbitSize = useOrbitSize();

  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout;
    if (!deleting && charCount < current.length) {
      timeout = setTimeout(() => setCharCount((c) => c + 1), 80);
    } else if (!deleting && charCount === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charCount > 0) {
      timeout = setTimeout(() => setCharCount((c) => c - 1), 45);
    } else if (deleting && charCount === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [charCount, deleting, titleIdx]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const scale      = orbitSize / 420;
  const centerSize = Math.round(160 * scale);
  const r1         = Math.round(130 * scale);
  const r2         = Math.round(180 * scale);
  const r3         = Math.round(210 * scale);
  const ring1      = Math.round(260 * scale);
  const ring2      = Math.round(360 * scale);
  const ring3      = orbitSize;

  return (
    <div className="home">
      <div className="home-bg">
        <BinaryFlip />
        <div className="ai-overlay" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="container home-inner">
        <div className="home-left">
          <div className="home-badge">
            <span className="badge-dot" />
            Available for Work
          </div>

          <h1 className="home-title">
            Hi, I'm <span className="home-title-accent">Om Shikhare</span>
          </h1>

          <p className="home-subtitle">
            <span className="typewriter-text">{TITLES[titleIdx].slice(0, charCount)}</span>
            <span className="typewriter-cursor">|</span>
          </p>

          <p className="home-desc">
            Passionate developer from Thane, India — building intelligent
            AI-powered applications and modern full-stack websites.
          </p>

          <div className="home-btns">
            <button className="btn-primary" onClick={() => scrollTo("services")}>
              View My Work →
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>

          <div className="home-stats">
            {[
              { num: "3+",   label: "Internships"   },
              { num: "20+",  label: "Projects Built" },
              { num: "10+",  label: "Tech Stacks"    },
              { num: "100%", label: "Dedicated"      },
            ].map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-right">
          <div className="orbit-system" style={{ width: orbitSize, height: orbitSize }}>
            <div className="orbit-ring" style={{ width: ring1, height: ring1, border: "1px dashed rgba(255,255,255,0.07)" }} />
            <div className="orbit-ring" style={{ width: ring2, height: ring2, border: "1px dashed rgba(255,255,255,0.04)" }} />
            <div className="orbit-ring" style={{ width: ring3, height: ring3, border: "1px solid rgba(255,255,255,0.02)" }} />

            <div className="orbit-center" style={{ width: centerSize, height: centerSize }}>
              <div className="profile-glow" />
              <div className="profile-ring"><div className="profile-ring-inner" /></div>
              <div className="profile-img-wrap">
                <div className="profile-avatar-fallback">
                  <span className="avatar-initials" style={{ fontSize: Math.round(2.6 * scale * 16) + "px" }}>OS</span>
                  <span className="avatar-name">Om Shikhare</span>
                </div>
              </div>
            </div>

            {orbit1.map((chip, i) => (
              <OrbitChip key={chip.label} chip={chip} index={i} total={orbit1.length} radius={r1} duration={10} direction="cw" />
            ))}
            {orbit2.map((chip, i) => (
              <OrbitChip key={chip.label} chip={chip} index={i} total={orbit2.length} radius={r2} duration={14} direction="cw" />
            ))}
            {orbit3.map((chip, i) => (
              <OrbitChip key={chip.label} chip={chip} index={i} total={orbit3.length} radius={r3} duration={18} direction="ccw" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
