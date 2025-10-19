import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <div className="mark">DA</div>
          <div className="logo-text">
            <span className="name">Diyorjon</span>
            <span className="tagline">Software Engineer</span>
          </div>
        </div>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            <i className="fas fa-user"></i>
            <span>About</span>
          </a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            <i className="fas fa-code"></i>
            <span>Services</span>
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
            <i className="fas fa-folder-open"></i>
            <span>Projects</span>
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
