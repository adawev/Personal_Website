import { useState, useEffect } from 'react';
import './AdminAddProject.css';

const AdminAddProject = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    github: '',
    demo: '',
    category: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Admin password (in production, this should be handled server-side)
  const ADMIN_PASSWORD = 'admin123';

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert technologies string to array
    const technologiesArray = formData.technologies
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech !== '');

    const projectData = {
      ...formData,
      technologies: technologiesArray
    };

    let updatedProjects;

    if (editingIndex !== null) {
      // Update existing project
      updatedProjects = [...projects];
      updatedProjects[editingIndex] = projectData;
      setSuccessMessage('Project updated successfully!');
    } else {
      // Add new project
      updatedProjects = [projectData, ...projects];
      setSuccessMessage('Project added successfully!');
    }

    setProjects(updatedProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));

    setTimeout(() => setSuccessMessage(''), 3000);

    // Reset form and editing state
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: '',
      github: '',
      demo: '',
      category: ''
    });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const project = projects[index];
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(', '),
      github: project.github,
      demo: project.demo || '',
      category: project.category
    });
    setEditingIndex(index);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: '',
      github: '',
      demo: '',
      category: ''
    });
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter((_, i) => i !== index);
      setProjects(updatedProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <div className="login-header">
            <i className="fas fa-lock"></i>
            <h2>Admin Access</h2>
            <p>Enter password to manage projects</p>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            {error && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="password-input"
                autoFocus
              />
            </div>
            <button type="submit" className="login-button">
              <span>Access Admin</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Project Management</h1>
        <button onClick={() => window.location.href = '/'} className="back-button">
          <i className="fas fa-home"></i>
          Back to Portfolio
        </button>
      </div>

      <div className="admin-content">
        <div className="add-project-section">
          <div className="section-header-with-badge">
            <h2>{editingIndex !== null ? 'Edit Project' : 'Add New Project'}</h2>
            {editingIndex !== null && (
              <span className="editing-badge">
                <i className="fas fa-edit"></i>
                Editing Mode
              </span>
            )}
          </div>
          {successMessage && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="project-form">
            <div className="form-row">
              <div className="form-group">
                <label>Project Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., My Awesome Project"
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Web App, E-Commerce"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                placeholder="Describe your project..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Image URL *</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-group">
              <label>Technologies * (comma separated)</label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleInputChange}
                required
                placeholder="React, Node.js, MongoDB, etc."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>GitHub URL *</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  required
                  placeholder="https://github.com/username/repo"
                />
              </div>
              <div className="form-group">
                <label>Demo URL</label>
                <input
                  type="url"
                  name="demo"
                  value={formData.demo}
                  onChange={handleInputChange}
                  placeholder="https://demo.example.com"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                <i className={`fas fa-${editingIndex !== null ? 'save' : 'plus-circle'}`}></i>
                {editingIndex !== null ? 'Update Project' : 'Add Project'}
              </button>
              {editingIndex !== null && (
                <button type="button" onClick={handleCancelEdit} className="cancel-button">
                  <i className="fas fa-times"></i>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="projects-list-section">
          <h2>Current Projects ({projects.length})</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className={`project-item ${editingIndex === index ? 'editing' : ''}`}>
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="category-badge">{project.category}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-list">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    onClick={() => handleEdit(index)}
                    className="edit-button"
                    title="Edit project"
                    disabled={editingIndex !== null && editingIndex !== index}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                    title="Delete project"
                    disabled={editingIndex !== null}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProject;
