import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full Stack Developer', 'React Specialist', 'Java Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentRole) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1 className="hero-name">
              Diyor<br />
              <span className="highlight">Adashev</span>
            </h1>
            <div className="hero-role">
              <span className="role-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              PDP University student passionate about building scalable web applications
              with React and Java/Django. Transforming ideas into elegant solutions.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Working Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">6+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="https://github.com/adawev" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-ring"></div>
              <div className="avatar-ring-2"></div>
              <img
                src="/images/personalPhoto.jpg"
                alt="Diyorjon Adashev"
                className="avatar"
              />
              <div className="status-badge">
                <span className="pulse"></span>
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
