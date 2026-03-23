import { useState, useRef, useEffect } from "react";
import "./footer.css";

const gmailLink = (to, subject, body) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function EmailDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="email-dropdown-wrap" ref={ref}>
      <button
        className="social-btn email"
        onClick={() => setOpen((o) => !o)}
        aria-label="Email options"
      >
        📧 Email
        <svg
          className={`email-chevron ${open ? "open" : ""}`}
          width="10" height="10" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="email-dropdown">
          <p className="email-dropdown-label">Choose Email</p>
          
            href={gmailLink("omjobshikhare@gmail.com", "Job / Freelance Inquiry", "Hi Om,\n\nI came across your portfolio and would like to connect.\n\nName: \nSubject: \nMessage: ")}
            target="_blank"
            rel="noreferrer"
            className="email-option"
            onClick={() => setOpen(false)}
          >
            <span className="email-option-label">Personal / Jobs</span>
            <span className="email-option-addr">omjobshikhare@gmail.com</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-om">ॐ</span>
              <span className="logo-name">Om Shikhare</span>
            </div>
            <p className="footer-tagline">
              AI & ML Developer · Web Developer · Freelancer
              <br />Building intelligent solutions, one line at a time.
            </p>
            <div className="footer-socials">
              
                href="https://www.linkedin.com/in/om-shikhare-a4377132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin"
              >
                💼 LinkedIn
              </a>
              <EmailDropdown />
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Navigation</h4>
            {["home", "about", "resume", "services", "contact"].map((l) => (
              <button key={l} className="footer-link" onClick={() => scrollTo(l)}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            ))}
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            {[
              "Website Development", "React & Next.js",
              "AI Chatbot Dev",      "ML Solutions",
              "Python & Streamlit",  "OCR Systems",
            ].map((s) => (
              <span key={s} className="footer-link static">{s}</span>
            ))}
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <a href={gmailLink("omjobshikhare@gmail.com", "Job / Freelance Inquiry", "Hi Om,\n\nI came across your portfolio and would like to connect.\n\nName: \nSubject: \nMessage: ")}
              target="_blank" rel="noreferrer" className="footer-link" style={{ textDecoration: "none" }}>
              📧 omjobshikhare@gmail.com
            </a>
            <span className="footer-link static">📱 +91 8433959059</span>
            <span className="footer-link static">📍 Thane, India</span>
            <a href="https://www.linkedin.com/in/om-shikhare-a4377132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank" rel="noreferrer" className="footer-link" style={{ textDecoration: "none" }}>
              💼 LinkedIn Profile
            </a>
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Om Jotiram Shikhare. All rights reserved.</p>
          <p className="footer-made">AI & ML Developer · Freelancer</p>
        </div>
      </div>
    </footer>
  );
}
