import { useState } from 'react';
import './Navbar.css';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <label id="overlay" htmlFor="navbar"></label>
      <nav className="navbar">
        {/* Desktop navigation */}
        <div className="desktop-nav">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
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
          <a href="" onClick={closeMenu}>
            Home
          </a>
          <a href="" onClick={closeMenu}>
            About
          </a>
          <a href="" onClick={closeMenu}>
            Projects
          </a>
          <a href="" onClick={closeMenu}>
            Contacts
          </a>
          <a href="" onClick={closeMenu}>
            Blog
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
