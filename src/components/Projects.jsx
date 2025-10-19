import { useState, useEffect } from 'react'
import './Projects.css'

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(2)
  const [projects, setProjects] = useState([
    {
      title: 'RootCast',
      description: 'A weather application that provides real-time weather information for any country and offers important tips for tourists.',
      image: '/project-placeholder.jpg',
      technologies: ['OpenWeatherAPI', 'Nginx', 'React', 'Java'],
      github: 'https://github.com/adawev',
      demo: '',
      category: 'Web App'
    }
  ])

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1)
      } else {
        setCardsPerView(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= projects.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, projects.length - cardsPerView) : prevIndex - 1
    )
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="carousel-container">
          <button onClick={prevSlide} className="carousel-btn prev" disabled={currentIndex === 0}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="projects-carousel">
            {visibleProjects.map((project, index) => (
              <div key={currentIndex + index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="carousel-btn next"
            disabled={currentIndex + cardsPerView >= projects.length}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(projects.length / cardsPerView) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${Math.floor(currentIndex / cardsPerView) === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * cardsPerView)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
