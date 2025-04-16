import React, { useState, useEffect } from 'react';
import './nav_bar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Update isMobile when screen resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false); 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <ul className={`nav-links ${isMobile ? (isMenuOpen ? 'active' : '') : ''}`}>
          <li><a href="about" onClick={() => setIsMenuOpen(false)}>About me</a></li>
          <li><a href="skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li className="contact-button"><a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT ME</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
