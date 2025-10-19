import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Portfolio</h2>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('hero')} className="navbar-item">Home</a>
          <a onClick={() => scrollToSection('about')} className="navbar-item">About</a>
          <a onClick={() => scrollToSection('services')} className="navbar-item">Services</a>
          <a onClick={() => scrollToSection('projects')} className="navbar-item">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="navbar-item">Contact</a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
