import './About.css';

const About = () => {
  const techStack = [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Java', icon: 'fab fa-java', color: '#007396' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              About <span className="highlight">Me</span>
            </h2>
            <p className="about-description">
              I'm a passionate software engineering student at <strong>PDP University</strong>, 
              dedicated to creating impactful web applications. My journey in tech is driven 
              by curiosity and a desire to solve real-world problems through code.
            </p>
            <p className="about-description">
              I specialize in building modern, scalable web applications using React for 
              dynamic user interfaces and Java/Django for robust backend systems. Every project 
              is an opportunity to learn, grow, and push the boundaries of what's possible.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Education</h4>
                  <p>PDP University<br/>Software Engineering</p>
                </div>
              </div>
              <div className="highlight-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-item" style={{'--tech-color': tech.color}}>
                  <i className={tech.icon}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
