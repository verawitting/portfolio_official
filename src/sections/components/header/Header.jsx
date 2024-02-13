import "./Header.css";

export const Header = () => {
  return (
    <header>
        <img className="header-logo" src="../logo.svg" alt="Witting Logo" />
        <nav className="navigation">
            <ul>
                <li>Projects</li>
                <li>Contact</li>
                <li>Skills</li>
            </ul>
        </nav>
    </header>
  )
}
