import { useState, useEffect } from "react";
import Navbar from "./component/navbar/navbar";
import Home from "./pages/homepage/homepage";
import About from "./pages/about/aboutuspage";
import Projects from "./pages/Projects/Projects";
import ResumeSection from "./pages/Resumesection/Resumesection";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Footer from "./component/footer/footer";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "resume", "services", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Navbar
        activeSection={activeSection}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <section id="home"><Home theme={theme} /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><ResumeSection /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
