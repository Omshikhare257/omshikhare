import "./Resumesection.css";

const experience = [
  {
    role: "Machine Learning Developer",
    company: "Greybath Technology Pvt Ltd",
    location: "Mumbai",
    period: "March 2025 – November 2025",
    type: "Internship",
    points: [
      "Working as Junior ML Developer — building and deploying ML models for real-world business applications.",
      "Developed a Document Intelligence System for classification, deep text extraction, contextual analysis, and automated report generation — designed for professionals such as customs officers, legal analysts, and compliance teams.",
      "Built NLP pipelines for structured data extraction from unstructured documents including PDFs, scanned files, and multi-format uploads.",
    ],
  },
  {
    role: "AI & ML Developer",
    company: "Prudent Tech IT Solutions",
    location: "Panvel",
    period: "November 2024 – December 2024",
    type: "Internship",
    points: [
      "Developed AI-powered chatbots using APIs, Transformers, Llama, and Ollama.",
      "Implemented ML models and AI-driven automation solutions.",
      "Created chatbot frontend using Python Streamlit and React.js.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Mukesoft",
    location: "Mumbai",
    period: "November 2023 – October 2024",
    type: "Internship",
    points: [
      "Developed dynamic websites using WordPress and React.js with CRUD operations.",
      "Implemented modern web solutions with component-based architecture.",
      "Managed database integration with MySQL and SQLite.",
    ],
  },
];

const education = [
  {
    degree: "B.Sc. with Vocational Training in AI & ML",
    school: "Tata Institute of Social Sciences (TISS)",
    period: "Oct 2023 – Present",
    desc: "Certified with two companies. Combining theory and hands-on training in AI, programming, and data analysis. Holding AI & ML diplomas.",
  },
];

export default function ResumeSection() {
  return (
    <div className="resume-section">
      <div className="container">
        <div className="resume-header">
          <span className="section-tag">Resume</span>
          <h2 className="section-title">Experience &amp;<br />Education</h2>
          <p className="resume-sub">
            Continuous learning and hands-on application across AI, ML, and full-stack web development.
          </p>
        </div>

        <div className="resume-cols">
          <div className="resume-col">
            <div className="col-title">
              <span className="col-icon">💼</span>
              Work Experience
            </div>
            <div className="timeline">
              {experience.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="tl-top">
                      <span className="tl-period">{e.period}</span>
                      <span className="tl-badge">{e.type}</span>
                    </div>
                    <h4 className="tl-role">{e.role}</h4>
                    <p className="tl-company">{e.company} — {e.location}</p>
                    <ul className="tl-points">
                      {e.points.map((p, j) => <li key={j}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-col">
            <div className="col-title">
              <span className="col-icon">🎓</span>
              Education
            </div>
            <div className="timeline">
              {education.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="tl-period">{e.period}</span>
                    <h4 className="tl-role">{e.degree}</h4>
                    <p className="tl-company">{e.school}</p>
                    <p className="tl-desc">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-title" style={{ marginTop: "32px" }}>
              <span className="col-icon">🌐</span>
              Languages
            </div>
            {[
              { lang: "English", level: "Very Good" },
              { lang: "Hindi",   level: "Very Good" },
              { lang: "Marathi", level: "Very Good" },
            ].map((l) => (
              <div key={l.lang} className="lang-row">
                <span className="lang-name">{l.lang}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}

            <div className="col-title" style={{ marginTop: "28px" }}>
              <span className="col-icon">⚡</span>
              Freelance Services
            </div>
            <div className="freelance-tags">
              {[
                "Website Development",   "React & Next.js Apps",
                "AI Chatbot Creation",   "ML Model Building",
                "Python & Streamlit",    "OCR Systems",
                "Full-Stack Dev",        "REST API Development",
                "Document Intelligence", "NLP & Text Extraction",
              ].map((f) => (
                <span key={f} className="freelance-tag">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
