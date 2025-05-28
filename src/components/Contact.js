import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }
    setIsSubmitting(true);
    setStatusMessage('Sending your note...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage(result.message || 'Your note has been sent! We\'ll be in touch soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact">
      <h2 className="section-title">Let's Work Together</h2>
      <div className="contact-form-container">
        <p className="contact-intro">Have a story to tell, a brand to build, or a vision to bring to life? Drop us a line. We're excited to hear from you.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="What should we call you?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Where can we reach you?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us about your project or idea..."
            ></textarea>
          </div>
          <button type="submit" className="form-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : "Let's design your story"}
          </button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
      <div className="social-links">
        <p>Find us on Instagram: <a href="https://www.instagram.com/hueneu_" target="_blank" rel="noopener noreferrer">@hueneu_</a></p>
      </div>
    </section>
  );
};

export default Contact;
