import { useState } from "react";
import "./Services.css";

const services = [
  { icon: "🌐", title: "Website Development",          cat: "Web",
    desc: "Modern, responsive, professional websites from scratch — landing pages, business sites, full-stack web apps with clean UI, fast performance, and SEO-friendly structure.",
    tags: ["HTML5","CSS3","JavaScript","React.js","PHP","MySQL"] },
  { icon: "⚛️", title: "React & Next.js Development",  cat: "Web",
    desc: "Dynamic, interactive frontends using React.js and Next.js — SPAs, SSR dashboards, admin panels, and product UIs with excellent UX, routing, and performance.",
    tags: ["React.js","Next.js","Hooks","Context API","Tailwind"] },
  { icon: "🗄️", title: "Full-Stack Web Development",   cat: "Web",
    desc: "Complete websites with frontend + backend — Node.js, Express.js, Laravel, WordPress, CRUD apps, database-connected platforms, and REST API integrations.",
    tags: ["Node.js","Express.js","Laravel","WordPress","REST API"] },
  { icon: "🤖", title: "AI Chatbot Development",        cat: "AI",
    desc: "Custom AI-powered chatbots using OpenAI API, Transformers, Llama, and Ollama — ChatGPT-like structures built from scratch or via API.",
    tags: ["OpenAI API","Llama","Ollama","Transformers","Python"] },
  { icon: "🧠", title: "Machine Learning Solutions",    cat: "AI",
    desc: "Design and deploy ML models using TensorFlow, PyTorch, Keras, and Scikit-learn for prediction, classification, automation, and data-driven decision making.",
    tags: ["TensorFlow","PyTorch","Keras","Scikit-learn","Python"] },
  { icon: "🔍", title: "OCR Systems",                   cat: "AI",
    desc: "Build Optical Character Recognition systems to extract text from images, PDFs, and scanned documents — ideal for digitizing records and automating data entry.",
    tags: ["OCR","OpenCV","Tesseract","Pillow","Python"] },
  { icon: "🐍", title: "Python & Streamlit Apps",       cat: "AI",
    desc: "Complete Python applications and AI-powered dashboards using Streamlit. Deploy ML models as interactive web apps with data visualizations and real-time analysis.",
    tags: ["Python","Streamlit","Pandas","Seaborn","Plotly"] },
  { icon: "📊", title: "Data Analysis & Visualization", cat: "AI",
    desc: "Analyze datasets and create clear, actionable visualizations. Understand trends, patterns, and business insights using Python and Tableau.",
    tags: ["Pandas","NumPy","Matplotlib","Seaborn","Tableau"] },
];

const pythonLibs = [
  { name: "NumPy",        use: "Array & Math"       },
  { name: "Pandas",       use: "Data Analysis"      },
  { name: "Scikit-learn", use: "ML Models"          },
  { name: "TensorFlow",   use: "Deep Learning"      },
  { name: "PyTorch",      use: "Neural Nets"        },
  { name: "Keras",        use: "Model Building"     },
  { name: "Matplotlib",   use: "Visualization"      },
  { name: "Seaborn",      use: "Statistical Plots"  },
  { name: "Plotly",       use: "Interactive Charts" },
  { name: "OpenCV",       use: "Computer Vision"    },
  { name: "Streamlit",    use: "ML Web Apps"        },
  { name: "Jupyter",      use: "Notebooks"          },
];

const jsLibs = [
  { name: "React.js",     use: "UI Framework"    },
  { name: "Next.js",      use: "SSR & SSG"       },
  { name: "Node.js",      use: "Backend Runtime" },
  { name: "Express.js",   use: "REST APIs"       },
  { name: "JavaScript",   use: "Core Language"   },
  { name: "HTML5 & CSS3", use: "Markup & Style"  },
  { name: "Tailwind CSS", use: "Utility CSS"     },
  { name: "Bootstrap",    use: "CSS Framework"   },
  { name: "PHP",          use: "Server-side"     },
  { name: "Laravel",      use: "PHP Framework"   },
  { name: "MySQL",        use: "Relational DB"   },
  { name: "MongoDB",      use: "NoSQL DB"        },
];

export default function Services() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? services : services.filter((s) => s.cat === filter);

  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">What I Can<br />Do For You</h2>
          <p className="services-sub">
            Full-service freelance development — from AI-powered applications to modern websites and everything in between.
          </p>
        </div>

        <div className="filter-tabs">
          {[
            { key: "All", label: "🔥 All Services" },
            { key: "Web", label: "🌐 Web Dev"       },
            { key: "AI",  label: "🤖 AI / ML"       },
          ].map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? "active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {filtered.map((s, i) => (
            <div className={`service-card ${s.cat.toLowerCase()}`} key={i}>
              <div className="service-top">
                <span className="service-icon">{s.icon}</span>
                <span className={`service-cat-badge ${s.cat.toLowerCase()}`}>{s.cat}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-section">
          <h3 className="tech-section-title">🐍 Python & AI Libraries</h3>
          <div className="tech-grid">
            {pythonLibs.map((lib) => (
              <div className="tech-card" key={lib.name}>
                <span className="tech-name">{lib.name}</span>
                <span className="tech-use">{lib.use}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-section">
          <h3 className="tech-section-title">⚛️ JavaScript / Web Tech</h3>
          <div className="tech-grid">
            {jsLibs.map((lib) => (
              <div className="tech-card web" key={lib.name}>
                <span className="tech-name">{lib.name}</span>
                <span className="tech-use">{lib.use}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <div className="cta-text">
            <h3>Have a project in mind?</h3>
            <p>Whether it's a website, AI chatbot, or ML solution — let's build it together.</p>
          </div>
          <button
            className="cta-btn"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Discuss →
          </button>
        </div>
      </div>
    </div>
  );
}