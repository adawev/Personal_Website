import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Building responsive and scalable web applications using modern frameworks like React and Django.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'REST APIs']
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Java Spring Boot and Django REST Framework.',
      skills: ['Java Spring', 'Django', 'PostgreSQL', 'API Design']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating beautiful, mobile-first interfaces that work seamlessly across all devices.',
      skills: ['CSS3', 'Flexbox', 'Grid', 'Mobile-First']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services & Expertise</h2>
          <p className="section-description">
            Transforming ideas into powerful digital solutions with cutting-edge technologies
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{'--index': index}}>
              <div className="service-icon-wrapper">
                <i className={service.icon}></i>
                <div className="icon-bg"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-skills">
                {service.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
