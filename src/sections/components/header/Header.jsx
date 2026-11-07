import { useEffect, useState } from "react";
import "./Header.css";

export const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behaviour: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 10;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      if (currentScrollY < 80) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (Math.abs(scrollDifference) > threshold) {
        setIsVisible(scrollDifference < 0);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

  }, []);

  return (
    <header className={`site-header ${isVisible ? 'visible' : 'hidden'}`}>
        <button className="logo-button" onClick={scrollToTop} aria-label="Scroll to top">
          <img className="header-logo" src="../logo.svg" alt="Witting Logo" />
        </button>
        <nav className="navigation" aria-label="Main navigation">
            <ul>
              <li>
                  <button onClick={() => scrollToSection("projects")}>
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contact
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("skills")}>
                    Skills
                  </button>
                </li>
            </ul>
        </nav>
    </header>
  );
};
