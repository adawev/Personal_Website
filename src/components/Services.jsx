import './Services.css'

function Services() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Building responsive and modern web applications using the latest technologies and best practices.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes.'
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Developing robust server-side applications with secure APIs and efficient database management.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
