import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="accent">Diyorjon</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create beautiful and functional web applications using modern technologies.
            Passionate about clean code and user experience.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-circle"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
