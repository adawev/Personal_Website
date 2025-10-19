import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration
      const serviceID = 'service_xvv56ub'; // Replace with your EmailJS service ID
      const templateID = 'template_me0wof2'; // Replace with your EmailJS template ID
      const publicKey = 'mIfq4uOph8YiFBjBL'; // Replace with your EmailJS public key

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Diyorjon',
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'adawev@gmail.com',
      link: 'mailto:adawev@gmail.com',
      color: '#7fe3d9'
    },
    {
      icon: 'fab fa-telegram',
      label: 'Telegram',
      value: '@adawev',
      link: 'https://t.me/adawev',
      color: '#0088cc'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'adawev',
      link: 'https://github.com/adawev',
      color: '#ffffff'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'adawev',
      link: 'https://linkedin.com/in/adawev',
      color: '#0077b5'
    },
    {
      icon: 'fas fa-code',
      label: 'LeetCode',
      value: 'adawev',
      link: 'https://leetcode.com/adawev',
      color: '#ffa116'
    },
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      value: '@adawev',
      link: 'https://instagram.com/adawev',
      color: '#e4405f'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-wrapper">
            <div className="contact-intro">
              <h3 className="contact-subtitle">Let's connect</h3>
              <p className="contact-text">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  style={{'--card-color': item.color}}
                >
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                  <i className="fas fa-arrow-right contact-arrow"></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            {status.message && (
              <div className={`alert alert-${status.type}`}>
                <i className={`fas fa-${status.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
                {status.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <i className="fas fa-user"></i>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope"></i>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <i className="fas fa-comment-dots"></i>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell me about your project..."
                rows="6"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="form-submit" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <i className={`fas fa-${isSubmitting ? 'spinner fa-spin' : 'paper-plane'}`}></i>
            </button>
          </form>
        </div>
      </div>

      <div className="contact-bg-decoration"></div>
    </section>
  );
};

export default Contact;
