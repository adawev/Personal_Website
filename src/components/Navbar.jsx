import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
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
          <button onClick={() => scrollToSection('home')} className="nav-link">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            <i className="fas fa-user"></i>
            <span>About</span>
          </button>
          <button onClick={() => scrollToSection('services')} className="nav-link">
            <i className="fas fa-code"></i>
            <span>Services</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            <i className="fas fa-folder-open"></i>
            <span>Projects</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
