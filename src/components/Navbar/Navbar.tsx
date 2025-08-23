import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

type NavbarProps = {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement | null>;
  };
};

function Navbar({ sectionRefs }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        console.log('Setting to false');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar-container" ref={navbarRef}>
      <nav className="navbar">
        {/* Desktop navigation */}
        <div className="desktop-nav">
          {links.map((item, index) => {
            return (
              <a
                key={index}
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
          {links.map((item, index) => {
            return (
              <a
                key={index}
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

      {/* Dark overlay for when menu is open */}
    </header>
  );
}

export default Navbar;
