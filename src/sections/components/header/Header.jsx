import "./Header.css";

export const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behaviour: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
        <img className="header-logo" src="../logo.svg" alt="Witting Logo" onClick={scrollToTop}/>
        <nav className="navigation">
            <ul>
                <li onClick={() => scrollToSection("projects")}>Projects</li>
                <li onClick={() => scrollToSection("contact")}>Contact</li>
                <li onClick={() => scrollToSection("skills")}>Skills</li>
            </ul>
        </nav>
    </header>
  )
}
