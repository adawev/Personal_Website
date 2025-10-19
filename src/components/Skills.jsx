import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'HTML/CSS', icon: 'fab fa-html5' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'Figma', icon: 'fab fa-figma' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-sub">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
