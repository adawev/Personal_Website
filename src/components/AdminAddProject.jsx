import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminAddProject.css'

const ADMIN_PASSWORD = 'admin123'

function AdminAddProject() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [projects, setProjects] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    github: '',
    demo: '',
    category: 'Web App'
  })

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('Incorrect password!')
      setPassword('')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProject = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim())
    }

    let updatedProjects
    if (editingIndex !== null) {
      updatedProjects = [...projects]
      updatedProjects[editingIndex] = newProject
      setEditingIndex(null)
    } else {
      updatedProjects = [...projects, newProject]
    }

    setProjects(updatedProjects)
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects))

    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: '',
      github: '',
      demo: '',
      category: 'Web App'
    })
  }

  const handleEdit = (index) => {
    const project = projects[index]
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(', '),
      github: project.github,
      demo: project.demo || '',
      category: project.category
    })
    setEditingIndex(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter((_, i) => i !== index)
      setProjects(updatedProjects)
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects))
      if (editingIndex === index) {
        setEditingIndex(null)
        setFormData({
          title: '',
          description: '',
          image: '',
          technologies: '',
          github: '',
          demo: '',
          category: 'Web App'
        })
      }
    }
  }

  const cancelEdit = () => {
    setEditingIndex(null)
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: '',
      github: '',
      demo: '',
      category: 'Web App'
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel - Manage Projects</h1>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>

      <div className="admin-content">
        <div className="add-project-form">
          <h2>{editingIndex !== null ? 'Edit Project' : 'Add New Project'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Project Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Technologies (comma-separated)</label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleInputChange}
                placeholder="e.g., React, Node.js, MongoDB"
                required
              />
            </div>

            <div className="form-group">
              <label>GitHub URL</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Demo URL (optional)</label>
              <input
                type="url"
                name="demo"
                value={formData.demo}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="Web App">Web App</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Desktop App">Desktop App</option>
                <option value="API">API</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                {editingIndex !== null ? 'Update Project' : 'Add Project'}
              </button>
              {editingIndex !== null && (
                <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="projects-list">
          <h2>Existing Projects ({projects.length})</h2>
          {projects.length === 0 ? (
            <p className="no-projects">No projects yet. Add your first project above!</p>
          ) : (
            <div className="admin-projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="admin-project-card">
                  <img src={project.image} alt={project.title} />
                  <div className="admin-project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="admin-project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="admin-project-actions">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(index)}
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(index)}
                      >
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminAddProject
