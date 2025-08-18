import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement | null>;
  };
}

function Navbar({ sectionRefs }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const links = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* Desktop navigation */}
        <div className="desktop-nav">
          {links.map((item) => {
            return (
              <a
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(sectionRefs[item.toLowerCase()]);
                }}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* TODO: implement exiting hamburger menu after clicking outside of bounds    */}

        {/* Mobile hamburger button */}
        <button
          className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile dropdown menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          {links.map((item) => {
            return (
              <a
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(sectionRefs[item.toLowerCase()]);
                  toggleMenu();
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
