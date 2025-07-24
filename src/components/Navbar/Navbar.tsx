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

  const closeMenu = () => {
    setIsMenuOpen(false);
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
    <div className="navbar-container">
      {/* TODO: implement exiting hamburger menu after clicking outside of bounds    */}
      {/* <label id="overlay" htmlFor="navbar"></label> */}
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
              <a href="" onClick={closeMenu}>
                {item}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
