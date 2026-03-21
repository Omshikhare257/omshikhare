import "./Contact.css";

const gmailLink = (to, subject, body) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">

        <div className="contact-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Build Something<br />Together</h2>
          <p className="contact-sub">
            Available for freelance projects, internships, and collaboration. Reach out personally or via{" "}
            <a href="https://opramix.com" target="_blank" rel="noreferrer"
              style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
              OPRAMIX Technologies
            </a>. Let's connect!
          </p>
        </div>

        <div className="contact-info-grid">

          <div className="contact-cards">
            {[
              { icon: "📧", label: "Personal Email",     value: "omjobshikhare@gmail.com",
                link: gmailLink("omjobshikhare@gmail.com", "Inquiry from Portfolio", "Hi Om,\n\nName: \nSubject: \nMessage: ") },
              { icon: "📧", label: "OpraMix — Tech",     value: "omshikhareopramix@gmail.com",
                link: gmailLink("omshikhareopramix@gmail.com", "Project Inquiry | OpraMix", "Hi Om,\n\nName: \nSubject: \nMessage: ") },
              { icon: "📧", label: "OpraMix — Official", value: "Opramixtech@gmail.com",
                link: gmailLink("Opramixtech@gmail.com", "Project Inquiry via Portfolio", "Hi OPRAMIX Team,\n\nName: \nCompany: \nSubject: \nMessage: ") },
              { icon: "📱", label: "Phone",              value: "+91 8433959059" },
              { icon: "📱", label: "OpraMix Phone",      value: "+91 90044 29232" },
              { icon: "📍", label: "Location",           value: "Thane, India" },
              { icon: "🏢", label: "Company",            value: "OPRAMIX Technologies",
                link: "https://opramix.com" },
              { icon: "📍", label: "Company Location",   value: "Kalyan, Maharashtra" },
              { icon: "💼", label: "LinkedIn",           value: "linkedin.com/in/om-shikhare",
                link: "https://www.linkedin.com/in/om-shikhare-a4377132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            ].map((item) => (
              <div key={item.label} className="info-card">
                <span className="info-icon">{item.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <span className="info-card-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer"
                      className="info-card-value info-card-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-card-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="availability-badge">
              <span className="avail-dot" />
              Currently available for freelance work
            </div>
          </div>

          <div className="contact-right">
            <div className="offer-list">
              <p className="offer-title">🚀 I can help you with:</p>
              {[
                "Website Development",
                "React & Next.js Apps",
                "AI Chatbot Development",
                "Machine Learning Solutions",
                "Python & Streamlit Apps",
                "OCR Systems",
                "REST API Development",
                "Full-Stack Development",
                "App Development",
                "Social Media Marketing (via OpraMix)",
              ].map((o) => (
                <div key={o} className="offer-item">
                  <span className="offer-check">✓</span> {o}
                </div>
              ))}
            </div>

            <div className="contact-cta-row">
              <a href={gmailLink("omjobshikhare@gmail.com", "Inquiry from Portfolio", "Hi Om,\n\nName: \nSubject: \nMessage: ")}
                target="_blank" rel="noreferrer" className="contact-cta-btn primary">
                📧 Send Me an Email
              </a>
              <a href="https://www.linkedin.com/in/om-shikhare-a4377132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank" rel="noreferrer" className="contact-cta-btn secondary">
                💼 Connect on LinkedIn
              </a>
              <a href="https://opramix.com"
                target="_blank" rel="noreferrer" className="contact-cta-btn opramix">
                🏢 Visit OpraMix
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}