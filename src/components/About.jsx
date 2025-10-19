import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              I love turning complex problems into simple, beautiful solutions.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites work,
              and has evolved into a career where I get to create impactful digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or sharing my knowledge with the developer community.
            </p>
          </div>
          <div className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-node"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-java"></i>
                <span>Java</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-python"></i>
                <span>Python</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-database"></i>
                <span>Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
