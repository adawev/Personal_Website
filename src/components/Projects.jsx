import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load projects from localStorage
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Initialize with default projects
      const defaultProjects = [
        {
          title: 'RootCast',
          description: 'A comprehensive weather application that provides real-time weather information for any country worldwide, along with essential travel tips and local insights for tourists to ensure a safe and enjoyable visit.',
          image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop',
          technologies: ['OpenWeatherAPI', 'Nginx', 'React', 'Java'],
          github: 'https://github.com/adawev/rootcast',
          demo: '#',
          category: 'Travel & Weather'
        },
        {
          title: 'EduDash',
          description: 'A comprehensive educational platform for teachers and students to manage courses, assignments, and track academic progress in real-time.',
          image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
          technologies: ['React', 'Django', 'PostgreSQL', 'REST API'],
          github: 'https://github.com/adawev/edudash',
          demo: '#',
          category: 'Web App'
        },
        {
          title: 'Nout Store',
          description: 'Modern e-commerce platform for electronics with advanced filtering, shopping cart, and secure payment integration.',
          image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop',
          technologies: ['React', 'Java Spring', 'PostgreSQL', 'Stripe'],
          github: 'https://github.com/adawev/nout-store',
          demo: '#',
          category: 'E-Commerce'
        },
        {
          title: 'Diyor Stroy',
          description: 'Construction management system for tracking projects, materials inventory, and workforce scheduling with real-time updates.',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop',
          technologies: ['React', 'Java Spring', 'PostgreSQL', 'WebSocket'],
          github: 'https://github.com/adawev/diyor-stroy',
          demo: '#',
          category: 'Management'
        }
      ];
      localStorage.setItem('portfolioProjects', JSON.stringify(defaultProjects));
      setProjects(defaultProjects);
    }
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
                          <a href={project.demo} className="project-link">
                            <i className="fas fa-external-link-alt"></i>
                          </a>
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
