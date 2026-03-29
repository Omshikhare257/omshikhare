import "./aboutuspage.css";

const skillGroups = [
  {
    title: "💻 Programming Languages",
    cat: "web",
    skills: [
      { name: "Python",     level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "PHP",        level: 88 },
      { name: "R Language", level: 82 },
      { name: "HTML5",      level: 93 },
      { name: "CSS3",       level: 90 },
      { name: "SQL",        level: 86 },
    ],
  },
  {
    title: "🤖 AI & Machine Learning",
    cat: "ai",
    skills: [
      { name: "TensorFlow",   level: 82 },
      { name: "PyTorch",      level: 78 },
      { name: "Scikit-learn", level: 90 },
      { name: "Keras",        level: 80 },
      { name: "Pandas",       level: 92 },
      { name: "NumPy",        level: 92 },
      { name: "Streamlit",    level: 88 },
      { name: "Jupyter",      level: 85 },
    ],
  },
  {
    title: "🌐 Web Development",
    cat: "web",
    skills: [
      { name: "React.js",   level: 90 },
      { name: "Next.js",    level: 78 },
      { name: "Node.js",    level: 75 },
      { name: "Express.js", level: 74 },
      { name: "Laravel",    level: 72 },
      { name: "WordPress",  level: 85 },
      { name: "Bootstrap",  level: 88 },
    ],
  },
  {
    title: "💽 Databases & Tools",
    cat: "db",
    skills: [
      { name: "MySQL",   level: 86 },
      { name: "SQLite",  level: 84 },
      { name: "MongoDB", level: 72 },
      { name: "Tableau", level: 70 },
    ],
  },
];

export default function About() {
  return (
    <div className="about">
      <div className="container about-inner">

        {/* ── LEFT ── */}
        <div className="about-left">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">AI Developer &amp;<br />Web Developer</h2>

          <p className="about-para">
            I'm <strong>Om Jotiram Shikhare</strong>, an <strong>AI & ML Developer</strong> and{" "}
            <strong>Web Developer</strong> based in Thane, India. Pursuing a B.Sc. with Vocational
            Training in AI & ML from <strong>Tata Institute of Social Sciences (TISS)</strong>.
          </p>
          <p className="about-para">
            On the <strong>web side</strong>, I build dynamic full-stack applications using React.js,
            Next.js, Node.js, Express.js, Laravel, PHP, and WordPress — with MySQL, SQLite, and
            MongoDB as backends.
          </p>
          <p className="about-para">
            On the <strong>AI/ML side</strong>, I develop chatbots using APIs, Transformers, Llama,
            and Ollama. I work with TensorFlow, PyTorch, Keras, Scikit-learn, and Streamlit to
            build intelligent real-world applications.
          </p>

          <div className="about-info-grid">
            {[
              { label: "Email",     value: "omjobshikhare@gmail.com"    },
              { label: "Alt Email", value: "ompythoncode@gmail.com"      },
              { label: "Phone",     value: "+91 8433959059"              },
              { label: "Location",  value: "Thane, India"                },
              { label: "Education", value: "B.Sc. AI & ML — TISS"        },
              { label: "Available", value: "Freelance & Internship"      },
            ].map((item) => (
              <div key={item.label} className="info-item">
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="about-competencies">
            <h4 className="comp-title">🏆 Core Competencies</h4>
            <div className="comp-tags">
              {[
                "Machine Learning & AI", "React.js & Next.js",
                "Chatbot Engineering",   "Full-Stack Web Dev",
                "REST API Development",  "OCR Systems",
                "Database Management",   "AI-driven Automation",
                "Problem Solving",       "Team Collaboration",
              ].map((c) => (
                <span key={c} className="comp-tag">{c}</span>
              ))}
            </div>
          </div>

          <button
            className="about-btn"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </button>
        </div>

        {/* ── RIGHT — Skill Cards ── */}
        <div className="about-right">
          {skillGroups.map((group) => (
            <div className={`skills-card skills-card--${group.cat}`} key={group.title}>
              <h3 className="skills-heading">{group.title}</h3>
              {group.skills.map((s) => (
                <div key={s.name} className="skill-row">
                  <div className="skill-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className={`skill-fill ${group.cat}`} style={{ "--w": s.level + "%" }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
