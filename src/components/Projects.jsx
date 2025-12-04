import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load projects from JSON file
    const loadProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/projects.json');

        if (!response.ok) {
          throw new Error('Failed to load projects');
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = projects.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description" style={{color: 'var(--error, #ff4444)'}}>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="carousel-container">
          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous project">
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="carousel-wrapper">
            <div className="carousel-track" style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
            }}>
              {projects.map((project, index) => (
                <div key={index} className="carousel-slide" style={{
                  flex: `0 0 ${100 / cardsPerView}%`
                }}>
                  <div className="project-card">
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} className="project-image" />
                      <div className="project-overlay">
                        <span className="project-category">{project.category}</span>
                        <div className="project-links">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i>
                          </a>
                          {project.demo && project.demo !== '#' ? (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          ) : (
                            <span className="project-link disabled" title="Demo not available">
                              <i className="fas fa-external-link-alt"></i>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>

                      <div className="project-tech">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-corner"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next project">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
