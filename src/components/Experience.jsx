import './Experience.css';

const Experience = () => {
  const skills = [
    { name: 'Java', icon: 'fab fa-java', detail: 'Spring Boot' },
    { name: 'React', icon: 'fab fa-react', detail: 'Redux' },
    { name: 'Django', icon: 'fab fa-python', detail: 'REST APIs' },
    { name: 'JavaScript', icon: 'fab fa-js', detail: 'ES6+' },
    { name: 'PostgreSQL', icon: 'fas fa-database', detail: 'SQL' },
    { name: 'Git', icon: 'fab fa-git-alt', detail: 'Version Control' }
  ];

  const education = {
    university: 'PDP University',
    degree: 'Software Engineering',
    period: '2023 - Present',
    icon: 'fas fa-graduation-cap'
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Skills & Education</h2>
        <p className="section-sub">
          Technologies I use regularly and my academic background
        </p>

        <div className="experience-grid">
          {/* Education Card - Featured */}
          <div className="education-card">
            <div className="education-icon">
              <i className={education.icon}></i>
            </div>
            <h3 className="education-title">{education.university}</h3>
            <p className="education-degree">{education.degree}</p>
            <p className="education-period">{education.period}</p>
          </div>

          {/* Skills Grid */}
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-info">
                <strong>{skill.name}</strong>
                <small>{skill.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
