import './About.css';

const About = () => {
    const techStack = [
        {name: 'React', icon: 'fab fa-react', color: '#61DAFB'},
        {name: 'Java', icon: 'fab fa-java', color: '#F05032'},
        {name: 'Python', icon: 'fab fa-python', color: '#F7DF1E'},
        {name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E'},
        {name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791'},
        {name: 'Git', icon: 'fab fa-git-alt', color: '#F05032'}
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">
                            About <span className="highlight">Me</span>
                        </h2>
                        <p className="about-description"> <br/>
                            Hi! I’m <strong> Diyor Adashev</strong>, a <strong>Software Engineering student at PDP University </strong>who
                            loves building useful and creative web applications.
                            I enjoy working with <strong> React </strong>to make fast and beautiful websites, and I use <strong>Java</strong> or <strong>Python</strong> for
                            the backend to keep everything running smoothly.
                        </p>
                        <p className="about-description">
                            So far, I’ve built several projects — from small personal apps to full web systems — where I
                            focused on user <strong>experience</strong>, <strong>performance</strong>, and <strong> clean code. </strong>
                            I’m always learning new technologies, improving my coding skills, and trying to solve
                            real-world problems through software. My goal is to keep growing as a developer and create
                            projects that make a difference.

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
