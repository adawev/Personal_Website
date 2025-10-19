import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus('success')
          form.current.reset()
          setTimeout(() => setStatus(''), 3000)
        },
        () => {
          setStatus('error')
          setTimeout(() => setStatus(''), 3000)
        }
      )
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      color: '#ea4335'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'adawev',
      link: 'https://github.com/adawev',
      color: '#333'
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
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these channels:</p>
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                  style={{ '--hover-color': info.color }}
                >
                  <i className={info.icon}></i>
                  <div>
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="status-message success">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="status-message error">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
